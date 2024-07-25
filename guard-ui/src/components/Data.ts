export const response = {
  id: "efcf3820-f3d5-11ea-ba3c-d5362f2e0ddc",
  code: 200,
  project_id: 21808,
  user_id: 6661,
  created_on: "2020-09-11T02:24:39.792Z",
  status: {
    status: {
      code: "0",
      message: "SUCCESS",
    },
    response: {
      input: {
        id: "efcf3820-f3d5-11ea-ba3c-d5362f2e0ddc",
        charge: 0.055,
        model: "moderation25_26mb_eb4",
        model_version: 1,
        model_type: "CATEGORIZATION",
        created_on: "2020-09-11T02:24:36.514Z",
        media: {
          url: "https://s3.amazonaws.com/docs.thehive.ai/demo_static_media/violence/violence_1.mp4?AWSAccessKeyId=AKIAX5AGQFDT5R3USHP7&Expires=1600395876&Signature=KyhOeuboWI%2B3nWnh9qJIEV2EJKM%3D",
          filename: null,
          type: "VIDEO",
          mimetype: "video/mp4",
          duration: 10.077,
          width: 528,
          height: 362,
        },
        user_id: 6661,
        project_id: 21808,
        config_version: 1,
        config_tag: "default",
      },
      output: [
        {
          time: 0,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9993004548947556,
            },
            {
              class: "general_nsfw",
              score: 0.00005515861332392431,
            },
            {
              class: "general_suggestive",
              score: 0.0006443864919204179,
            },
            {
              class: "no_female_underwear",
              score: 0.899250297625593,
            },
            {
              class: "yes_female_underwear",
              score: 0.10074970237440699,
            },
            {
              class: "no_male_underwear",
              score: 0.9961647811377407,
            },
            {
              class: "yes_male_underwear",
              score: 0.0038352188622594527,
            },
            {
              class: "no_sex_toy",
              score: 0.9999999798312891,
            },
            {
              class: "yes_sex_toy",
              score: 2.0168710930836975e-8,
            },
            {
              class: "no_female_nudity",
              score: 0.7622752597582456,
            },
            {
              class: "yes_female_nudity",
              score: 0.23772474024175438,
            },
            {
              class: "no_male_nudity",
              score: 0.9706443527545361,
            },
            {
              class: "yes_male_nudity",
              score: 0.029355647245463922,
            },
            {
              class: "no_female_swimwear",
              score: 0.999611244248107,
            },
            {
              class: "yes_female_swimwear",
              score: 0.0003887557518931324,
            },
            {
              class: "no_male_shirtless",
              score: 0.6499119967458475,
            },
            {
              class: "yes_male_shirtless",
              score: 0.35008800325415235,
            },
            {
              class: "no_text",
              score: 0.45322065582766496,
            },
            {
              class: "text",
              score: 0.5467793441723351,
            },
            {
              class: "animated",
              score: 0.11259401438317206,
            },
            {
              class: "hybrid",
              score: 0.030002950239859178,
            },
            {
              class: "natural",
              score: 0.8574030353769687,
            },
            {
              class: "animated_gun",
              score: 1.2162167936901165e-9,
            },
            {
              class: "gun_in_hand",
              score: 0.004522403985289621,
            },
            {
              class: "gun_not_in_hand",
              score: 0.00023331984987421487,
            },
            {
              class: "no_gun",
              score: 0.9952442749486193,
            },
            {
              class: "culinary_knife_in_hand",
              score: 5.932730985401978e-9,
            },
            {
              class: "knife_in_hand",
              score: 0.0018882816682760986,
            },
            {
              class: "knife_not_in_hand",
              score: 0.003480484685850096,
            },
            {
              class: "no_knife",
              score: 0.9946312277131428,
            },
            {
              class: "a_little_bloody",
              score: 0.00020642045767688616,
            },
            {
              class: "no_blood",
              score: 0.9997831147054382,
            },
            {
              class: "other_blood",
              score: 9.653595868250288e-7,
            },
            {
              class: "very_bloody",
              score: 0.00000949947729795773,
            },
            {
              class: "no_pills",
              score: 0.9999999868927427,
            },
            {
              class: "yes_pills",
              score: 1.3107257304315686e-8,
            },
            {
              class: "no_smoking",
              score: 0.9999888406757149,
            },
            {
              class: "yes_smoking",
              score: 0.000011159324285029952,
            },
            {
              class: "illicit_injectables",
              score: 0.0014406553701263015,
            },
            {
              class: "medical_injectables",
              score: 3.68515180826588e-8,
            },
            {
              class: "no_injectables",
              score: 0.9985593077783557,
            },
            {
              class: "no_nazi",
              score: 0.9999999899241184,
            },
            {
              class: "yes_nazi",
              score: 1.0075881556615458e-8,
            },
            {
              class: "no_kkk",
              score: 0.9999900152198961,
            },
            {
              class: "yes_kkk",
              score: 0.000009984780103926167,
            },
            {
              class: "no_middle_finger",
              score: 0.9999998928595047,
            },
            {
              class: "yes_middle_finger",
              score: 1.0714049516372813e-7,
            },
            {
              class: "no_terrorist",
              score: 0.9999998805523179,
            },
            {
              class: "yes_terrorist",
              score: 1.1944768206346446e-7,
            },
          ],
        },
        {
          time: 0.9676333333333333,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9993015796420283,
            },
            {
              class: "general_nsfw",
              score: 0.00003308303997254517,
            },
            {
              class: "general_suggestive",
              score: 0.000665337317999285,
            },
            {
              class: "no_female_underwear",
              score: 0.9873876310358509,
            },
            {
              class: "yes_female_underwear",
              score: 0.012612368964149029,
            },
            {
              class: "no_male_underwear",
              score: 0.9987797107658211,
            },
            {
              class: "yes_male_underwear",
              score: 0.001220289234178826,
            },
            {
              class: "no_sex_toy",
              score: 0.9999999860811675,
            },
            {
              class: "yes_sex_toy",
              score: 1.39188325416691e-8,
            },
            {
              class: "no_female_nudity",
              score: 0.9385930428840055,
            },
            {
              class: "yes_female_nudity",
              score: 0.06140695711599456,
            },
            {
              class: "no_male_nudity",
              score: 0.9952047327813942,
            },
            {
              class: "yes_male_nudity",
              score: 0.004795267218605782,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999165487754885,
            },
            {
              class: "yes_female_swimwear",
              score: 0.00008345122451143947,
            },
            {
              class: "no_male_shirtless",
              score: 0.8627612816587283,
            },
            {
              class: "yes_male_shirtless",
              score: 0.1372387183412716,
            },
            {
              class: "no_text",
              score: 0.46553602501326496,
            },
            {
              class: "text",
              score: 0.534463974986735,
            },
            {
              class: "animated",
              score: 0.14029863939358836,
            },
            {
              class: "hybrid",
              score: 0.029356865175627356,
            },
            {
              class: "natural",
              score: 0.8303444954307844,
            },
            {
              class: "animated_gun",
              score: 1.5871521304043979e-9,
            },
            {
              class: "gun_in_hand",
              score: 0.00024478935657141175,
            },
            {
              class: "gun_not_in_hand",
              score: 0.000029486759278767408,
            },
            {
              class: "no_gun",
              score: 0.9997257222969976,
            },
            {
              class: "culinary_knife_in_hand",
              score: 2.2893015548696375e-9,
            },
            {
              class: "knife_in_hand",
              score: 0.00013703063278770435,
            },
            {
              class: "knife_not_in_hand",
              score: 0.00009040189740550968,
            },
            {
              class: "no_knife",
              score: 0.9997725651805052,
            },
            {
              class: "a_little_bloody",
              score: 0.00019731198319357206,
            },
            {
              class: "no_blood",
              score: 0.9997981944031405,
            },
            {
              class: "other_blood",
              score: 3.4036338190730823e-7,
            },
            {
              class: "very_bloody",
              score: 0.000004153250283918425,
            },
            {
              class: "no_pills",
              score: 0.9999999607369658,
            },
            {
              class: "yes_pills",
              score: 3.926303407164512e-8,
            },
            {
              class: "no_smoking",
              score: 0.9999842650783878,
            },
            {
              class: "yes_smoking",
              score: 0.000015734921612084817,
            },
            {
              class: "illicit_injectables",
              score: 0.002246009683096418,
            },
            {
              class: "medical_injectables",
              score: 7.118027495527094e-8,
            },
            {
              class: "no_injectables",
              score: 0.9977539191366286,
            },
            {
              class: "no_nazi",
              score: 0.9999999658813403,
            },
            {
              class: "yes_nazi",
              score: 3.411865966899756e-8,
            },
            {
              class: "no_kkk",
              score: 0.9999734342831029,
            },
            {
              class: "yes_kkk",
              score: 0.00002656571689702139,
            },
            {
              class: "no_middle_finger",
              score: 0.9999999449661191,
            },
            {
              class: "yes_middle_finger",
              score: 5.503388076327817e-8,
            },
            {
              class: "no_terrorist",
              score: 0.9999998372353635,
            },
            {
              class: "yes_terrorist",
              score: 1.6276463654029176e-7,
            },
          ],
        },
        {
          time: 1.9686333333333335,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9998151808058665,
            },
            {
              class: "general_nsfw",
              score: 0.000018230859480136726,
            },
            {
              class: "general_suggestive",
              score: 0.00016658833465332213,
            },
            {
              class: "no_female_underwear",
              score: 0.4324639170746724,
            },
            {
              class: "yes_female_underwear",
              score: 0.5675360829253275,
            },
            {
              class: "no_male_underwear",
              score: 0.9985914750219329,
            },
            {
              class: "yes_male_underwear",
              score: 0.0014085249780672177,
            },
            {
              class: "no_sex_toy",
              score: 0.9999999743037831,
            },
            {
              class: "yes_sex_toy",
              score: 2.5696216830663688e-8,
            },
            {
              class: "no_female_nudity",
              score: 1,
            },
            {
              class: "yes_female_nudity",
              score: 0,
            },
            {
              class: "no_male_nudity",
              score: 0.8641512550036115,
            },
            {
              class: "yes_male_nudity",
              score: 0.13584874499638863,
            },
            {
              class: "no_female_swimwear",
              score: 0.9998247086364012,
            },
            {
              class: "yes_female_swimwear",
              score: 0.0001752913635988666,
            },
            {
              class: "no_male_shirtless",
              score: 0.24950943985982724,
            },
            {
              class: "yes_male_shirtless",
              score: 0.7504905601401728,
            },
            {
              class: "no_text",
              score: 0.4491225194403114,
            },
            {
              class: "text",
              score: 0.5508774805596887,
            },
            {
              class: "animated",
              score: 0.09350445089110385,
            },
            {
              class: "hybrid",
              score: 0.030769812848229754,
            },
            {
              class: "natural",
              score: 0.8757257362606664,
            },
            {
              class: "animated_gun",
              score: 1.783711498107673e-8,
            },
            {
              class: "gun_in_hand",
              score: 0.9906997262814549,
            },
            {
              class: "gun_not_in_hand",
              score: 0.00016163171000358107,
            },
            {
              class: "no_gun",
              score: 0.009138624171426486,
            },
            {
              class: "culinary_knife_in_hand",
              score: 4.078363789099219e-9,
            },
            {
              class: "knife_in_hand",
              score: 0.000017595014195342056,
            },
            {
              class: "knife_not_in_hand",
              score: 2.7210532391506583e-7,
            },
            {
              class: "no_knife",
              score: 0.9999821288021169,
            },
            {
              class: "a_little_bloody",
              score: 0.0030182046314855366,
            },
            {
              class: "no_blood",
              score: 0.9904706439840207,
            },
            {
              class: "other_blood",
              score: 0.00001244168445879927,
            },
            {
              class: "very_bloody",
              score: 0.006498709700034846,
            },
            {
              class: "no_pills",
              score: 0.9999994772285088,
            },
            {
              class: "yes_pills",
              score: 5.227714912158995e-7,
            },
            {
              class: "no_smoking",
              score: 0.9996852924925324,
            },
            {
              class: "yes_smoking",
              score: 0.0003147075074676598,
            },
            {
              class: "illicit_injectables",
              score: 0.0012152877987160599,
            },
            {
              class: "medical_injectables",
              score: 4.9572546619584316e-8,
            },
            {
              class: "no_injectables",
              score: 0.9987846626287373,
            },
            {
              class: "no_nazi",
              score: 0.9999999240425641,
            },
            {
              class: "yes_nazi",
              score: 7.595743584265978e-8,
            },
            {
              class: "no_kkk",
              score: 0.9999998828192374,
            },
            {
              class: "yes_kkk",
              score: 1.1718076274210178e-7,
            },
            {
              class: "no_middle_finger",
              score: 0.999999996957015,
            },
            {
              class: "yes_middle_finger",
              score: 3.0429849682792718e-9,
            },
            {
              class: "no_terrorist",
              score: 0.9999994315674101,
            },
            {
              class: "yes_terrorist",
              score: 5.684325898350158e-7,
            },
          ],
        },
        {
          time: 2.9696333333333333,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9956315679911232,
            },
            {
              class: "general_nsfw",
              score: 0.0025266791545098992,
            },
            {
              class: "general_suggestive",
              score: 0.001841752854367017,
            },
            {
              class: "no_female_underwear",
              score: 0.9972363002511552,
            },
            {
              class: "yes_female_underwear",
              score: 0.0027636997488446812,
            },
            {
              class: "no_male_underwear",
              score: 0.9999822482078426,
            },
            {
              class: "yes_male_underwear",
              score: 0.00001775179215727688,
            },
            {
              class: "no_sex_toy",
              score: 0.9991533647360749,
            },
            {
              class: "yes_sex_toy",
              score: 0.0008466352639252574,
            },
            {
              class: "no_female_nudity",
              score: 0.9967726083823851,
            },
            {
              class: "yes_female_nudity",
              score: 0.0032273916176149605,
            },
            {
              class: "no_male_nudity",
              score: 0.9947847154335949,
            },
            {
              class: "yes_male_nudity",
              score: 0.005215284566405132,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999197686322701,
            },
            {
              class: "yes_female_swimwear",
              score: 0.00008023136773005367,
            },
            {
              class: "no_male_shirtless",
              score: 0.9964855287942753,
            },
            {
              class: "yes_male_shirtless",
              score: 0.003514471205724657,
            },
            {
              class: "no_text",
              score: 0.21293101582491922,
            },
            {
              class: "text",
              score: 0.7870689841750809,
            },
            {
              class: "animated",
              score: 0.051219103398715084,
            },
            {
              class: "hybrid",
              score: 0.005123579771890263,
            },
            {
              class: "natural",
              score: 0.9436573168293948,
            },
            {
              class: "animated_gun",
              score: 7.050366971685424e-7,
            },
            {
              class: "gun_in_hand",
              score: 0.024582898540904775,
            },
            {
              class: "gun_not_in_hand",
              score: 0.0010281767270817047,
            },
            {
              class: "no_gun",
              score: 0.9743882196953164,
            },
            {
              class: "culinary_knife_in_hand",
              score: 0.000001029709144132786,
            },
            {
              class: "knife_in_hand",
              score: 0.0016839465939694344,
            },
            {
              class: "knife_not_in_hand",
              score: 0.0007009281770852387,
            },
            {
              class: "no_knife",
              score: 0.9976140955198013,
            },
            {
              class: "a_little_bloody",
              score: 0.00005875188181273203,
            },
            {
              class: "no_blood",
              score: 0.9998675734412212,
            },
            {
              class: "other_blood",
              score: 0.0000018620087434214815,
            },
            {
              class: "very_bloody",
              score: 0.00007181266822275825,
            },
            {
              class: "no_pills",
              score: 0.9999851156132135,
            },
            {
              class: "yes_pills",
              score: 0.000014884386786535062,
            },
            {
              class: "no_smoking",
              score: 0.9994700815164659,
            },
            {
              class: "yes_smoking",
              score: 0.0005299184835340892,
            },
            {
              class: "illicit_injectables",
              score: 0.0002944796486942089,
            },
            {
              class: "medical_injectables",
              score: 2.4268485300337027e-7,
            },
            {
              class: "no_injectables",
              score: 0.9997052776664527,
            },
            {
              class: "no_nazi",
              score: 0.9999999550747296,
            },
            {
              class: "yes_nazi",
              score: 4.492527029832537e-8,
            },
            {
              class: "no_kkk",
              score: 0.9999999950370022,
            },
            {
              class: "yes_kkk",
              score: 4.962997819974541e-9,
            },
            {
              class: "no_middle_finger",
              score: 0.9999797038384433,
            },
            {
              class: "yes_middle_finger",
              score: 0.000020296161556613932,
            },
            {
              class: "no_terrorist",
              score: 0.9999999532932626,
            },
            {
              class: "yes_terrorist",
              score: 4.6706737449094554e-8,
            },
          ],
        },
        {
          time: 3.9706333333333332,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.998981436418984,
            },
            {
              class: "general_nsfw",
              score: 0.0003918460485009998,
            },
            {
              class: "general_suggestive",
              score: 0.0006267175325148954,
            },
            {
              class: "no_female_underwear",
              score: 0.9003370802517205,
            },
            {
              class: "yes_female_underwear",
              score: 0.09966291974827948,
            },
            {
              class: "no_male_underwear",
              score: 0.9952321211007921,
            },
            {
              class: "yes_male_underwear",
              score: 0.004767878899207959,
            },
            {
              class: "no_sex_toy",
              score: 0.9999998531069676,
            },
            {
              class: "yes_sex_toy",
              score: 1.468930323901358e-7,
            },
            {
              class: "no_female_nudity",
              score: 0.8180865394190552,
            },
            {
              class: "yes_female_nudity",
              score: 0.18191346058094485,
            },
            {
              class: "no_male_nudity",
              score: 0.9692748039198794,
            },
            {
              class: "yes_male_nudity",
              score: 0.030725196080120486,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999408808529145,
            },
            {
              class: "yes_female_swimwear",
              score: 0.000059119147085330245,
            },
            {
              class: "no_male_shirtless",
              score: 0.39674573061638435,
            },
            {
              class: "yes_male_shirtless",
              score: 0.6032542693836156,
            },
            {
              class: "no_text",
              score: 0.47380123918708,
            },
            {
              class: "text",
              score: 0.52619876081292,
            },
            {
              class: "animated",
              score: 0.10850881594129563,
            },
            {
              class: "hybrid",
              score: 0.028794228329512176,
            },
            {
              class: "natural",
              score: 0.8626969557291921,
            },
            {
              class: "animated_gun",
              score: 3.8992690506284606e-11,
            },
            {
              class: "gun_in_hand",
              score: 0.9999930128395627,
            },
            {
              class: "gun_not_in_hand",
              score: 3.227799136088376e-8,
            },
            {
              class: "no_gun",
              score: 0.000006954843453006344,
            },
            {
              class: "culinary_knife_in_hand",
              score: 2.9841501961791232e-9,
            },
            {
              class: "knife_in_hand",
              score: 2.893842112232667e-7,
            },
            {
              class: "knife_not_in_hand",
              score: 6.286542399624152e-9,
            },
            {
              class: "no_knife",
              score: 0.9999997013450962,
            },
            {
              class: "a_little_bloody",
              score: 0.0002893403887421128,
            },
            {
              class: "no_blood",
              score: 0.9997053910689279,
            },
            {
              class: "other_blood",
              score: 4.211170257576686e-8,
            },
            {
              class: "very_bloody",
              score: 0.000005226430627608735,
            },
            {
              class: "no_pills",
              score: 0.9999961232787736,
            },
            {
              class: "yes_pills",
              score: 0.0000038767212262749336,
            },
            {
              class: "no_smoking",
              score: 0.999886408900341,
            },
            {
              class: "yes_smoking",
              score: 0.00011359109965898026,
            },
            {
              class: "illicit_injectables",
              score: 0.0003705624634375549,
            },
            {
              class: "medical_injectables",
              score: 2.681990511653503e-7,
            },
            {
              class: "no_injectables",
              score: 0.9996291693375112,
            },
            {
              class: "no_nazi",
              score: 0.9999993941820342,
            },
            {
              class: "yes_nazi",
              score: 6.058179658472171e-7,
            },
            {
              class: "no_kkk",
              score: 0.9999999992666377,
            },
            {
              class: "yes_kkk",
              score: 7.333621556741852e-10,
            },
            {
              class: "no_middle_finger",
              score: 0.9999999834921183,
            },
            {
              class: "yes_middle_finger",
              score: 1.6507881751045797e-8,
            },
            {
              class: "no_terrorist",
              score: 0.9999999994641515,
            },
            {
              class: "yes_terrorist",
              score: 5.358483753776352e-10,
            },
          ],
        },
        {
          time: 4.971633333333333,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9987833858243246,
            },
            {
              class: "general_nsfw",
              score: 0.00016506396646653518,
            },
            {
              class: "general_suggestive",
              score: 0.0010515502092089727,
            },
            {
              class: "no_female_underwear",
              score: 0.883425593271256,
            },
            {
              class: "yes_female_underwear",
              score: 0.11657440672874392,
            },
            {
              class: "no_male_underwear",
              score: 0.9950692527498379,
            },
            {
              class: "yes_male_underwear",
              score: 0.004930747250161972,
            },
            {
              class: "no_sex_toy",
              score: 0.9999998177881245,
            },
            {
              class: "yes_sex_toy",
              score: 1.822118755620645e-7,
            },
            {
              class: "no_female_nudity",
              score: 0.8431449655746076,
            },
            {
              class: "yes_female_nudity",
              score: 0.1568550344253924,
            },
            {
              class: "no_male_nudity",
              score: 0.9787302301690963,
            },
            {
              class: "yes_male_nudity",
              score: 0.02126976983090362,
            },
            {
              class: "no_female_swimwear",
              score: 0.9996428935545751,
            },
            {
              class: "yes_female_swimwear",
              score: 0.00035710644542498806,
            },
            {
              class: "no_male_shirtless",
              score: 0.5292959382060208,
            },
            {
              class: "yes_male_shirtless",
              score: 0.4707040617939791,
            },
            {
              class: "no_text",
              score: 0.47204830877214843,
            },
            {
              class: "text",
              score: 0.5279516912278516,
            },
            {
              class: "animated",
              score: 0.10125329792729869,
            },
            {
              class: "hybrid",
              score: 0.0232900619970933,
            },
            {
              class: "natural",
              score: 0.8754566400756081,
            },
            {
              class: "animated_gun",
              score: 3.741769779216348e-11,
            },
            {
              class: "gun_in_hand",
              score: 0.9999975727571522,
            },
            {
              class: "gun_not_in_hand",
              score: 2.2751847089008934e-8,
            },
            {
              class: "no_gun",
              score: 0.0000024044535829412446,
            },
            {
              class: "culinary_knife_in_hand",
              score: 1.1067143479721776e-9,
            },
            {
              class: "knife_in_hand",
              score: 2.0732228238679053e-7,
            },
            {
              class: "knife_not_in_hand",
              score: 8.774674956273932e-9,
            },
            {
              class: "no_knife",
              score: 0.9999997827963284,
            },
            {
              class: "a_little_bloody",
              score: 0.0002810709790021391,
            },
            {
              class: "no_blood",
              score: 0.9997121918195605,
            },
            {
              class: "other_blood",
              score: 3.51250326373174e-8,
            },
            {
              class: "very_bloody",
              score: 0.000006702076404653628,
            },
            {
              class: "no_pills",
              score: 0.9999993983855555,
            },
            {
              class: "yes_pills",
              score: 6.016144445517255e-7,
            },
            {
              class: "no_smoking",
              score: 0.9999315538012564,
            },
            {
              class: "yes_smoking",
              score: 0.00006844619874361234,
            },
            {
              class: "illicit_injectables",
              score: 0.00017088185146335656,
            },
            {
              class: "medical_injectables",
              score: 2.1907460842253302e-8,
            },
            {
              class: "no_injectables",
              score: 0.9998290962410757,
            },
            {
              class: "no_nazi",
              score: 0.999999887074369,
            },
            {
              class: "yes_nazi",
              score: 1.129256309811872e-7,
            },
            {
              class: "no_kkk",
              score: 0.9999999995994253,
            },
            {
              class: "yes_kkk",
              score: 4.005747794390244e-10,
            },
            {
              class: "no_middle_finger",
              score: 0.9999999925191071,
            },
            {
              class: "yes_middle_finger",
              score: 7.480893010743533e-9,
            },
            {
              class: "no_terrorist",
              score: 0.9999999991988118,
            },
            {
              class: "yes_terrorist",
              score: 8.011881448179661e-10,
            },
          ],
        },
        {
          time: 5.9726333333333335,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9987169015117738,
            },
            {
              class: "general_nsfw",
              score: 0.0005281124795943088,
            },
            {
              class: "general_suggestive",
              score: 0.0007549860086317741,
            },
            {
              class: "no_female_underwear",
              score: 0.9999458022179081,
            },
            {
              class: "yes_female_underwear",
              score: 0.00005419778209195619,
            },
            {
              class: "no_male_underwear",
              score: 0.9999832237031074,
            },
            {
              class: "yes_male_underwear",
              score: 0.000016776296892668494,
            },
            {
              class: "no_sex_toy",
              score: 0.9999999658163324,
            },
            {
              class: "yes_sex_toy",
              score: 3.4183667546013406e-8,
            },
            {
              class: "no_female_nudity",
              score: 0.9992924299947512,
            },
            {
              class: "yes_female_nudity",
              score: 0.0007075700052488475,
            },
            {
              class: "no_male_nudity",
              score: 0.999965270874059,
            },
            {
              class: "yes_male_nudity",
              score: 0.00003472912594096099,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999275686398472,
            },
            {
              class: "yes_female_swimwear",
              score: 0.00007243136015283602,
            },
            {
              class: "no_male_shirtless",
              score: 0.9994764914680165,
            },
            {
              class: "yes_male_shirtless",
              score: 0.0005235085319835352,
            },
            {
              class: "no_text",
              score: 0.12301657119422885,
            },
            {
              class: "text",
              score: 0.8769834288057712,
            },
            {
              class: "animated",
              score: 0.31662958495545795,
            },
            {
              class: "hybrid",
              score: 0.016974790159445162,
            },
            {
              class: "natural",
              score: 0.6663956248850968,
            },
            {
              class: "animated_gun",
              score: 2.5344462200864515e-7,
            },
            {
              class: "gun_in_hand",
              score: 1.575306380061684e-7,
            },
            {
              class: "gun_not_in_hand",
              score: 6.68950102751206e-7,
            },
            {
              class: "no_gun",
              score: 0.9999989200746372,
            },
            {
              class: "culinary_knife_in_hand",
              score: 1.238299624151709e-9,
            },
            {
              class: "knife_in_hand",
              score: 1.2077655578995093e-8,
            },
            {
              class: "knife_not_in_hand",
              score: 0.0000066020257553899325,
            },
            {
              class: "no_knife",
              score: 0.9999933846582894,
            },
            {
              class: "a_little_bloody",
              score: 8.401464004687719e-7,
            },
            {
              class: "no_blood",
              score: 0.999978218670479,
            },
            {
              class: "other_blood",
              score: 0.000019645054018158184,
            },
            {
              class: "very_bloody",
              score: 0.0000012961291023956028,
            },
            {
              class: "no_pills",
              score: 0.9998802103019914,
            },
            {
              class: "yes_pills",
              score: 0.00011978969800865137,
            },
            {
              class: "no_smoking",
              score: 0.9998956154553256,
            },
            {
              class: "yes_smoking",
              score: 0.00010438454467434993,
            },
            {
              class: "illicit_injectables",
              score: 0.0014984274032343828,
            },
            {
              class: "medical_injectables",
              score: 1.0839775844937244e-7,
            },
            {
              class: "no_injectables",
              score: 0.9985014641990072,
            },
            {
              class: "no_nazi",
              score: 0.9999984225084524,
            },
            {
              class: "yes_nazi",
              score: 0.0000015774915474848204,
            },
            {
              class: "no_kkk",
              score: 0.9998461224635246,
            },
            {
              class: "yes_kkk",
              score: 0.00015387753647533864,
            },
            {
              class: "no_middle_finger",
              score: 0.9999999277683199,
            },
            {
              class: "yes_middle_finger",
              score: 7.223168016856288e-8,
            },
            {
              class: "no_terrorist",
              score: 0.9999995151146563,
            },
            {
              class: "yes_terrorist",
              score: 4.848853436924333e-7,
            },
          ],
        },
        {
          time: 6.973633333333334,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9933879141533993,
            },
            {
              class: "general_nsfw",
              score: 0.004484136010066356,
            },
            {
              class: "general_suggestive",
              score: 0.0021279498365342356,
            },
            {
              class: "no_female_underwear",
              score: 0.9919668540846203,
            },
            {
              class: "yes_female_underwear",
              score: 0.008033145915379687,
            },
            {
              class: "no_male_underwear",
              score: 0.9949357448404902,
            },
            {
              class: "yes_male_underwear",
              score: 0.005064255159509794,
            },
            {
              class: "no_sex_toy",
              score: 0.9999647895946444,
            },
            {
              class: "yes_sex_toy",
              score: 0.000035210405355613086,
            },
            {
              class: "no_female_nudity",
              score: 0.9746033342972726,
            },
            {
              class: "yes_female_nudity",
              score: 0.025396665702727438,
            },
            {
              class: "no_male_nudity",
              score: 0.9299089770299225,
            },
            {
              class: "yes_male_nudity",
              score: 0.07009102297007755,
            },
            {
              class: "no_female_swimwear",
              score: 0.9998237629149692,
            },
            {
              class: "yes_female_swimwear",
              score: 0.00017623708503078166,
            },
            {
              class: "no_male_shirtless",
              score: 0.8178477945335179,
            },
            {
              class: "yes_male_shirtless",
              score: 0.1821522054664822,
            },
            {
              class: "no_text",
              score: 0.4289337550453581,
            },
            {
              class: "text",
              score: 0.5710662449546419,
            },
            {
              class: "animated",
              score: 0.08273838747560083,
            },
            {
              class: "hybrid",
              score: 0.02508215180453869,
            },
            {
              class: "natural",
              score: 0.8921794607198605,
            },
            {
              class: "animated_gun",
              score: 0.0000020486666507764864,
            },
            {
              class: "gun_in_hand",
              score: 0.05414322713403721,
            },
            {
              class: "gun_not_in_hand",
              score: 0.003034639723939693,
            },
            {
              class: "no_gun",
              score: 0.9428200844753722,
            },
            {
              class: "culinary_knife_in_hand",
              score: 2.0831117416306387e-9,
            },
            {
              class: "knife_in_hand",
              score: 0.00004479628892862145,
            },
            {
              class: "knife_not_in_hand",
              score: 0.0000031447389361096297,
            },
            {
              class: "no_knife",
              score: 0.9999520568890236,
            },
            {
              class: "a_little_bloody",
              score: 1.0021279135846063e-7,
            },
            {
              class: "no_blood",
              score: 0.9999991828859249,
            },
            {
              class: "other_blood",
              score: 1.3641831814267011e-7,
            },
            {
              class: "very_bloody",
              score: 5.804829653556825e-7,
            },
            {
              class: "no_pills",
              score: 0.9999999997738158,
            },
            {
              class: "yes_pills",
              score: 2.2618428677392796e-10,
            },
            {
              class: "no_smoking",
              score: 0.9999855945922062,
            },
            {
              class: "yes_smoking",
              score: 0.00001440540779386399,
            },
            {
              class: "illicit_injectables",
              score: 0.00009978807459081778,
            },
            {
              class: "medical_injectables",
              score: 9.983948791726408e-10,
            },
            {
              class: "no_injectables",
              score: 0.9999002109270143,
            },
            {
              class: "no_nazi",
              score: 0.9999924737367297,
            },
            {
              class: "yes_nazi",
              score: 0.000007526263270318768,
            },
            {
              class: "no_kkk",
              score: 0.9999998551306203,
            },
            {
              class: "yes_kkk",
              score: 1.4486937966017507e-7,
            },
            {
              class: "no_middle_finger",
              score: 0.9999955569344146,
            },
            {
              class: "yes_middle_finger",
              score: 0.000004443065585357745,
            },
            {
              class: "no_terrorist",
              score: 0.9999847097400623,
            },
            {
              class: "yes_terrorist",
              score: 0.000015290259937752635,
            },
          ],
        },
        {
          time: 7.974633333333333,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9997696880314472,
            },
            {
              class: "general_nsfw",
              score: 0.00002158325521908541,
            },
            {
              class: "general_suggestive",
              score: 0.00020872871333369236,
            },
            {
              class: "no_female_underwear",
              score: 0.9949111623777553,
            },
            {
              class: "yes_female_underwear",
              score: 0.005088837622244694,
            },
            {
              class: "no_male_underwear",
              score: 0.9967418489225806,
            },
            {
              class: "yes_male_underwear",
              score: 0.003258151077419493,
            },
            {
              class: "no_sex_toy",
              score: 0.9999898735103867,
            },
            {
              class: "yes_sex_toy",
              score: 0.000010126489613414198,
            },
            {
              class: "no_female_nudity",
              score: 0.9987403879896919,
            },
            {
              class: "yes_female_nudity",
              score: 0.0012596120103079678,
            },
            {
              class: "no_male_nudity",
              score: 0.9977713669685666,
            },
            {
              class: "yes_male_nudity",
              score: 0.0022286330314333193,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999970623505716,
            },
            {
              class: "yes_female_swimwear",
              score: 0.0000029376494283021517,
            },
            {
              class: "no_male_shirtless",
              score: 0.9656077631540585,
            },
            {
              class: "yes_male_shirtless",
              score: 0.03439223684594156,
            },
            {
              class: "no_text",
              score: 0.4281549853897152,
            },
            {
              class: "text",
              score: 0.5718450146102848,
            },
            {
              class: "animated",
              score: 0.12990663206972,
            },
            {
              class: "hybrid",
              score: 0.029762657742092018,
            },
            {
              class: "natural",
              score: 0.840330710188188,
            },
            {
              class: "animated_gun",
              score: 7.644777229961974e-11,
            },
            {
              class: "gun_in_hand",
              score: 0.000060592187348454186,
            },
            {
              class: "gun_not_in_hand",
              score: 0.000021177084509136733,
            },
            {
              class: "no_gun",
              score: 0.9999182306516947,
            },
            {
              class: "culinary_knife_in_hand",
              score: 3.446145264417729e-7,
            },
            {
              class: "knife_in_hand",
              score: 0.00001295107091652828,
            },
            {
              class: "knife_not_in_hand",
              score: 0.00000435853216193708,
            },
            {
              class: "no_knife",
              score: 0.9999823457823951,
            },
            {
              class: "a_little_bloody",
              score: 0.028097644460105986,
            },
            {
              class: "no_blood",
              score: 0.9603166698470956,
            },
            {
              class: "other_blood",
              score: 0.0017287227609572755,
            },
            {
              class: "very_bloody",
              score: 0.009856962931841193,
            },
            {
              class: "no_pills",
              score: 0.9999966885770438,
            },
            {
              class: "yes_pills",
              score: 0.000003311422956217716,
            },
            {
              class: "no_smoking",
              score: 0.9999577502088415,
            },
            {
              class: "yes_smoking",
              score: 0.00004224979115847083,
            },
            {
              class: "illicit_injectables",
              score: 0.002547083837945735,
            },
            {
              class: "medical_injectables",
              score: 3.9847023777986446e-7,
            },
            {
              class: "no_injectables",
              score: 0.9974525176918164,
            },
            {
              class: "no_nazi",
              score: 0.9999765060886029,
            },
            {
              class: "yes_nazi",
              score: 0.000023493911396990233,
            },
            {
              class: "no_kkk",
              score: 0.9999989847203196,
            },
            {
              class: "yes_kkk",
              score: 0.0000010152796805187493,
            },
            {
              class: "no_middle_finger",
              score: 0.9999993824303913,
            },
            {
              class: "yes_middle_finger",
              score: 6.175696086718566e-7,
            },
            {
              class: "no_terrorist",
              score: 0.9999999499216558,
            },
            {
              class: "yes_terrorist",
              score: 5.0078344184897516e-8,
            },
          ],
        },
        {
          time: 8.975633333333333,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9977328599592358,
            },
            {
              class: "general_nsfw",
              score: 0.0001903163301467184,
            },
            {
              class: "general_suggestive",
              score: 0.0020768237106172653,
            },
            {
              class: "no_female_underwear",
              score: 0.9445120819148325,
            },
            {
              class: "yes_female_underwear",
              score: 0.055487918085167454,
            },
            {
              class: "no_male_underwear",
              score: 0.9979883913081485,
            },
            {
              class: "yes_male_underwear",
              score: 0.0020116086918513226,
            },
            {
              class: "no_sex_toy",
              score: 0.9999971340998921,
            },
            {
              class: "yes_sex_toy",
              score: 0.000002865900107930885,
            },
            {
              class: "no_female_nudity",
              score: 0.9776050552908891,
            },
            {
              class: "yes_female_nudity",
              score: 0.022394944709110784,
            },
            {
              class: "no_male_nudity",
              score: 0.9605551309799788,
            },
            {
              class: "yes_male_nudity",
              score: 0.039444869020021193,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999930080043703,
            },
            {
              class: "yes_female_swimwear",
              score: 0.000006991995629638787,
            },
            {
              class: "no_male_shirtless",
              score: 0.8684217942634062,
            },
            {
              class: "yes_male_shirtless",
              score: 0.13157820573659376,
            },
            {
              class: "no_text",
              score: 0.48033394587798,
            },
            {
              class: "text",
              score: 0.5196660541220199,
            },
            {
              class: "animated",
              score: 0.10992630665489903,
            },
            {
              class: "hybrid",
              score: 0.0312628853874672,
            },
            {
              class: "natural",
              score: 0.8588108079576338,
            },
            {
              class: "animated_gun",
              score: 1.1956455236752503e-11,
            },
            {
              class: "gun_in_hand",
              score: 0.001012857720388876,
            },
            {
              class: "gun_not_in_hand",
              score: 0.000010904445320445703,
            },
            {
              class: "no_gun",
              score: 0.9989762378223344,
            },
            {
              class: "culinary_knife_in_hand",
              score: 9.793388881079498e-9,
            },
            {
              class: "knife_in_hand",
              score: 0.0000022173000986234324,
            },
            {
              class: "knife_not_in_hand",
              score: 0.000002463102639627635,
            },
            {
              class: "no_knife",
              score: 0.9999953098038729,
            },
            {
              class: "a_little_bloody",
              score: 0.009776023577623423,
            },
            {
              class: "no_blood",
              score: 0.958467619802777,
            },
            {
              class: "other_blood",
              score: 0.00007805960012624654,
            },
            {
              class: "very_bloody",
              score: 0.031678297019473486,
            },
            {
              class: "no_pills",
              score: 0.9999999557530481,
            },
            {
              class: "yes_pills",
              score: 4.424695181822689e-8,
            },
            {
              class: "no_smoking",
              score: 0.9999636349358288,
            },
            {
              class: "yes_smoking",
              score: 0.00003636506417121476,
            },
            {
              class: "illicit_injectables",
              score: 0.000046142096544256855,
            },
            {
              class: "medical_injectables",
              score: 3.915456316503938e-9,
            },
            {
              class: "no_injectables",
              score: 0.9999538539879994,
            },
            {
              class: "no_nazi",
              score: 0.999999904626445,
            },
            {
              class: "yes_nazi",
              score: 9.537355514866118e-8,
            },
            {
              class: "no_kkk",
              score: 0.9999999966818709,
            },
            {
              class: "yes_kkk",
              score: 3.3181290586624162e-9,
            },
            {
              class: "no_middle_finger",
              score: 0.9999999762386463,
            },
            {
              class: "yes_middle_finger",
              score: 2.3761353729797493e-8,
            },
            {
              class: "no_terrorist",
              score: 0.9999999995666333,
            },
            {
              class: "yes_terrorist",
              score: 4.3336672842118925e-10,
            },
          ],
        },
        {
          time: 9.976633333333334,
          classes: [
            {
              class: "general_not_nsfw_not_suggestive",
              score: 0.9989793988361358,
            },
            {
              class: "general_nsfw",
              score: 0.000031754731534574136,
            },
            {
              class: "general_suggestive",
              score: 0.0009888464323295426,
            },
            {
              class: "no_female_underwear",
              score: 0.9988936226402637,
            },
            {
              class: "yes_female_underwear",
              score: 0.0011063773597363162,
            },
            {
              class: "no_male_underwear",
              score: 0.9991204595834838,
            },
            {
              class: "yes_male_underwear",
              score: 0.000879540416516206,
            },
            {
              class: "no_sex_toy",
              score: 0.9999998565808813,
            },
            {
              class: "yes_sex_toy",
              score: 1.4341911875240412e-7,
            },
            {
              class: "no_female_nudity",
              score: 0.9996201422494275,
            },
            {
              class: "yes_female_nudity",
              score: 0.0003798577505724673,
            },
            {
              class: "no_male_nudity",
              score: 0.999926405676766,
            },
            {
              class: "yes_male_nudity",
              score: 0.00007359432323398218,
            },
            {
              class: "no_female_swimwear",
              score: 0.9999792545839058,
            },
            {
              class: "yes_female_swimwear",
              score: 0.000020745416094064032,
            },
            {
              class: "no_male_shirtless",
              score: 0.980647818570449,
            },
            {
              class: "yes_male_shirtless",
              score: 0.019352181429550926,
            },
            {
              class: "no_text",
              score: 0.29021123305890795,
            },
            {
              class: "text",
              score: 0.709788766941092,
            },
            {
              class: "animated",
              score: 0.051085289896811534,
            },
            {
              class: "hybrid",
              score: 0.25287310681609737,
            },
            {
              class: "natural",
              score: 0.6960416032870911,
            },
            {
              class: "animated_gun",
              score: 0.00010969309139843568,
            },
            {
              class: "gun_in_hand",
              score: 0.014001416982472903,
            },
            {
              class: "gun_not_in_hand",
              score: 0.00012187725980203562,
            },
            {
              class: "no_gun",
              score: 0.9857670126663266,
            },
            {
              class: "culinary_knife_in_hand",
              score: 0.000029149089964055677,
            },
            {
              class: "knife_in_hand",
              score: 0.9306260499769082,
            },
            {
              class: "knife_not_in_hand",
              score: 0.00018944941939145162,
            },
            {
              class: "no_knife",
              score: 0.06915535151373611,
            },
            {
              class: "a_little_bloody",
              score: 0.0002414808884151412,
            },
            {
              class: "no_blood",
              score: 0.9993108372425802,
            },
            {
              class: "other_blood",
              score: 0.0003148740577023207,
            },
            {
              class: "very_bloody",
              score: 0.0001328078113023921,
            },
            {
              class: "no_pills",
              score: 0.9999974452130229,
            },
            {
              class: "yes_pills",
              score: 0.000002554786977199005,
            },
            {
              class: "no_smoking",
              score: 0.9999781415317011,
            },
            {
              class: "yes_smoking",
              score: 0.000021858468298992554,
            },
            {
              class: "illicit_injectables",
              score: 0.02200873842048214,
            },
            {
              class: "medical_injectables",
              score: 2.0935646734824387e-7,
            },
            {
              class: "no_injectables",
              score: 0.9779910522230506,
            },
            {
              class: "no_nazi",
              score: 0.9999999014559845,
            },
            {
              class: "yes_nazi",
              score: 9.854401550681753e-8,
            },
            {
              class: "no_kkk",
              score: 0.9999988556969519,
            },
            {
              class: "yes_kkk",
              score: 0.0000011443030481384328,
            },
            {
              class: "no_middle_finger",
              score: 0.9996205150530993,
            },
            {
              class: "yes_middle_finger",
              score: 0.0003794849469006693,
            },
            {
              class: "no_terrorist",
              score: 0.9999999593414978,
            },
            {
              class: "yes_terrorist",
              score: 4.065850231268442e-8,
            },
          ],
        },
      ],
    },
  },
  from_cache: false,
};
