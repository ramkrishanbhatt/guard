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

    result = {
        "fileData": file_data,
        "hiveResponse": hive_response,
        "decision": "Hold",
    }

    return result

def extract_frames_with_tag(hive_response, tag):
    frames_with_tag = []

    try:
        if hive_response.get("status"):
            for status in hive_response["status"]:
                if status.get("response") and status["response"].get("output"):
                    for frame in status["response"]["output"]:
                        for poly in frame.get("bounding_poly", []):
                            for class_score in poly.get("classes", []):
                                if class_score["class"] == tag:
                                    frames_with_tag.append({
                                        "time": frame["time"],
                                        "score": class_score["score"],
                                        "bounding_poly": poly["vertices"]
                                    })
    except (KeyError, TypeError) as e:
        print(f"Error processing response data: {e}")

    return frames_with_tag