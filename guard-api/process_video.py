import httpx

# Hive API details
HIVE_API_URL = "https://api.thehive.ai/api/v2/task/sync"
HIVE_API_TOKEN = "AvDdDrOwqrmnP1T5E6tJsHwjrA9qDeth"


async def process_video(file):
    # Prepare file data
    file_data = {
        "filename": file.filename,
        "content_type": file.content_type,
    }

    try:
        # Upload video to HIVE API
        async with httpx.AsyncClient() as client:
            files = {'media': (file.filename, file.file, file.content_type)}
            headers = {'authorization': f'token {HIVE_API_TOKEN}'}
            response = await client.post(HIVE_API_URL, headers=headers, files=files)

        # Check for successful response
        response.raise_for_status()

        # Parse the response
        hive_response = response.json()

    except httpx.RequestError as e:
        print(f"An error occurred while requesting: {e}")
        return {"error": "Request failed"}
    except httpx.HTTPStatusError as e:
        print(f"HTTP error occurred: {e}")
        return {"error": "HTTP error"}
    except ValueError as e:
        print(f"Error parsing JSON response: {e}")
        return {"error": "Invalid JSON response"}

    high_risk_frames = []

    # Define risk thresholds
    RISK_THRESHOLDS = {
        "low": 0.2,
        "medium": 0.5,
        "high": 0.8
    }

    def classify_risk(score):
        if score >= RISK_THRESHOLDS["high"]:
            return "high_risk"
        elif score >= RISK_THRESHOLDS["medium"]:
            return "medium_risk"
        elif score >= RISK_THRESHOLDS["low"]:
            return "low_risk"
        return "no_risk"

    # Extract high-risk frames
    try:
        if hive_response.get("status"):
            for status in hive_response["status"]:
                if status.get("response") and status["response"].get("output"):
                    for frame in status["response"]["output"]:
                        frame_time = frame["time"]
                        frame_risk = {"time": frame_time, "risk_level": "no_risk", "details": []}

                        for poly in frame.get("bounding_poly", []):
                            for class_score in poly.get("classes", []):
                                risk_level = classify_risk(class_score["score"])
                                if risk_level != "no_risk":
                                    frame_risk["risk_level"] = risk_level
                                    frame_risk["details"].append({
                                        "class": class_score["class"],
                                        "score": class_score["score"],
                                        "bounding_poly": poly["vertices"]
                                    })

                        if frame_risk["risk_level"] != "no_risk":
                            high_risk_frames.append(frame_risk)
    except (KeyError, TypeError) as e:
        print(f"Error processing response data: {e}")
        return {"error": "Error processing response data"}

    result = {
        "fileData": file_data,
        "hiveResponse": hive_response,
        "high_risk_frame": high_risk_frames,
    }

    return result
