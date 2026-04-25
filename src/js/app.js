(function () {
  const questions = [
    {
      id: "ageGroup",
      title: "Укажите Ваш возраст",
      subtitle: "Это обязательный шаг перед подбором программы.",
      options: [
        { id: "age18to25", label: "18-25 лет" },
        { id: "age26to35", label: "26-35 лет" },
        { id: "age36to45", label: "36-45 лет" },
        { id: "age46plus", label: "46+ лет" }
      ]
    },
    {
      id: "heightRange",
      title: "Укажите Ваш рост",
      subtitle: "Это нужно для более точной оценки формата курса.",
      options: [
        { id: "heightUnder160", label: "До 160 см" },
        { id: "height160to170", label: "160-170 см" },
        { id: "height171to180", label: "171-180 см" },
        { id: "height181plus", label: "181+ см" }
      ]
    },
    {
      id: "weightRange",
      title: "Укажите Ваш вес",
      subtitle: "Это обязательный шаг для персонализации рекомендаций.",
      options: [
        { id: "weightUnder55", label: "До 55 кг" },
        { id: "weight56to70", label: "56-70 кг" },
        { id: "weight71to85", label: "71-85 кг" },
        { id: "weight86plus", label: "86+ кг" }
      ]
    },
    {
      id: "goal",
      title: "Какая у Вас главная цель?",
      subtitle: "Выберите наиболее приоритетный результат.",
      options: [
        { id: "fatReduction", label: "Уменьшить локальные жировые отложения" },
        { id: "celluliteReduction", label: "Снизить выраженность целлюлита" },
        { id: "liftAndTone", label: "Подтянуть кожу и повысить тонус" },
        { id: "reduceSwelling", label: "Убрать отёчность и тяжесть в теле" },
        { id: "skinQuality", label: "Улучшить качество и сияние кожи" }
      ]
    },
    {
      id: "zone",
      title: "Какие зоны Вас беспокоят?",
      subtitle: "Можно выбрать несколько зон для более точного подбора.",
      multi: true,
      options: [
        { id: "abdomenSides", label: "Живот и бока" },
        { id: "thighsButtocks", label: "Бёдра и ягодицы" },
        { id: "armsBack", label: "Руки и спина" },
        { id: "innerThighs", label: "Внутренняя поверхность бедра" },
        { id: "kneesCalves", label: "Колени и голени" },
        { id: "waistBack", label: "Талия и поясница" }
      ]
    },
    {
      id: "condition",
      title: "Как Вы оцениваете текущее состояние?",
      subtitle: "Выберите вариант, который ближе всего к Вашей ситуации.",
      options: [
        { id: "mild", label: "Небольшие изменения, хочу профилактику" },
        { id: "moderate", label: "Средняя выраженность, нужен заметный результат" },
        { id: "advanced", label: "Выраженные изменения, нужен интенсивный курс" }
      ]
    },
    {
      id: "skinTone",
      title: "Как Вы оцениваете упругость и тонус кожи?",
      subtitle: "Это важно для выбора лифтинговых методик.",
      options: [
        { id: "toneGood", label: "В целом в норме" },
        { id: "toneReduced", label: "Есть умеренное снижение тонуса" },
        { id: "toneLow", label: "Выраженная дряблость кожи" }
      ]
    },
    {
      id: "celluliteStage",
      title: "Насколько выражен целлюлит?",
      subtitle: "Выберите состояние, которое ближе всего к текущему.",
      options: [
        { id: "celluliteNone", label: "Практически не беспокоит" },
        { id: "celluliteMid", label: "Умеренно выражен" },
        { id: "celluliteStrong", label: "Выражен заметно" }
      ]
    },
    {
      id: "swellingLevel",
      title: "Есть ли отёчность к вечеру?",
      subtitle: "Этот ответ влияет на лимфодренажный блок процедур.",
      options: [
        { id: "swellingNo", label: "Почти нет" },
        { id: "swellingSometimes", label: "Иногда есть" },
        { id: "swellingOften", label: "Часто выражена" }
      ]
    },
    {
      id: "sensation",
      title: "Какой формат воздействия Вам комфортнее?",
      subtitle: "Учитываем Ваши предпочтения по ощущениям.",
      options: [
        { id: "gentle", label: "Мягкое и расслабляющее воздействие" },
        { id: "active", label: "Более интенсивное воздействие, если эффективнее" },
        { id: "balanced", label: "Сбалансированный вариант" }
      ]
    },
    {
      id: "recovery",
      title: "Какой режим восстановления Вам подходит?",
      subtitle: "Некоторые процедуры требуют более щадящего графика.",
      options: [
        { id: "fastRecovery", label: "Быстрое восстановление и минимум ощущений" },
        { id: "normalRecovery", label: "Стандартный режим" },
        { id: "intenseRecovery", label: "Готов(а) к интенсивному курсу ради результата" }
      ]
    },
    {
      id: "programType",
      title: "Какой формат программы предпочтителен?",
      subtitle: "Можно выбрать моно-процедуру или комбинированный протокол.",
      options: [
        { id: "mono", label: "Одна ключевая процедура" },
        { id: "combo", label: "Комбинация 2 процедур" },
        { id: "maxCombo", label: "Комбинированный курс для максимального результата" }
      ]
    },
    {
      id: "frequency",
      title: "Как часто Вы готовы посещать процедуры?",
      subtitle: "От этого зависит длительность курса.",
      options: [
        { id: "onceWeek", label: "1 раз в неделю" },
        { id: "twiceWeek", label: "2 раза в неделю" },
        { id: "flexible", label: "Гибкий график, подстроюсь" }
      ]
    },
    {
      id: "timeline",
      title: "За какой срок хотите увидеть основной результат?",
      subtitle: "Срок влияет на интенсивность курса.",
      options: [
        { id: "urgent", label: "За 1–1.5 месяца" },
        { id: "standard", label: "За 2–3 месяца" },
        { id: "calm", label: "Без спешки, в комфортном темпе" }
      ]
    },
    {
      id: "supportFormat",
      title: "Нужна ли поддерживающая программа после основного курса?",
      subtitle: "Добавим поддерживающие сессии при необходимости.",
      options: [
        { id: "supportNo", label: "Нет, только основной курс" },
        { id: "supportMaybe", label: "Возможно, 1-2 процедуры в месяц" },
        { id: "supportYes", label: "Да, хочу стабильный поддерживающий режим" }
      ]
    }
  ];

  const procedures = [
    {
      id: "lpg",
      name: "LPG - вакуумно-роликовый массаж",
      description:
        "Роллерно-вакуумная методика для коррекции контуров тела, уменьшения целлюлита и улучшения микроциркуляции.",
      indications: ["Локальные жировые отложения", "Целлюлит", "Снижение тонуса кожи"],
      limitations: ["Беременность", "Выраженный варикоз в зоне воздействия", "Острые воспалительные состояния"],
      expectedEffect: "Более ровный рельеф кожи, уменьшение объёмов и визуально подтянутые контуры тела.",
      sessionDurationMin: 35,
      baseSessions: 10,
      sessionsRange: [8, 14],
      baseFrequencyPerWeek: 2,
      strengths: {
        fatReduction: 3,
        celluliteReduction: 4,
        liftAndTone: 3,
        reduceSwelling: 2,
        skinQuality: 2,
        abdomenSides: 3,
        thighsButtocks: 4,
        armsBack: 2,
        multipleZones: 3,
        fullBody: 4,
        mild: 2,
        moderate: 3,
        advanced: 4,
        toneGood: 2,
        toneReduced: 3,
        toneLow: 3,
        celluliteNone: 1,
        celluliteMid: 4,
        celluliteStrong: 5,
        swellingNo: 1,
        swellingSometimes: 2,
        swellingOften: 3,
        gentle: 1,
        active: 3,
        balanced: 3,
        fastRecovery: 2,
        normalRecovery: 3,
        intenseRecovery: 4,
        mono: 2,
        combo: 3,
        maxCombo: 4,
        supportNo: 2,
        supportMaybe: 3,
        supportYes: 3
      }
    },
    {
      id: "cavitation",
      name: "Кавитация",
      description:
        "Точечная работа с локальными жировыми отложениями с постепенным уменьшением объёмов в проблемных зонах.",
      indications: ["Локальные жировые ловушки", "Коррекция объёмов в отдельных зонах", "Контурирование тела"],
      limitations: ["Беременность и лактация", "Наличие кардиостимулятора", "ЖКБ и тяжёлые заболевания печени/почек"],
      expectedEffect: "Постепенное уменьшение объёмов в зоне обработки и более выраженный силуэт.",
      sessionDurationMin: 40,
      baseSessions: 8,
      sessionsRange: [6, 12],
      baseFrequencyPerWeek: 1,
      strengths: {
        fatReduction: 5,
        celluliteReduction: 3,
        liftAndTone: 1,
        reduceSwelling: 1,
        skinQuality: 1,
        abdomenSides: 5,
        thighsButtocks: 3,
        armsBack: 3,
        multipleZones: 2,
        fullBody: 1,
        mild: 2,
        moderate: 3,
        advanced: 3,
        toneGood: 1,
        toneReduced: 2,
        toneLow: 1,
        celluliteNone: 1,
        celluliteMid: 3,
        celluliteStrong: 4,
        swellingNo: 1,
        swellingSometimes: 1,
        swellingOften: 1,
        gentle: 2,
        active: 4,
        balanced: 3,
        fastRecovery: 2,
        normalRecovery: 3,
        intenseRecovery: 4,
        mono: 3,
        combo: 3,
        maxCombo: 2,
        supportNo: 2,
        supportMaybe: 2,
        supportYes: 1
      }
    },
    {
      id: "endosphere",
      name: "Эндосфера - виброкомпрессионный массаж",
      description:
        "Компрессионно-микровибрационная методика для лифтинга тканей, уменьшения отечности и визуального выравнивания рельефа кожи.",
      indications: ["Снижение тонуса кожи", "Пастозность и отечность", "Целлюлит средней/выраженной степени"],
      limitations: ["Беременность", "Острые тромбозы и тромбофлебиты", "Обострение хронических заболеваний"],
      expectedEffect: "Более упругая кожа, уменьшение отечности и улучшение контуров тела.",
      sessionDurationMin: 50,
      baseSessions: 10,
      sessionsRange: [8, 14],
      baseFrequencyPerWeek: 2,
      strengths: {
        fatReduction: 2,
        celluliteReduction: 4,
        liftAndTone: 5,
        reduceSwelling: 5,
        skinQuality: 3,
        abdomenSides: 2,
        thighsButtocks: 4,
        armsBack: 3,
        multipleZones: 4,
        fullBody: 5,
        mild: 2,
        moderate: 4,
        advanced: 4,
        toneGood: 2,
        toneReduced: 4,
        toneLow: 5,
        celluliteNone: 1,
        celluliteMid: 4,
        celluliteStrong: 5,
        swellingNo: 1,
        swellingSometimes: 4,
        swellingOften: 5,
        gentle: 2,
        active: 4,
        balanced: 5,
        fastRecovery: 2,
        normalRecovery: 3,
        intenseRecovery: 4,
        mono: 3,
        combo: 4,
        maxCombo: 5,
        supportNo: 1,
        supportMaybe: 3,
        supportYes: 4
      }
    },
    {
      id: "rfLifting",
      name: "RF-лифтинг тела",
      description:
        "Прогрев тканей радиочастотами для повышения упругости кожи и работы с дряблостью в проблемных зонах.",
      indications: ["Дряблость кожи", "Снижение упругости", "Мягкая коррекция контуров"],
      limitations: ["Беременность", "Металлические импланты в зоне воздействия", "Онкологические заболевания"],
      expectedEffect: "Повышение плотности и упругости кожи, более аккуратный контур обрабатываемой зоны.",
      sessionDurationMin: 45,
      baseSessions: 8,
      sessionsRange: [6, 12],
      baseFrequencyPerWeek: 1,
      strengths: {
        fatReduction: 2,
        celluliteReduction: 2,
        liftAndTone: 5,
        reduceSwelling: 1,
        skinQuality: 3,
        abdomenSides: 2,
        thighsButtocks: 3,
        armsBack: 4,
        multipleZones: 2,
        fullBody: 2,
        mild: 3,
        moderate: 3,
        advanced: 2,
        toneGood: 2,
        toneReduced: 4,
        toneLow: 5,
        celluliteNone: 1,
        celluliteMid: 2,
        celluliteStrong: 2,
        swellingNo: 2,
        swellingSometimes: 1,
        swellingOften: 1,
        gentle: 4,
        active: 2,
        balanced: 3,
        fastRecovery: 3,
        normalRecovery: 3,
        intenseRecovery: 2,
        mono: 3,
        combo: 3,
        maxCombo: 2,
        supportNo: 2,
        supportMaybe: 3,
        supportYes: 3
      }
    },
    {
      id: "hotVacuum",
      name: "Горячий вакуум",
      description:
        "Тепловое вакуумное воздействие для активной коррекции локальных объёмов и улучшения кровообращения в проблемной зоне.",
      indications: ["Локальные жировые отложения", "Плотный целлюлит", "Снижение микроциркуляции"],
      limitations: ["Выраженный купероз", "Беременность", "Острые дерматиты и воспаления"],
      expectedEffect: "Уменьшение локальных объёмов и более ровный рельеф тканей.",
      sessionDurationMin: 40,
      baseSessions: 8,
      sessionsRange: [6, 12],
      baseFrequencyPerWeek: 1,
      strengths: {
        fatReduction: 5,
        celluliteReduction: 4,
        liftAndTone: 2,
        reduceSwelling: 1,
        skinQuality: 1,
        abdomenSides: 5,
        thighsButtocks: 4,
        armsBack: 2,
        multipleZones: 2,
        fullBody: 1,
        mild: 2,
        moderate: 4,
        advanced: 4,
        toneGood: 2,
        toneReduced: 2,
        toneLow: 1,
        celluliteNone: 1,
        celluliteMid: 4,
        celluliteStrong: 5,
        swellingNo: 2,
        swellingSometimes: 1,
        swellingOften: 1,
        gentle: 1,
        active: 5,
        balanced: 3,
        fastRecovery: 1,
        normalRecovery: 3,
        intenseRecovery: 5,
        mono: 3,
        combo: 3,
        maxCombo: 2,
        supportNo: 2,
        supportMaybe: 1,
        supportYes: 1
      }
    },
    {
      id: "biofoton",
      name: "Биофатон",
      description:
        "Световая технология для улучшения микроциркуляции и качества кожи, мягкой стимуляции восстановления тканей.",
      indications: ["Тусклый тон кожи", "Снижение качества кожи", "Поддержка восстановительных программ"],
      limitations: ["Фотосенсибилизация", "Активные воспалительные процессы", "Онкологические заболевания"],
      expectedEffect: "Более ровный тон и качество кожи, мягкий восстановительный эффект.",
      sessionDurationMin: 30,
      baseSessions: 8,
      sessionsRange: [6, 12],
      baseFrequencyPerWeek: 2,
      strengths: {
        fatReduction: 1,
        celluliteReduction: 1,
        liftAndTone: 3,
        reduceSwelling: 2,
        skinQuality: 5,
        abdomenSides: 1,
        thighsButtocks: 2,
        armsBack: 3,
        multipleZones: 4,
        fullBody: 5,
        mild: 4,
        moderate: 3,
        advanced: 2,
        toneGood: 3,
        toneReduced: 3,
        toneLow: 2,
        celluliteNone: 3,
        celluliteMid: 1,
        celluliteStrong: 1,
        swellingNo: 3,
        swellingSometimes: 2,
        swellingOften: 1,
        gentle: 5,
        active: 1,
        balanced: 4,
        fastRecovery: 5,
        normalRecovery: 4,
        intenseRecovery: 1,
        mono: 2,
        combo: 4,
        maxCombo: 4,
        supportNo: 2,
        supportMaybe: 4,
        supportYes: 5
      }
    },
    {
      id: "photoRejuvenation",
      name: "Фотоомоложение",
      description:
        "Световая методика для выравнивания тона и улучшения качества кожи в зонах дряблости и фотоповреждения.",
      indications: ["Неравномерный тон кожи", "Снижение качества кожи", "Возрастные изменения кожи тела"],
      limitations: ["Свежий загар", "Фотосенсибилизация", "Беременность"],
      expectedEffect: "Более ровная, визуально свежая кожа в обрабатываемых зонах.",
      sessionDurationMin: 35,
      baseSessions: 6,
      sessionsRange: [4, 10],
      baseFrequencyPerWeek: 1,
      strengths: {
        fatReduction: 1,
        celluliteReduction: 1,
        liftAndTone: 3,
        reduceSwelling: 1,
        skinQuality: 5,
        abdomenSides: 1,
        thighsButtocks: 2,
        armsBack: 4,
        multipleZones: 3,
        fullBody: 3,
        mild: 4,
        moderate: 3,
        advanced: 1,
        toneGood: 3,
        toneReduced: 4,
        toneLow: 2,
        celluliteNone: 3,
        celluliteMid: 1,
        celluliteStrong: 1,
        swellingNo: 3,
        swellingSometimes: 1,
        swellingOften: 1,
        gentle: 4,
        active: 2,
        balanced: 4,
        fastRecovery: 4,
        normalRecovery: 3,
        intenseRecovery: 1,
        mono: 3,
        combo: 4,
        maxCombo: 3,
        supportNo: 2,
        supportMaybe: 3,
        supportYes: 4
      }
    },
    {
      id: "manualMassage",
      name: "Ручной массаж",
      description:
        "Классическая мануальная техника для лимфодренажа, релакса и усиления эффекта аппаратных процедур.",
      indications: ["Мышечное напряжение", "Отёчность", "Поддержка аппаратного курса"],
      limitations: ["Острые воспалительные процессы", "Высокая температура", "Повреждения кожи в зоне массажа"],
      expectedEffect: "Снижение напряжения и отёчности, более комфортное восстановление между сессиями.",
      sessionDurationMin: 50,
      baseSessions: 8,
      sessionsRange: [6, 14],
      baseFrequencyPerWeek: 1,
      strengths: {
        fatReduction: 1,
        celluliteReduction: 2,
        liftAndTone: 2,
        reduceSwelling: 4,
        skinQuality: 2,
        abdomenSides: 2,
        thighsButtocks: 3,
        armsBack: 4,
        multipleZones: 4,
        fullBody: 5,
        mild: 4,
        moderate: 3,
        advanced: 2,
        toneGood: 2,
        toneReduced: 2,
        toneLow: 1,
        celluliteNone: 3,
        celluliteMid: 2,
        celluliteStrong: 2,
        swellingNo: 2,
        swellingSometimes: 4,
        swellingOften: 4,
        gentle: 5,
        active: 1,
        balanced: 4,
        fastRecovery: 5,
        normalRecovery: 4,
        intenseRecovery: 2,
        mono: 2,
        combo: 4,
        maxCombo: 4,
        supportNo: 2,
        supportMaybe: 4,
        supportYes: 5
      }
    }
  ];

  const state = { started: false, currentStep: 0, answers: {}, recommendation: null };
  const rootElement = document.querySelector("#quiz-root");

  if (!rootElement) {
    return;
  }

  const STEP_ORDER = questions.map(function (question) {
    return question.id;
  });

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getCurrentQuestion() {
    return questions[state.currentStep];
  }

  function isLastStep() {
    return state.currentStep === questions.length - 1;
  }

  function getAnswerTokens(questionId, answerValue) {
    if (questionId !== "zone") {
      return Array.isArray(answerValue) ? answerValue : [answerValue];
    }

    if (!Array.isArray(answerValue)) {
      return [answerValue];
    }

    const zoneAliasMap = {
      innerThighs: "thighsButtocks",
      kneesCalves: "thighsButtocks",
      waistBack: "abdomenSides"
    };

    const baseTokens = answerValue.map(function (zoneId) {
      return zoneAliasMap[zoneId] || zoneId;
    });

    if (answerValue.length > 1) {
      baseTokens.push("multipleZones");
    }

    if (answerValue.length >= 4) {
      baseTokens.push("fullBody");
    }

    return baseTokens;
  }

  function calculateScore(procedure, answers) {
    return STEP_ORDER.reduce(function (score, key) {
      const answerValue = answers[key];
      const tokens = getAnswerTokens(key, answerValue).filter(Boolean);
      if (!tokens.length) {
        return score;
      }
      const tokenScore = tokens.reduce(function (sum, token) {
        return sum + (procedure.strengths[token] || 0);
      }, 0);
      const normalizedScore = tokenScore / tokens.length;
      return score + normalizedScore;
    }, 0);
  }

  function countIntensityBonus(answers) {
    let bonus = 0;
    if (answers.condition === "advanced") bonus += 2;
    else if (answers.condition === "moderate") bonus += 1;
    if (answers.timeline === "urgent") bonus += 1;
    if (answers.programType === "maxCombo") bonus += 1;
    if (answers.weightRange === "weight71to85") bonus += 1;
    if (answers.weightRange === "weight86plus") bonus += 2;
    if (answers.ageGroup === "age46plus") bonus += 1;
    return bonus;
  }

  function countFrequency(answers, baseFrequency) {
    if (answers.frequency === "onceWeek") return 1;
    if (answers.frequency === "twiceWeek") return 2;
    return baseFrequency;
  }

  function buildReason(answers) {
    const reasonParts = [];
    if (answers.goal === "fatReduction") reasonParts.push("фокус на уменьшении локальных жировых отложений");
    else if (answers.goal === "celluliteReduction") reasonParts.push("приоритет в работе с целлюлитом");
    else if (answers.goal === "liftAndTone") reasonParts.push("акцент на подтяжке и тонусе кожи");
    else if (answers.goal === "reduceSwelling") reasonParts.push("задача по уменьшению отёчности");
    else if (answers.goal === "skinQuality") reasonParts.push("улучшение качества и тона кожи");
    if (answers.condition === "advanced") reasonParts.push("нужен более интенсивный курс");
    else if (answers.condition === "mild") reasonParts.push("подходит деликатный старт с профилактикой");
    if (answers.programType === "combo" || answers.programType === "maxCombo") {
      reasonParts.push("предпочтение комбинированного протокола");
    }
    if (answers.frequency === "onceWeek") reasonParts.push("график с посещением 1 раз в неделю");
    else if (answers.frequency === "twiceWeek") reasonParts.push("график с посещением 2 раза в неделю");
    return reasonParts.join(", ");
  }

  function shouldBuildCombo(answers) {
    return (
      answers.programType === "combo" ||
      answers.programType === "maxCombo" ||
      (Array.isArray(answers.zone) && answers.zone.length > 1) ||
      answers.condition === "advanced"
    );
  }

  function buildComboPlan(topThree, answers) {
    if (topThree.length < 2 || !shouldBuildCombo(answers)) {
      return null;
    }

    const first = topThree[0];
    const second = topThree[1];
    const support = topThree[2];
    const weeklyVisits = answers.frequency === "onceWeek" ? 1 : 2;
    const baseCombinedSessions = Math.ceil((first.sessions + second.sessions) * 0.75);
    const supportSessions = answers.supportFormat === "supportYes" ? 4 : answers.supportFormat === "supportMaybe" ? 2 : 0;
    const totalSessions = baseCombinedSessions + supportSessions;
    const totalWeeks = Math.ceil(totalSessions / weeklyVisits);

    return {
      title: "Комбинированный курс для максимального результата",
      procedures: [first, second],
      supportProcedure: support,
      totalSessions: totalSessions,
      weeklyVisits: weeklyVisits,
      totalWeeks: totalWeeks,
      protocol: [
        "Этап 1 (адаптация): 2-3 недели, чередование ключевых процедур.",
        "Этап 2 (активная коррекция): основной блок с индивидуальной частотой.",
        "Этап 3 (закрепление): поддерживающие сессии и контроль результата."
      ]
    };
  }

  function getRecommendation(answers) {
    const scoredProcedures = procedures
      .map(function (procedure) {
        return { procedure: procedure, score: calculateScore(procedure, answers) };
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });

    const topThree = scoredProcedures.slice(0, 3).map(function (item) {
      const procedure = item.procedure;
      const sessions = clamp(
        procedure.baseSessions + countIntensityBonus(answers),
        procedure.sessionsRange[0],
        procedure.sessionsRange[1]
      );
      const frequency = countFrequency(answers, procedure.baseFrequencyPerWeek);
      const weeks = Math.ceil(sessions / frequency);
      return {
        id: procedure.id,
        name: procedure.name,
        description: procedure.description,
        indications: procedure.indications,
        limitations: procedure.limitations,
        expectedEffect: procedure.expectedEffect,
        score: item.score,
        sessions: sessions,
        frequency: frequency,
        weeks: weeks,
        sessionDurationMin: procedure.sessionDurationMin
      };
    });

    const combinationPlan = buildComboPlan(topThree, answers);

    return {
      primary: topThree[0],
      alternatives: topThree.slice(1),
      combinationPlan: combinationPlan,
      reason: buildReason(answers),
      note:
        "Рекомендация носит информационный характер. Перед началом курса необходима очная консультация специалиста."
    };
  }

  function pluralizeSessions(count) {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return "процедура";
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "процедуры";
    return "процедур";
  }

  function pluralizeWeeks(count) {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return "неделю";
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "недели";
    return "недель";
  }

  function renderQuestionStep(question, selectedValue, stepNumber, totalSteps) {
    const selectedValues = Array.isArray(selectedValue) ? selectedValue : [selectedValue];
    const optionsHtml = question.options
      .map(function (option) {
        const isSelected = selectedValues.includes(option.id);
        return (
          '<button class="option-card ' +
          (isSelected ? "is-selected" : "") +
          '" type="button" data-option-id="' +
          option.id +
          '" aria-pressed="' +
          (isSelected ? "true" : "false") +
          '"><span>' +
          option.label +
          "</span></button>"
        );
      })
      .join("");

    return (
      '<article class="quiz-card fade-in"><div class="progress-row"><p class="progress-label">Шаг ' +
      stepNumber +
      " из " +
      totalSteps +
      '</p><div class="progress-track" role="progressbar" aria-valuemin="1" aria-valuemax="' +
      totalSteps +
      '" aria-valuenow="' +
      stepNumber +
      '"><span style="width: ' +
      (stepNumber / totalSteps) * 100 +
      '%"></span></div></div><h2>' +
      question.title +
      "</h2><p class=\"question-subtitle\">" +
      question.subtitle +
      (question.multi ? ' <strong>Выберите один или несколько вариантов.</strong>' : "") +
      '</p><div class="options-grid">' +
      optionsHtml +
      '</div><p class="validation-message" id="validation-message"></p></article>'
    );
  }

  function recommendationCard(item, isPrimary) {
    const indicationsHtml = item.indications.map(function (value) { return "<li>" + value + "</li>"; }).join("");
    const limitationsHtml = item.limitations.map(function (value) { return "<li>" + value + "</li>"; }).join("");
    return (
      '<article class="result-card ' +
      (isPrimary ? "result-primary" : "") +
      '"><p class="result-tag">' +
      (isPrimary ? "Основная рекомендация" : "Альтернатива") +
      "</p><h3>" +
      item.name +
      "</h3><p>" +
      item.description +
      '</p><dl class="result-stats"><div><dt>Курс</dt><dd>' +
      item.sessions +
      " " +
      pluralizeSessions(item.sessions) +
      '</dd></div><div><dt>Частота</dt><dd>' +
      item.frequency +
      ' раз(а) в неделю</dd></div><div><dt>Срок</dt><dd>' +
      item.weeks +
      " " +
      pluralizeWeeks(item.weeks) +
      '</dd></div><div><dt>Сеанс</dt><dd>' +
      item.sessionDurationMin +
      ' минут</dd></div></dl><p class="result-effect"><strong>Ожидаемый эффект:</strong> ' +
      item.expectedEffect +
      '</p><div class="result-list-grid"><div><h4>Показания</h4><ul>' +
      indicationsHtml +
      '</ul></div><div><h4>Ограничения</h4><ul>' +
      limitationsHtml +
      "</ul></div></div></article>"
    );
  }

  function renderResult(recommendation) {
    const alternativesHtml = recommendation.alternatives
      .map(function (item) {
        return recommendationCard(item, false);
      })
      .join("");
    let comboHtml = "";
    if (recommendation.combinationPlan) {
      const comboItems = recommendation.combinationPlan.procedures
        .map(function (item) {
          return "<li><strong>" + item.name + "</strong> — " + item.sessions + " процедур</li>";
        })
        .join("");
      const supportHtml =
        recommendation.combinationPlan.supportProcedure && recommendation.combinationPlan.totalSessions
          ? "<p class=\"combo-support\">Поддержка: " +
            recommendation.combinationPlan.supportProcedure.name +
            " по согласованию со специалистом.</p>"
          : "";
      const protocolHtml = recommendation.combinationPlan.protocol
        .map(function (row) {
          return "<li>" + row + "</li>";
        })
        .join("");
      comboHtml =
        '<article class="quiz-card combo-card"><p class="result-tag">Комбинация процедур</p><h3>' +
        recommendation.combinationPlan.title +
        "</h3><ul class=\"combo-list\">" +
        comboItems +
        "</ul><p class=\"combo-stats\">Итого: " +
        recommendation.combinationPlan.totalSessions +
        " процедур, " +
        recommendation.combinationPlan.weeklyVisits +
        " посещения в неделю, ориентировочно " +
        recommendation.combinationPlan.totalWeeks +
        " недель.</p><ul class=\"combo-protocol\">" +
        protocolHtml +
        "</ul>" +
        supportHtml +
        "</article>";
    }

    return (
      '<section class="result-shell fade-in"><article class="quiz-card"><p class="quiz-label">Ваш персональный план</p><h2>Подходящая процедура и курс</h2><p class="question-subtitle">Подбор сформирован с учётом ответов: ' +
      recommendation.reason +
      ".</p></article>" +
      comboHtml +
      recommendationCard(recommendation.primary, true) +
      '<section class="result-alternatives"><h3>Также можно рассмотреть</h3><div class="alternatives-grid">' +
      alternativesHtml +
      '</div></section><article class="result-note"><p>' +
      recommendation.note +
      "</p></article></section>"
    );
  }

  function hasAnswerForQuestion(question) {
    const value = state.answers[question.id];
    if (question.multi) {
      return Array.isArray(value) && value.length > 0;
    }
    return Boolean(value);
  }

  function showValidation(message) {
    const validationElement = rootElement.querySelector("#validation-message");
    if (validationElement) validationElement.textContent = message;
  }

  function renderControls() {
    const currentQuestion = getCurrentQuestion();
    const hasSelection = hasAnswerForQuestion(currentQuestion);
    rootElement.insertAdjacentHTML(
      "beforeend",
      '<div class="quiz-controls"><button type="button" class="btn btn-secondary" id="prev-btn" ' +
        (state.currentStep === 0 ? "disabled" : "") +
        '>Назад</button><button type="button" class="btn btn-primary" id="next-btn">' +
        (isLastStep() ? "Показать результат" : "Далее") +
        '</button></div><p class="hint">' +
        (hasSelection
          ? "Выбор сохранён"
          : currentQuestion.multi
            ? "Выберите один или несколько вариантов"
            : "Выберите один вариант ответа") +
        "</p>"
    );
  }

  function bindWelcomeEvents() {
    const startButton = rootElement.querySelector("#start-quiz-btn");
    if (!startButton) return;
    startButton.addEventListener("click", function () {
      state.started = true;
      render();
    });
  }

  function bindResultEvents() {
    const restartButton = rootElement.querySelector("#restart-btn");
    if (!restartButton) return;
    restartButton.addEventListener("click", function () {
      state.started = false;
      state.currentStep = 0;
      state.answers = {};
      state.recommendation = null;
      render();
    });
  }

  function bindQuestionEvents() {
    const buttons = rootElement.querySelectorAll("[data-option-id]");
    const currentQuestion = getCurrentQuestion();
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const optionId = button.getAttribute("data-option-id");
        if (currentQuestion.multi) {
          const current = Array.isArray(state.answers[currentQuestion.id]) ? state.answers[currentQuestion.id] : [];
          const hasOption = current.includes(optionId);
          state.answers[currentQuestion.id] = hasOption
            ? current.filter(function (id) {
                return id !== optionId;
              })
            : current.concat(optionId);
        } else {
          state.answers[currentQuestion.id] = optionId;
        }
        render();
      });
    });

    const prevButton = rootElement.querySelector("#prev-btn");
    const nextButton = rootElement.querySelector("#next-btn");

    if (prevButton) {
      prevButton.addEventListener("click", function () {
        if (state.currentStep > 0) {
          state.currentStep -= 1;
          render();
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        const question = getCurrentQuestion();
        if (!hasAnswerForQuestion(question)) {
          showValidation(
            question.multi
              ? "Пожалуйста, выберите хотя бы один вариант."
              : "Пожалуйста, выберите один из вариантов."
          );
          return;
        }

        if (isLastStep()) {
          state.recommendation = getRecommendation(state.answers);
          render();
          return;
        }

        state.currentStep += 1;
        render();
      });
    }
  }

  function render() {
    if (!state.started) {
      rootElement.innerHTML =
        '<article class="quiz-card fade-in"><p class="quiz-label">Подбор за 3-4 минуты</p><h2>Подберём курс аппаратной косметологии под Ваш запрос</h2><p class="question-subtitle">Квиз учитывает цель, состояние тканей, зоны коррекции, формат восстановления и желаемые сроки результата.</p><ul class="welcome-list"><li>' +
        questions.length +
        ' вопросов для точного подбора</li><li>Индивидуальная рекомендация и альтернативы</li><li>Возможность комбинированного протокола процедур</li></ul><div class="quiz-controls"><button type="button" class="btn btn-primary" id="start-quiz-btn">Начать подбор</button></div></article>';
      bindWelcomeEvents();
      return;
    }

    if (state.recommendation) {
      rootElement.innerHTML =
        renderResult(state.recommendation) +
        '<div class="quiz-controls"><button type="button" class="btn btn-primary" id="restart-btn">Пройти заново</button></div>';
      bindResultEvents();
      return;
    }

    const question = getCurrentQuestion();
    rootElement.innerHTML = renderQuestionStep(
      question,
      state.answers[question.id],
      state.currentStep + 1,
      questions.length
    );
    renderControls();
    bindQuestionEvents();
  }

  render();
})();
