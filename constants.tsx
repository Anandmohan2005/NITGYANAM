
import { WellBeingLevel, ResponseIndicator, Question } from './types';

export const QUIZ_DATA: Question[] = [
  // ==========================================
  // LEVEL 1: Std 1 to 3 (20 Questions)
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
    textEn: "If your day was a color, which one would you pick?",
    textHi: "अगर आपका दिन एक रंग होता, तो आप कौन सा चुनते?",
    options: [
      { id: 'a', en: 'Bright Sunshine Yellow', hi: 'चमकता हुआ सूरज जैसा पीला', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Sky Blue and Calm', hi: 'आसमान जैसा नीला और शांत', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Grey like a rain cloud', hi: 'बारिश के बादल जैसा ग्रे', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Dark and scary Black', hi: 'अंधेरा और डरावना काला', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_3', level: WellBeingLevel.LEVEL_1,
    textEn: "How do you feel when you wake up for school?",
    textHi: "जब आप स्कूल के लिए जागते हैं तो आपको कैसा महसूस होता है?",
    options: [
      { id: 'a', en: 'Happy to see my friends', hi: 'दोस्तों से मिलने की खुशी', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A bit sleepy but okay', hi: 'थोड़ी नींद आती है पर ठीक है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I want to hide in my blanket', hi: 'मैं कंबल में छिपना चाहता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel scared or want to cry', hi: 'मुझे डर लगता है या रोने का मन करता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_4', level: WellBeingLevel.LEVEL_1,
    textEn: "If you were an animal today, which one are you?",
    textHi: "अगर आज आप एक जानवर होते, तो आप कौन होते?",
    options: [
      { id: 'a', en: 'A strong lion', hi: 'एक शक्तिशाली शेर', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A happy hopping rabbit', hi: 'एक खुश कूदता हुआ खरगोश', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A turtle hiding in its shell', hi: 'अपनी खोल में छिपा हुआ कछुआ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A lonely bird with a hurt wing', hi: 'एक अकेला पक्षी जिसका पंख घायल है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_5', level: WellBeingLevel.LEVEL_1,
    textEn: "When you share your lunch, how do you feel?",
    textHi: "जब आप अपना लंच बांटते हैं, तो आपको कैसा लगता है?",
    options: [
      { id: 'a', en: 'I love making friends happy', hi: 'मुझे दोस्तों को खुश करना अच्छा लगता है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'It is good to share', hi: 'बांटना अच्छी बात है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel a bit nervous to talk', hi: 'बात करने में थोड़ी घबराहट होती है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I always sit alone', hi: 'मैं हमेशा अकेला बैठता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_6', level: WellBeingLevel.LEVEL_1,
    textEn: "What is school like for you?",
    textHi: "आपके लिए स्कूल कैसा है?",
    options: [
      { id: 'a', en: 'A playground of fun', hi: 'मस्ती का खेल का मैदान', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A place to learn new things', hi: 'नई चीज़ें सीखने की जगह', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A place where I feel worried', hi: 'ऐसी जगह जहाँ मुझे चिंता होती है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A place I want to run away from', hi: 'ऐसी जगह जहाँ से मैं भाग जाना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_7', level: WellBeingLevel.LEVEL_1,
    textEn: "If you had a magic wand, what would you fix?",
    textHi: "अगर आपके पास जादू की छड़ी होती, तो आप क्या ठीक करते?",
    options: [
      { id: 'a', en: 'Give everyone more toys', hi: 'सबको और खिलौने देना', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Make my homework finish fast', hi: 'होमवर्क जल्दी खत्म करना', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Make my parents stop fighting', hi: 'मम्मी-पापा का झगड़ा बंद करना', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Make myself invisible', hi: 'खुद को गायब कर देना', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_8', level: WellBeingLevel.LEVEL_1,
    textEn: "Do you have a secret worry bag?",
    textHi: "क्या आपके पास गुप्त चिंताओं का कोई थैला है?",
    options: [
      { id: 'a', en: 'No, I tell my mom everything', hi: 'नहीं, मैं मम्मी को सब बताता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Sometimes I have small worries', hi: 'कभी-कभी छोटी चिंताएं होती हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Yes, it feels heavy sometimes', hi: 'हाँ, कभी-कभी यह भारी लगता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Yes, and it is very scary', hi: 'हाँ, और यह बहुत डरावना है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_9', level: WellBeingLevel.LEVEL_1,
    textEn: "How do you sleep at night?",
    textHi: "आप रात में कैसे सोते हैं?",
    options: [
      { id: 'a', en: 'I have happy dreams', hi: 'मुझे अच्छे सपने आते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I sleep quickly', hi: 'मैं जल्दी सो जाता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I wake up and look for mom', hi: 'मैं जाग जाता हूँ और मम्मी को ढूँढता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I am afraid of the dark/dreams', hi: 'मुझे अंधेरे/सपनों से डर लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_10', level: WellBeingLevel.LEVEL_1,
    textEn: "Do adults listen when you speak?",
    textHi: "जब आप बोलते हैं तो क्या बड़े आपकी बात सुनते हैं?",
    options: [
      { id: 'a', en: 'Always, they love my stories', hi: 'हमेशा, उन्हें मेरी कहानियाँ पसंद हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Most of the time', hi: 'ज्यादातर समय', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'They are always too busy', hi: 'वे हमेशा बहुत व्यस्त रहते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Nobody hears me', hi: 'कोई मेरी बात नहीं सुनता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_11', level: WellBeingLevel.LEVEL_1,
    textEn: "When you make a mistake, what happens?",
    textHi: "जब आपसे कोई गलती होती है, तो क्या होता है?",
    options: [
      { id: 'a', en: 'I try again with a smile', hi: 'मैं मुस्कान के साथ फिर से कोशिश करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'My teacher helps me', hi: 'शिक्षक मेरी मदद करते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel like crying', hi: 'मेरा रोने का मन करता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I get very scared of punishment', hi: 'मुझे सजा से बहुत डर लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_12', level: WellBeingLevel.LEVEL_1,
    textEn: "If you were a weather, what are you right now?",
    textHi: "अगर आप मौसम होते, तो अभी आप क्या होते?",
    options: [
      { id: 'a', en: 'Sunny and bright', hi: 'धूप वाला और चमकता हुआ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A gentle breeze', hi: 'मंद हवा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A little rainy/sad', hi: 'थोड़ी बारिश/उदासी', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A scary storm', hi: 'एक डरावना तूफान', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_13', level: WellBeingLevel.LEVEL_1,
    textEn: "How do you feel in your classroom?",
    textHi: "आप अपनी कक्षा में कैसा महसूस करते हैं?",
    options: [
      { id: 'a', en: 'Like a superstar', hi: 'एक सुपरस्टार की तरह', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Happy to learn', hi: 'सीखने में खुशी', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A bit quiet and shy', hi: 'थोड़ा शांत और शर्मीला', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I want to go home', hi: 'मैं घर जाना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_14', level: WellBeingLevel.LEVEL_1,
    textEn: "When you play with others, are you...",
    textHi: "जब आप दूसरों के साथ खेलते हैं, तो क्या आप...",
    options: [
      { id: 'a', en: 'The leader of the game', hi: 'खेल के लीडर', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A happy team player', hi: 'एक खुश टीम खिलाड़ी', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Waiting for someone to ask me', hi: 'इंतजार करते हैं कि कोई मुझे बुलाए', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Always playing alone', hi: 'हमेशा अकेले खेलते हैं', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_15', level: WellBeingLevel.LEVEL_1,
    textEn: "If you found a hurt bird, what would you do?",
    textHi: "अगर आपको कोई घायल पक्षी मिले, तो आप क्या करेंगे?",
    options: [
      { id: 'a', en: 'Give it water and love', hi: 'उसे पानी और प्यार देना', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Tell an adult to help', hi: 'मदद के लिए बड़ों को बताना', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Feel very sad and cry', hi: 'बहुत दुखी होना और रोना', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I would be too scared to look', hi: 'मुझे देखने में भी बहुत डर लगेगा', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_16', level: WellBeingLevel.LEVEL_1,
    textEn: "Does your tummy feel funny sometimes?",
    textHi: "क्या कभी-कभी आपके पेट में कुछ अजीब महसूस होता है?",
    options: [
      { id: 'a', en: 'Only when I am excited', hi: 'सिर्फ तब जब मैं उत्साहित होता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'When I am hungry', hi: 'जब मुझे भूख लगती है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'When I have a test', hi: 'जब मेरा टेस्ट होता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It hurts every morning before school', hi: 'स्कूल जाने से पहले हर सुबह दर्द होता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_17', level: WellBeingLevel.LEVEL_1,
    textEn: "What does your heart feel like today?",
    textHi: "आज आपके दिल को कैसा महसूस हो रहा है?",
    options: [
      { id: 'a', en: 'Full of light', hi: 'रोशनी से भरा हुआ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Quiet and nice', hi: 'शांत और अच्छा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A little bit tight', hi: 'थोड़ा सा भारी', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Heavy like a stone', hi: 'पत्थर जैसा भारी', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_18', level: WellBeingLevel.LEVEL_1,
    textEn: "When you think of your teacher's face, you...",
    textHi: "जब आप अपने शिक्षक के चेहरे के बारे में सोचते हैं, तो आप...",
    options: [
      { id: 'a', en: 'Smile and feel happy', hi: 'मुस्कुराते हैं और खुशी महसूस करते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Feel like learning', hi: 'सीखने का मन करता है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Feel a little nervous', hi: 'थोड़ी घबराहट महसूस करते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Want to hide', hi: 'छिपना चाहते हैं', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_19', level: WellBeingLevel.LEVEL_1,
    textEn: "If you could fly anywhere, where would you go?",
    textHi: "अगर आप कहीं भी उड़ सकते, तो आप कहाँ जाते?",
    options: [
      { id: 'a', en: 'To a candy land with friends', hi: 'दोस्तों के साथ कैंडी लैंड', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'To see the stars', hi: 'सितारों को देखने', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'To a quiet place away from school', hi: 'स्कूल से दूर किसी शांत जगह', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Nowhere, I am too tired to fly', hi: 'कहीं नहीं, मैं उड़ने के लिए बहुत थका हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l1_20', level: WellBeingLevel.LEVEL_1,
    textEn: "Do you like who you are?",
    textHi: "क्या आप खुद को पसंद करते हैं?",
    options: [
      { id: 'a', en: 'Yes, I am awesome!', hi: 'हाँ, मैं बहुत अच्छा हूँ!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I am a good kid', hi: 'मैं एक अच्छा बच्चा हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I wish I was better at things', hi: 'काश मैं चीज़ों में बेहतर होता', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I don\'t like myself', hi: 'मैं खुद को पसंद नहीं करता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },

  // ==========================================
  // LEVEL 2: Std 4 to 6 (20 Questions)
  // ==========================================
  {
    id: 'l2_1', level: WellBeingLevel.LEVEL_2,
    textEn: "How would you describe your 'Internal Battery' today?",
    textHi: "आज आप अपनी 'आंतरिक बैटरी' का वर्णन कैसे करेंगे?",
    options: [
      { id: 'a', en: '100% - Ready for anything!', hi: '100% - कुछ भी करने के लिए तैयार!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: '70% - Good enough for the day', hi: '70% - दिन के लिए काफी है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c',en: '20% - Feeling very tired', hi: '20% - बहुत थकान महसूस हो रही है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: '0% - Completely drained', hi: '0% - पूरी तरह से खाली', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_2', level: WellBeingLevel.LEVEL_2,
    textEn: "When a teacher asks a question, what do you do?",
    textHi: "जब शिक्षक कोई प्रश्न पूछते हैं, तो आप क्या करते हैं?",
    options: [
      { id: 'a', en: 'Raise my hand excitedly', hi: 'उत्साह से हाथ उठाता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Think about the answer quietly', hi: 'शांति से उत्तर के बारे में सोचता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Hope they don\'t call my name', hi: 'उम्मीद करता हूँ कि वे मेरा नाम न लें', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel panic or my mind goes blank', hi: 'मुझे घबराहट होती है या मेरा दिमाग खाली हो जाता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_3', level: WellBeingLevel.LEVEL_2,
    textEn: "How do you feel about your homework?",
    textHi: "आपको अपने होमवर्क के बारे में कैसा महसूस होता है?",
    options: [
      { id: 'a', en: 'I enjoy finishing it quickly', hi: 'मुझे इसे जल्दी खत्म करने में मज़ा आता है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'It is just something I have to do', hi: 'यह बस कुछ ऐसा है जो मुझे करना है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'It makes me feel very stressed', hi: 'इससे मुझे बहुत तनाव महसूस होता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I can never finish it and feel like a failure', hi: 'मैं इसे कभी खत्म नहीं कर पाता और फेलियर महसूस करता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_4', level: WellBeingLevel.LEVEL_2,
    textEn: "What happens when you make a mistake in class?",
    textHi: "कक्षा में गलती होने पर क्या होता है?",
    options: [
      { id: 'a', en: 'I laugh it off and learn', hi: 'मैं इसे हंसकर टाल देता हूँ और सीखता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I feel a bit shy but fix it', hi: 'मुझे थोड़ी शर्म आती है पर मैं इसे ठीक कर देता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I think about it for the whole day', hi: 'मैं पूरे दिन उसी के बारे में सोचता रहता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel like everyone is judging me', hi: "मुझे लगता है कि हर कोई मुझे जज कर रहा है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_5', level: WellBeingLevel.LEVEL_2,
    textEn: "How is your focus during a 40-minute period?",
    textHi: "40 मिनट के पीरियड के दौरान आपका ध्यान कैसा रहता है?",
    options: [
      { id: 'a', en: 'I am focused the whole time', hi: 'मैं पूरे समय ध्यान केंद्रित रखता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I wander a bit but come back', hi: 'मेरा ध्यान थोड़ा भटकता है पर वापस आ जाता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I spend most time daydreaming', hi: 'मैं ज्यादातर समय ख्यालों में खोया रहता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I find it impossible to listen', hi: 'मेरे लिए सुनना असंभव हो जाता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_6', level: WellBeingLevel.LEVEL_2,
    textEn: "When you are with your friends, you feel...",
    textHi: "जब आप अपने दोस्तों के साथ होते हैं, तो आप महसूस करते हैं...",
    options: [
      { id: 'a', en: 'Like I can be myself', hi: 'जैसे मैं खुद रह सकता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Happy and included', hi: 'खुश और शामिल', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Like I have to act to be liked', hi: 'जैसे पसंद किए जाने के लिए मुझे नाटक करना होगा', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Lonely even when they are there', hi: 'उनके होने पर भी अकेलापन', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_7', level: WellBeingLevel.LEVEL_2,
    textEn: "How do you feel about your appearance (the way you look)?",
    textHi: "आप अपनी दिखावट (जैसे आप दिखते हैं) के बारे में कैसा महसूस करते हैं?",
    options: [
      { id: 'a', en: 'I like how I look', hi: 'मुझे अपना रूप पसंद है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I am just normal', hi: 'मैं बस सामान्य हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I wish I could change many things', hi: 'काश मैं बहुत सी चीज़ें बदल पाता', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel ugly or ashamed', hi: 'मैं बदसूरत या शर्मिंदा महसूस करता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_8', level: WellBeingLevel.LEVEL_2,
    textEn: "When you think of the future, you feel...",
    textHi: "जब आप भविष्य के बारे में सोचते हैं, तो आप महसूस करते हैं...",
    options: [
      { id: 'a', en: 'Excited for the adventure', hi: 'रोमांच के लिए उत्साहित', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Curious about what I will become', hi: 'उत्सुक कि मैं क्या बनूँगा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A bit worried about tests/jobs', hi: 'टेस्ट/नौकरी को लेकर थोड़ा चिंतित', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Scared and hopeless', hi: 'डरा हुआ और निराश', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_9', level: WellBeingLevel.LEVEL_2,
    textEn: "How often do you feel angry lately?",
    textHi: "हाल ही में आपको कितनी बार गुस्सा आता है?",
    options: [
      { id: 'a', en: 'Rarely, I am quite calm', hi: 'शायद ही कभी, मैं काफी शांत हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Only when someone is mean', hi: 'सिर्फ तब जब कोई बुरा व्यवहार करे', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I get irritated very easily', hi: 'मैं बहुत जल्दी चिढ़ जाता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel angry all the time', hi: 'मुझे हर समय गुस्सा आता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_10', level: WellBeingLevel.LEVEL_2,
    textEn: "Do you feel safe sharing your feelings at home?",
    textHi: "क्या आप घर पर अपनी भावनाएं साझा करने में सुरक्षित महसूस करते हैं?",
    options: [
      { id: 'a', en: 'Yes, my parents understand me', hi: 'हाँ, मेरे माता-पिता मुझे समझते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly, they try to help', hi: 'ज्यादातर, वे मदद करने की कोशिश करते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'They are often too busy or strict', hi: 'वे अक्सर बहुत व्यस्त या सख्त रहते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'No, I have to hide my feelings', hi: 'नहीं, मुझे अपनी भावनाएं छिपानी पड़ती हैं', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_11', level: WellBeingLevel.LEVEL_2,
    textEn: "What is your sleep like lately?",
    textHi: "हाल ही में आपकी नींद कैसी है?",
    options: [
      { id: 'a', en: 'Deep and restful', hi: 'गहरी और आरामदायक', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Okay, I sleep well', hi: 'ठीक है, मैं अच्छी तरह सोता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I stay awake thinking too much', hi: 'मैं बहुत ज्यादा सोचते हुए जगा रहता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I have nightmares or can\'t sleep', hi: 'मुझे डरावने सपने आते हैं या नींद नहीं आती', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_12', level: WellBeingLevel.LEVEL_2,
    textEn: "When you fail at a game, what is your reaction?",
    textHi: "जब आप किसी खेल में हार जाते हैं, तो आपकी क्या प्रतिक्रिया होती?",
    options: [
      { id: 'a', en: 'I say "Good game" to others', hi: 'मैं दूसरों से "अच्छा खेले" कहता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I feel sad but try again', hi: 'मुझे दुख होता है पर मैं फिर से कोशिश करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I get very angry and quit', hi: 'मुझे बहुत गुस्सा आता है और मैं छोड़ देता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel like I am a total loser', hi: 'मुझे लगता है कि मैं पूरी तरह से लूज़र हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_13', level: WellBeingLevel.LEVEL_2,
    textEn: "How much time do you spend on screens (phone/TV)?",
    textHi: "आप स्क्रीन (फोन/टीवी) पर कितना समय बिताते हैं?",
    options: [
      { id: 'a', en: 'I prefer playing outside', hi: 'मैं बाहर खेलना पसंद करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A balanced amount', hi: 'एक संतुलित मात्रा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A lot, I find it hard to stop', hi: 'बहुत ज्यादा, मुझे रोकना मुश्किल लगता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It is the only thing I do', hi: 'यही एकमात्र चीज़ है जो मैं करता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_14', level: WellBeingLevel.LEVEL_2,
    textEn: "Do you feel like your friends like the real you?",
    textHi: "क्या आपको लगता है कि आपके दोस्त आपके असली रूप को पसंद करते हैं?",
    options: [
      { id: 'a', en: 'Yes, they know me well', hi: 'हाँ, वे मुझे अच्छी तरह जानते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly', hi: 'ज्यादातर', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel like I am pretending', hi: 'मुझे लगता है कि मैं नाटक कर रहा हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel like nobody knows me', hi: 'मुझे लगता है कि कोई मुझे नहीं जानता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_15', level: WellBeingLevel.LEVEL_2,
    textEn: "How do you feel about your responsibilities?",
    textHi: "आप अपनी जिम्मेदारियों के बारे में कैसा महसूस करते हैं?",
    options: [
      { id: 'a', en: 'I like being helpful', hi: 'मुझे मददगार बनना पसंद है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I do them as asked', hi: 'मैं उन्हें कहे अनुसार करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'They feel very heavy', hi: 'वे बहुत भारी लगते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I am overwhelmed and want to hide', hi: 'मैं बहुत दबाव में हूँ और छिपना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_16', level: WellBeingLevel.LEVEL_2,
    textEn: "Do you feel like you belong at school?",
    textHi: "क्या आपको लगता है कि आप स्कूल के हैं (Belonging)?",
    options: [
      { id: 'a', en: 'Yes, it is like my second home', hi: 'हाँ, यह मेरे दूसरे घर जैसा है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I have my group of friends', hi: 'मेरा अपना दोस्तों का समूह है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I often feel like an outsider', hi: 'मैं अक्सर बाहरी व्यक्ति जैसा महसूस करता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel completely alone there', hi: 'मैं वहां पूरी तरह अकेला महसूस करता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_17', level: WellBeingLevel.LEVEL_2,
    textEn: "When you look in the mirror, what is your first thought?",
    textHi: "जब आप आईने में देखते हैं, तो आपका पहला विचार क्या होता है?",
    options: [
      { id: 'a', en: 'I look cool!', hi: 'मैं कूल दिख रहा हूँ!', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I am just me', hi: 'मैं बस मैं हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I wish I could fix my face/body', hi: 'काश मैं अपना चेहरा/शरीर ठीक कर पाता', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I hate how I look', hi: 'मुझे अपनी दिखावट से नफरत है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_18', level: WellBeingLevel.LEVEL_2,
    textEn: "How do you handle being alone?",
    textHi: "आप अकेले होने को कैसे संभालते हैं?",
    options: [
      { id: 'a', en: 'I enjoy my own company', hi: 'मुझे खुद का साथ पसंद है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I am okay for a bit', hi: 'मैं थोड़ी देर के लिए ठीक हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel lonely and sad', hi: 'मुझे अकेलापन और उदासी महसूस होती है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel scared when nobody is around', hi: 'जब कोई आसपास नहीं होता तो मुझे डर लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_19', level: WellBeingLevel.LEVEL_2,
    textEn: "How much of your life feels like a choice?",
    textHi: "आपके जीवन का कितना हिस्सा आपकी पसंद जैसा लगता है?",
    options: [
      { id: 'a', en: 'I choose my own path', hi: 'मैं अपना रास्ता खुद चुनता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I have some choices', hi: 'मेरे पास कुछ विकल्प हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Everything is decided by others', hi: 'सब कुछ दूसरों द्वारा तय किया जाता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I feel like a puppet', hi: 'मुझे एक कठपुतली जैसा महसूस होता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l2_20', level: WellBeingLevel.LEVEL_2,
    textEn: "Overall, how is your heart feeling today?",
    textHi: "कुल मिलाकर, आज आपका दिल कैसा महसूस कर रहा है?",
    options: [
      { id: 'a', en: 'Full of joy', hi: 'खुशी से भरा हुआ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Calm and steady', hi: 'शांत और स्थिर', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'A little bit heavy', hi: 'थोड़ा सा भारी', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Breaking or empty', hi: 'टूटा हुआ या खाली', indicator: ResponseIndicator.RED_FLAG },
    ]
  },

  // ==========================================
  // LEVEL 3: Std 7 to 8 (20 Questions)
  // ==========================================
  {
    id: 'l3_1', level: WellBeingLevel.LEVEL_3,
    textEn: "How do you feel when you scroll through Social Media?",
    textHi: "जब आप सोशल मीडिया स्क्रॉल करते हैं तो आपको कैसा महसूस होता है?",
    options: [
      { id: 'a', en: 'Inspired and happy', hi: 'प्रेरित और खुश', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Just passing time', hi: 'बस समय बिता रहा हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Feeling less than others', hi: 'दूसरों से खुद को कम महसूस करना', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Deep jealousy and sadness', hi: 'गहरी जलन और उदासी', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_2', level: WellBeingLevel.LEVEL_3,
    textEn: "When you look in the mirror, what is your first thought?",
    textHi: "जब आप आईने में देखते हैं, तो आपका पहला विचार क्या होता है?",
    options: [
      { id: 'a', en: 'I am unique and I like it', hi: 'मैं अनोखा हूँ और मुझे यह पसंद है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I look okay', hi: 'मैं ठीक दिख रहा हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I hate my body/face', hi: 'मुझे अपने शरीर/चेहरे से नफरत है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I want to be someone else', hi: 'मैं कोई और बनना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_3', level: WellBeingLevel.LEVEL_3,
    textEn: "How much of your worth do you feel is tied to your grades?",
    textHi: "आपको क्या लगता है कि आपका मूल्य आपके ग्रेड से कितना जुड़ा है?",
    options: [
      { id: 'a', en: 'Grades are just a small part of me', hi: 'ग्रेड मेरा सिर्फ एक छोटा सा हिस्सा हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I feel good with high grades', hi: 'अच्छे नंबर आने पर मुझे अच्छा लगता है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel like a bad person if they drop', hi: 'ग्रेड गिरने पर मुझे लगता है कि मैं बुरा इंसान हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Grades are everything to my family', hi: 'मेरे परिवार के लिए ग्रेड ही सब कुछ हैं', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_4', level: WellBeingLevel.LEVEL_3,
    textEn: "How often do you 'mask' your real feelings?",
    textHi: "आप अपनी असली भावनाओं को कितनी बार 'छिपाते' हैं?",
    options: [
      { id: 'a', en: 'Never, I am authentic', hi: 'कभी नहीं, मैं वास्तविक हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Rarely, with some people', hi: 'शायद ही कभी, कुछ लोगों के साथ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Often, to fit in', hi: 'अक्सर, फिट होने के लिए', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Always; nobody knows the real me', hi: 'हमेशा; कोई मेरा असली रूप नहीं जानता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_5', level: WellBeingLevel.LEVEL_3,
    textEn: "How safe do you feel expressing true emotions at home?",
    textHi: "घर पर सच्ची भावनाएं व्यक्त करना आपको कितना सुरक्षित लगता है?",
    options: [
      { id: 'a', en: 'Completely safe', hi: 'पूरी तरह सुरक्षित', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly, they try to understand', hi: 'ज्यादातर, वे समझने की कोशिश करते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel ignored or dismissed', hi: 'मुझे लगता है कि मेरी अनदेखी की जाती है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I am afraid of their reaction', hi: 'मुझे उनकी प्रतिक्रिया से डर लगता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_6', level: WellBeingLevel.LEVEL_3,
    textEn: "When you have a crush or social stress, you...",
    textHi: "जब आपको कोई पसंद होता है या सामाजिक तनाव होता है, तो आप...",
    options: [
      { id: 'a', en: 'Handle it with confidence', hi: 'आत्मविश्वास के साथ संभालते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Talk to a trusted friend', hi: 'किसी भरोसेमंद दोस्त से बात करते हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Overthink until I get a headache', hi: 'सिरदर्द होने तक ओवरथिंक करते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Feel completely paralyzed', hi: 'पूरी तरह से सुन्न महसूस करते हैं', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_7', level: WellBeingLevel.LEVEL_3,
    textEn: "How is your focus during school hours lately?",
    textHi: "हाल ही में स्कूल के घंटों के दौरान आपका ध्यान कैसा रहा है?",
    options: [
      { id: 'a', en: 'Excellent', hi: 'बेहतरीन', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Okay, with some wandering', hi: 'ठीक है, थोड़ा भटकाव के साथ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel "brain fog" most days', hi: 'मुझे ज्यादातर दिनों में "ब्रेन फॉग" महसूस होता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'My brain is too loud to focus', hi: 'मेरा दिमाग इतना शोर करता है कि ध्यान नहीं लग पाता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_8', level: WellBeingLevel.LEVEL_3,
    textEn: "When you are praised in public, you feel...",
    textHi: "जब सार्वजनिक रूप से आपकी प्रशंसा की जाती है, तो आप महसूस करते हैं...",
    options: [
      { id: 'a', en: 'Proud and happy', hi: 'गर्व और खुशी', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A bit shy but good', hi: 'थोड़ा शर्मीला पर अच्छा', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Like a fraud (Imposter Syndrome)', hi: 'धोखेबाज़ जैसा (इम्पोस्टर सिंड्रोम)', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I want to hide and disappear', hi: 'मैं छिपना और गायब होना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_9', level: WellBeingLevel.LEVEL_3,
    textEn: "How much sleep are you getting?",
    textHi: "आप कितनी नींद ले रहे हैं?",
    options: [
      { id: 'a', en: '8+ hours of restful sleep', hi: '8+ घंटे की सुकून भरी नींद', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Around 6-7 hours', hi: 'लगभग 6-7 घंटे', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I sleep but feel tired still', hi: 'मैं सोता हूँ पर फिर भी थकान रहती है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I stay awake with my thoughts', hi: 'मैं अपने विचारों के साथ जागता रहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_10', level: WellBeingLevel.LEVEL_3,
    textEn: "How do you handle rejection from friends?",
    textHi: "आप दोस्तों द्वारा अस्वीकृति (Rejection) को कैसे संभालते हैं?",
    options: [
      { id: 'a', en: 'I know my worth beyond them', hi: 'मैं उनके बिना भी अपना मूल्य जानता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'It hurts but I move on', hi: 'दुख होता है पर मैं आगे बढ़ जाता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I think something is wrong with me', hi: 'मुझे लगता है कि मुझमें कुछ खराबी है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It feels like the end of the world', hi: 'ऐसा लगता है जैसे दुनिया खत्म हो गई', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_11', level: WellBeingLevel.LEVEL_3,
    textEn: "Do you feel irritable or angry for no reason?",
    textHi: "क्या आप बिना किसी कारण के चिड़चिड़ा या गुस्सा महसूस करते हैं?",
    options: [
      { id: 'a', en: 'Rarely', hi: 'शायद ही कभी', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Only when stressed', hi: 'सिर्फ तनाव में होने पर', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Quite often lately', hi: 'हाल ही में अक्सर', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'Almost every day', hi: 'लगभग हर दिन', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_12', level: WellBeingLevel.LEVEL_3,
    textEn: "What is your 'Social Battery' like lately?",
    textHi: "हाल ही में आपकी 'सोशल बैटरी' कैसी रही है?",
    options: [
      { id: 'a', en: 'Fully charged', hi: 'पूरी तरह चार्ज', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Healthy balance', hi: 'स्वस्थ संतुलन', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Always low/Exhausted', hi: 'हमेशा कम/थका हुआ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I want to avoid everyone', hi: 'मैं सबसे बचना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_13', level: WellBeingLevel.LEVEL_3,
    textEn: "How do you feel about your future?",
    textHi: "आप अपने भविष्य के बारे में कैसा महसूस करते हैं?",
    options: [
      { id: 'a', en: 'Optimistic and hopeful', hi: 'आशावादी और उत्साहित', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A bit nervous but okay', hi: 'थोड़ा घबराया हुआ पर ठीक है', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel a lot of pressure', hi: 'मुझे बहुत दबाव महसूस होता है', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'It looks blank or dark', hi: 'यह खाली या अंधेरा दिखता है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_14', level: WellBeingLevel.LEVEL_3,
    textEn: "Do you have a person you can tell anything to?",
    textHi: "क्या आपके पास कोई ऐसा व्यक्ति है जिसे आप सब कुछ बता सकें?",
    options: [
      { id: 'a', en: 'Yes, I have great support', hi: 'हाँ, मेरे पास बहुत अच्छा समर्थन है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Mostly a close friend', hi: 'ज्यादातर एक करीबी दोस्त', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I keep most things to myself', hi: 'मैं ज्यादातर चीज़ें अपने तक रखता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'No, nobody would understand', hi: 'नहीं, कोई नहीं समझेगा', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_15', level: WellBeingLevel.LEVEL_3,
    textEn: "How do you react to criticism from teachers?",
    textHi: "आप शिक्षकों की आलोचना पर कैसे प्रतिक्रिया देते हैं?",
    options: [
      { id: 'a', en: 'I use it to improve', hi: 'मैं इसे सुधारने के लिए उपयोग करता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I feel sad but I listen', hi: 'दुख होता है पर मैं सुनता हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'I feel like they hate me', hi: 'मुझे लगता है कि वे मुझसे नफरत करते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I want to quit the subject', hi: 'मैं वह विषय छोड़ना चाहता हूँ', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_16', level: WellBeingLevel.LEVEL_3,
    textEn: "Do you feel like your life has meaning/purpose?",
    textHi: "क्या आपको लगता है कि आपके जीवन का कोई अर्थ/उद्देश्य है?",
    options: [
      { id: 'a', en: 'Yes, I have goals', hi: 'हाँ, मेरे पास लक्ष्य हैं', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'I am figuring it out', hi: 'मैं इसे समझ रहा हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Not really, just surviving', hi: 'वास्तव में नहीं, बस जी रहा हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'No, everything is pointless', hi: 'नहीं, सब कुछ बेकार है', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_17', level: WellBeingLevel.LEVEL_3,
    textEn: "When you are in a quiet room, what do you hear?",
    textHi: "जब आप एक शांत कमरे में होते हैं, तो आपको क्या सुनाई देता है?",
    options: [
      { id: 'a', en: 'Peace and calm', hi: 'शांति और सुकून', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A little bit of boredom', hi: 'थोड़ी सी बोरियत', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'My thoughts making me anxious', hi: 'मेरे विचार मुझे चिंतित करते हैं', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'A deep sense of sadness', hi: 'उदासी का गहरा अहसास', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_18', level: WellBeingLevel.LEVEL_3,
    textEn: "How much of your day is spent 'pretending'?",
    textHi: "आपके दिन का कितना हिस्सा 'दिखावा' करने में बीतता है?",
    options: [
      { id: 'a', en: 'None, I am always me', hi: 'बिल्कुल नहीं, मैं हमेशा मैं हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Very little', hi: 'बहुत कम', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Quite a lot at school', hi: 'स्कूल में काफी ज्यादा', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'All the time', hi: 'हर समय', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_19', level: WellBeingLevel.LEVEL_3,
    textEn: "Do you feel like you are enough as you are?",
    textHi: "क्या आपको लगता है कि आप जैसे हैं वैसे ही पर्याप्त (Enough) हैं?",
    options: [
      { id: 'a', en: 'Yes, I am worthy', hi: 'हाँ, मैं योग्य हूँ', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'Most days', hi: 'ज्यादातर दिन', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'Only when I succeed', hi: 'सिर्फ तब जब मैं सफल होता हूँ', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'I never feel good enough', hi: 'मुझे कभी भी पर्याप्त अच्छा महसूस नहीं होता', indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l3_20', level: WellBeingLevel.LEVEL_3,
    textEn: "What does your heart need right now?",
    textHi: "अभी आपके दिल को क्या चाहिए?",
    options: [
      { id: 'a', en: 'Nothing, it is full', hi: 'कुछ नहीं, यह भरा हुआ है', indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: 'A little rest', hi: 'थोड़ा आराम', indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: 'To be heard by someone', hi: 'कि कोई मुझे सुने', indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: 'To stop the pain', hi: 'दर्द को रोकना', indicator: ResponseIndicator.RED_FLAG },
    ]
  },

  // ==========================================
  // LEVEL 4: Std 9 to 10 (20 Questions)
  // ==========================================
  {
    id: 'l4_1', level: WellBeingLevel.LEVEL_4,
    textEn: "When your alarm goes off on a school morning, what is your first thought?",
    textHi: "स्कूल की सुबह जब अलार्म बजता है, तो आपका पहला विचार क्या होता है?",
    options: [
      { id: 'a', en: "I’m ready to get the day started", hi: "मैं दिन शुरू करने के लिए तैयार हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I’m tired, but I’ll get up now", hi: "मैं थका हुआ हूँ, लेकिन अभी उठ जाऊँगा", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I feel heavy and don't want to move", hi: "मेरा शरीर भारी लगता है और हिलने का मन नहीं करता", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel a sense of dread about the day ahead", hi: "मुझे आने वाले दिन के बारे में डर महसूस होता है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_2', level: WellBeingLevel.LEVEL_4,
    textEn: "How many hours of restful sleep do you get on an average school night?",
    textHi: "आप रात में औसतन कितने घंटे की सुकून भरी नींद लेते हैं?",
    options: [
      { id: 'a', en: "8 or more hours", hi: "8 या उससे अधिक घंटे", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Around 6–7 hours", hi: "लगभग 6–7 घंटे", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I sleep but wake up many times", hi: "मैं सोता हूँ लेकिन बार-बार आँख खुल जाती है", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I stay awake for hours with my thoughts", hi: "मैं अपने विचारों के कारण घंटों जागता रहता हूँ", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_3', level: WellBeingLevel.LEVEL_4,
    textEn: "When a teacher is giving a 15-minute explanation, how long can you stay focused?",
    textHi: "जब शिक्षक 15 मिनट तक कुछ समझाते हैं, तो आप कितनी देर ध्यान दे पाते हैं?",
    options: [
      { id: 'a', en: "The whole time", hi: "पूरे समय", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Most of the time", hi: "ज्यादातर समय", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I lose track after the first few minutes", hi: "पहले कुछ मिनट के बाद मेरा ध्यान भटक जाता है", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I find it almost impossible to listen", hi: "मेरे लिए अंत तक सुनना लगभग असंभव है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_4', level: WellBeingLevel.LEVEL_4,
    textEn: "How do you handle having three different assignments due in the same week?",
    textHi: "जब एक ही हफ्ते में तीन अलग-अलग असाइनमेंट जमा करने होते हैं, तो आप क्या करते हैं?",
    options: [
      { id: 'a', en: "I make a plan and do them one by one", hi: "मैं योजना बनाता हूँ और एक-एक करके करता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I feel a bit stressed but I get them done", hi: "मुझे थोड़ा तनाव होता है लेकिन मैं काम पूरा कर लेता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I start them all but have trouble finishing", hi: "मैं सब शुरू तो करता हूँ पर खत्म करने में दिक्कत होती है", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel paralyzed and don't start at all", hi: "मैं सुन्न हो जाता हूँ और शुरू ही नहीं कर पाता", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_5', level: WellBeingLevel.LEVEL_4,
    textEn: "How often do you feel like your 'battery' is completely empty?",
    textHi: "आपको कितनी बार लगता है कि आपकी 'बैटरी' पूरी तरह खाली हो गई है?",
    options: [
      { id: 'a', en: "Only after a long busy day", hi: "केवल बहुत लंबे और व्यस्त दिन के बाद", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Sometimes on weekends", hi: "कभी-कभी सप्ताहांत पर", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "Quite often, even in the mornings", hi: "अक्सर, यहाँ तक कि सुबह भी", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel tired almost all the time", hi: "मुझे लगभग हर समय थकान महसूस होती है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_6', level: WellBeingLevel.LEVEL_4,
    textEn: "If you receive a lower grade than you expected, what is your reaction?",
    textHi: "उम्मीद से कम ग्रेड मिलने पर आपकी प्रतिक्रिया क्या होती है?",
    options: [
      { id: 'a', en: "I ask how I can improve next time", hi: "मैं पूछता हूँ कि अगली बार सुधार कैसे करूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I feel sad for a bit and then move on", hi: "मुझे थोड़ा दुख होता है और फिर मैं आगे बढ़ जाता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I get very angry at myself", hi: "मुझे खुद पर बहुत गुस्सा आता है", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel like a failure and want to give up", hi: "मुझे लगता है कि मैं फेल हो गया हूँ और विषय छोड़ना चाहता हूँ", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_7', level: WellBeingLevel.LEVEL_4,
    textEn: "When you walk through the school hallways, how do you feel?",
    textHi: "स्कूल के गलियारे से गुजरते समय आपको कैसा महसूस होता है?",
    options: [
      { id: 'a', en: "Comfortable and part of the crowd", hi: "सहज और भीड़ का हिस्सा", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Focused on where I need to go", hi: "बस अपने रास्ते पर ध्यान देता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "Self-conscious about how I look", hi: "मैं कैसा दिख रहा हूँ, इसे लेकर थोड़ा सचेत रहता हूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel like everyone is judging me", hi: "मुझे लगता है कि हर कोई मुझे जज कर रहा है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_8', level: WellBeingLevel.LEVEL_4,
    textEn: "If you see your friends hanging out without you on social media, what do you think?",
    textHi: "सोशल मीडिया पर अपने दोस्तों को अपने बिना बाहर घूमते देख आप क्या सोचते हैं?",
    options: [
      { id: 'a', en: "That looks fun, I’ll join next time", hi: "यह मज़ेदार लग रहा है, अगली बार मैं भी जाऊँगा", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I wonder why I wasn't invited, but it’s fine", hi: "मुझे क्यों नहीं बुलाया, पर कोई बात नहीं", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "They must not like me as much", hi: "वे शायद मुझे उतना पसंद नहीं करते", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I have no real friends", hi: "मेरा कोई असली दोस्त नहीं है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_9', level: WellBeingLevel.LEVEL_4,
    textEn: "How much of your worth do you feel is tied to your grades?",
    textHi: "आपको क्या लगता है कि आपका मूल्य आपके ग्रेड से कितना जुड़ा है?",
    options: [
      { id: 'a', en: "Grades are just a part of life", hi: "ग्रेड जीवन का हिस्सा हैं, मेरी पहचान नहीं", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I feel good with high grades", hi: "अच्छे नंबर आने पर मुझे अच्छा लगता है", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I feel like a bad person if grades drop", hi: "ग्रेड गिरने पर मुझे लगता है कि मैं एक बुरा इंसान हूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "My grades are the only thing that matters", hi: "मेरे परिवार के लिए केवल मेरे ग्रेड मायने रखते हैं", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_10', level: WellBeingLevel.LEVEL_4,
    textEn: "How safe do you feel expressing your true emotions at home?",
    textHi: "घर पर अपनी सच्ची भावनाओं को व्यक्त करना आपको कितना सुरक्षित लगता है?",
    options: [
      { id: 'a', en: "Completely safe", hi: "पूरी तरह सुरक्षित", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Fairly safe, but I keep some things back", hi: "काफी हद तक सुरक्षित, पर कुछ बातें छिपाता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I feel like my feelings are ignored", hi: "मुझे लगता है कि मेरी भावनाओं को अनदेखा किया जाता है", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I am afraid of how they will react", hi: "मुझे डर है कि सच बोलने पर उनकी प्रतिक्रिया क्या होगी", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_11', level: WellBeingLevel.LEVEL_4,
    textEn: "When you look in the mirror, what is the first thought that comes to mind?",
    textHi: "जब आप आईने में देखते हैं, तो सबसे पहले क्या विचार आता है?",
    options: [
      { id: 'a', en: "I look good today", hi: "मैं आज अच्छा दिख रहा हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I look okay, just normal", hi: "मैं ठीक दिख रहा हूँ, बस सामान्य", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I need to fix so many things", hi: "मुझे बहुत सारी चीज़ें ठीक करने की ज़रूरत है", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I hate what I see", hi: "मुझे जो दिख रहा है उससे नफरत है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_12', level: WellBeingLevel.LEVEL_4,
    textEn: "How often do you feel 'irritable' or snap at people for no reason?",
    textHi: "आप कितनी बार बिना किसी कारण के लोगों पर चढ़ते या चिल्लाते हैं?",
    options: [
      { id: 'a', en: "Rarely", hi: "शायद ही कभी", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Only when tired or hungry", hi: "केवल जब मैं थका या भूखा होता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "Quite often lately", hi: "हाल ही में काफी अक्सर", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "Almost every day; I’m always angry", hi: "लगभग हर दिन; मैं हमेशा गुस्से में रहता हूँ", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_13', level: WellBeingLevel.LEVEL_4,
    textEn: "How do you feel about your future after high school?",
    textHi: "स्कूल के बाद अपने भविष्य के बारे में आपको कैसा महसूस होता है?",
    options: [
      { id: 'a', en: "Excited about the possibilities", hi: "संभावनाओं को लेकर उत्साहित", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "A bit nervous but I have a plan", hi: "थोड़ा घबराया हुआ लेकिन एक सामान्य योजना है", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I feel a lot of pressure to be successful", hi: "सफल होने का बहुत अधिक दबाव महसूस करता हूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "It feels dark; I can’t imagine a future", hi: "अंधेरा लगता है और मैं भविष्य की कल्पना नहीं कर पाता", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_14', level: WellBeingLevel.LEVEL_4,
    textEn: "How often do you feel 'numb,' as if you can't feel any emotions at all?",
    textHi: "आपको कितनी बार 'सुन्न' महसूस होता है, जैसे आप कोई भावना महसूस नहीं कर पा रहे?",
    options: [
      { id: 'a', en: "Never", hi: "कभी नहीं", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Very rarely", hi: "बहुत कम", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "Sometimes during high stress", hi: "कभी-कभी बहुत तनाव के दौरान", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "Often; I feel like a robot", hi: "अक्सर; मुझे एक रोबोट जैसा महसूस होता है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_15', level: WellBeingLevel.LEVEL_4,
    textEn: "How much do you feel you have to 'change' your personality to fit in?",
    textHi: "क्या आपको लगता है कि फिट होने के लिए आपको अपना व्यक्तित्व बदलना पड़ता है?",
    options: [
      { id: 'a', en: "Not at all; I can be myself", hi: "बिल्कुल नहीं; मैं स्वयं रह सकता हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "A little bit depending on the group", hi: "समूह के आधार पर थोड़ा सा", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I act differently just to be liked", hi: "सिर्फ पसंद किए जाने के लिए मैं अलग व्यवहार करता हूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel like a total 'fake' every day", hi: "मुझे हर दिन पूरी तरह से नकली महसूस होता है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_16', level: WellBeingLevel.LEVEL_4,
    textEn: "Do you feel like your life has a 'purpose' or meaning?",
    textHi: "क्या आपको लगता है कि आपके जीवन का कोई उदेश्य या अर्थ है?",
    options: [
      { id: 'a', en: "Yes, I have goals", hi: "हाँ, मेरे पास लक्ष्य हैं", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Most of the time, I'm figuring it out", hi: "ज्यादातर समय, मैं इसे समझ रहा हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "Not really, I'm just living", hi: "वास्तव में नहीं, मैं बस जिए जा रहा हूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "No, everything feels pointless", hi: "नहीं, सब कुछ बेकार लगता है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_17', level: WellBeingLevel.LEVEL_4,
    textEn: "How do you feel when you are praised in public?",
    textHi: "जब सार्वजनिक रूप से आपकी प्रशंसा की जाती है, तो आपको कैसा लगता है?",
    options: [
      { id: 'a', en: "Proud and happy", hi: "गर्व और खुशी", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "A bit embarrassed but I like it", hi: "थोड़ा शर्मिंदा लेकिन मुझे अच्छा लगता है", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I want to hide", hi: "मैं छिपना चाहता हूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I feel like a 'fraud' who doesn't deserve it", hi: "मुझे एक 'ढोंगी' जैसा महसूस होता है जो इसके लायक नहीं है", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_18', level: WellBeingLevel.LEVEL_4,
    textEn: "How do you feel about the person you were two years ago?",
    textHi: "आप दो साल पहले जो व्यक्ति थे, उसके बारे में आप कैसा महसूस करते हैं?",
    options: [
      { id: 'a', en: "I’ve grown so much and I’m proud", hi: "मैं बहुत विकसित हुआ हूँ और मुझे गर्व है", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "I was a bit cringe but it’s okay", hi: "मैं थोड़ा अजीब था लेकिन ठीक है", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "I miss that person; life was better", hi: "मुझे उस व्यक्ति की याद आती है; जीवन तब बेहतर था", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "I hate who I was and who I am", hi: "मुझे नफरत है कि मैं कौन था और कौन हूँ", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_19', level: WellBeingLevel.LEVEL_4,
    textEn: "Do you believe that 'things will work out in the end'?",
    textHi: "क्या आप मानते हैं कि 'अंत में सब कुछ ठीक हो जाएगा'?",
    options: [
      { id: 'a', en: "Yes, I’m an optimist", hi: "हाँ, मैं आशावादी हूँ", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Probably, usually they do", hi: "शायद, आमतौर पर हो जाता है", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "Only if I work 100% hard", hi: "केवल तभी जब मैं 100% कड़ी मेहनत करूँ", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "No, things always go wrong for me", hi: "नहीं, मेरे साथ हमेशा चीज़ें गलत ही होती हैं", indicator: ResponseIndicator.RED_FLAG },
    ]
  },
  {
    id: 'l4_20', level: WellBeingLevel.LEVEL_4,
    textEn: "Do you feel like you have 'control' over your life?",
    textHi: "क्या आपको लगता है कि आपके जीवन में होने वाली चीज़ों पर आपका 'नियंत्रण' है?",
    options: [
      { id: 'a', en: "Yes, I can make choices", hi: "हाँ, मैं ऐसे चुनाव कर सकता हूँ जो मायने रखते हैं", indicator: ResponseIndicator.HEALTHY },
      { id: 'b', en: "Mostly, but some things out of my hands", hi: "ज्यादातर, लेकिन कुछ चीज़ें मेरे हाथ में नहीं हैं", indicator: ResponseIndicator.HEALTHY },
      { id: 'c', en: "No, things just happen to me", hi: "नहीं, मुझे लगता है कि चीज़ें बस मेरे साथ हो रही हैं", indicator: ResponseIndicator.CONCERN },
      { id: 'd', en: "No, I feel like a puppet", hi: "नहीं, मुझे दबाव द्वारा नियंत्रित एक कठपुतली जैसा महसूस होता है", indicator: ResponseIndicator.RED_FLAG },
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
