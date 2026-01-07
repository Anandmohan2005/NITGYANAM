
import { WellBeingLevel, ResponseIndicator, Question } from './types';

export const QUIZ_DATA: Question[] = [
  // ==========================================
  // LEVEL 1: Std 1 to 3 (11 Questions)
  // Focus: Basic Emotions & Safety Metaphors
  // ==========================================
  {
    id: 'l1_1', level: WellBeingLevel.LEVEL_1,
    textEn: "If your mood today was a toy, which one would it be?",
    textHi: "अगर आज आपका मूड एक खिलौना होता, तो वह कौन सा होता?",
    options: [
      { id: 'a', en: 'A shiny Golden Trophy', hi: 'एक चमकती हुई गोल्डन ट्रॉफी', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A bouncy colorful ball', hi: 'एक उछलती हुई रंगीन गेंद', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A toy with a missing wheel', hi: 'बिना पहिये वाला खिलौना', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A broken toy that makes me sad', hi: 'एक टूटा हुआ खिलौना जो मुझे दुखी करता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_2', level: WellBeingLevel.LEVEL_1,
    textEn: "When you are at home, do you feel like a brave lion or a hiding kitten?",
    textHi: "जब आप घर पर होते हैं, तो क्या आप एक बहादुर शेर जैसा महसूस करते हैं या छिपने वाले बिल्ली के बच्चे जैसा?",
    options: [
      { id: 'a', en: 'Brave lion (Safe and happy)', hi: 'बहादुर शेर (सुरक्षित और खुश)', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Little kitten playing', hi: 'खेलता हुआ छोटा बिल्ली का बच्चा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Kitten wanting to hide', hi: 'बिल्ली का बच्चा जो छिपना चाहता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Scared kitten alone', hi: 'डरा हुआ अकेला बिल्ली का बच्चा', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_3', level: WellBeingLevel.LEVEL_1,
    textEn: "How does your stomach feel when you think about coming to school?",
    textHi: "जब आप स्कूल आने के बारे में सोचते हैं तो आपके पेट में कैसा महसूस होता है?",
    options: [
      { id: 'a', en: 'Like there are happy butterflies', hi: 'जैसे वहां खुश तितलियाँ हों', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Normal and calm', hi: 'सामान्य और शांत', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A little tight or twisty', hi: 'थोड़ा कसा हुआ या मरोड़ वाला', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It hurts and I want to cry', hi: 'दर्द होता है और मैं रोना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_4', level: WellBeingLevel.LEVEL_1,
    textEn: "Is your 'Inner Sun' shining brightly today?",
    textHi: "क्या आपका 'आंतरिक सूरज' आज चमक रहा है?",
    options: [
      { id: 'a', en: 'Yes, very bright!', hi: 'हाँ, बहुत उज्ज्वल!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A little bit cloudy but okay', hi: 'थोड़े बादल हैं लेकिन ठीक है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Mostly grey and rainy', hi: 'ज़्यादातर ग्रे और बारिश वाला', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Total darkness/Stormy', hi: 'पूरा अंधेरा/तूफानी', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_5', level: WellBeingLevel.LEVEL_1,
    textEn: "When you lose a game, what happens in your heart?",
    textHi: "जब आप कोई खेल हार जाते हैं, तो आपके दिल में क्या होता है?",
    options: [
      { id: 'a', en: 'I say "Good game!"', hi: 'मैं कहता हूँ "अच्छा खेल!"', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I feel a bit sad then try again', hi: 'मुझे थोड़ा दुख होता है फिर फिर से कोशिश करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I want to break things', hi: 'मेरा मन चीज़ों को तोड़ने का करता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel like nobody loves me', hi: 'मुझे लगता है कि कोई मुझसे प्यार नहीं करता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_6', level: WellBeingLevel.LEVEL_1,
    textEn: "If your feelings were a weather, what is it like right now?",
    textHi: "यदि आपकी भावनाएं एक मौसम होतीं, तो अभी कैसा होता?",
    options: [
      { id: 'a', en: 'Sunny with a rainbow', hi: 'इंद्रधनुष के साथ धूप', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Gentle breeze', hi: 'हल्की हवा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Foggy, I am confused', hi: 'धुंधला, मैं उलझन में हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Thunder and lightning', hi: 'गरज और बिजली', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_7', level: WellBeingLevel.LEVEL_1,
    textEn: "Does your school bag feel too heavy for your heart sometimes?",
    textHi: "क्या कभी-कभी आपका स्कूल बैग आपके दिल के लिए बहुत भारी लगता है?",
    options: [
      { id: 'a', en: 'No, I love my books', hi: 'नहीं, मुझे अपनी किताबों से प्यार है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Just a little bit', hi: 'बस थोड़ा सा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Yes, I feel very tired of it', hi: 'हाँ, मैं इससे बहुत थक गया हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I hate it and want to throw it away', hi: 'मुझे इससे नफरत है और मैं इसे फेंक देना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_8', level: WellBeingLevel.LEVEL_1,
    textEn: "When you sleep at night, do you have 'Sweet Dreams' or 'Scary Shadows'?",
    textHi: "जब आप रात में सोते हैं, तो क्या आपको 'मीठे सपने' आते हैं या 'डरावनी परछाइयाँ'?",
    options: [
      { id: 'a', en: 'Sweet dreams of flying', hi: 'उड़ने वाले मीठे सपने', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly quiet and peaceful', hi: 'ज़्यादातर शांत और शांतिपूर्ण', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I wake up feeling worried', hi: 'मैं चिंता महसूस करते हुए जागता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Scary monsters every night', hi: 'हर रात डरावने राक्षस', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_9', level: WellBeingLevel.LEVEL_1,
    textEn: "If your teacher smiles at you, how do you feel?",
    textHi: "अगर आपके शिक्षक आपको देखकर मुस्कुराते हैं, तो आपको कैसा लगता है?",
    options: [
      { id: 'a', en: 'Like a superstar', hi: 'एक सुपरस्टार जैसा', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Happy and safe', hi: 'खुश और सुरक्षित', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Shy and worried I did something wrong', hi: 'शर्म महसूस होती है और चिंता कि मैंने कुछ गलत किया', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I don’t want them to look at me', hi: 'मैं नहीं चाहता कि वे मुझे देखें', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_10', level: WellBeingLevel.LEVEL_1,
    textEn: "Do you have a 'Best Friend' who makes you laugh?",
    textHi: "क्या आपका कोई 'सबसे अच्छा दोस्त' है जो आपको हंसाता है?",
    options: [
      { id: 'a', en: 'Yes, many friends!', hi: 'हाँ, बहुत सारे दोस्त!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'One very special friend', hi: 'एक बहुत ही खास दोस्त', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I play alone mostly', hi: 'मैं ज़्यादातर अकेला खेलता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Everyone is mean to me', hi: 'हर कोई मेरे साथ बुरा व्यवहार करता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_11', level: WellBeingLevel.LEVEL_1,
    textEn: "When you are in the playground, are you a 'Busy Bee' or a 'Lonely Leaf'?",
    textHi: "जब आप खेल के मैदान में होते हैं, तो क्या आप 'व्यस्त मधुमक्खी' होते हैं या 'अकेला पत्ता'?",
    options: [
      { id: 'a', en: 'Busy Bee running around!', hi: 'इधर-उधर भागती व्यस्त मधुमक्खी!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Happy leaf blowing in wind', hi: 'हवा में उड़ता हुआ खुश पत्ता', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Quiet leaf sitting on the side', hi: 'किनारे बैठा हुआ शांत पत्ता', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel lost in the playground', hi: 'मैं खेल के मैदान में खोया हुआ महसूस करता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },

  // ==========================================
  // LEVEL 2: Std 4 to 6 (11 Questions)
  // Focus: Internal Battery & Academic Stress
  // ==========================================
  {
    id: 'l2_1', level: WellBeingLevel.LEVEL_2,
    textEn: "Is your 'Internal Engine' running smoothly today?",
    textHi: "क्या आपका 'आंतरिक इंजन' आज सुचारू रूप से चल रहा है?",
    options: [
      { id: 'a', en: 'Yes, full speed ahead!', hi: 'हाँ, पूरी रफ़्तार से आगे!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Running fine, just a bit noisy', hi: 'ठीक चल रहा है, बस थोड़ी आवाज़ है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Low fuel, feeling very slow', hi: 'ईंधन कम है, बहुत धीमा महसूस कर रहा हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Engine is stuck/broken', hi: 'इंजन फंस गया है/खराब है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_2', level: WellBeingLevel.LEVEL_2,
    textEn: "How much charge is left in your 'Internal Battery' for school work?",
    textHi: "स्कूल के काम के लिए आपकी 'आंतरिक बैटरी' में कितनी चार्जिंग बची है?",
    options: [
      { id: 'a', en: '100% - Ready to learn', hi: '100% - सीखने के लिए तैयार', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: '50% - A bit tired but okay', hi: '50% - थोड़ा थका हुआ लेकिन ठीक है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: '10% - Flashing red, very tired', hi: '10% - लाल निशान, बहुत थका हुआ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: '0% - Completely drained/Empty', hi: '0% - पूरी तरह से खाली', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_3', level: WellBeingLevel.LEVEL_2,
    textEn: "Does your mind feel like a 'Messy Room' or 'Clean Desk'?",
    textHi: "क्या आपका दिमाग 'गंदे कमरे' जैसा लगता है या 'साफ मेज' जैसा?",
    options: [
      { id: 'a', en: 'Clean desk - Very clear!', hi: 'साफ मेज - बहुत स्पष्ट!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly tidy with few things around', hi: 'ज़्यादातर साफ-सुथरा, कुछ चीज़ें बिखरी हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Messy room - Hard to find things', hi: 'गंदा कमरा - चीज़ें ढूंढना मुश्किल है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A total disaster/Too many thoughts', hi: 'पूरी तरह से आपदा/बहुत सारे विचार', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_4', level: WellBeingLevel.LEVEL_2,
    textEn: "When the teacher asks a question, how loud is your 'Inner Voice'?",
    textHi: "जब शिक्षक कोई प्रश्न पूछते हैं, तो आपकी 'आंतरिक आवाज़' कितनी तेज़ होती है?",
    options: [
      { id: 'a', en: 'Loud and confident!', hi: 'तेज़ और आत्मविश्वासी!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Calm and steady', hi: 'शांत और स्थिर', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A whisper, I am scared to speak', hi: 'एक फुसफुसाहट, मुझे बोलने में डर लगता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Silent, I have no voice left', hi: 'मौन, मेरे पास कोई आवाज़ नहीं बची है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_5', level: WellBeingLevel.LEVEL_2,
    textEn: "How heavy is the 'Mountain of Homework' today?",
    textHi: "आज 'होमवर्क का पहाड़' कितना भारी है?",
    options: [
      { id: 'a', en: 'Not a mountain, just a small hill!', hi: 'पहाड़ नहीं, बस एक छोटी पहाड़ी!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Manageable, I can climb it', hi: 'संभाला जा सकता है, मैं इस पर चढ़ सकता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Very steep, I am struggling', hi: 'बहुत खड़ी चढ़ाई, मैं संघर्ष कर रहा हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It is crushing me', hi: 'यह मुझे कुचल रहा है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_6', level: WellBeingLevel.LEVEL_2,
    textEn: "Do you have 'Secret Worries' that you keep in a box?",
    textHi: "क्या आपके पास ऐसी 'गुप्त चिंताएं' हैं जिन्हें आप एक बॉक्स में रखते हैं?",
    options: [
      { id: 'a', en: 'No, my box is empty', hi: 'नहीं, मेरा बॉक्स खाली है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Just 1 or 2 small things', hi: 'बस 1 या 2 छोटी चीज़ें', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'The box is getting heavy', hi: 'बॉक्स भारी होता जा रहा है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'The box is overflowing and I am scared', hi: 'बॉक्स भर गया है और मैं डरा हुआ हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_7', level: WellBeingLevel.LEVEL_2,
    textEn: "How often do you wish you could 'Fast Forward' the school day?",
    textHi: "आप कितनी बार चाहते हैं कि आप स्कूल के दिन को 'फास्ट फॉरवर्ड' कर सकें?",
    options: [
      { id: 'a', en: 'Never, I enjoy school', hi: 'कभी नहीं, मुझे स्कूल में मज़ा आता है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Sometimes, during boring classes', hi: 'कभी-कभी, बोरिंग क्लास के दौरान', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Almost every day', hi: 'लगभग हर दिन', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Every single minute I want to leave', hi: 'हर मिनट मैं यहाँ से जाना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_8', level: WellBeingLevel.LEVEL_2,
    textEn: "When you eat lunch, do you feel like you are 'Recharging' or 'Just Chewing'?",
    textHi: "जब आप दोपहर का भोजन करते हैं, तो क्या आपको लगता है कि आप 'रिचार्ज' कर रहे हैं या 'सिर्फ चबा' रहे हैं?",
    options: [
      { id: 'a', en: 'Recharging and talking with friends!', hi: 'रिचार्ज करना और दोस्तों के साथ बात करना!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Eating calmly', hi: 'शांति से खाना', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I have no appetite/Sad lunch', hi: 'मुझे भूख नहीं है/दुखी लंच', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I eat alone because I feel bad', hi: 'मैं अकेला खाता हूँ क्योंकि मुझे बुरा लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_9', level: WellBeingLevel.LEVEL_2,
    textEn: "Is your 'Sleep Mirror' clear or foggy in the morning?",
    textHi: "सुबह आपका 'नींद का आईना' साफ होता है या धुंधला?",
    options: [
      { id: 'a', en: 'Crystal clear and fresh!', hi: 'एकदम साफ और तरोताजा!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A little sleepy but okay', hi: 'थोड़ी नींद आती है पर ठीक है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Very foggy and tired', hi: 'बहुत धुंधला और थका हुआ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel like I never slept', hi: 'मुझे लगता है कि मैं कभी सोया ही नहीं', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_10', level: WellBeingLevel.LEVEL_2,
    textEn: "How many 'Real Smiles' did you wear today?",
    textHi: "आज आपने कितनी 'असली मुस्कान' पहनी थी?",
    options: [
      { id: 'a', en: 'Too many to count!', hi: 'गिनने के लिए बहुत सारी!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Quite a few', hi: 'काफी सारी', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Only fake ones for teachers', hi: 'शिक्षकों के लिए सिर्फ नकली मुस्कान', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Zero smiles, my face feels heavy', hi: 'शून्य मुस्कान, मेरा चेहरा भारी लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_11', level: WellBeingLevel.LEVEL_2,
    textEn: "If your energy was a 'Flashlight', is it bright or flickering?",
    textHi: "यदि आपकी ऊर्जा एक 'टॉर्च' होती, तो क्या यह उज्ज्वल है या टिमटिमा रही है?",
    options: [
      { id: 'a', en: 'Brightly lighting the way!', hi: 'रास्ते को रोशन करती हुई!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Steady light', hi: 'स्थिर प्रकाश', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Flickering and getting weak', hi: 'टिमटिमाती और कमजोर होती', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'The battery is dead/Total darkness', hi: 'बैटरी खत्म हो गई है/पूरा अंधेरा', indicator: ResponseIndicator.RED_FLAG },
    ]
  },

  // ==========================================
  // LEVEL 3: Std 7 to 8 (11 Questions)
  // Focus: Social Comparison & Internal Hollowness
  // ==========================================
  {
    id: 'l3_1', level: WellBeingLevel.LEVEL_3,
    textEn: "How often do you feel a sense of 'hollowness' inside even when with friends?",
    textHi: "दोस्तों के साथ होने पर भी आपको कितनी बार अंदर से 'खालीपन' महसूस होता है?",
    options: [
      { id: 'a', en: 'Never, I feel connected', hi: 'कभी नहीं, मैं जुड़ा हुआ महसूस करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Rarely, only on bad days', hi: 'शायद ही कभी, केवल बुरे दिनों में', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Quite often lately', hi: 'पिछले कुछ समय से काफी बार', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Every single day feels empty', hi: 'हर एक दिन खाली लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_2', level: WellBeingLevel.LEVEL_3,
    textEn: "When you see others' lives on social media, what is your reaction?",
    textHi: "जब आप सोशल मीडिया पर दूसरों की ज़िंदगी देखते हैं, तो आपकी क्या प्रतिक्रिया होती है?",
    options: [
      { id: 'a', en: 'Happy for them/Neutral', hi: 'उनके लिए खुश/तटस्थ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Inspired to do better', hi: 'बेहतर करने के लिए प्रेरित', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Feel left behind or jealous', hi: 'पीछे छूट जाने या जलन का एहसास', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Feel worthless compared to them', hi: 'उनके सामने खुद को बेकार महसूस करना', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_3', level: WellBeingLevel.LEVEL_3,
    textEn: "Does the 'Mirror' say nice things to you in the morning?",
    textHi: "क्या सुबह 'आईना' आपसे अच्छी बातें कहता है?",
    options: [
      { id: 'a', en: 'Yes, I like what I see', hi: 'हाँ, मुझे जो दिखता है वो पसंद है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly okay, some flaws', hi: 'ज़्यादातर ठीक है, कुछ कमियां हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'It makes me feel insecure', hi: 'यह मुझे असुरक्षित महसूस कराता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I hate looking at the mirror', hi: 'मुझे आईने में देखने से नफरत है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_4', level: WellBeingLevel.LEVEL_3,
    textEn: "How loud is the 'Noise of Comparison' in your head?",
    textHi: "आपके दिमाग में 'तुलना का शोर' कितना तेज़ है?",
    options: [
      { id: 'a', en: 'Silent - I am unique!', hi: 'मौन - मैं अद्वितीय हूँ!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Low background noise', hi: 'हल्का बैकग्राउंड शोर', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Distracting and annoying', hi: 'ध्यान भटकाने वाला और कष्टप्रद', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Deafening - I feel useless', hi: 'बहरा कर देने वाला - मैं बेकार महसूस करता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_5', level: WellBeingLevel.LEVEL_3,
    textEn: "When you are in a group, are you 'Included' or just 'Present'?",
    textHi: "जब आप एक समूह में होते हैं, तो क्या आप 'शामिल' होते हैं या सिर्फ 'उपस्थित'?",
    options: [
      { id: 'a', en: 'Truly included and loved', hi: 'सही मायने में शामिल और प्यार पाने वाला', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly part of the fun', hi: 'ज़्यादातर मस्ती का हिस्सा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Just present, feeling like an outsider', hi: 'सिर्फ उपस्थित, एक बाहरी व्यक्ति जैसा महसूस करना', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Ignored or invisible', hi: 'नज़रअंदाज़ या अदृश्य', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_6', level: WellBeingLevel.LEVEL_3,
    textEn: "How often do you 'Hide your True Face' behind a mask of happiness?",
    textHi: "आप कितनी बार खुशी के मुखौटे के पीछे अपना 'असली चेहरा छिपाते' हैं?",
    options: [
      { id: 'a', en: 'Never, I am authentic', hi: 'कभी नहीं, मैं वास्तविक हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Sometimes to avoid drama', hi: 'कभी-कभी विवाद से बचने के लिए', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Very often, I am tired', hi: 'अक्सर, मैं थक गया हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Always, no one knows the real me', hi: 'हमेशा, कोई भी असली मुझे नहीं जानता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_7', level: WellBeingLevel.LEVEL_3,
    textEn: "Does your 'Digital Life' make you feel more alone?",
    textHi: "क्या आपकी 'डिजिटल लाइफ' आपको अधिक अकेला महसूस कराती है?",
    options: [
      { id: 'a', en: 'No, it helps me connect', hi: 'नहीं, यह मुझे जुड़ने में मदद करती है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'It is just a tool', hi: 'यह सिर्फ एक उपकरण है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Yes, it makes me feel lonely', hi: 'हाँ, यह मुझे अकेला महसूस कराती है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It is a dark pit of sadness', hi: 'यह दुख का एक गहरा गड्ढा है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_8', level: WellBeingLevel.LEVEL_3,
    textEn: "How many times did you say 'I am Fine' while feeling sad today?",
    textHi: "आज उदास महसूस करते हुए आपने कितनी बार 'मैं ठीक हूँ' कहा?",
    options: [
      { id: 'a', en: 'Zero - I am actually fine', hi: 'शून्य - मैं वास्तव में ठीक हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Maybe once', hi: 'शायद एक बार', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Many times', hi: 'कई बार', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'That is all I ever say', hi: 'मैं बस यही कहता रहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_9', level: WellBeingLevel.LEVEL_3,
    textEn: "Do your 'Hobbies' still spark joy in your heart?",
    textHi: "क्या आपके 'शौक' अभी भी आपके दिल में खुशी जगाते हैं?",
    options: [
      { id: 'a', en: 'Yes, I love them!', hi: 'हाँ, मुझे उनसे प्यार है!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly, when I have time', hi: 'ज़्यादातर, जब मेरे पास समय होता है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Losing interest lately', hi: 'पिछले कुछ समय से रुचि कम हो रही है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Nothing makes me happy anymore', hi: 'अब मुझे कुछ भी खुश नहीं करता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_10', level: WellBeingLevel.LEVEL_3,
    textEn: "If your mind was a 'Book', is it easy to read or tangled?",
    textHi: "यदि आपका दिमाग एक 'किताब' होता, तो क्या इसे पढ़ना आसान है या यह उलझा हुआ है?",
    options: [
      { id: 'a', en: 'Clear and easy chapters!', hi: 'स्पष्ट और आसान अध्याय!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A few complex pages', hi: 'कुछ जटिल पृष्ठ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Tangled and confusing lines', hi: 'उलझी हुई और भ्रमित करने वाली पंक्तियाँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'The pages are torn/Scribbled over', hi: 'पन्ने फटे हुए हैं/उन पर घसीटा गया है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_11', level: WellBeingLevel.LEVEL_3,
    textEn: "How heavy is your 'Secret Bag' of emotions?",
    textHi: "आपकी भावनाओं का 'गुप्त बैग' कितना भारी है?",
    options: [
      { id: 'a', en: 'Light as a feather', hi: 'पंख जैसा हल्का', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A small backpack', hi: 'एक छोटा बैकपैक', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A heavy suitcase', hi: 'एक भारी सूटकेस', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A giant rock dragging me down', hi: 'एक विशाल चट्टान जो मुझे नीचे खींच रही है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },

  // ==========================================
  // LEVEL 4: Std 9 to 10 (11 Questions)
  // Focus: Career Anxiety & Future Dread
  // ==========================================
  {
    id: 'l4_1', level: WellBeingLevel.LEVEL_4,
    textEn: "Does the thought of your 'Future Path' bring excitement or dread?",
    textHi: "क्या आपके 'भविष्य के रास्ते' का विचार उत्साह लाता है या डर?",
    options: [
      { id: 'a', en: 'Great excitement for what is next', hi: 'आगे जो होने वाला है उसके लिए बहुत उत्साह', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A mix of nerves and hope', hi: 'घबराहट और उम्मीद का मिश्रण', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Constant worry and pressure', hi: 'लगातार चिंता और दबाव', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Total dread and panic', hi: 'पूरी तरह से डर और घबराहट', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_2', level: WellBeingLevel.LEVEL_4,
    textEn: "When exam pressure builds up, do you feel like you are 'drowning'?",
    textHi: "जब परीक्षा का दबाव बढ़ता है, तो क्या आपको ऐसा लगता है जैसे आप 'डूब' रहे हैं?",
    options: [
      { id: 'a', en: 'No, I can swim through it', hi: 'नहीं, मैं इसे पार कर सकता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Tired but still afloat', hi: 'थका हुआ हूँ लेकिन अभी भी तैर रहा हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Struggling to keep head above water', hi: 'सिर को पानी से ऊपर रखने में संघर्ष कर रहा हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Completely submerged/Drowning', hi: 'पूरी तरह से डूब गया हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_3', level: WellBeingLevel.LEVEL_4,
    textEn: "How often do you feel you are living for 'Others' Expectations'?",
    textHi: "आप कितनी बार महसूस करते हैं कि आप 'दूसरों की अपेक्षाओं' के लिए जी रहे हैं?",
    options: [
      { id: 'a', en: 'Never, I follow my dream', hi: 'कभी नहीं, मैं अपने सपने का पीछा करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Rarely, mostly my choice', hi: 'शायद ही कभी, ज़्यादातर मेरी पसंद', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Most of the time', hi: 'ज़्यादातर समय', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I have no life of my own left', hi: 'मेरा अपना कोई जीवन नहीं बचा है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_4', level: WellBeingLevel.LEVEL_4,
    textEn: "Is your 'Sleep Schedule' a healthy habit or a battleground?",
    textHi: "क्या आपका 'नींद का शेड्यूल' एक स्वस्थ आदत है या युद्ध का मैदान?",
    options: [
      { id: 'a', en: 'Healthy and restorative', hi: 'स्वस्थ और स्फूर्तिदायक', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A bit chaotic but I manage', hi: 'थोड़ा अस्त-व्यस्त है पर मैं संभाल लेता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Late night anxiety/Overthinking', hi: 'देर रात की चिंता/ज़्यादा सोचना', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Insomnia/Total exhaustion', hi: 'अनिद्रा/पूरी तरह से थकान', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_5', level: WellBeingLevel.LEVEL_4,
    textEn: "Does your 'Identity' feel solid or like shifting sand?",
    textHi: "क्या आपकी 'पहचान' ठोस लगती है या खिसकती रेत की तरह?",
    options: [
      { id: 'a', en: 'Solid and proud!', hi: 'ठोस और गर्वित!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly stable, still learning', hi: 'ज़्यादातर स्थिर, अभी भी सीख रहा हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Shifting and confusing', hi: 'बदलती हुई और भ्रमित करने वाली', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I don’t know who I am anymore', hi: 'मुझे नहीं पता कि अब मैं कौन हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_6', level: WellBeingLevel.LEVEL_4,
    textEn: "How frequently do you experience 'Brain Fog' during study?",
    textHi: "पढ़ाई के दौरान आपको कितनी बार 'ब्रेन फॉग' का अनुभव होता है?",
    options: [
      { id: 'a', en: 'Rarely - Very sharp focus', hi: 'शायद ही कभी - बहुत तेज़ फोकस', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Only when I am very tired', hi: 'सिर्फ तभी जब मैं बहुत थका होता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Frequent, I can’t concentrate', hi: 'अक्सर, मैं ध्यान केंद्रित नहीं कर पाता', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Constant - My brain is shut down', hi: 'लगातार - मेरा दिमाग बंद हो गया है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_7', level: WellBeingLevel.LEVEL_4,
    textEn: "Do you feel 'Burned Out' like a spent candle?",
    textHi: "क्या आप जली हुई मोमबत्ती की तरह 'बर्न आउट' महसूस करते हैं?",
    options: [
      { id: 'a', en: 'No, my flame is bright', hi: 'नहीं, मेरी लौ तेज़ है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A little dim, need a break', hi: 'थोड़ी मद्धम, ब्रेक की ज़रूरत है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Flickering and almost out', hi: 'टिमटिमा रही है और लगभग बुझने वाली है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Completely burned out/Ash', hi: 'पूरी तरह से जल चुकी/राख', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_8', level: WellBeingLevel.LEVEL_4,
    textEn: "How much 'Performance Pressure' do you feel from family?",
    textHi: "आप परिवार से कितना 'प्रदर्शन दबाव' महसूस करते हैं?",
    options: [
      { id: 'a', en: 'None, they support me', hi: 'बिल्कुल नहीं, वे मेरा समर्थन करते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Manageable expectations', hi: 'संभालने योग्य अपेक्षाएं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'High and stressful', hi: 'ज़्यादा और तनावपूर्ण', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Suffocating/I will never be enough', hi: 'दम घोंटने वाला/मैं कभी पर्याप्त नहीं हो पाऊंगा', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_9', level: WellBeingLevel.LEVEL_4,
    textEn: "When you look at the 'Mirror of the Future', what do you see?",
    textHi: "जब आप 'भविष्य के आईने' में देखते हैं, तो आप क्या देखते हैं?",
    options: [
      { id: 'a', en: 'A successful, happy me', hi: 'एक सफल, खुशहाल मैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Someone working hard', hi: 'कोई कड़ी मेहनत कर रहा है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A dark, blurry image', hi: 'एक गहरी, धुंधली छवि', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Nothing but a void/Blank', hi: 'शून्य के अलावा कुछ नहीं/खाली', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_10', level: WellBeingLevel.LEVEL_4,
    textEn: "How often do you feel 'Chest Tightness' when thinking of grades?",
    textHi: "ग्रेड के बारे में सोचते समय आपको कितनी बार 'सीने में जकड़न' महसूस होती है?",
    options: [
      { id: 'a', en: 'Never - Grades don’t define me', hi: 'कभी नहीं - ग्रेड मुझे परिभाषित नहीं करते', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Only during result day', hi: 'सिर्फ रिजल्ट वाले दिन', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Quite often recently', hi: 'हाल ही में काफी बार', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Every day - I feel panic', hi: 'हर दिन - मुझे घबराहट महसूस होती है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_11', level: WellBeingLevel.LEVEL_4,
    textEn: "Do you have a 'Safe Space' where you can be yourself?",
    textHi: "क्या आपके पास कोई 'सुरक्षित स्थान' है जहाँ आप स्वयं रह सकते हैं?",
    options: [
      { id: 'a', en: 'Yes, my room/friends', hi: 'हाँ, मेरा कमरा/दोस्त', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly yes', hi: 'ज़्यादातर हाँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Hardly any space is safe', hi: 'शायद ही कोई जगह सुरक्षित है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Nowhere - I am always judged', hi: 'कहीं नहीं - मुझे हमेशा परखा जाता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  }
];

export const BRANDING = {
  name: "NitGyanam Consultancy Pvt. Ltd.",
  tagline: "Empowering through knowledge & practical exposure",
  affiliation: "Incubated at NIT Patna",
  recognition: "Recognized by DPIIT & Startup Bihar",
  contact: {
    email: "mohananand079@gmail.com",
    phone: "7209630102"
  }
};
