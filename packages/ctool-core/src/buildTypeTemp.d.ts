// 程序自动生成文件无需手动修改



// 语言地区类型
type I18nLocale = "zh_CN" | "en"
// 语言key类型
type I18nKey = "component_upload_image" // 上传图片
     | "component_upload_file" // 上传文件
     | "component_upload_support_paste" // 提示: 支持直接粘贴文件
     | "component_content_type_text" // 文本
     | "component_content_type_base64" // Base64
     | "component_content_type_hex" // Hex
     | "component_content_type_hex_preserve_line_breaks" // 保留换行符
     | "component_content_type_upload" // 上传
     | "component_content_type_down" // 下载
     | "component_content_type_image" // 图片
     | "component_content_type_url" // Url
     | "component_content_output_analyse_encoding" // 自动识别编码
     | "component_content_output_url_safe" // Url 安全
     | "component_content_output_data_url" // DataUrl
     | "component_content_output_hex_type" // 类型
     | "component_content_output_hex_hex" // 字符串
     | "component_content_output_hex_dump" // Dump
     | "component_content_output_hex_caps" // 大小写
     | "component_content_output_hex_lower" // 小写
     | "component_content_output_hex_upper" // 大写
     | "component_content_output_hex_dump_format" // 格式
     | "component_content_output_hex_dump_width" // 宽度
     | "component_content_output_hex_dump_format_twos" // 2位
     | "component_content_output_hex_dump_format_fours" // 4位
     | "component_content_output_hex_dump_format_eights" // 8位
     | "component_content_output_hex_dump_format_sixteens" // 16位
     | "component_content_output_hex_dump_format_none" // 无分隔
     | "component_serialize_csv_table_row_object" // 行对象
     | "component_serialize_csv_table_keyed" // 关联数组
     | "component_serialize_csv_table_row_array" // 行数组
     | "component_serialize_csv_table_column_array" // 列数组
     | "component_serialize_properties_convert_to_json_tree" // 支持(.)多级
     | "component_serialize_csv_quoted" // 引号
     | "component_serialize_csv_table_header" // 表头
     | "component_serialize_xml_attribute_prefix" // 属性前缀
     | "component_serialize_text_add_quote" // 添加引号
     | "component_serialize_text_delimiter" // 分隔符
     | "component_editor_line_wrapping" // 自动换行
     | "component_editor_line_number" // 显示行号
     | "component_editor_multiple" // 列选择模式
     | "component_editor_goto" // 代码定位
     | "component_editor_search" // 查找/替换
     | "component_editor_inline" // 内联模式
     | "component_click_help" // 点击查看说明文档
     | "component_display_fold_option" // 折叠选项
     | "component_display_expand_option" // 展开选项
     | "main_locale" // zh_CN
     | "main_category_common" // 常用
     | "main_category_encryption" // 加解密/签名
     | "main_category_conversion" // 转换
     | "main_category_encoder_decoder" // 编解码
     | "main_category_check" // 校验
     | "main_category_generate" // 生成
     | "main_category_other" // 其他
     | "main_ui_ok" // 确认
     | "main_ui_error" // 错误: {0}
     | "main_ui_cancel" // 取消
     | "main_ui_reload" // 重新加载
     | "main_ui_prompt" // 提示
     | "main_ui_setting" // 设置
     | "main_ui_config" // 配置
     | "main_ui_reset" // 重置
     | "main_ui_save" // 保存
     | "main_ui_submit" // 提交
     | "main_ui_views" // 查看
     | "main_ui_clear" // 清空
     | "main_ui_more" // 更多
     | "main_ui_null" // 暂无数据
     | "main_ui_load" // 加载
     | "main_ui_close" // 关闭
     | "main_ui_return" // 返回
     | "main_ui_input" // 输入
     | "main_ui_output" // 输出
     | "main_ui_down" // 下载
     | "main_ui_issues" // 问题反馈
     | "main_ui_open_full" // 新建全屏窗口
     | "main_ui_open_devtools" // 打开开发者工具
     | "main_ui_success" // 处理成功 ^o^
     | "main_ui_paste" // 粘贴
     | "main_ui_copy" // 复制
     | "main_ui_copy_text_ok" // 复制成功 ^o^
     | "main_ui_copy_image_ok" // 图片已复制 ^o^
     | "main_ui_op" // 操作
     | "main_ui_toggle_light" // 切换深色模式
     | "main_ui_toggle_dark" // 切换浅色模式
     | "main_ui_clipboard" // 剪贴板
     | "main_ui_advanced" // 高级
     | "main_ui_simple" // 简单
     | "main_ui_reference" // 参考
     | "main_ui_keyword" // 关键字
     | "main_ui_enable" // 启用
     | "main_ui_disable" // 禁用
     | "main_ui_other" // 其他
     | "main_setting_language" // 语言
     | "main_setting_layout" // 页面布局
     | "main_setting_layout_complex" // 复杂
     | "main_setting_layout_simple" // 精简
     | "main_tools_lists" // 全部工具列表
     | "main_common_tool" // 常用工具
     | "main_common_drag" // 拖动相应工具按钮进行操作
     | "main_unselected_tool" // 未选择工具
     | "main_keyboard_setting" // 快捷键
     | "main_display_mode" // 主题
     | "main_display_mode_light" // 浅色
     | "main_display_mode_dark" // 深色
     | "main_display_mode_auto" // 自动
     | "main_copy_results_to_clipboard" // 自动复制结果到剪贴板
     | "main_read_content_from_clipboard" // 自动读取剪贴板内容
     | "main_read_clipboard_content_trim" // 读取剪贴板内容过滤首尾不可见字符
     | "main_keyboard_firefox_1" // 请手动设置快捷键
     | "main_keyboard_firefox_2" // 请打开附加组件管理器（about:addons），点击“管理扩展程序”右侧的设置按钮，选择“管理扩展快捷键”来修改这些快捷键。
     | "main_keyboard_firefox_3" // 操作方法
     | "main_history" // 历史记录
     | "main_history_clear" // 清空历史记录
     | "main_history_time" // 操作时间
     | "main_history_data" // 数据
     | "main_history_null" // 暂无历史记录
     | "main_sidebar_expand" // 显示侧边栏
     | "main_sidebar_collapse" // 隐藏侧边栏
     | "main_search_tool" // 搜索
     | "main_search_placeholder" // 搜索工具
     | "main_recently_use" // 最近使用
     | "main_clipboard_get" // 授权剪贴板权限
     | "main_clipboard_granted" // 剪贴板授权成功
     | "main_clipboard_denied" // 暂无剪贴板授权, 请手动授权
     | "main_clipboard_prompt" // 点击获取剪贴板授权
     | "main_new_version_found" // 发现新版本, 建议重新加载页面
     | "main_last_updated" // 最后更新: 
     | "main_network_request_proxy" // 网络请求代理
     | "main_network_request_proxy_prompt" // 当前功能需要访问网络, 由于平台安全限制(跨域问题)需要使用代理访问, 请到设置页面启用[网络请求代理]
     | "main_privacy_policy" // 隐私条款
     | "main_auto_fill" // 自动填充
     | "main_auto_fill_explain" // 优先使用 {0} 秒内历史数据
     | "main_history_icon_badge_hidden" // 隐藏历史记录图标角标
     | "main_content_clear" // 清空输入
     | "tool_hash" // 哈希(hash)
     | "tool_hash_hash_keywords" // md5,sha1,sha256,sha512,sm3
     | "tool_encrypt" // 加密/解密
     | "tool_aes" // AES
     | "tool_aes_encrypt" // 加密
     | "tool_aes_decrypt" // 解密
     | "tool_des" // DES
     | "tool_des_encrypt" // 加密
     | "tool_des_decrypt" // 解密
     | "tool_tripleDes" // Triple DES
     | "tool_tripleDes_encrypt" // 加密
     | "tool_tripleDes_decrypt" // 解密
     | "tool_rc4" // RC4
     | "tool_rc4_encrypt" // 加密
     | "tool_rc4_decrypt" // 解密
     | "tool_rabbit" // Rabbit
     | "tool_rabbit_encrypt" // 加密
     | "tool_rabbit_decrypt" // 解密
     | "tool_sm2" // SM2
     | "tool_sm2_encrypt" // 加密
     | "tool_sm2_decrypt" // 解密
     | "tool_sm2_sign" // 签名
     | "tool_sm2_verify" // 验签
     | "tool_sm4" // SM4
     | "tool_sm4_encrypt" // 加密
     | "tool_sm4_decrypt" // 解密
     | "tool_rsa" // RSA
     | "tool_rsa_encrypt" // 加密
     | "tool_rsa_decrypt" // 解密
     | "tool_sign" // 签名/验签
     | "tool_base64" // Base64
     | "tool_base64_encoder" // 编码
     | "tool_base64_decoder" // 解码
     | "tool_json" // JSON工具
     | "tool_url" // URL编码
     | "tool_url_encoder" // 编码
     | "tool_url_decoder" // 解码
     | "tool_qrCode" // 二维码
     | "tool_qrCode_generate" // 生成
     | "tool_qrCode_parse" // 解析
     | "tool_barcode" // 条形码
     | "tool_pinyin" // 汉字转拼音
     | "tool_ip" // IP地址查询
     | "tool_code" // 代码
     | "tool_code_code" // 格式化
     | "tool_code_run" // 运行
     | "tool_code_code_keywords" // js,javascript,markdown,typescript,css,less,scss,yaml,html,xml,php,vue,angular,graphql,sql
     | "tool_unicode" // Unicode
     | "tool_unicode_encoder" // 编码
     | "tool_unicode_decoder" // 解码
     | "tool_radix" // 进制转换
     | "tool_regex" // 正则表达式
     | "tool_randomString" // 随机字符生成
     | "tool_serialize" // 序列化
     | "tool_serialize_serialize_keywords" // json,http query string,csv,html table,xml,yaml,toml,properties,php array,php serialize
     | "tool_diffs" // 文本比对
     | "tool_crontab" // Crontab
     | "tool_websocket" // Websocket
     | "tool_unit" // 单位换算
     | "tool_time" // 时间日期
     | "tool_time_timestamp" // 时间戳
     | "tool_time_timezone" // 时区
     | "tool_time_calculator" // 计算器
     | "tool_uuid" // UUID生成
     | "tool_ascii" // ASCII
     | "tool_variableConversion" // 变量名
     | "tool_jwt" // JWT解码
     | "tool_hexString" // Hex/String
     | "tool_hexString_stringToHex" // String => Hex
     | "tool_hexString_stringToHex_keywords" // 十六进制转字符串
     | "tool_hexString_hexToString" // Hex => String
     | "tool_hexString_hexToString_keywords" // 字符串转十六进制
     | "tool_text" // 文本处理
     | "tool_text_text_keywords" // 大小写转换,中英文标点转换,简繁转换,字符替换,字符统计,行去重,添加行号,行排序,过滤行首尾不可见字符,过滤空行
     | "tool_html" // Html编码
     | "tool_binary" // 原码/反码/补码
     | "tool_arm" // ARM/HEX
     | "tool_arm_armToHex" // ARM to HEX
     | "tool_arm_hexToArm" // HEX to ARM
     | "tool_bcrypt" // Bcrypt
     | "tool_ipcalc" // IP网络计算器
     | "tool_ipcalc_ipv4" // IPv4
     | "tool_ipcalc_ipv6" // IPv6
     | "tool_sqlFillParameter" // SQL参数填充
     | "tool_httpSnippet" // Http请求代码
     | "tool_dataValidation" // BCC/CRC/LRC
     | "tool_dataValidation_bcc" // BCC
     | "tool_dataValidation_crc" // CRC
     | "tool_dataValidation_lrc" // LRC
     | "tool_color" // 颜色
     | "tool_hmac" // HMAC
     | "tool_hmac_hmac_keywords" // md5,sha1,sha256,sha512,sm3
     | "tool_gzip" // GZIP
     | "tool_gzip_encoder" // 编码/压缩
     | "tool_gzip_decoder" // 解码/解压
     | "tool_urlParse" // Url解析
     | "tool_asn1" // ASN.1解码
     | "tool_dockerCompose" // Docker run到Compose
     | "tool_hash_hash" // 哈希(hash)
     | "tool_aes_encrypt_keywords" // 
     | "tool_aes_decrypt_keywords" // 
     | "tool_des_encrypt_keywords" // 
     | "tool_des_decrypt_keywords" // 
     | "tool_tripleDes_encrypt_keywords" // 
     | "tool_tripleDes_decrypt_keywords" // 
     | "tool_rc4_encrypt_keywords" // 
     | "tool_rc4_decrypt_keywords" // 
     | "tool_rabbit_encrypt_keywords" // 
     | "tool_rabbit_decrypt_keywords" // 
     | "tool_sm2_encrypt_keywords" // 
     | "tool_sm2_decrypt_keywords" // 
     | "tool_sm2_sign_keywords" // 
     | "tool_sm2_verify_keywords" // 
     | "tool_sm4_encrypt_keywords" // 
     | "tool_sm4_decrypt_keywords" // 
     | "tool_rsa_encrypt_keywords" // 
     | "tool_rsa_decrypt_keywords" // 
     | "tool_sign_sign" // 签名/验签
     | "tool_sign_sign_keywords" // 
     | "tool_base64_encoder_keywords" // 
     | "tool_base64_decoder_keywords" // 
     | "tool_json_json" // JSON工具
     | "tool_json_json_keywords" // 
     | "tool_url_encoder_keywords" // 
     | "tool_url_decoder_keywords" // 
     | "tool_qrCode_generate_keywords" // 
     | "tool_qrCode_parse_keywords" // 
     | "tool_barcode_barcode" // 条形码
     | "tool_barcode_barcode_keywords" // 
     | "tool_pinyin_pinyin" // 汉字转拼音
     | "tool_pinyin_pinyin_keywords" // 
     | "tool_ip_ip" // IP地址查询
     | "tool_ip_ip_keywords" // 
     | "tool_code_run_keywords" // 
     | "tool_unicode_encoder_keywords" // 
     | "tool_unicode_decoder_keywords" // 
     | "tool_radix_radix" // 进制转换
     | "tool_radix_radix_keywords" // 
     | "tool_regex_regex" // 正则表达式
     | "tool_regex_regex_keywords" // 
     | "tool_randomString_randomString" // 随机字符生成
     | "tool_randomString_randomString_keywords" // 
     | "tool_serialize_serialize" // 序列化
     | "tool_diffs_diffs" // 文本比对
     | "tool_diffs_diffs_keywords" // 
     | "tool_crontab_crontab" // Crontab
     | "tool_crontab_crontab_keywords" // 
     | "tool_websocket_websocket" // Websocket
     | "tool_websocket_websocket_keywords" // 
     | "tool_unit_unit" // 单位换算
     | "tool_unit_unit_keywords" // 
     | "tool_time_timestamp_keywords" // 
     | "tool_time_timezone_keywords" // 
     | "tool_time_calculator_keywords" // 
     | "tool_uuid_uuid" // UUID生成
     | "tool_uuid_uuid_keywords" // 
     | "tool_ascii_ascii" // ASCII
     | "tool_ascii_ascii_keywords" // 
     | "tool_variableConversion_variableConversion" // 变量名
     | "tool_variableConversion_variableConversion_keywords" // 
     | "tool_jwt_jwt" // JWT解码
     | "tool_jwt_jwt_keywords" // 
     | "tool_text_text" // 文本处理
     | "tool_html_html" // Html编码
     | "tool_html_html_keywords" // 
     | "tool_binary_binary" // 原码/反码/补码
     | "tool_binary_binary_keywords" // 
     | "tool_arm_armToHex_keywords" // 
     | "tool_arm_hexToArm_keywords" // 
     | "tool_bcrypt_bcrypt" // Bcrypt
     | "tool_bcrypt_bcrypt_keywords" // 
     | "tool_ipcalc_ipv4_keywords" // 
     | "tool_ipcalc_ipv6_keywords" // 
     | "tool_sqlFillParameter_sqlFillParameter" // SQL参数填充
     | "tool_sqlFillParameter_sqlFillParameter_keywords" // 
     | "tool_httpSnippet_httpSnippet" // Http请求代码
     | "tool_httpSnippet_httpSnippet_keywords" // 
     | "tool_dataValidation_bcc_keywords" // 
     | "tool_dataValidation_crc_keywords" // 
     | "tool_dataValidation_lrc_keywords" // 
     | "tool_color_color" // 颜色
     | "tool_color_color_keywords" // 
     | "tool_hmac_hmac" // HMAC
     | "tool_gzip_encoder_keywords" // 
     | "tool_gzip_decoder_keywords" // 
     | "tool_urlParse_urlParse" // Url解析
     | "tool_urlParse_urlParse_keywords" // 
     | "tool_asn1_asn1" // ASN.1解码
     | "tool_asn1_asn1_keywords" // 
     | "tool_dockerCompose_dockerCompose" // Docker run到Compose
     | "tool_dockerCompose_dockerCompose_keywords" // 
     | "hash_uppercase" // 大写
     | "hash_salt" // 加盐
     | "hash_salt_value" // 盐值
     | "hash_salt_mode" // 模式
     | "hash_salt_select" // 选择常用
     | "hash_multiple" // 批量
     | "hash_multiple_tooltip" // 按行执行哈希操作
     | "aes_iv_auto_fill" // Iv 自动填充(\0)
     | "sm2_generate_keypair" // 生成公钥/私钥
     | "sm2_public_key" // 公钥
     | "sm2_private_key" // 私钥
     | "sm2_source_data" // 签名原文
     | "sm2_sign_value" // 签名值
     | "sm2_userId" // UserId
     | "sm2_public_key_error" // 公钥格式错误
     | "rsa_private" // 私钥(PEM格式)
     | "rsa_public" // 公钥(PEM格式)
     | "rsa_encrypt_input" // 待加密内容
     | "rsa_decrypt_input" // 待解密内容
     | "sign_sign_data" // 待签名内容/验签数据
     | "sign_verify_code" // Base64编码后签名
     | "sign_sign" // 签名
     | "sign_verify" // 验签
     | "sign_generate_keypair" // 生成公钥/私钥
     | "sign_public_key" // PEM格式公钥
     | "sign_private_key" // PEM格式私钥
     | "sign_keypair_type" // 密钥格式
     | "sign_keypair_length" // 密钥长度
     | "sign_verify_fail" // 验签失败
     | "sign_verify_ok" // 验签成功
     | "json_from" // 来自于
     | "json_to" // 转换成
     | "json_common" // 常用
     | "json_key_rename" // 键命名
     | "json_format" // 格式化
     | "json_compress" // 压缩
     | "json_escape" // 转义
     | "json_clear_escape" // 移除转义
     | "json_add_escape" // 添加转义
     | "json_unicode_to_zh" // Unicode转中文
     | "json_zh_to_unicode" // 中文转Unicode
     | "json_object" // 转实体类
     | "json_path" // Path
     | "json_inline" // 内联(inline)
     | "json_asc" // 升序
     | "json_desc" // 降序
     | "json_key_sort" // 键排序
     | "json_repair" // JSON 修复
     | "json_json_path" // JSONPath
     | "json_jmes_path" // JMESPath
     | "json_line_info" // 长度
     | "qrCode_generate_option_common" // 常用
     | "qrCode_generate_option_content" // 内容
     | "qrCode_generate_option_corners_square" // 定位边框
     | "qrCode_generate_option_corners_dot" // 定位符
     | "qrCode_generate_option_background" // 背景
     | "qrCode_generate_option_size" // 大小
     | "qrCode_generate_option_margin" // 外边距
     | "qrCode_generate_option_correction" // 纠错
     | "qrCode_generate_option_gradient" // 渐变
     | "qrCode_generate_option_linear" // 线性
     | "qrCode_generate_option_radial" // 径向
     | "qrCode_generate_option_rotation" // 旋转
     | "qrCode_generate_option_style" // 样式
     | "qrCode_generate_option_dots" // 点
     | "qrCode_generate_option_square" // 方形
     | "qrCode_generate_option_rounded" // 圆形
     | "qrCode_generate_option_classy" // 平滑
     | "qrCode_generate_option_extra-rounded" // 圆角
     | "qrCode_generate_option_classy-rounded" // 平滑圆角
     | "qrCode_generate_option_dot" // 圆形
     | "qrCode_reader_parsing_failure" // 图片解析失败
     | "barcode_background" // 背景
     | "barcode_line_color" // 线条颜色
     | "barcode_bar_width" // 宽
     | "barcode_height" // 高
     | "barcode_margin" // 边距
     | "barcode_text" // 文本
     | "barcode_close" // 隐藏
     | "barcode_top" // 上方
     | "barcode_bottom" // 下方
     | "barcode_text_align" // 对齐
     | "barcode_left" // 居左
     | "barcode_center" // 居中
     | "barcode_right" // 居右
     | "barcode_font" // 字体
     | "barcode_bold" // 粗体
     | "barcode_italic" // 斜体
     | "barcode_font_size" // 大小
     | "barcode_generate_fail" // 生成失败
     | "pinyin_normal" // 无声调
     | "pinyin_tone" // 有声调
     | "pinyin_abbr" // 首字母
     | "pinyin_delimiter_null" // 无分隔符
     | "pinyin_delimiter_space" // 空格分隔
     | "pinyin_delimiter_1" // '-'中划线分隔
     | "pinyin_delimiter_2" // '_'下划线分隔
     | "pinyin_delimiter_3" // '.'点分隔
     | "pinyin_multiple_flag" // 显示多音字
     | "pinyin_tone_is_number" // 数字声调
     | "pinyin_upper" // 大写
     | "ip_input" // 请输入IP地址 (IPv4/IPv6)
     | "ip_query" // 查询
     | "ip_local" // 本地IP
     | "ip_info_source" // IP 信息来源
     | "ip_ok" // 查询成功
     | "ip_error" // 查询异常:{0}
     | "code_beautify" // 格式化
     | "code_indent_width" // 缩进空格 {0}
     | "code_indent_width_null" // 无缩进
     | "code_xml_collapse_content" // 内容同行
     | "code_compress" // 压缩
     | "code_run" // 运行
     | "code_running" // 运行中
     | "code_run_used_times" // 今日使用次数: {0} 
     | "code_run_config_explain" // 点击获取配置, 第三方服务({0})风险自担, 与Ctool没有任何关系
     | "code_not_support" // 暂不支持{0}的{1}
     | "unicode_mode_unicode_point_default" // Unicode 默认模式 \u[0-9a-f]{4}
     | "unicode_mode_unicode_point_wide" // Unicode 宽字符模式 \u[0-9a-f]{4,6}
     | "unicode_mode_unicode_point_wide_brace" // Unicode 宽字符模式(带大括号) \u{[0-9a-f]{4,6}}
     | "unicode_mode_unicode_number" // Unicode 编码模式 U+[0-9A-F]{4,6}
     | "unicode_mode_html_entity_10" // Html 实体(10进制) &#[0-9]+;
     | "unicode_mode_html_entity_16" // Html 实体(16进制)  &#x[0-9a-f]{1,6};
     | "unicode_mode_css_entity" // Css 实体(16进制) \[0-9a-f]{4,6}
     | "unicode_ignore_ascii" // 忽略 Ascii 字符
     | "radix_input_placeholder" // 请输入待转换数字
     | "radix_base" // {0} 进制
     | "radix_result" // 转换结果 {0}
     | "radix_alphabet" // 64位字母表
     | "radix_reset" // 重置
     | "radix_alphabet_length_error" // 转换字母表必须是64位长度
     | "regex_common" // 常用
     | "regex_expression" // 正则表达式
     | "regex_replace_content" // 替换内容
     | "regex_replace" // 替换
     | "regex_delete" // 删除
     | "regex_input" // 输入待处理内容
     | "regex_global" // 全局搜索
     | "regex_ignore_case" // 忽略大小写
     | "regex_output_count" // 共 {0} 个匹配项
     | "regex_output_empty" // 没有匹配结果，请检查正则
     | "regex_reference_name" // 字符
     | "regex_reference_text" // 描述
     | "randomString_length" // 长度
     | "randomString_amount" // 数量
     | "randomString_digital" // 数字
     | "randomString_lowercase" // 小写字母
     | "randomString_uppercase" // 大写字母
     | "randomString_chars" // 字符
     | "randomString_symbol" // 特殊符号
     | "diffs_collapse" // 折叠相同
     | "diffs_revert_direction" // 覆盖方向
     | "diffs_left_to_right" // 左 => 右
     | "diffs_right_to_left" // 左 <= 右
     | "crontab_expression" // 表达式
     | "crontab_execute_time" // 最近执行时间
     | "crontab_example" // 例子
     | "crontab_format" // 格式
     | "crontab_execute_time_list" // 最近10次执行时间
     | "crontab_no" // 第{0}次: {1}
     | "crontab_symbol" // 特殊符号
     | "crontab_l_prompt" // 谨慎使用 'L' 参数, 提前确认环境是否支持
     | "crontab_second_prompt" // 谨慎使用 秒级 任务, 提前确认环境是否支持
     | "crontab_description" // 描述
     | "crontab_symbol_description_1" // 代表任何时刻都接受的意思。举例来说，范例一内那个日、月、周都是*，就代表着不论何月、何日的礼拜几的12：00都执行后续命令的意思。
     | "crontab_symbol_description_2" // 代表分隔时段的意思。举例来说，如果要执行的工作是3：00与6：00时，就会是：0 3,6 * * * command时间还是有五列，不过第二列是 3,6 ，代表3与6都适用
     | "crontab_symbol_description_3" // 代表一段时间范围内，举例来说，8点到12点之间的每小时的20分都进行一项工作：20 8-12 * * * command仔细看到第二列变成8-12.代表 8,9,10,11,12 都适用的意思
     | "crontab_symbol_description_4" // 那个n代表数字，即是每隔n单位间隔的意思，例如每五分钟进行一次，则：*/5 * * * * command用*与/5来搭配，也可以写成0-59/5，意思相同
     | "crontab_generate" // 生成
     | "crontab_generate_ignore" // 忽略
     | "crontab_generate_second" // 秒
     | "crontab_generate_minute" // 分
     | "crontab_generate_hour" // 时
     | "crontab_generate_day" // 日
     | "crontab_generate_month" // 月
     | "crontab_generate_week" // 周
     | "crontab_generate_any" // 任意
     | "crontab_generate_scope" // 范围
     | "crontab_generate_interval" // 间隔
     | "crontab_generate_list" // 指定
     | "websocket_connect" // 连接
     | "websocket_reconnect" // 断线重连
     | "websocket_protocols" // 子协议
     | "websocket_protocols_tip" // 多个使用","分隔
     | "websocket_close" // 断开
     | "websocket_send_content" // 发送内容
     | "websocket_log_content" // 交互记录
     | "websocket_send" // 发送
     | "websocket_client" // 客户端
     | "websocket_server" // 服务端
     | "websocket_tips" // 提示
     | "websocket_error_connect" // ws还没有连接，或者连接失败，请检测
     | "websocket_error_content" // 发送内容不能为空
     | "websocket_connect_ok" // 连接成功
     | "websocket_close_ok" // 断开成功
     | "websocket_connect_start" // 开始连接:{0}
     | "websocket_close_start" // 开始断开:{0}
     | "websocket_keep_scroll" // 保持滚动
     | "unit_length" // 长度
     | "unit_area" // 面积
     | "unit_volume" // 体积
     | "unit_weight" // 质量
     | "unit_temperature" // 温度
     | "unit_pressure" // 压力
     | "unit_power" // 功率
     | "unit_work" // 功/能/热
     | "unit_density" // 密度
     | "unit_strength" // 力
     | "unit_time" // 时间
     | "unit_speed" // 速度
     | "unit_byte" // 数据存储
     | "unit_angle" // 角度
     | "unit_length_km" // 千米
     | "unit_length_m" // 米
     | "unit_length_dm" // 分米
     | "unit_length_cm" // 厘米
     | "unit_length_mm" // 毫米
     | "unit_length_um" // 微米
     | "unit_length_nm" // 纳米
     | "unit_length_pm" // 皮米
     | "unit_length_ly" // 光年
     | "unit_length_au" // 天文单位
     | "unit_length_in" // 英寸
     | "unit_length_ft" // 英尺
     | "unit_length_yd" // 码
     | "unit_length_mi" // 英里
     | "unit_length_nmi" // 海里
     | "unit_length_fm" // 英寻
     | "unit_length_fur" // 弗隆
     | "unit_length_cn_li" // 里
     | "unit_length_cn_zhang" // 丈
     | "unit_length_cn_chi" // 尺
     | "unit_length_cn_cun" // 寸
     | "unit_length_cn_fen" // 分
     | "unit_length_cn_li2" // 厘
     | "unit_length_cn_hao" // 毫
     | "unit_area_km_2" // 平方千米
     | "unit_area_ha" // 公顷
     | "unit_area_are" // 公亩
     | "unit_area_m_2" // 平方米
     | "unit_area_dm_2" // 平方分米
     | "unit_area_cm_2" // 平方厘米
     | "unit_area_mm_2" // 平方毫米
     | "unit_area_acre" // 英亩
     | "unit_area_mi_2" // 平方英里
     | "unit_area_yd_2" // 平方码
     | "unit_area_ft_2" // 平方英尺
     | "unit_area_in_2" // 平方英寸
     | "unit_area_rd_2" // 平方竿
     | "unit_area_cn_qing" // 顷
     | "unit_area_cn_mu" // 亩
     | "unit_area_cn_fen" // 分
     | "unit_area_cn_chi_2" // 平方尺
     | "unit_area_cn_cun_2" // 平方寸
     | "unit_volume_m_3" // 立方米
     | "unit_volume_dm_3" // 立方分米
     | "unit_volume_cm_3" // 立方厘米
     | "unit_volume_mm_3" // 立方毫米
     | "unit_volume_l" // 升
     | "unit_volume_dl" // 分升
     | "unit_volume_ml" // 毫升
     | "unit_volume_cl" // 厘升
     | "unit_volume_uL" // 微升
     | "unit_volume_hl" // 公石
     | "unit_volume_ft_3" // 立方英尺
     | "unit_volume_in_3" // 立方英寸
     | "unit_volume_yd_3" // 立方码
     | "unit_volume_acre_ft" // 亩英尺
     | "unit_volume_uk_gal" // 英制加仑
     | "unit_volume_us_gal" // 美制加仑
     | "unit_volume_uk_oz" // 英制液体盎司
     | "unit_volume_us_oz" // 美制液体盎司
     | "unit_weight_kg" // 千克
     | "unit_weight_g" // 克
     | "unit_weight_mg" // 毫克
     | "unit_weight_ug" // 微克
     | "unit_weight_t" // 吨
     | "unit_weight_q" // 公担
     | "unit_weight_ct" // 克拉
     | "unit_weight_lb" // 磅
     | "unit_weight_oz" // 盎司
     | "unit_weight_gr" // 格令
     | "unit_weight_lt" // 长吨
     | "unit_weight_st1" // 短吨
     | "unit_weight_st2" // 英石
     | "unit_weight_uk_cwt" // 英担
     | "unit_weight_us_cwt" // 美担
     | "unit_weight_dr" // 打兰
     | "unit_weight_cn_dan" // 担
     | "unit_weight_cn_jin" // 斤
     | "unit_weight_cn_liang" // 两
     | "unit_weight_cn_qian" // 钱
     | "unit_temperature_c" // 摄氏度
     | "unit_temperature_f" // 华氏度
     | "unit_temperature_k" // 开氏度
     | "unit_temperature_r" // 兰氏度
     | "unit_temperature_re" // 列氏度
     | "unit_pressure_pa" // 帕斯卡
     | "unit_pressure_kpa" // 千帕
     | "unit_pressure_hpa" // 百帕
     | "unit_pressure_atm" // 标准大气压
     | "unit_pressure_mmhg" // 毫米汞柱
     | "unit_pressure_in_hg" // 英寸汞柱
     | "unit_pressure_bar" // 巴
     | "unit_pressure_mbar" // 毫巴
     | "unit_pressure_psf" // 磅力/平方英尺
     | "unit_pressure_psi" // 磅力/平方英寸
     | "unit_pressure_mmwg" // 毫米水柱
     | "unit_pressure_kgf_cm_2" // 公斤力/平方厘米
     | "unit_pressure_kgf_m_2" // 公斤力/平方米
     | "unit_pressure_mpa" // 兆帕
     | "unit_power_w" // 瓦
     | "unit_power_kw" // 千瓦
     | "unit_power_hp" // 英制马力
     | "unit_power_ps" // 米制马力
     | "unit_power_kg_m_s" // 公斤·米/秒
     | "unit_power_kcal_s" // 千卡/秒
     | "unit_power_btu_s" // 英热单位/秒
     | "unit_power_ft_lb_s" // 英尺·磅/秒
     | "unit_power_j_s" // 焦耳/秒
     | "unit_power_n_m_s" // 牛顿·米/秒
     | "unit_power_dbm" // 分贝毫瓦
     | "unit_power_dbw" // 分贝瓦
     | "unit_work_j" // 焦耳
     | "unit_work_kg_m" // 公斤·米
     | "unit_work_ps_h" // 米制马力·时
     | "unit_work_hp_h" // 英制马力·时
     | "unit_work_kw_h" // 千瓦·时
     | "unit_work_kw_h_" // 度
     | "unit_work_cal" // 卡
     | "unit_work_kcal" // 千卡
     | "unit_work_btu" // 英热单位
     | "unit_work_ft_lb" // 英尺·磅
     | "unit_work_kj" // 千焦
     | "unit_density_kg_cm_3" // 千克/立方厘米
     | "unit_density_kg_dm_3" // 千克/立方分米
     | "unit_density_kg_m_3" // 千克/立方米
     | "unit_density_g_cm_3" // 克/立方厘米
     | "unit_density_g_dm_3" // 克/立方分米
     | "unit_density_g_m_3" // 克/立方米
     | "unit_strength_n" // 牛
     | "unit_strength_kn" // 千牛
     | "unit_strength_kgf" // 千克力
     | "unit_strength_gf" // 克力
     | "unit_strength_tf" // 公吨力
     | "unit_strength_lbf" // 磅力
     | "unit_strength_kip" // 千磅力
     | "unit_strength_dyn" // 达因
     | "unit_time_yr" // 年
     | "unit_time_week" // 周
     | "unit_time_d" // 天
     | "unit_time_h" // 时
     | "unit_time_min" // 分
     | "unit_time_s" // 秒
     | "unit_time_ms" // 毫秒
     | "unit_time_us" // 微秒
     | "unit_time_ns" // 纳秒
     | "unit_speed_m_s" // 米/秒
     | "unit_speed_km_s" // 千米/秒
     | "unit_speed_km_h" // 千米/时
     | "unit_speed_c" // 光速
     | "unit_speed_mach" // 马赫
     | "unit_speed_mile_h" // 英里/时
     | "unit_speed_in_s" // 英寸/秒
     | "unit_byte_bit" // 比特
     | "unit_byte_b" // 字节
     | "unit_byte_kb" // 千字节
     | "unit_byte_mb" // 兆字节
     | "unit_byte_gb" // 千兆字节
     | "unit_byte_tb" // 太字节
     | "unit_byte_pb" // 拍字节
     | "unit_byte_eb" // 艾字节
     | "unit_angle_circle" // 圆周
     | "unit_angle_angle" // 直角
     | "unit_angle_gon" // 百分度
     | "unit_angle_degree" // 度
     | "unit_angle_min" // 分
     | "unit_angle_s" // 秒
     | "unit_angle_rad" // 弧度
     | "unit_angle_mrad" // 毫弧度
     | "unit_metric_system" // 公制
     | "unit_imperial_units" // 英制
     | "unit_chinese_units" // 市制
     | "unit_angle_units" // 角度制
     | "unit_radian_units" // 弧度制
     | "unit_all" // 全部
     | "time_timezone" // 时区
     | "time_error_format" // 输入时间格式异常
     | "time_current_time" // 当前时间
     | "time_second" // 秒
     | "time_millisecond" // 毫秒
     | "time_nanosecond" // 纳秒
     | "time_diff_tool" // 差值计算器
     | "time_and" // 与
     | "time_diff" // 相差
     | "time_operation" // 时间操作
     | "time_add" // 添加
     | "time_reduce" // 减少
     | "time_after" // 后
     | "time_is" // 为
     | "time_error_duration_length" // 年/月间隔只能是整数
     | "time_year" // 年
     | "time_month" // 月
     | "time_week" // 周
     | "time_day" // 天
     | "time_hour" // 小时
     | "time_minute" // 分钟
     | "time_analyze" // 时间分析
     | "time_analyze_year" // 年
     | "time_analyze_quarter" // 季度
     | "time_analyze_month" // 月
     | "time_analyze_year_output" // {year}年:{quarter}季度,{weekOfYear}周,{dayOfYear}天,{hourOfYear}小时,{minuteOfYear}分钟,{secondOfYear}秒
     | "time_analyze_quarter_output" // {quarter}季度:{weekOfQuarter}周,{dayOfQuarter}天,{hourOfQuarter}小时,{minuteOfQuarter}分钟,{secondOfQuarter}秒
     | "time_analyze_month_output" // {month}月:{weekOfMonth}周,{hourOfMonth}小时,{minuteOfMonth}分钟,{secondOfMonth}秒
     | "time_timestamp_input_placeholder" // 支持 YYYY-MM-DD HH:mm:ss[.\d+] 与 时间戳(秒/毫秒/纳秒) 输入
     | "time_unix_auto" // 自动识别类型
     | "time_normal_second" // 标准时间(秒)
     | "time_normal_millisecond" // 标准时间(毫秒)
     | "time_normal_nanosecond" // 标准时间(纳秒)
     | "time_unix_second" // Unix时间戳(秒)
     | "time_unix_millisecond" // Unix时间戳(毫秒)
     | "time_unix_nanosecond" // Unix时间戳(纳秒)
     | "time_format" // 格式
     | "time_value" // 值
     | "time_timezone_input_placeholder" // 支持 YYYY-MM-DD HH:mm:ss[.SSS] 时间格式 输入
     | "uuid_amount" // 数量
     | "uuid_hyphens" // 连接符(-)
     | "uuid_is_upper" // 大写
     | "uuid_uint8_array" // Uint8 Array
     | "ascii_input_prompt" // 请输入待转换 {0} 数字, 多个用空格分隔
     | "ascii_input_str_prompt" // 请输入待转换 ascii 字符串
     | "ascii_input_str" // 字符串
     | "ascii_input_bin" // 二进制
     | "ascii_input_oct" // 八进制
     | "ascii_input_dec" // 十进制
     | "ascii_input_hex" // 十六进制
     | "ascii_yes" // 是
     | "ascii_no" // 否
     | "ascii_is_visible" // 是否可见
     | "ascii_description" // 描述
     | "ascii_code_nul" // 空字符（Null）
     | "ascii_code_soh" // 标题开始
     | "ascii_code_stx" // 本文开始
     | "ascii_code_etx" // 本文结束
     | "ascii_code_eot" // 传输结束
     | "ascii_code_enq" // 请求
     | "ascii_code_ack" // 确认回应
     | "ascii_code_bel" // 响铃
     | "ascii_code_bs" // 退格
     | "ascii_code_tab" // 水平定位符号
     | "ascii_code_lf" // 换行键
     | "ascii_code_vt" // 垂直定位符号
     | "ascii_code_ff" // 换页键
     | "ascii_code_cr" // 归位键
     | "ascii_code_so" // 取消变换（Shift out）
     | "ascii_code_si" // 启用变换（Shift in）
     | "ascii_code_dle" // 跳出数据通讯
     | "ascii_code_dc1" // 设备控制一（XON 启用软件速度控制）
     | "ascii_code_dc2" // 设备控制二
     | "ascii_code_dc3" // 设备控制三（XOFF 停用软件速度控制）
     | "ascii_code_dc4" // 设备控制四
     | "ascii_code_nak" // 确认失败回应
     | "ascii_code_syn" // 同步用暂停
     | "ascii_code_etb" // 区块传输结束
     | "ascii_code_can" // 取消
     | "ascii_code_em" // 连接介质中断
     | "ascii_code_sub" // 替换
     | "ascii_code_esc" // 跳出
     | "ascii_code_fs" // 文件分割符
     | "ascii_code_gs" // 组群分隔符
     | "ascii_code_rs" // 记录分隔符
     | "ascii_code_us" // 单元分隔符
     | "ascii_code_del" // 删除
     | "ascii_code_space" // 空格
     | "variableConversion_input" // 输入
     | "variableConversion_input_placeholder" // 一行一个
     | "text_case_conversion" // 大小写
     | "text_upper_all" // 全部大写
     | "text_lower_all" // 全部小写
     | "text_upper_line_start" // 行首大写
     | "text_lower_line_start" // 行首小写
     | "text_upper_word_start" // 词首大写
     | "text_lower_word_start" // 词首小写
     | "text_punctuation" // 标点
     | "text_cn" // 中文
     | "text_en" // 英文
     | "text_simplified_traditional" // 简繁
     | "text_simplified" // 简体
     | "text_traditional" // 繁体
     | "text_replace" // 替换
     | "text_line_remove_duplicate" // 行去重
     | "text_line_number" // 行号
     | "text_line_number_add" // 添加
     | "text_line_number_remove" // 移除
     | "text_sort" // 排序
     | "text_line_sort_asc" // 行升序
     | "text_line_sort_desc" // 行降序
     | "text_reverse_line" // 行反转
     | "text_reverse_line_string" // 行字符反转
     | "text_reverse_all" // 字符串反转
     | "text_filter" // 过滤
     | "text_filter_trim" // 过滤行首尾不可见字符(trim)
     | "text_filter_blank_line" // 过滤多余空行
     | "text_filter_all_br" // 过滤换行符
     | "text_stat" // 统计
     | "text_more_stat" // 更多统计
     | "text_stat_explain" // 统计说明
     | "text_replace_search" // 查找
     | "text_replace_replace" // 替换(留空为删除)
     | "text_replace_regular" // 正则
     | "text_replace_explain" // 可输入多行, 按行进行批量替换
     | "text_string_length" // 字符数
     | "text_byte_length" // 字节数(utf8/gbk)
     | "text_word_length" // 字数
     | "text_line_length" // 行数
     | "text_zh_length" // (中文)字数/标点
     | "text_en_length" // (英文)字母/单词/标点
     | "text_int_length" // (数字)字符/单词
     | "text_item" // 项目
     | "text_explain" // 说明
     | "text_explain_byte_length_utf8_name" // 字节数utf8
     | "text_explain_byte_length_utf8_info" // 中文字符计3个长度
     | "text_explain_byte_length_gbk_name" // 字节数gbk
     | "text_explain_byte_length_gbk_info" // 中文字符计2个长度
     | "text_explain_string_length_name" // 字符数
     | "text_explain_string_length_info" // 中/英文字符均计1个长度 换行符不计入长度
     | "text_explain_word_length_name" // 字数
     | "text_explain_word_length_info" // 中文字数+英文单词数+中文标点数+英文标点数+数字单词数
     | "text_explain_int_length_name" // 数字字符
     | "text_explain_int_length_info" // 统计单个数字出现次数 例如:'a1024 1024' 结果为:8
     | "text_explain_int_word_length_name" // 数字单词
     | "text_explain_int_word_length_info" // 例如:'a1024 1024' 结果为:1 其中:'a1024' 为英文单词 '1024' 为数字单词
     | "text_explain_blank_line_length_name" // 行数
     | "text_explain_blank_line_length_info" // 空行也会计入行数
     | "text_value" // 值
     | "text_stat_show" // 字数: {0}  UTF-8: {1}  GBK: {2}
     | "text_rename" // 命名
     | "text_escape" // 转义符
     | "text_escape_single_quote" // 单引号
     | "text_escape_double_quote" // 双引号
     | "text_escape_backslash" // 反斜杠
     | "text_escape_new_line" // 换行符
     | "text_escape_carriage_return" // 回车符
     | "text_escape_tab" // 水平制表符
     | "text_escape_vertical_tab" // 垂直制表符
     | "text_escape_backspace" // 退格符
     | "text_escape_form_feed" // 换页符
     | "text_escape_forward" // 正向转义(\'=>')
     | "text_escape_reverse" // 逆向转义('=>\')
     | "html_input_encode" // 请输入待编码字符串
     | "html_input_decode" // 请输入待解码字符串
     | "binary_input" // 输入
     | "binary_length" // {0} 位
     | "binary_true_form" // 原码
     | "binary_inverse" // 反码
     | "binary_complement" // 补码
     | "binary_error" // 错误: {0}
     | "arm_info_source" // 数据来源:
     | "arm_convert" // 转换
     | "arm_output" // 输出
     | "arm_error" // 错误: {0}
     | "bcrypt_generate" // 生成
     | "bcrypt_password" // 明文(String)
     | "bcrypt_hash" // 哈希(Hash)
     | "bcrypt_rounds" // Rounds
     | "bcrypt_check" // 校验
     | "bcrypt_check_result_success" // 正确
     | "bcrypt_check_result_error" // 错误
     | "bcrypt_rounds_range" // Rounds 范围 [{0} - {1}]
     | "ipcalc_format" // 支持的输入格式
     | "ipcalc_ip" // IP地址
     | "ipcalc_mask" // 掩码
     | "ipcalc_random" // 随机
     | "ipcalc_limit" // 数量
     | "ipcalc_short" // 缩短
     | "ipcalc_ip_info" // IP 信息
     | "ipcalc_ip_info_full" // 扩展地址
     | "ipcalc_ip_info_short" // 缩短地址
     | "ipcalc_ip_info_ptr" // PTR
     | "ipcalc_ip_info_long" // 整型IP
     | "ipcalc_ip_info_ip8" // 点分八进制IP
     | "ipcalc_ip_info_ip10" // 点分十进制IP
     | "ipcalc_ip_info_ip16" // 点分十六进制IP
     | "ipcalc_ip_info_ip2" // 点分二进制IP
     | "ipcalc_mask_info" // 掩码信息
     | "ipcalc_mask_info_mask" // 子网掩码
     | "ipcalc_mask_info_long" // 整型掩码
     | "ipcalc_mask_info_opposite" // 反掩码
     | "ipcalc_mask_info_mask8" // 点分八进制掩码
     | "ipcalc_mask_info_mask16" // 点分十六进制掩码
     | "ipcalc_mask_info_mask2" // 点分二进制掩码
     | "ipcalc_network_info" // 网络信息
     | "ipcalc_subnet" // 子网信息
     | "ipcalc_network_info_available" // 可用数量
     | "ipcalc_network_info_size" // 全部数量
     | "ipcalc_network_info_base" // 网络
     | "ipcalc_network_info_first" // 第一个IP
     | "ipcalc_network_info_last" // 最后一个IP
     | "ipcalc_network_info_broadcast" // 广播地址
     | "ipcalc_mask_set_title" // 通过可用IP数量设置掩码
     | "sqlFillParameter_parameter" // 参数
     | "sqlFillParameter_parameter_too_little" // 参数个数不足
     | "color_input_placeholder" // 请输入颜色 {0} 值 例子:{1}
     | "hmac_uppercase" // 大写
     | "hmac_secret" // 密钥
     | "hmac_multiple" // 批量
     | "hmac_multiple_tooltip" // 按行执行操作
     | "asn1_input_der_text" // 请输入ASN.1 DER格式文本
     | "asn1_output_result" // 解码结果
declare const $t: (key: I18nKey | string, value?: Record<string, any> | any[], locale?: I18nLocale) => string