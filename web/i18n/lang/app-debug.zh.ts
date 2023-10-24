const translation = {
  pageTitle: {
    line1: '提示词',
    line2: '编排',
  },
  promptMode: {
    simple: '切换到专家模式以编辑完整的提示词',
    advanced: '专家模式',
    switchBack: '返回简易模式',
    advancedWarning: {
      title: '您已切换到专家模式，一旦修改提示词，将无法返回简易模式。',
      description: '在专家模式下，您可以编辑完整的提示词。',
      learnMore: '了解更多',
      ok: '确定',
    },
    operation: {
      addMessage: '添加消息',
    },
    contextMissing: '上下文内容块缺失，提示词的有效性可能不好。',
  },
  operation: {
    applyConfig: '发布',
    resetConfig: '重置',
    addFeature: '添加功能',
    automatic: '自动编排',
    stopResponding: '停止响应',
    agree: '赞同',
    disagree: '反对',
    cancelAgree: '取消赞同',
    cancelDisagree: '取消反对',
    userAction: '用户表示',
  },
  notSetAPIKey: {
    title: 'LLM 提供者的密钥未设置',
    trailFinished: '试用已结束',
    description: '在调试之前需要设置 LLM 提供者的密钥。',
    settingBtn: '去设置',
  },
  trailUseGPT4Info: {
    title: '当前不支持使用 gpt-4',
    description: '使用 gpt-4，请设置 API Key',
  },
  feature: {
    groupChat: {
      title: '聊天增强',
      description: '为聊天型应用添加预对话设置，可以提升用户体验。',
    },
    groupExperience: {
      title: '体验增强',
    },
    conversationOpener: {
      title: '对话开场白',
      description: '在对话型应用中，让 AI 主动说第一段话可以拉近与用户间的距离。',
    },
    suggestedQuestionsAfterAnswer: {
      title: '下一步问题建议',
      description: '设置下一步问题建议可以让用户更好的对话。',
      resDes: '回答结束后系统会给出 3 个建议',
      tryToAsk: '试着问问',
    },
    moreLikeThis: {
      title: '更多类似的',
      description: '一次生成多条文本，可在此基础上编辑并继续生成',
      generateNumTip: '每次生成数',
      tip: '使用此功能将会额外消耗 tokens',
    },
    speechToText: {
      title: '语音转文字',
      description: '启用后，您可以使用语音输入。',
      resDes: '语音输入已启用',
    },
    citation: {
      title: '引用和归属',
      description: '启用后，显示源文档和生成内容的归属部分。',
      resDes: '引用和归属已启用',
    },
    dataSet: {
      title: '上下文',
      noData: '您可以导入数据集作为上下文',
      words: '词',
      textBlocks: '文本块',
      selectTitle: '选择引用数据集',
      selected: '个数据集被选中',
      noDataSet: '未找到数据集',
      toCreate: '去创建',
      notSupportSelectMulti: '目前只支持引用一个数据集',
      queryVariable: {
        title: '查询变量',
        tip: '该变量将用作上下文检索的查询输入，获取与该变量的输入相关的上下文信息。',
        choosePlaceholder: '请选择变量',
        noVar: '没有变量',
        noVarTip: '请创建变量',
        unableToQueryDataSet: '无法查询数据集',
        unableToQueryDataSetTip: '无法成功查询数据集，请在上下文部分选择一个上下文查询变量。',
        ok: '好的',
        contextVarNotEmpty: '上下文查询变量不能为空',
        deleteContextVarTitle: '删除变量“{{varName}}”？',
        deleteContextVarTip: '该变量已被设置为上下文查询变量，删除该变量将影响数据集的正常使用。 如果您仍需要删除它，请在上下文部分中重新选择它。',
      },
      modal: {
        title: '添加外部数据源',
        name: {
          title: '名称',
          placeholder: '请输入数据源名称',
        },
        description: {
          title: '描述',
          placeholder: '描述该数据集中的内容。详细的描述可以让 AI 更易访问数据集的内容。如果为空，Dify 将使用默认的命中策略。',
          link: '了解如何写出好的描述',
        },
        apiEndpoint: {
          title: 'API Endpoint',
          link: '如何开发自己的数据源 API ？',
          placeholder: '请输入 API Endpoint',
        },
        apiKey: {
          title: 'API-Key',
          regenerate: '重新生成',
          placeholder: '请输入 API KEY',
        },
      },
    },
    conversationHistory: {
      title: '对话历史',
      description: '设置对话角色的前缀名称',
      tip: '对话历史未启用，请在上面的提示中添加<histories>。',
      learnMore: '了解更多',
      editModal: {
        title: '编辑对话角色名称',
        userPrefix: '用户前缀',
        assistantPrefix: '助手前缀',
      },
    },
    toolbox: {
      title: '工具箱',
    },
    moderation: {
      title: '内容审核',
      description: '内容审核',
      modal: {
        title: '内容审核设置',
        provider: {
          title: '类别',
          openai: 'OpenAI Moderation',
          openaiTip: {
            prefix: 'OpenAI Moderation 需要在',
            suffix: '中配置 OpenAI API 密钥。',
          },
          keywords: '关键词',
          custom: '自定义 API',
        },
        keywords: {
          tip: '每行一个，用换行符分隔。每行最多 100 个字符。',
          placeholder: '每行一个，用换行符分隔',
        },
        apiEndpoint: {
          title: 'API Endpoint',
          link: '如何开发自己的敏感内容过滤 API ？',
          placeholder: '请输入 API Endpoint',
        },
        apiKey: {
          title: 'API-Key',
          regenerate: '重新生成',
          placeholder: '请输入 API KEY',
        },
        input: {
          title: '审核输入内容',
          preset: '预设回复',
          placeholder: '这里预设回复内容',
          apiTip: '预设回复通过 API 返回',
        },
        output: {
          title: '审核输出内容',
        },
        condition: '审核输入内容和审核输出内容至少启用一项',
      },
    },
  },
  automatic: {
    title: '自动编排',
    description: '描述您的场景，Dify 将为您编排一个应用。',
    intendedAudience: '目标用户是谁？',
    intendedAudiencePlaceHolder: '例如：学生',
    solveProblem: '希望 AI 为他们解决什么问题？',
    solveProblemPlaceHolder: '例如：评估学业水平',
    generate: '生成',
    audiencesRequired: '目标用户必填',
    problemRequired: '解决问题必填',
    resTitle: '我们为您编排了以下应用程序',
    apply: '应用',
    noData: '在左侧描述您的用例，编排预览将在此处显示。',
    loading: '为您编排应用程序中…',
    overwriteTitle: '覆盖现有配置？',
    overwriteMessage: '应用此编排将覆盖现有配置。',
  },
  resetConfig: {
    title: '确认重置？',
    message: '重置将丢失当前页面所有修改，恢复至上次发布时的配置',
  },
  errorMessage: {
    nameOfKeyRequired: '变量 {{key}} 对应的名称必填',
    valueOfVarRequired: '{{key}}必填',
    queryRequired: '主要文本必填',
    waitForResponse: '请等待上条信息响应完成',
    waitForBatchResponse: '请等待批量任务完成',
    notSelectModel: '请选择模型',
  },
  chatSubTitle: '对话前提示词',
  completionSubTitle: '前缀提示词',
  promptTip:
    '提示词用于对 AI 的回复做出一系列指令和约束。可插入表单变量，例如 {{input}}。这段提示词不会被最终用户所看到。',
  formattingChangedTitle: '编排已改变',
  formattingChangedText: '修改编排将重置调试区域，确定吗？',
  variableTitle: '变量',
  notSetVar: '变量能使用户输入表单引入提示词或开场白，你可以试试在提示词中输入 {{input}}',
  variableTip:
    '变量将以表单形式让用户在对话前填写，用户填写的表单内容将自动替换提示词中的变量。',
  autoAddVar: '提示词中引用了未定义的变量，是否自动添加到用户输入表单中？',
  variableTable: {
    key: '变量 Key',
    name: '字段名称',
    optional: '可选',
    type: '类型',
    action: '操作',
    typeString: '文本',
    typeSelect: '下拉选项',
  },
  varKeyError: {
    canNoBeEmpty: '变量不能为空',
    tooLong: '变量: {{key}} 长度太长。不能超过 30 个字符',
    notValid: '变量: {{key}} 非法。只能包含英文字符，数字和下划线',
    notStartWithNumber: '变量: {{key}} 不能以数字开头',
    keyAlreadyExists: '变量:{{key}} 已存在',
  },
  otherError: {
    promptNoBeEmpty: '提示词不能为空',
    historyNoBeEmpty: '提示词中必须设置对话历史',
    queryNoBeEmpty: '提示词中必须设置查询内容',
  },
  variableConig: {
    modalTitle: '变量设置',
    description: '设置变量 {{varName}}',
    fieldType: '字段类型',
    string: '文本',
    paragraph: '段落',
    select: '下拉选项',
    notSet: '未设置，在 Prompt 中输入 {{input}} 试试',
    stringTitle: '文本框设置',
    maxLength: '最大长度',
    options: '选项',
    addOption: '添加选项',
  },
  openingStatement: {
    title: '对话开场白',
    add: '添加开场白',
    writeOpner: '编写开场白',
    placeholder: '请在这里输入开场白',
    noDataPlaceHolder:
      '在对话型应用中，让 AI 主动说第一段话可以拉近与用户间的距离。',
    varTip: '你可以使用变量， 试试输入 {{variable}}',
    tooShort: '对话前提示词至少 20 字才能生成开场白',
    notIncludeKey: '前缀提示词中不包含变量 {{key}}。请在前缀提示词中添加该变量',
  },
  modelConfig: {
    model: '语言模型',
    setTone: '模型设置',
    title: '模型及参数',
  },
  inputs: {
    title: '调试与预览',
    noPrompt: '尝试在对话前提示框中编写一些提示词',
    userInputField: '用户输入',
    noVar: '填入变量的值，每次启动新会话时该变量将自动替换提示词中的变量。',
    chatVarTip: '填入变量的值，该值将在每次开启一个新会话时自动替换到提示词中',
    completionVarTip: '填入变量的值，该值将在每次提交问题时自动替换到提示词中',
    previewTitle: '提示词预览',
    queryTitle: '查询内容',
    queryPlaceholder: '请输入文本内容',
    run: '运行',
  },
  result: '结果',
  datasetConfig: {
    params: '参数设置',
    top_k: 'Top K',
    top_kTip: '用于筛选与用户问题相似度最高的文本片段。系统同时会根据选用模型上下文窗口大小动态调整分段数量。',
    score_threshold: 'Score 阈值',
    score_thresholdTip: '用于设置文本片段筛选的相似度阈值。',
  },
}

export default translation
