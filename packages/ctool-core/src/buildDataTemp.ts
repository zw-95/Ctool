// 程序自动生成文件无需手动修改

import {ToolRouteConfig} from "@/types"
import {AllLocaleStructure} from "@/types"
import {ToolType, FeatureType} from "@/config"


// 路由配置
export const toolRoutes: ToolRouteConfig[] = [
    {
        tool: "hash",
        feature: "hash",
        component: () => import('@/tools/hash/Hash.vue')
    },
    {
        tool: "aes",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/aes/Encrypt.vue')
    },
    {
        tool: "aes",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/aes/Decrypt.vue')
    },
    {
        tool: "des",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/des/Encrypt.vue')
    },
    {
        tool: "des",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/des/Decrypt.vue')
    },
    {
        tool: "tripleDes",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/tripleDes/Encrypt.vue')
    },
    {
        tool: "tripleDes",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/tripleDes/Decrypt.vue')
    },
    {
        tool: "rc4",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/rc4/Encrypt.vue')
    },
    {
        tool: "rc4",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/rc4/Decrypt.vue')
    },
    {
        tool: "rabbit",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/rabbit/Encrypt.vue')
    },
    {
        tool: "rabbit",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/rabbit/Decrypt.vue')
    },
    {
        tool: "sm2",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/sm2/Encrypt.vue')
    },
    {
        tool: "sm2",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/sm2/Decrypt.vue')
    },
    {
        tool: "sm2",
        feature: "sign",
        component: () => import('@/tools/encrypt/sm2/Sign.vue')
    },
    {
        tool: "sm2",
        feature: "verify",
        component: () => import('@/tools/encrypt/sm2/Verify.vue')
    },
    {
        tool: "sm4",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/sm4/Encrypt.vue')
    },
    {
        tool: "sm4",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/sm4/Decrypt.vue')
    },
    {
        tool: "rsa",
        feature: "encrypt",
        component: () => import('@/tools/encrypt/rsa/Encrypt.vue')
    },
    {
        tool: "rsa",
        feature: "decrypt",
        component: () => import('@/tools/encrypt/rsa/Decrypt.vue')
    },
    {
        tool: "sign",
        feature: "sign",
        component: () => import('@/tools/sign/Sign.vue')
    },
    {
        tool: "base64",
        feature: "encoder",
        component: () => import('@/tools/base64/Encoder.vue')
    },
    {
        tool: "base64",
        feature: "decoder",
        component: () => import('@/tools/base64/Decoder.vue')
    },
    {
        tool: "json",
        feature: "json",
        component: () => import('@/tools/json/Json.vue')
    },
    {
        tool: "url",
        feature: "encoder",
        component: () => import('@/tools/url/Encoder.vue')
    },
    {
        tool: "url",
        feature: "decoder",
        component: () => import('@/tools/url/Decoder.vue')
    },
    {
        tool: "qrCode",
        feature: "generate",
        component: () => import('@/tools/qrCode/Generate.vue')
    },
    {
        tool: "qrCode",
        feature: "parse",
        component: () => import('@/tools/qrCode/Parse.vue')
    },
    {
        tool: "barcode",
        feature: "barcode",
        component: () => import('@/tools/barcode/Barcode.vue')
    },
    {
        tool: "pinyin",
        feature: "pinyin",
        component: () => import('@/tools/pinyin/Pinyin.vue')
    },
    {
        tool: "ip",
        feature: "ip",
        component: () => import('@/tools/ip/Ip.vue')
    },
    {
        tool: "code",
        feature: "code",
        component: () => import('@/tools/code/Code.vue')
    },
    {
        tool: "code",
        feature: "run",
        component: () => import('@/tools/code/Run.vue')
    },
    {
        tool: "unicode",
        feature: "encoder",
        component: () => import('@/tools/unicode/Encoder.vue')
    },
    {
        tool: "unicode",
        feature: "decoder",
        component: () => import('@/tools/unicode/Decoder.vue')
    },
    {
        tool: "radix",
        feature: "radix",
        component: () => import('@/tools/radix/Radix.vue')
    },
    {
        tool: "regex",
        feature: "regex",
        component: () => import('@/tools/regex/Regex.vue')
    },
    {
        tool: "randomString",
        feature: "randomString",
        component: () => import('@/tools/randomString/RandomString.vue')
    },
    {
        tool: "serialize",
        feature: "serialize",
        component: () => import('@/tools/serialize/Serialize.vue')
    },
    {
        tool: "diffs",
        feature: "diffs",
        component: () => import('@/tools/diffs/Diffs.vue')
    },
    {
        tool: "crontab",
        feature: "crontab",
        component: () => import('@/tools/crontab/Crontab.vue')
    },
    {
        tool: "websocket",
        feature: "websocket",
        component: () => import('@/tools/websocket/Websocket.vue')
    },
    {
        tool: "unit",
        feature: "unit",
        component: () => import('@/tools/unit/Unit.vue')
    },
    {
        tool: "time",
        feature: "timestamp",
        component: () => import('@/tools/time/Timestamp.vue')
    },
    {
        tool: "time",
        feature: "timezone",
        component: () => import('@/tools/time/Timezone.vue')
    },
    {
        tool: "time",
        feature: "calculator",
        component: () => import('@/tools/time/Calculator.vue')
    },
    {
        tool: "uuid",
        feature: "uuid",
        component: () => import('@/tools/uuid/Uuid.vue')
    },
    {
        tool: "ascii",
        feature: "ascii",
        component: () => import('@/tools/ascii/Ascii.vue')
    },
    {
        tool: "variableConversion",
        feature: "variableConversion",
        component: () => import('@/tools/variableConversion/VariableConversion.vue')
    },
    {
        tool: "jwt",
        feature: "jwt",
        component: () => import('@/tools/jwt/Jwt.vue')
    },
    {
        tool: "hexString",
        feature: "stringToHex",
        component: () => import('@/tools/hexString/StringToHex.vue')
    },
    {
        tool: "hexString",
        feature: "hexToString",
        component: () => import('@/tools/hexString/HexToString.vue')
    },
    {
        tool: "text",
        feature: "text",
        component: () => import('@/tools/text/Text.vue')
    },
    {
        tool: "html",
        feature: "html",
        component: () => import('@/tools/html/Html.vue')
    },
    {
        tool: "binary",
        feature: "binary",
        component: () => import('@/tools/binary/Binary.vue')
    },
    {
        tool: "arm",
        feature: "armToHex",
        component: () => import('@/tools/arm/ArmToHex.vue')
    },
    {
        tool: "arm",
        feature: "hexToArm",
        component: () => import('@/tools/arm/HexToArm.vue')
    },
    {
        tool: "bcrypt",
        feature: "bcrypt",
        component: () => import('@/tools/bcrypt/Bcrypt.vue')
    },
    {
        tool: "ipcalc",
        feature: "ipv4",
        component: () => import('@/tools/ipcalc/Ipv4.vue')
    },
    {
        tool: "ipcalc",
        feature: "ipv6",
        component: () => import('@/tools/ipcalc/Ipv6.vue')
    },
    {
        tool: "sqlFillParameter",
        feature: "sqlFillParameter",
        component: () => import('@/tools/sqlFillParameter/SqlFillParameter.vue')
    },
    {
        tool: "httpSnippet",
        feature: "httpSnippet",
        component: () => import('@/tools/httpSnippet/HttpSnippet.vue')
    },
    {
        tool: "dataValidation",
        feature: "bcc",
        component: () => import('@/tools/dataValidation/Bcc.vue')
    },
    {
        tool: "dataValidation",
        feature: "crc",
        component: () => import('@/tools/dataValidation/Crc.vue')
    },
    {
        tool: "dataValidation",
        feature: "lrc",
        component: () => import('@/tools/dataValidation/Lrc.vue')
    },
    {
        tool: "color",
        feature: "color",
        component: () => import('@/tools/color/Color.vue')
    },
    {
        tool: "hmac",
        feature: "hmac",
        component: () => import('@/tools/hmac/Hmac.vue')
    },
    {
        tool: "gzip",
        feature: "encoder",
        component: () => import('@/tools/gzip/Encoder.vue')
    },
    {
        tool: "gzip",
        feature: "decoder",
        component: () => import('@/tools/gzip/Decoder.vue')
    },
    {
        tool: "urlParse",
        feature: "urlParse",
        component: () => import('@/tools/urlParse/UrlParse.vue')
    },
    {
        tool: "asn1",
        feature: "asn1",
        component: () => import('@/tools/asn1/Asn1.vue')
    },
    {
        tool: "dockerCompose",
        feature: "dockerCompose",
        component: () => import('@/tools/dockerCompose/DockerCompose.vue')
    },
]

// 语言包
export const locales:AllLocaleStructure = {
    "lists": [
        {
            "code": "_default",
            "name": "默认(default)"
        },
        {
            "code": "en",
            "name": "English"
        },
        {
            "code": "zh_CN",
            "name": "简体中文"
        }
    ],
    "detail": {
        "zh_CN": {
            "component_upload_image": {
                "message": "上传图片"
            },
            "component_upload_file": {
                "message": "上传文件"
            },
            "component_upload_support_paste": {
                "message": "提示: 支持直接粘贴文件"
            },
            "component_content_type_text": {
                "message": "文本"
            },
            "component_content_type_base64": {
                "message": "Base64"
            },
            "component_content_type_hex": {
                "message": "Hex"
            },
            "component_content_type_hex_preserve_line_breaks": {
                "message": "保留换行符"
            },
            "component_content_type_upload": {
                "message": "上传"
            },
            "component_content_type_down": {
                "message": "下载"
            },
            "component_content_type_image": {
                "message": "图片"
            },
            "component_content_type_url": {
                "message": "Url"
            },
            "component_content_output_analyse_encoding": {
                "message": "自动识别编码"
            },
            "component_content_output_url_safe": {
                "message": "Url 安全"
            },
            "component_content_output_data_url": {
                "message": "DataUrl"
            },
            "component_content_output_hex_type": {
                "message": "类型"
            },
            "component_content_output_hex_hex": {
                "message": "字符串"
            },
            "component_content_output_hex_dump": {
                "message": "Dump"
            },
            "component_content_output_hex_caps": {
                "message": "大小写"
            },
            "component_content_output_hex_lower": {
                "message": "小写"
            },
            "component_content_output_hex_upper": {
                "message": "大写"
            },
            "component_content_output_hex_dump_format": {
                "message": "格式"
            },
            "component_content_output_hex_dump_width": {
                "message": "宽度"
            },
            "component_content_output_hex_dump_format_twos": {
                "message": "2位"
            },
            "component_content_output_hex_dump_format_fours": {
                "message": "4位"
            },
            "component_content_output_hex_dump_format_eights": {
                "message": "8位"
            },
            "component_content_output_hex_dump_format_sixteens": {
                "message": "16位"
            },
            "component_content_output_hex_dump_format_none": {
                "message": "无分隔"
            },
            "component_serialize_csv_table_row_object": {
                "message": "行对象"
            },
            "component_serialize_csv_table_keyed": {
                "message": "关联数组"
            },
            "component_serialize_csv_table_row_array": {
                "message": "行数组"
            },
            "component_serialize_csv_table_column_array": {
                "message": "列数组"
            },
            "component_serialize_properties_convert_to_json_tree": {
                "message": "支持(.)多级"
            },
            "component_serialize_csv_quoted": {
                "message": "引号"
            },
            "component_serialize_csv_table_header": {
                "message": "表头"
            },
            "component_serialize_xml_attribute_prefix": {
                "message": "属性前缀"
            },
            "component_serialize_text_add_quote": {
                "message": "添加引号"
            },
            "component_serialize_text_delimiter": {
                "message": "分隔符"
            },
            "component_editor_line_wrapping": {
                "message": "自动换行"
            },
            "component_editor_line_number": {
                "message": "显示行号"
            },
            "component_editor_multiple": {
                "message": "列选择模式"
            },
            "component_editor_goto": {
                "message": "代码定位"
            },
            "component_editor_search": {
                "message": "查找/替换"
            },
            "component_editor_inline": {
                "message": "内联模式"
            },
            "component_click_help": {
                "message": "点击查看说明文档"
            },
            "component_display_fold_option": {
                "message": "折叠选项"
            },
            "component_display_expand_option": {
                "message": "展开选项"
            },
            "main_locale": {
                "message": "zh_CN"
            },
            "main_category_common": {
                "message": "常用"
            },
            "main_category_encryption": {
                "message": "加解密/签名"
            },
            "main_category_conversion": {
                "message": "转换"
            },
            "main_category_encoder_decoder": {
                "message": "编解码"
            },
            "main_category_check": {
                "message": "校验"
            },
            "main_category_generate": {
                "message": "生成"
            },
            "main_category_other": {
                "message": "其他"
            },
            "main_ui_ok": {
                "message": "确认"
            },
            "main_ui_error": {
                "message": "错误: {0}",
                "placeholders": [
                    "0"
                ]
            },
            "main_ui_cancel": {
                "message": "取消"
            },
            "main_ui_reload": {
                "message": "重新加载"
            },
            "main_ui_prompt": {
                "message": "提示"
            },
            "main_ui_setting": {
                "message": "设置"
            },
            "main_ui_config": {
                "message": "配置"
            },
            "main_ui_reset": {
                "message": "重置"
            },
            "main_ui_save": {
                "message": "保存"
            },
            "main_ui_submit": {
                "message": "提交"
            },
            "main_ui_views": {
                "message": "查看"
            },
            "main_ui_clear": {
                "message": "清空"
            },
            "main_ui_more": {
                "message": "更多"
            },
            "main_ui_null": {
                "message": "暂无数据"
            },
            "main_ui_load": {
                "message": "加载"
            },
            "main_ui_close": {
                "message": "关闭"
            },
            "main_ui_return": {
                "message": "返回"
            },
            "main_ui_input": {
                "message": "输入"
            },
            "main_ui_output": {
                "message": "输出"
            },
            "main_ui_down": {
                "message": "下载"
            },
            "main_ui_issues": {
                "message": "问题反馈"
            },
            "main_ui_open_full": {
                "message": "新建全屏窗口"
            },
            "main_ui_open_devtools": {
                "message": "打开开发者工具"
            },
            "main_ui_success": {
                "message": "处理成功 ^o^"
            },
            "main_ui_paste": {
                "message": "粘贴"
            },
            "main_ui_copy": {
                "message": "复制"
            },
            "main_ui_copy_text_ok": {
                "message": "复制成功 ^o^"
            },
            "main_ui_copy_image_ok": {
                "message": "图片已复制 ^o^"
            },
            "main_ui_op": {
                "message": "操作"
            },
            "main_ui_toggle_light": {
                "message": "切换深色模式"
            },
            "main_ui_toggle_dark": {
                "message": "切换浅色模式"
            },
            "main_ui_clipboard": {
                "message": "剪贴板"
            },
            "main_ui_advanced": {
                "message": "高级"
            },
            "main_ui_simple": {
                "message": "简单"
            },
            "main_ui_reference": {
                "message": "参考"
            },
            "main_ui_keyword": {
                "message": "关键字"
            },
            "main_ui_enable": {
                "message": "启用"
            },
            "main_ui_disable": {
                "message": "禁用"
            },
            "main_ui_other": {
                "message": "其他"
            },
            "main_setting_language": {
                "message": "语言"
            },
            "main_setting_layout": {
                "message": "页面布局"
            },
            "main_setting_layout_complex": {
                "message": "复杂"
            },
            "main_setting_layout_simple": {
                "message": "精简"
            },
            "main_tools_lists": {
                "message": "全部工具列表"
            },
            "main_common_tool": {
                "message": "常用工具"
            },
            "main_common_drag": {
                "message": "拖动相应工具按钮进行操作"
            },
            "main_unselected_tool": {
                "message": "未选择工具"
            },
            "main_keyboard_setting": {
                "message": "快捷键"
            },
            "main_display_mode": {
                "message": "主题"
            },
            "main_display_mode_light": {
                "message": "浅色"
            },
            "main_display_mode_dark": {
                "message": "深色"
            },
            "main_display_mode_auto": {
                "message": "自动"
            },
            "main_copy_results_to_clipboard": {
                "message": "自动复制结果到剪贴板"
            },
            "main_read_content_from_clipboard": {
                "message": "自动读取剪贴板内容"
            },
            "main_read_clipboard_content_trim": {
                "message": "读取剪贴板内容过滤首尾不可见字符"
            },
            "main_keyboard_firefox_1": {
                "message": "请手动设置快捷键"
            },
            "main_keyboard_firefox_2": {
                "message": "请打开附加组件管理器（about:addons），点击“管理扩展程序”右侧的设置按钮，选择“管理扩展快捷键”来修改这些快捷键。"
            },
            "main_keyboard_firefox_3": {
                "message": "操作方法"
            },
            "main_history": {
                "message": "历史记录"
            },
            "main_history_clear": {
                "message": "清空历史记录"
            },
            "main_history_time": {
                "message": "操作时间"
            },
            "main_history_data": {
                "message": "数据"
            },
            "main_history_null": {
                "message": "暂无历史记录"
            },
            "main_sidebar_expand": {
                "message": "显示侧边栏"
            },
            "main_sidebar_collapse": {
                "message": "隐藏侧边栏"
            },
            "main_search_tool": {
                "message": "搜索"
            },
            "main_search_placeholder": {
                "message": "搜索工具"
            },
            "main_recently_use": {
                "message": "最近使用"
            },
            "main_clipboard_get": {
                "message": "授权剪贴板权限"
            },
            "main_clipboard_granted": {
                "message": "剪贴板授权成功"
            },
            "main_clipboard_denied": {
                "message": "暂无剪贴板授权, 请手动授权"
            },
            "main_clipboard_prompt": {
                "message": "点击获取剪贴板授权"
            },
            "main_new_version_found": {
                "message": "发现新版本, 建议重新加载页面"
            },
            "main_last_updated": {
                "message": "最后更新: "
            },
            "main_network_request_proxy": {
                "message": "网络请求代理"
            },
            "main_network_request_proxy_prompt": {
                "message": "当前功能需要访问网络, 由于平台安全限制(跨域问题)需要使用代理访问, 请到设置页面启用[网络请求代理]"
            },
            "main_privacy_policy": {
                "message": "隐私条款"
            },
            "main_auto_fill": {
                "message": "自动填充"
            },
            "main_auto_fill_explain": {
                "message": "优先使用 {0} 秒内历史数据",
                "placeholders": [
                    "0"
                ]
            },
            "main_history_icon_badge_hidden": {
                "message": "隐藏历史记录图标角标"
            },
            "main_content_clear": {
                "message": "清空输入"
            },
            "tool_hash": {
                "message": "哈希(hash)"
            },
            "tool_hash_hash_keywords": {
                "message": "md5,sha1,sha256,sha512,sm3"
            },
            "tool_encrypt": {
                "message": "加密/解密"
            },
            "tool_aes": {
                "message": "AES"
            },
            "tool_aes_encrypt": {
                "message": "加密"
            },
            "tool_aes_decrypt": {
                "message": "解密"
            },
            "tool_des": {
                "message": "DES"
            },
            "tool_des_encrypt": {
                "message": "加密"
            },
            "tool_des_decrypt": {
                "message": "解密"
            },
            "tool_tripleDes": {
                "message": "Triple DES"
            },
            "tool_tripleDes_encrypt": {
                "message": "加密"
            },
            "tool_tripleDes_decrypt": {
                "message": "解密"
            },
            "tool_rc4": {
                "message": "RC4"
            },
            "tool_rc4_encrypt": {
                "message": "加密"
            },
            "tool_rc4_decrypt": {
                "message": "解密"
            },
            "tool_rabbit": {
                "message": "Rabbit"
            },
            "tool_rabbit_encrypt": {
                "message": "加密"
            },
            "tool_rabbit_decrypt": {
                "message": "解密"
            },
            "tool_sm2": {
                "message": "SM2"
            },
            "tool_sm2_encrypt": {
                "message": "加密"
            },
            "tool_sm2_decrypt": {
                "message": "解密"
            },
            "tool_sm2_sign": {
                "message": "签名"
            },
            "tool_sm2_verify": {
                "message": "验签"
            },
            "tool_sm4": {
                "message": "SM4"
            },
            "tool_sm4_encrypt": {
                "message": "加密"
            },
            "tool_sm4_decrypt": {
                "message": "解密"
            },
            "tool_rsa": {
                "message": "RSA"
            },
            "tool_rsa_encrypt": {
                "message": "加密"
            },
            "tool_rsa_decrypt": {
                "message": "解密"
            },
            "tool_sign": {
                "message": "签名/验签"
            },
            "tool_base64": {
                "message": "Base64"
            },
            "tool_base64_encoder": {
                "message": "编码"
            },
            "tool_base64_decoder": {
                "message": "解码"
            },
            "tool_json": {
                "message": "JSON工具"
            },
            "tool_url": {
                "message": "URL编码"
            },
            "tool_url_encoder": {
                "message": "编码"
            },
            "tool_url_decoder": {
                "message": "解码"
            },
            "tool_qrCode": {
                "message": "二维码"
            },
            "tool_qrCode_generate": {
                "message": "生成"
            },
            "tool_qrCode_parse": {
                "message": "解析"
            },
            "tool_barcode": {
                "message": "条形码"
            },
            "tool_pinyin": {
                "message": "汉字转拼音"
            },
            "tool_ip": {
                "message": "IP地址查询"
            },
            "tool_code": {
                "message": "代码"
            },
            "tool_code_code": {
                "message": "格式化"
            },
            "tool_code_run": {
                "message": "运行"
            },
            "tool_code_code_keywords": {
                "message": "js,javascript,markdown,typescript,css,less,scss,yaml,html,xml,php,vue,angular,graphql,sql"
            },
            "tool_unicode": {
                "message": "Unicode"
            },
            "tool_unicode_encoder": {
                "message": "编码"
            },
            "tool_unicode_decoder": {
                "message": "解码"
            },
            "tool_radix": {
                "message": "进制转换"
            },
            "tool_regex": {
                "message": "正则表达式"
            },
            "tool_randomString": {
                "message": "随机字符生成"
            },
            "tool_serialize": {
                "message": "序列化"
            },
            "tool_serialize_serialize_keywords": {
                "message": "json,http query string,csv,html table,xml,yaml,toml,properties,php array,php serialize"
            },
            "tool_diffs": {
                "message": "文本比对"
            },
            "tool_crontab": {
                "message": "Crontab"
            },
            "tool_websocket": {
                "message": "Websocket"
            },
            "tool_unit": {
                "message": "单位换算"
            },
            "tool_time": {
                "message": "时间日期"
            },
            "tool_time_timestamp": {
                "message": "时间戳"
            },
            "tool_time_timezone": {
                "message": "时区"
            },
            "tool_time_calculator": {
                "message": "计算器"
            },
            "tool_uuid": {
                "message": "UUID生成"
            },
            "tool_ascii": {
                "message": "ASCII"
            },
            "tool_variableConversion": {
                "message": "变量名"
            },
            "tool_jwt": {
                "message": "JWT解码"
            },
            "tool_hexString": {
                "message": "Hex/String"
            },
            "tool_hexString_stringToHex": {
                "message": "String => Hex"
            },
            "tool_hexString_stringToHex_keywords": {
                "message": "十六进制转字符串"
            },
            "tool_hexString_hexToString": {
                "message": "Hex => String"
            },
            "tool_hexString_hexToString_keywords": {
                "message": "字符串转十六进制"
            },
            "tool_text": {
                "message": "文本处理"
            },
            "tool_text_text_keywords": {
                "message": "大小写转换,中英文标点转换,简繁转换,字符替换,字符统计,行去重,添加行号,行排序,过滤行首尾不可见字符,过滤空行"
            },
            "tool_html": {
                "message": "Html编码"
            },
            "tool_binary": {
                "message": "原码/反码/补码"
            },
            "tool_arm": {
                "message": "ARM/HEX"
            },
            "tool_arm_armToHex": {
                "message": "ARM to HEX"
            },
            "tool_arm_hexToArm": {
                "message": "HEX to ARM"
            },
            "tool_bcrypt": {
                "message": "Bcrypt"
            },
            "tool_ipcalc": {
                "message": "IP网络计算器"
            },
            "tool_ipcalc_ipv4": {
                "message": "IPv4"
            },
            "tool_ipcalc_ipv6": {
                "message": "IPv6"
            },
            "tool_sqlFillParameter": {
                "message": "SQL参数填充"
            },
            "tool_httpSnippet": {
                "message": "Http请求代码"
            },
            "tool_dataValidation": {
                "message": "BCC/CRC/LRC"
            },
            "tool_dataValidation_bcc": {
                "message": "BCC"
            },
            "tool_dataValidation_crc": {
                "message": "CRC"
            },
            "tool_dataValidation_lrc": {
                "message": "LRC"
            },
            "tool_color": {
                "message": "颜色"
            },
            "tool_hmac": {
                "message": "HMAC"
            },
            "tool_hmac_hmac_keywords": {
                "message": "md5,sha1,sha256,sha512,sm3"
            },
            "tool_gzip": {
                "message": "GZIP"
            },
            "tool_gzip_encoder": {
                "message": "编码/压缩"
            },
            "tool_gzip_decoder": {
                "message": "解码/解压"
            },
            "tool_urlParse": {
                "message": "Url解析"
            },
            "tool_asn1": {
                "message": "ASN.1解码"
            },
            "tool_dockerCompose": {
                "message": "Docker run到Compose"
            },
            "tool_hash_hash": {
                "message": "哈希(hash)"
            },
            "tool_aes_encrypt_keywords": {
                "message": ""
            },
            "tool_aes_decrypt_keywords": {
                "message": ""
            },
            "tool_des_encrypt_keywords": {
                "message": ""
            },
            "tool_des_decrypt_keywords": {
                "message": ""
            },
            "tool_tripleDes_encrypt_keywords": {
                "message": ""
            },
            "tool_tripleDes_decrypt_keywords": {
                "message": ""
            },
            "tool_rc4_encrypt_keywords": {
                "message": ""
            },
            "tool_rc4_decrypt_keywords": {
                "message": ""
            },
            "tool_rabbit_encrypt_keywords": {
                "message": ""
            },
            "tool_rabbit_decrypt_keywords": {
                "message": ""
            },
            "tool_sm2_encrypt_keywords": {
                "message": ""
            },
            "tool_sm2_decrypt_keywords": {
                "message": ""
            },
            "tool_sm2_sign_keywords": {
                "message": ""
            },
            "tool_sm2_verify_keywords": {
                "message": ""
            },
            "tool_sm4_encrypt_keywords": {
                "message": ""
            },
            "tool_sm4_decrypt_keywords": {
                "message": ""
            },
            "tool_rsa_encrypt_keywords": {
                "message": ""
            },
            "tool_rsa_decrypt_keywords": {
                "message": ""
            },
            "tool_sign_sign": {
                "message": "签名/验签"
            },
            "tool_sign_sign_keywords": {
                "message": ""
            },
            "tool_base64_encoder_keywords": {
                "message": ""
            },
            "tool_base64_decoder_keywords": {
                "message": ""
            },
            "tool_json_json": {
                "message": "JSON工具"
            },
            "tool_json_json_keywords": {
                "message": ""
            },
            "tool_url_encoder_keywords": {
                "message": ""
            },
            "tool_url_decoder_keywords": {
                "message": ""
            },
            "tool_qrCode_generate_keywords": {
                "message": ""
            },
            "tool_qrCode_parse_keywords": {
                "message": ""
            },
            "tool_barcode_barcode": {
                "message": "条形码"
            },
            "tool_barcode_barcode_keywords": {
                "message": ""
            },
            "tool_pinyin_pinyin": {
                "message": "汉字转拼音"
            },
            "tool_pinyin_pinyin_keywords": {
                "message": ""
            },
            "tool_ip_ip": {
                "message": "IP地址查询"
            },
            "tool_ip_ip_keywords": {
                "message": ""
            },
            "tool_code_run_keywords": {
                "message": ""
            },
            "tool_unicode_encoder_keywords": {
                "message": ""
            },
            "tool_unicode_decoder_keywords": {
                "message": ""
            },
            "tool_radix_radix": {
                "message": "进制转换"
            },
            "tool_radix_radix_keywords": {
                "message": ""
            },
            "tool_regex_regex": {
                "message": "正则表达式"
            },
            "tool_regex_regex_keywords": {
                "message": ""
            },
            "tool_randomString_randomString": {
                "message": "随机字符生成"
            },
            "tool_randomString_randomString_keywords": {
                "message": ""
            },
            "tool_serialize_serialize": {
                "message": "序列化"
            },
            "tool_diffs_diffs": {
                "message": "文本比对"
            },
            "tool_diffs_diffs_keywords": {
                "message": ""
            },
            "tool_crontab_crontab": {
                "message": "Crontab"
            },
            "tool_crontab_crontab_keywords": {
                "message": ""
            },
            "tool_websocket_websocket": {
                "message": "Websocket"
            },
            "tool_websocket_websocket_keywords": {
                "message": ""
            },
            "tool_unit_unit": {
                "message": "单位换算"
            },
            "tool_unit_unit_keywords": {
                "message": ""
            },
            "tool_time_timestamp_keywords": {
                "message": ""
            },
            "tool_time_timezone_keywords": {
                "message": ""
            },
            "tool_time_calculator_keywords": {
                "message": ""
            },
            "tool_uuid_uuid": {
                "message": "UUID生成"
            },
            "tool_uuid_uuid_keywords": {
                "message": ""
            },
            "tool_ascii_ascii": {
                "message": "ASCII"
            },
            "tool_ascii_ascii_keywords": {
                "message": ""
            },
            "tool_variableConversion_variableConversion": {
                "message": "变量名"
            },
            "tool_variableConversion_variableConversion_keywords": {
                "message": ""
            },
            "tool_jwt_jwt": {
                "message": "JWT解码"
            },
            "tool_jwt_jwt_keywords": {
                "message": ""
            },
            "tool_text_text": {
                "message": "文本处理"
            },
            "tool_html_html": {
                "message": "Html编码"
            },
            "tool_html_html_keywords": {
                "message": ""
            },
            "tool_binary_binary": {
                "message": "原码/反码/补码"
            },
            "tool_binary_binary_keywords": {
                "message": ""
            },
            "tool_arm_armToHex_keywords": {
                "message": ""
            },
            "tool_arm_hexToArm_keywords": {
                "message": ""
            },
            "tool_bcrypt_bcrypt": {
                "message": "Bcrypt"
            },
            "tool_bcrypt_bcrypt_keywords": {
                "message": ""
            },
            "tool_ipcalc_ipv4_keywords": {
                "message": ""
            },
            "tool_ipcalc_ipv6_keywords": {
                "message": ""
            },
            "tool_sqlFillParameter_sqlFillParameter": {
                "message": "SQL参数填充"
            },
            "tool_sqlFillParameter_sqlFillParameter_keywords": {
                "message": ""
            },
            "tool_httpSnippet_httpSnippet": {
                "message": "Http请求代码"
            },
            "tool_httpSnippet_httpSnippet_keywords": {
                "message": ""
            },
            "tool_dataValidation_bcc_keywords": {
                "message": ""
            },
            "tool_dataValidation_crc_keywords": {
                "message": ""
            },
            "tool_dataValidation_lrc_keywords": {
                "message": ""
            },
            "tool_color_color": {
                "message": "颜色"
            },
            "tool_color_color_keywords": {
                "message": ""
            },
            "tool_hmac_hmac": {
                "message": "HMAC"
            },
            "tool_gzip_encoder_keywords": {
                "message": ""
            },
            "tool_gzip_decoder_keywords": {
                "message": ""
            },
            "tool_urlParse_urlParse": {
                "message": "Url解析"
            },
            "tool_urlParse_urlParse_keywords": {
                "message": ""
            },
            "tool_asn1_asn1": {
                "message": "ASN.1解码"
            },
            "tool_asn1_asn1_keywords": {
                "message": ""
            },
            "tool_dockerCompose_dockerCompose": {
                "message": "Docker run到Compose"
            },
            "tool_dockerCompose_dockerCompose_keywords": {
                "message": ""
            },
            "hash_uppercase": {
                "message": "大写"
            },
            "hash_salt": {
                "message": "加盐"
            },
            "hash_salt_value": {
                "message": "盐值"
            },
            "hash_salt_mode": {
                "message": "模式"
            },
            "hash_salt_select": {
                "message": "选择常用"
            },
            "hash_multiple": {
                "message": "批量"
            },
            "hash_multiple_tooltip": {
                "message": "按行执行哈希操作"
            },
            "aes_iv_auto_fill": {
                "message": "Iv 自动填充(\\0)"
            },
            "sm2_generate_keypair": {
                "message": "生成公钥/私钥"
            },
            "sm2_public_key": {
                "message": "公钥"
            },
            "sm2_private_key": {
                "message": "私钥"
            },
            "sm2_source_data": {
                "message": "签名原文"
            },
            "sm2_sign_value": {
                "message": "签名值"
            },
            "sm2_userId": {
                "message": "UserId"
            },
            "sm2_public_key_error": {
                "message": "公钥格式错误"
            },
            "rsa_private": {
                "message": "私钥(PEM格式)"
            },
            "rsa_public": {
                "message": "公钥(PEM格式)"
            },
            "rsa_encrypt_input": {
                "message": "待加密内容"
            },
            "rsa_decrypt_input": {
                "message": "待解密内容"
            },
            "sign_sign_data": {
                "message": "待签名内容/验签数据"
            },
            "sign_verify_code": {
                "message": "Base64编码后签名"
            },
            "sign_sign": {
                "message": "签名"
            },
            "sign_verify": {
                "message": "验签"
            },
            "sign_generate_keypair": {
                "message": "生成公钥/私钥"
            },
            "sign_public_key": {
                "message": "PEM格式公钥"
            },
            "sign_private_key": {
                "message": "PEM格式私钥"
            },
            "sign_keypair_type": {
                "message": "密钥格式"
            },
            "sign_keypair_length": {
                "message": "密钥长度"
            },
            "sign_verify_fail": {
                "message": "验签失败"
            },
            "sign_verify_ok": {
                "message": "验签成功"
            },
            "json_from": {
                "message": "来自于"
            },
            "json_to": {
                "message": "转换成"
            },
            "json_common": {
                "message": "常用"
            },
            "json_key_rename": {
                "message": "键命名"
            },
            "json_format": {
                "message": "格式化"
            },
            "json_compress": {
                "message": "压缩"
            },
            "json_escape": {
                "message": "转义"
            },
            "json_clear_escape": {
                "message": "移除转义"
            },
            "json_add_escape": {
                "message": "添加转义"
            },
            "json_unicode_to_zh": {
                "message": "Unicode转中文"
            },
            "json_zh_to_unicode": {
                "message": "中文转Unicode"
            },
            "json_object": {
                "message": "转实体类"
            },
            "json_path": {
                "message": "Path"
            },
            "json_inline": {
                "message": "内联(inline)"
            },
            "json_asc": {
                "message": "升序"
            },
            "json_desc": {
                "message": "降序"
            },
            "json_key_sort": {
                "message": "键排序"
            },
            "json_repair": {
                "message": "JSON 修复"
            },
            "json_json_path": {
                "message": "JSONPath"
            },
            "json_jmes_path": {
                "message": "JMESPath"
            },
            "json_line_info": {
                "message": "长度"
            },
            "qrCode_generate_option_common": {
                "message": "常用"
            },
            "qrCode_generate_option_content": {
                "message": "内容"
            },
            "qrCode_generate_option_corners_square": {
                "message": "定位边框"
            },
            "qrCode_generate_option_corners_dot": {
                "message": "定位符"
            },
            "qrCode_generate_option_background": {
                "message": "背景"
            },
            "qrCode_generate_option_size": {
                "message": "大小"
            },
            "qrCode_generate_option_margin": {
                "message": "外边距"
            },
            "qrCode_generate_option_correction": {
                "message": "纠错"
            },
            "qrCode_generate_option_gradient": {
                "message": "渐变"
            },
            "qrCode_generate_option_linear": {
                "message": "线性"
            },
            "qrCode_generate_option_radial": {
                "message": "径向"
            },
            "qrCode_generate_option_rotation": {
                "message": "旋转"
            },
            "qrCode_generate_option_style": {
                "message": "样式"
            },
            "qrCode_generate_option_dots": {
                "message": "点"
            },
            "qrCode_generate_option_square": {
                "message": "方形"
            },
            "qrCode_generate_option_rounded": {
                "message": "圆形"
            },
            "qrCode_generate_option_classy": {
                "message": "平滑"
            },
            "qrCode_generate_option_extra-rounded": {
                "message": "圆角"
            },
            "qrCode_generate_option_classy-rounded": {
                "message": "平滑圆角"
            },
            "qrCode_generate_option_dot": {
                "message": "圆形"
            },
            "qrCode_reader_parsing_failure": {
                "message": "图片解析失败"
            },
            "barcode_background": {
                "message": "背景"
            },
            "barcode_line_color": {
                "message": "线条颜色"
            },
            "barcode_bar_width": {
                "message": "宽"
            },
            "barcode_height": {
                "message": "高"
            },
            "barcode_margin": {
                "message": "边距"
            },
            "barcode_text": {
                "message": "文本"
            },
            "barcode_close": {
                "message": "隐藏"
            },
            "barcode_top": {
                "message": "上方"
            },
            "barcode_bottom": {
                "message": "下方"
            },
            "barcode_text_align": {
                "message": "对齐"
            },
            "barcode_left": {
                "message": "居左"
            },
            "barcode_center": {
                "message": "居中"
            },
            "barcode_right": {
                "message": "居右"
            },
            "barcode_font": {
                "message": "字体"
            },
            "barcode_bold": {
                "message": "粗体"
            },
            "barcode_italic": {
                "message": "斜体"
            },
            "barcode_font_size": {
                "message": "大小"
            },
            "barcode_generate_fail": {
                "message": "生成失败"
            },
            "pinyin_normal": {
                "message": "无声调"
            },
            "pinyin_tone": {
                "message": "有声调"
            },
            "pinyin_abbr": {
                "message": "首字母"
            },
            "pinyin_delimiter_null": {
                "message": "无分隔符"
            },
            "pinyin_delimiter_space": {
                "message": "空格分隔"
            },
            "pinyin_delimiter_1": {
                "message": "'-'中划线分隔"
            },
            "pinyin_delimiter_2": {
                "message": "'_'下划线分隔"
            },
            "pinyin_delimiter_3": {
                "message": "'.'点分隔"
            },
            "pinyin_multiple_flag": {
                "message": "显示多音字"
            },
            "pinyin_tone_is_number": {
                "message": "数字声调"
            },
            "pinyin_upper": {
                "message": "大写"
            },
            "ip_input": {
                "message": "请输入IP地址 (IPv4/IPv6)"
            },
            "ip_query": {
                "message": "查询"
            },
            "ip_local": {
                "message": "本地IP"
            },
            "ip_info_source": {
                "message": "IP 信息来源"
            },
            "ip_ok": {
                "message": "查询成功"
            },
            "ip_error": {
                "message": "查询异常:{0}",
                "placeholders": [
                    "0"
                ]
            },
            "code_beautify": {
                "message": "格式化"
            },
            "code_indent_width": {
                "message": "缩进空格 {0}",
                "placeholders": [
                    "0"
                ]
            },
            "code_indent_width_null": {
                "message": "无缩进"
            },
            "code_xml_collapse_content": {
                "message": "内容同行"
            },
            "code_compress": {
                "message": "压缩"
            },
            "code_run": {
                "message": "运行"
            },
            "code_running": {
                "message": "运行中"
            },
            "code_run_used_times": {
                "message": "今日使用次数: {0} ",
                "placeholders": [
                    "0"
                ]
            },
            "code_run_config_explain": {
                "message": "点击获取配置, 第三方服务({0})风险自担, 与Ctool没有任何关系",
                "placeholders": [
                    "0"
                ]
            },
            "code_not_support": {
                "message": "暂不支持{0}的{1}",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "unicode_mode_unicode_point_default": {
                "message": "Unicode 默认模式 \\u[0-9a-f]{4}",
                "placeholders": [
                    "4"
                ]
            },
            "unicode_mode_unicode_point_wide": {
                "message": "Unicode 宽字符模式 \\u[0-9a-f]{4,6}",
                "placeholders": [
                    "4,6"
                ]
            },
            "unicode_mode_unicode_point_wide_brace": {
                "message": "Unicode 宽字符模式(带大括号) \\u{[0-9a-f]{4,6}}",
                "placeholders": [
                    "[0-9a-f]{4,6"
                ]
            },
            "unicode_mode_unicode_number": {
                "message": "Unicode 编码模式 U+[0-9A-F]{4,6}",
                "placeholders": [
                    "4,6"
                ]
            },
            "unicode_mode_html_entity_10": {
                "message": "Html 实体(10进制) &#[0-9]+;"
            },
            "unicode_mode_html_entity_16": {
                "message": "Html 实体(16进制)  &#x[0-9a-f]{1,6};",
                "placeholders": [
                    "1,6"
                ]
            },
            "unicode_mode_css_entity": {
                "message": "Css 实体(16进制) \\[0-9a-f]{4,6}",
                "placeholders": [
                    "4,6"
                ]
            },
            "unicode_ignore_ascii": {
                "message": "忽略 Ascii 字符"
            },
            "radix_input_placeholder": {
                "message": "请输入待转换数字"
            },
            "radix_base": {
                "message": "{0} 进制",
                "placeholders": [
                    "0"
                ]
            },
            "radix_result": {
                "message": "转换结果 {0}",
                "placeholders": [
                    "0"
                ]
            },
            "radix_alphabet": {
                "message": "64位字母表"
            },
            "radix_reset": {
                "message": "重置"
            },
            "radix_alphabet_length_error": {
                "message": "转换字母表必须是64位长度"
            },
            "regex_common": {
                "message": "常用"
            },
            "regex_expression": {
                "message": "正则表达式"
            },
            "regex_replace_content": {
                "message": "替换内容"
            },
            "regex_replace": {
                "message": "替换"
            },
            "regex_delete": {
                "message": "删除"
            },
            "regex_input": {
                "message": "输入待处理内容"
            },
            "regex_global": {
                "message": "全局搜索"
            },
            "regex_ignore_case": {
                "message": "忽略大小写"
            },
            "regex_output_count": {
                "message": "共 {0} 个匹配项",
                "placeholders": [
                    "0"
                ]
            },
            "regex_output_empty": {
                "message": "没有匹配结果，请检查正则"
            },
            "regex_reference_name": {
                "message": "字符"
            },
            "regex_reference_text": {
                "message": "描述"
            },
            "randomString_length": {
                "message": "长度"
            },
            "randomString_amount": {
                "message": "数量"
            },
            "randomString_digital": {
                "message": "数字"
            },
            "randomString_lowercase": {
                "message": "小写字母"
            },
            "randomString_uppercase": {
                "message": "大写字母"
            },
            "randomString_chars": {
                "message": "字符"
            },
            "randomString_symbol": {
                "message": "特殊符号"
            },
            "diffs_collapse": {
                "message": "折叠相同"
            },
            "diffs_revert_direction": {
                "message": "覆盖方向"
            },
            "diffs_left_to_right": {
                "message": "左 => 右"
            },
            "diffs_right_to_left": {
                "message": "左 <= 右"
            },
            "crontab_expression": {
                "message": "表达式"
            },
            "crontab_execute_time": {
                "message": "最近执行时间"
            },
            "crontab_example": {
                "message": "例子"
            },
            "crontab_format": {
                "message": "格式"
            },
            "crontab_execute_time_list": {
                "message": "最近10次执行时间"
            },
            "crontab_no": {
                "message": "第{0}次: {1}",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "crontab_symbol": {
                "message": "特殊符号"
            },
            "crontab_l_prompt": {
                "message": "谨慎使用 'L' 参数, 提前确认环境是否支持"
            },
            "crontab_second_prompt": {
                "message": "谨慎使用 秒级 任务, 提前确认环境是否支持"
            },
            "crontab_description": {
                "message": "描述"
            },
            "crontab_symbol_description_1": {
                "message": "代表任何时刻都接受的意思。举例来说，范例一内那个日、月、周都是*，就代表着不论何月、何日的礼拜几的12：00都执行后续命令的意思。"
            },
            "crontab_symbol_description_2": {
                "message": "代表分隔时段的意思。举例来说，如果要执行的工作是3：00与6：00时，就会是：0 3,6 * * * command时间还是有五列，不过第二列是 3,6 ，代表3与6都适用"
            },
            "crontab_symbol_description_3": {
                "message": "代表一段时间范围内，举例来说，8点到12点之间的每小时的20分都进行一项工作：20 8-12 * * * command仔细看到第二列变成8-12.代表 8,9,10,11,12 都适用的意思"
            },
            "crontab_symbol_description_4": {
                "message": "那个n代表数字，即是每隔n单位间隔的意思，例如每五分钟进行一次，则：*/5 * * * * command用*与/5来搭配，也可以写成0-59/5，意思相同"
            },
            "crontab_generate": {
                "message": "生成"
            },
            "crontab_generate_ignore": {
                "message": "忽略"
            },
            "crontab_generate_second": {
                "message": "秒"
            },
            "crontab_generate_minute": {
                "message": "分"
            },
            "crontab_generate_hour": {
                "message": "时"
            },
            "crontab_generate_day": {
                "message": "日"
            },
            "crontab_generate_month": {
                "message": "月"
            },
            "crontab_generate_week": {
                "message": "周"
            },
            "crontab_generate_any": {
                "message": "任意"
            },
            "crontab_generate_scope": {
                "message": "范围"
            },
            "crontab_generate_interval": {
                "message": "间隔"
            },
            "crontab_generate_list": {
                "message": "指定"
            },
            "websocket_connect": {
                "message": "连接"
            },
            "websocket_reconnect": {
                "message": "断线重连"
            },
            "websocket_protocols": {
                "message": "子协议"
            },
            "websocket_protocols_tip": {
                "message": "多个使用\",\"分隔"
            },
            "websocket_close": {
                "message": "断开"
            },
            "websocket_send_content": {
                "message": "发送内容"
            },
            "websocket_log_content": {
                "message": "交互记录"
            },
            "websocket_send": {
                "message": "发送"
            },
            "websocket_client": {
                "message": "客户端"
            },
            "websocket_server": {
                "message": "服务端"
            },
            "websocket_tips": {
                "message": "提示"
            },
            "websocket_error_connect": {
                "message": "ws还没有连接，或者连接失败，请检测"
            },
            "websocket_error_content": {
                "message": "发送内容不能为空"
            },
            "websocket_connect_ok": {
                "message": "连接成功"
            },
            "websocket_close_ok": {
                "message": "断开成功"
            },
            "websocket_connect_start": {
                "message": "开始连接:{0}",
                "placeholders": [
                    "0"
                ]
            },
            "websocket_close_start": {
                "message": "开始断开:{0}",
                "placeholders": [
                    "0"
                ]
            },
            "websocket_keep_scroll": {
                "message": "保持滚动"
            },
            "unit_length": {
                "message": "长度"
            },
            "unit_area": {
                "message": "面积"
            },
            "unit_volume": {
                "message": "体积"
            },
            "unit_weight": {
                "message": "质量"
            },
            "unit_temperature": {
                "message": "温度"
            },
            "unit_pressure": {
                "message": "压力"
            },
            "unit_power": {
                "message": "功率"
            },
            "unit_work": {
                "message": "功/能/热"
            },
            "unit_density": {
                "message": "密度"
            },
            "unit_strength": {
                "message": "力"
            },
            "unit_time": {
                "message": "时间"
            },
            "unit_speed": {
                "message": "速度"
            },
            "unit_byte": {
                "message": "数据存储"
            },
            "unit_angle": {
                "message": "角度"
            },
            "unit_length_km": {
                "message": "千米"
            },
            "unit_length_m": {
                "message": "米"
            },
            "unit_length_dm": {
                "message": "分米"
            },
            "unit_length_cm": {
                "message": "厘米"
            },
            "unit_length_mm": {
                "message": "毫米"
            },
            "unit_length_um": {
                "message": "微米"
            },
            "unit_length_nm": {
                "message": "纳米"
            },
            "unit_length_pm": {
                "message": "皮米"
            },
            "unit_length_ly": {
                "message": "光年"
            },
            "unit_length_au": {
                "message": "天文单位"
            },
            "unit_length_in": {
                "message": "英寸"
            },
            "unit_length_ft": {
                "message": "英尺"
            },
            "unit_length_yd": {
                "message": "码"
            },
            "unit_length_mi": {
                "message": "英里"
            },
            "unit_length_nmi": {
                "message": "海里"
            },
            "unit_length_fm": {
                "message": "英寻"
            },
            "unit_length_fur": {
                "message": "弗隆"
            },
            "unit_length_cn_li": {
                "message": "里"
            },
            "unit_length_cn_zhang": {
                "message": "丈"
            },
            "unit_length_cn_chi": {
                "message": "尺"
            },
            "unit_length_cn_cun": {
                "message": "寸"
            },
            "unit_length_cn_fen": {
                "message": "分"
            },
            "unit_length_cn_li2": {
                "message": "厘"
            },
            "unit_length_cn_hao": {
                "message": "毫"
            },
            "unit_area_km_2": {
                "message": "平方千米"
            },
            "unit_area_ha": {
                "message": "公顷"
            },
            "unit_area_are": {
                "message": "公亩"
            },
            "unit_area_m_2": {
                "message": "平方米"
            },
            "unit_area_dm_2": {
                "message": "平方分米"
            },
            "unit_area_cm_2": {
                "message": "平方厘米"
            },
            "unit_area_mm_2": {
                "message": "平方毫米"
            },
            "unit_area_acre": {
                "message": "英亩"
            },
            "unit_area_mi_2": {
                "message": "平方英里"
            },
            "unit_area_yd_2": {
                "message": "平方码"
            },
            "unit_area_ft_2": {
                "message": "平方英尺"
            },
            "unit_area_in_2": {
                "message": "平方英寸"
            },
            "unit_area_rd_2": {
                "message": "平方竿"
            },
            "unit_area_cn_qing": {
                "message": "顷"
            },
            "unit_area_cn_mu": {
                "message": "亩"
            },
            "unit_area_cn_fen": {
                "message": "分"
            },
            "unit_area_cn_chi_2": {
                "message": "平方尺"
            },
            "unit_area_cn_cun_2": {
                "message": "平方寸"
            },
            "unit_volume_m_3": {
                "message": "立方米"
            },
            "unit_volume_dm_3": {
                "message": "立方分米"
            },
            "unit_volume_cm_3": {
                "message": "立方厘米"
            },
            "unit_volume_mm_3": {
                "message": "立方毫米"
            },
            "unit_volume_l": {
                "message": "升"
            },
            "unit_volume_dl": {
                "message": "分升"
            },
            "unit_volume_ml": {
                "message": "毫升"
            },
            "unit_volume_cl": {
                "message": "厘升"
            },
            "unit_volume_uL": {
                "message": "微升"
            },
            "unit_volume_hl": {
                "message": "公石"
            },
            "unit_volume_ft_3": {
                "message": "立方英尺"
            },
            "unit_volume_in_3": {
                "message": "立方英寸"
            },
            "unit_volume_yd_3": {
                "message": "立方码"
            },
            "unit_volume_acre_ft": {
                "message": "亩英尺"
            },
            "unit_volume_uk_gal": {
                "message": "英制加仑"
            },
            "unit_volume_us_gal": {
                "message": "美制加仑"
            },
            "unit_volume_uk_oz": {
                "message": "英制液体盎司"
            },
            "unit_volume_us_oz": {
                "message": "美制液体盎司"
            },
            "unit_weight_kg": {
                "message": "千克"
            },
            "unit_weight_g": {
                "message": "克"
            },
            "unit_weight_mg": {
                "message": "毫克"
            },
            "unit_weight_ug": {
                "message": "微克"
            },
            "unit_weight_t": {
                "message": "吨"
            },
            "unit_weight_q": {
                "message": "公担"
            },
            "unit_weight_ct": {
                "message": "克拉"
            },
            "unit_weight_lb": {
                "message": "磅"
            },
            "unit_weight_oz": {
                "message": "盎司"
            },
            "unit_weight_gr": {
                "message": "格令"
            },
            "unit_weight_lt": {
                "message": "长吨"
            },
            "unit_weight_st1": {
                "message": "短吨"
            },
            "unit_weight_st2": {
                "message": "英石"
            },
            "unit_weight_uk_cwt": {
                "message": "英担"
            },
            "unit_weight_us_cwt": {
                "message": "美担"
            },
            "unit_weight_dr": {
                "message": "打兰"
            },
            "unit_weight_cn_dan": {
                "message": "担"
            },
            "unit_weight_cn_jin": {
                "message": "斤"
            },
            "unit_weight_cn_liang": {
                "message": "两"
            },
            "unit_weight_cn_qian": {
                "message": "钱"
            },
            "unit_temperature_c": {
                "message": "摄氏度"
            },
            "unit_temperature_f": {
                "message": "华氏度"
            },
            "unit_temperature_k": {
                "message": "开氏度"
            },
            "unit_temperature_r": {
                "message": "兰氏度"
            },
            "unit_temperature_re": {
                "message": "列氏度"
            },
            "unit_pressure_pa": {
                "message": "帕斯卡"
            },
            "unit_pressure_kpa": {
                "message": "千帕"
            },
            "unit_pressure_hpa": {
                "message": "百帕"
            },
            "unit_pressure_atm": {
                "message": "标准大气压"
            },
            "unit_pressure_mmhg": {
                "message": "毫米汞柱"
            },
            "unit_pressure_in_hg": {
                "message": "英寸汞柱"
            },
            "unit_pressure_bar": {
                "message": "巴"
            },
            "unit_pressure_mbar": {
                "message": "毫巴"
            },
            "unit_pressure_psf": {
                "message": "磅力/平方英尺"
            },
            "unit_pressure_psi": {
                "message": "磅力/平方英寸"
            },
            "unit_pressure_mmwg": {
                "message": "毫米水柱"
            },
            "unit_pressure_kgf_cm_2": {
                "message": "公斤力/平方厘米"
            },
            "unit_pressure_kgf_m_2": {
                "message": "公斤力/平方米"
            },
            "unit_pressure_mpa": {
                "message": "兆帕"
            },
            "unit_power_w": {
                "message": "瓦"
            },
            "unit_power_kw": {
                "message": "千瓦"
            },
            "unit_power_hp": {
                "message": "英制马力"
            },
            "unit_power_ps": {
                "message": "米制马力"
            },
            "unit_power_kg_m_s": {
                "message": "公斤·米/秒"
            },
            "unit_power_kcal_s": {
                "message": "千卡/秒"
            },
            "unit_power_btu_s": {
                "message": "英热单位/秒"
            },
            "unit_power_ft_lb_s": {
                "message": "英尺·磅/秒"
            },
            "unit_power_j_s": {
                "message": "焦耳/秒"
            },
            "unit_power_n_m_s": {
                "message": "牛顿·米/秒"
            },
            "unit_power_dbm": {
                "message": "分贝毫瓦"
            },
            "unit_power_dbw": {
                "message": "分贝瓦"
            },
            "unit_work_j": {
                "message": "焦耳"
            },
            "unit_work_kg_m": {
                "message": "公斤·米"
            },
            "unit_work_ps_h": {
                "message": "米制马力·时"
            },
            "unit_work_hp_h": {
                "message": "英制马力·时"
            },
            "unit_work_kw_h": {
                "message": "千瓦·时"
            },
            "unit_work_kw_h_": {
                "message": "度"
            },
            "unit_work_cal": {
                "message": "卡"
            },
            "unit_work_kcal": {
                "message": "千卡"
            },
            "unit_work_btu": {
                "message": "英热单位"
            },
            "unit_work_ft_lb": {
                "message": "英尺·磅"
            },
            "unit_work_kj": {
                "message": "千焦"
            },
            "unit_density_kg_cm_3": {
                "message": "千克/立方厘米"
            },
            "unit_density_kg_dm_3": {
                "message": "千克/立方分米"
            },
            "unit_density_kg_m_3": {
                "message": "千克/立方米"
            },
            "unit_density_g_cm_3": {
                "message": "克/立方厘米"
            },
            "unit_density_g_dm_3": {
                "message": "克/立方分米"
            },
            "unit_density_g_m_3": {
                "message": "克/立方米"
            },
            "unit_strength_n": {
                "message": "牛"
            },
            "unit_strength_kn": {
                "message": "千牛"
            },
            "unit_strength_kgf": {
                "message": "千克力"
            },
            "unit_strength_gf": {
                "message": "克力"
            },
            "unit_strength_tf": {
                "message": "公吨力"
            },
            "unit_strength_lbf": {
                "message": "磅力"
            },
            "unit_strength_kip": {
                "message": "千磅力"
            },
            "unit_strength_dyn": {
                "message": "达因"
            },
            "unit_time_yr": {
                "message": "年"
            },
            "unit_time_week": {
                "message": "周"
            },
            "unit_time_d": {
                "message": "天"
            },
            "unit_time_h": {
                "message": "时"
            },
            "unit_time_min": {
                "message": "分"
            },
            "unit_time_s": {
                "message": "秒"
            },
            "unit_time_ms": {
                "message": "毫秒"
            },
            "unit_time_us": {
                "message": "微秒"
            },
            "unit_time_ns": {
                "message": "纳秒"
            },
            "unit_speed_m_s": {
                "message": "米/秒"
            },
            "unit_speed_km_s": {
                "message": "千米/秒"
            },
            "unit_speed_km_h": {
                "message": "千米/时"
            },
            "unit_speed_c": {
                "message": "光速"
            },
            "unit_speed_mach": {
                "message": "马赫"
            },
            "unit_speed_mile_h": {
                "message": "英里/时"
            },
            "unit_speed_in_s": {
                "message": "英寸/秒"
            },
            "unit_byte_bit": {
                "message": "比特"
            },
            "unit_byte_b": {
                "message": "字节"
            },
            "unit_byte_kb": {
                "message": "千字节"
            },
            "unit_byte_mb": {
                "message": "兆字节"
            },
            "unit_byte_gb": {
                "message": "千兆字节"
            },
            "unit_byte_tb": {
                "message": "太字节"
            },
            "unit_byte_pb": {
                "message": "拍字节"
            },
            "unit_byte_eb": {
                "message": "艾字节"
            },
            "unit_angle_circle": {
                "message": "圆周"
            },
            "unit_angle_angle": {
                "message": "直角"
            },
            "unit_angle_gon": {
                "message": "百分度"
            },
            "unit_angle_degree": {
                "message": "度"
            },
            "unit_angle_min": {
                "message": "分"
            },
            "unit_angle_s": {
                "message": "秒"
            },
            "unit_angle_rad": {
                "message": "弧度"
            },
            "unit_angle_mrad": {
                "message": "毫弧度"
            },
            "unit_metric_system": {
                "message": "公制"
            },
            "unit_imperial_units": {
                "message": "英制"
            },
            "unit_chinese_units": {
                "message": "市制"
            },
            "unit_angle_units": {
                "message": "角度制"
            },
            "unit_radian_units": {
                "message": "弧度制"
            },
            "unit_all": {
                "message": "全部"
            },
            "time_timezone": {
                "message": "时区"
            },
            "time_error_format": {
                "message": "输入时间格式异常"
            },
            "time_current_time": {
                "message": "当前时间"
            },
            "time_second": {
                "message": "秒"
            },
            "time_millisecond": {
                "message": "毫秒"
            },
            "time_nanosecond": {
                "message": "纳秒"
            },
            "time_diff_tool": {
                "message": "差值计算器"
            },
            "time_and": {
                "message": "与"
            },
            "time_diff": {
                "message": "相差"
            },
            "time_operation": {
                "message": "时间操作"
            },
            "time_add": {
                "message": "添加"
            },
            "time_reduce": {
                "message": "减少"
            },
            "time_after": {
                "message": "后"
            },
            "time_is": {
                "message": "为"
            },
            "time_error_duration_length": {
                "message": "年/月间隔只能是整数"
            },
            "time_year": {
                "message": "年"
            },
            "time_month": {
                "message": "月"
            },
            "time_week": {
                "message": "周"
            },
            "time_day": {
                "message": "天"
            },
            "time_hour": {
                "message": "小时"
            },
            "time_minute": {
                "message": "分钟"
            },
            "time_analyze": {
                "message": "时间分析"
            },
            "time_analyze_year": {
                "message": "年"
            },
            "time_analyze_quarter": {
                "message": "季度"
            },
            "time_analyze_month": {
                "message": "月"
            },
            "time_analyze_year_output": {
                "message": "{year}年:{quarter}季度,{weekOfYear}周,{dayOfYear}天,{hourOfYear}小时,{minuteOfYear}分钟,{secondOfYear}秒",
                "placeholders": [
                    "year",
                    "quarter",
                    "weekOfYear",
                    "dayOfYear",
                    "hourOfYear",
                    "minuteOfYear",
                    "secondOfYear"
                ]
            },
            "time_analyze_quarter_output": {
                "message": "{quarter}季度:{weekOfQuarter}周,{dayOfQuarter}天,{hourOfQuarter}小时,{minuteOfQuarter}分钟,{secondOfQuarter}秒",
                "placeholders": [
                    "quarter",
                    "weekOfQuarter",
                    "dayOfQuarter",
                    "hourOfQuarter",
                    "minuteOfQuarter",
                    "secondOfQuarter"
                ]
            },
            "time_analyze_month_output": {
                "message": "{month}月:{weekOfMonth}周,{hourOfMonth}小时,{minuteOfMonth}分钟,{secondOfMonth}秒",
                "placeholders": [
                    "month",
                    "weekOfMonth",
                    "hourOfMonth",
                    "minuteOfMonth",
                    "secondOfMonth"
                ]
            },
            "time_timestamp_input_placeholder": {
                "message": "支持 YYYY-MM-DD HH:mm:ss[.\\d+] 与 时间戳(秒/毫秒/纳秒) 输入"
            },
            "time_unix_auto": {
                "message": "自动识别类型"
            },
            "time_normal_second": {
                "message": "标准时间(秒)"
            },
            "time_normal_millisecond": {
                "message": "标准时间(毫秒)"
            },
            "time_normal_nanosecond": {
                "message": "标准时间(纳秒)"
            },
            "time_unix_second": {
                "message": "Unix时间戳(秒)"
            },
            "time_unix_millisecond": {
                "message": "Unix时间戳(毫秒)"
            },
            "time_unix_nanosecond": {
                "message": "Unix时间戳(纳秒)"
            },
            "time_format": {
                "message": "格式"
            },
            "time_value": {
                "message": "值"
            },
            "time_timezone_input_placeholder": {
                "message": "支持 YYYY-MM-DD HH:mm:ss[.SSS] 时间格式 输入"
            },
            "uuid_amount": {
                "message": "数量"
            },
            "uuid_hyphens": {
                "message": "连接符(-)"
            },
            "uuid_is_upper": {
                "message": "大写"
            },
            "uuid_uint8_array": {
                "message": "Uint8 Array"
            },
            "ascii_input_prompt": {
                "message": "请输入待转换 {0} 数字, 多个用空格分隔",
                "placeholders": [
                    "0"
                ]
            },
            "ascii_input_str_prompt": {
                "message": "请输入待转换 ascii 字符串"
            },
            "ascii_input_str": {
                "message": "字符串"
            },
            "ascii_input_bin": {
                "message": "二进制"
            },
            "ascii_input_oct": {
                "message": "八进制"
            },
            "ascii_input_dec": {
                "message": "十进制"
            },
            "ascii_input_hex": {
                "message": "十六进制"
            },
            "ascii_yes": {
                "message": "是"
            },
            "ascii_no": {
                "message": "否"
            },
            "ascii_is_visible": {
                "message": "是否可见"
            },
            "ascii_description": {
                "message": "描述"
            },
            "ascii_code_nul": {
                "message": "空字符（Null）"
            },
            "ascii_code_soh": {
                "message": "标题开始"
            },
            "ascii_code_stx": {
                "message": "本文开始"
            },
            "ascii_code_etx": {
                "message": "本文结束"
            },
            "ascii_code_eot": {
                "message": "传输结束"
            },
            "ascii_code_enq": {
                "message": "请求"
            },
            "ascii_code_ack": {
                "message": "确认回应"
            },
            "ascii_code_bel": {
                "message": "响铃"
            },
            "ascii_code_bs": {
                "message": "退格"
            },
            "ascii_code_tab": {
                "message": "水平定位符号"
            },
            "ascii_code_lf": {
                "message": "换行键"
            },
            "ascii_code_vt": {
                "message": "垂直定位符号"
            },
            "ascii_code_ff": {
                "message": "换页键"
            },
            "ascii_code_cr": {
                "message": "归位键"
            },
            "ascii_code_so": {
                "message": "取消变换（Shift out）"
            },
            "ascii_code_si": {
                "message": "启用变换（Shift in）"
            },
            "ascii_code_dle": {
                "message": "跳出数据通讯"
            },
            "ascii_code_dc1": {
                "message": "设备控制一（XON 启用软件速度控制）"
            },
            "ascii_code_dc2": {
                "message": "设备控制二"
            },
            "ascii_code_dc3": {
                "message": "设备控制三（XOFF 停用软件速度控制）"
            },
            "ascii_code_dc4": {
                "message": "设备控制四"
            },
            "ascii_code_nak": {
                "message": "确认失败回应"
            },
            "ascii_code_syn": {
                "message": "同步用暂停"
            },
            "ascii_code_etb": {
                "message": "区块传输结束"
            },
            "ascii_code_can": {
                "message": "取消"
            },
            "ascii_code_em": {
                "message": "连接介质中断"
            },
            "ascii_code_sub": {
                "message": "替换"
            },
            "ascii_code_esc": {
                "message": "跳出"
            },
            "ascii_code_fs": {
                "message": "文件分割符"
            },
            "ascii_code_gs": {
                "message": "组群分隔符"
            },
            "ascii_code_rs": {
                "message": "记录分隔符"
            },
            "ascii_code_us": {
                "message": "单元分隔符"
            },
            "ascii_code_del": {
                "message": "删除"
            },
            "ascii_code_space": {
                "message": "空格"
            },
            "variableConversion_input": {
                "message": "输入"
            },
            "variableConversion_input_placeholder": {
                "message": "一行一个"
            },
            "text_case_conversion": {
                "message": "大小写"
            },
            "text_upper_all": {
                "message": "全部大写"
            },
            "text_lower_all": {
                "message": "全部小写"
            },
            "text_upper_line_start": {
                "message": "行首大写"
            },
            "text_lower_line_start": {
                "message": "行首小写"
            },
            "text_upper_word_start": {
                "message": "词首大写"
            },
            "text_lower_word_start": {
                "message": "词首小写"
            },
            "text_punctuation": {
                "message": "标点"
            },
            "text_cn": {
                "message": "中文"
            },
            "text_en": {
                "message": "英文"
            },
            "text_simplified_traditional": {
                "message": "简繁"
            },
            "text_simplified": {
                "message": "简体"
            },
            "text_traditional": {
                "message": "繁体"
            },
            "text_replace": {
                "message": "替换"
            },
            "text_line_remove_duplicate": {
                "message": "行去重"
            },
            "text_line_number": {
                "message": "行号"
            },
            "text_line_number_add": {
                "message": "添加"
            },
            "text_line_number_remove": {
                "message": "移除"
            },
            "text_sort": {
                "message": "排序"
            },
            "text_line_sort_asc": {
                "message": "行升序"
            },
            "text_line_sort_desc": {
                "message": "行降序"
            },
            "text_reverse_line": {
                "message": "行反转"
            },
            "text_reverse_line_string": {
                "message": "行字符反转"
            },
            "text_reverse_all": {
                "message": "字符串反转"
            },
            "text_filter": {
                "message": "过滤"
            },
            "text_filter_trim": {
                "message": "过滤行首尾不可见字符(trim)"
            },
            "text_filter_blank_line": {
                "message": "过滤多余空行"
            },
            "text_filter_all_br": {
                "message": "过滤换行符"
            },
            "text_stat": {
                "message": "统计"
            },
            "text_more_stat": {
                "message": "更多统计"
            },
            "text_stat_explain": {
                "message": "统计说明"
            },
            "text_replace_search": {
                "message": "查找"
            },
            "text_replace_replace": {
                "message": "替换(留空为删除)"
            },
            "text_replace_regular": {
                "message": "正则"
            },
            "text_replace_explain": {
                "message": "可输入多行, 按行进行批量替换"
            },
            "text_string_length": {
                "message": "字符数"
            },
            "text_byte_length": {
                "message": "字节数(utf8/gbk)"
            },
            "text_word_length": {
                "message": "字数"
            },
            "text_line_length": {
                "message": "行数"
            },
            "text_zh_length": {
                "message": "(中文)字数/标点"
            },
            "text_en_length": {
                "message": "(英文)字母/单词/标点"
            },
            "text_int_length": {
                "message": "(数字)字符/单词"
            },
            "text_item": {
                "message": "项目"
            },
            "text_explain": {
                "message": "说明"
            },
            "text_explain_byte_length_utf8_name": {
                "message": "字节数utf8"
            },
            "text_explain_byte_length_utf8_info": {
                "message": "中文字符计3个长度"
            },
            "text_explain_byte_length_gbk_name": {
                "message": "字节数gbk"
            },
            "text_explain_byte_length_gbk_info": {
                "message": "中文字符计2个长度"
            },
            "text_explain_string_length_name": {
                "message": "字符数"
            },
            "text_explain_string_length_info": {
                "message": "中/英文字符均计1个长度 换行符不计入长度"
            },
            "text_explain_word_length_name": {
                "message": "字数"
            },
            "text_explain_word_length_info": {
                "message": "中文字数+英文单词数+中文标点数+英文标点数+数字单词数"
            },
            "text_explain_int_length_name": {
                "message": "数字字符"
            },
            "text_explain_int_length_info": {
                "message": "统计单个数字出现次数 例如:'a1024 1024' 结果为:8"
            },
            "text_explain_int_word_length_name": {
                "message": "数字单词"
            },
            "text_explain_int_word_length_info": {
                "message": "例如:'a1024 1024' 结果为:1 其中:'a1024' 为英文单词 '1024' 为数字单词"
            },
            "text_explain_blank_line_length_name": {
                "message": "行数"
            },
            "text_explain_blank_line_length_info": {
                "message": "空行也会计入行数"
            },
            "text_value": {
                "message": "值"
            },
            "text_stat_show": {
                "message": "字数: {0}  UTF-8: {1}  GBK: {2}",
                "placeholders": [
                    "0",
                    "1",
                    "2"
                ]
            },
            "text_rename": {
                "message": "命名"
            },
            "text_escape": {
                "message": "转义符"
            },
            "text_escape_single_quote": {
                "message": "单引号"
            },
            "text_escape_double_quote": {
                "message": "双引号"
            },
            "text_escape_backslash": {
                "message": "反斜杠"
            },
            "text_escape_new_line": {
                "message": "换行符"
            },
            "text_escape_carriage_return": {
                "message": "回车符"
            },
            "text_escape_tab": {
                "message": "水平制表符"
            },
            "text_escape_vertical_tab": {
                "message": "垂直制表符"
            },
            "text_escape_backspace": {
                "message": "退格符"
            },
            "text_escape_form_feed": {
                "message": "换页符"
            },
            "text_escape_forward": {
                "message": "正向转义(\\'=>')"
            },
            "text_escape_reverse": {
                "message": "逆向转义('=>\\')"
            },
            "html_input_encode": {
                "message": "请输入待编码字符串"
            },
            "html_input_decode": {
                "message": "请输入待解码字符串"
            },
            "binary_input": {
                "message": "输入"
            },
            "binary_length": {
                "message": "{0} 位",
                "placeholders": [
                    "0"
                ]
            },
            "binary_true_form": {
                "message": "原码"
            },
            "binary_inverse": {
                "message": "反码"
            },
            "binary_complement": {
                "message": "补码"
            },
            "binary_error": {
                "message": "错误: {0}",
                "placeholders": [
                    "0"
                ]
            },
            "arm_info_source": {
                "message": "数据来源:"
            },
            "arm_convert": {
                "message": "转换"
            },
            "arm_output": {
                "message": "输出"
            },
            "arm_error": {
                "message": "错误: {0}",
                "placeholders": [
                    "0"
                ]
            },
            "bcrypt_generate": {
                "message": "生成"
            },
            "bcrypt_password": {
                "message": "明文(String)"
            },
            "bcrypt_hash": {
                "message": "哈希(Hash)"
            },
            "bcrypt_rounds": {
                "message": "Rounds"
            },
            "bcrypt_check": {
                "message": "校验"
            },
            "bcrypt_check_result_success": {
                "message": "正确"
            },
            "bcrypt_check_result_error": {
                "message": "错误"
            },
            "bcrypt_rounds_range": {
                "message": "Rounds 范围 [{0} - {1}]",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "ipcalc_format": {
                "message": "支持的输入格式"
            },
            "ipcalc_ip": {
                "message": "IP地址"
            },
            "ipcalc_mask": {
                "message": "掩码"
            },
            "ipcalc_random": {
                "message": "随机"
            },
            "ipcalc_limit": {
                "message": "数量"
            },
            "ipcalc_short": {
                "message": "缩短"
            },
            "ipcalc_ip_info": {
                "message": "IP 信息"
            },
            "ipcalc_ip_info_full": {
                "message": "扩展地址"
            },
            "ipcalc_ip_info_short": {
                "message": "缩短地址"
            },
            "ipcalc_ip_info_ptr": {
                "message": "PTR"
            },
            "ipcalc_ip_info_long": {
                "message": "整型IP"
            },
            "ipcalc_ip_info_ip8": {
                "message": "点分八进制IP"
            },
            "ipcalc_ip_info_ip10": {
                "message": "点分十进制IP"
            },
            "ipcalc_ip_info_ip16": {
                "message": "点分十六进制IP"
            },
            "ipcalc_ip_info_ip2": {
                "message": "点分二进制IP"
            },
            "ipcalc_mask_info": {
                "message": "掩码信息"
            },
            "ipcalc_mask_info_mask": {
                "message": "子网掩码"
            },
            "ipcalc_mask_info_long": {
                "message": "整型掩码"
            },
            "ipcalc_mask_info_opposite": {
                "message": "反掩码"
            },
            "ipcalc_mask_info_mask8": {
                "message": "点分八进制掩码"
            },
            "ipcalc_mask_info_mask16": {
                "message": "点分十六进制掩码"
            },
            "ipcalc_mask_info_mask2": {
                "message": "点分二进制掩码"
            },
            "ipcalc_network_info": {
                "message": "网络信息"
            },
            "ipcalc_subnet": {
                "message": "子网信息"
            },
            "ipcalc_network_info_available": {
                "message": "可用数量"
            },
            "ipcalc_network_info_size": {
                "message": "全部数量"
            },
            "ipcalc_network_info_base": {
                "message": "网络"
            },
            "ipcalc_network_info_first": {
                "message": "第一个IP"
            },
            "ipcalc_network_info_last": {
                "message": "最后一个IP"
            },
            "ipcalc_network_info_broadcast": {
                "message": "广播地址"
            },
            "ipcalc_mask_set_title": {
                "message": "通过可用IP数量设置掩码"
            },
            "sqlFillParameter_parameter": {
                "message": "参数"
            },
            "sqlFillParameter_parameter_too_little": {
                "message": "参数个数不足"
            },
            "color_input_placeholder": {
                "message": "请输入颜色 {0} 值 例子:{1}",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "hmac_uppercase": {
                "message": "大写"
            },
            "hmac_secret": {
                "message": "密钥"
            },
            "hmac_multiple": {
                "message": "批量"
            },
            "hmac_multiple_tooltip": {
                "message": "按行执行操作"
            },
            "asn1_input_der_text": {
                "message": "请输入ASN.1 DER格式文本"
            },
            "asn1_output_result": {
                "message": "解码结果"
            }
        },
        "en": {
            "component_upload_image": {
                "message": "Upload Image"
            },
            "component_upload_file": {
                "message": "Upload File"
            },
            "component_upload_support_paste": {
                "message": "Tips: Support Paste File"
            },
            "component_content_type_text": {
                "message": "Text"
            },
            "component_content_type_base64": {
                "message": "Base64"
            },
            "component_content_type_hex": {
                "message": "Hex"
            },
            "component_content_type_hex_preserve_line_breaks": {
                "message": "Preserve Line Breaks"
            },
            "component_content_type_upload": {
                "message": "Upload"
            },
            "component_content_type_down": {
                "message": "Download"
            },
            "component_content_type_image": {
                "message": "Image"
            },
            "component_content_type_url": {
                "message": "Url"
            },
            "component_content_output_analyse_encoding": {
                "message": "Analyse Encoding"
            },
            "component_content_output_url_safe": {
                "message": "Url Safe"
            },
            "component_content_output_data_url": {
                "message": "DataUrl"
            },
            "component_content_output_hex_type": {
                "message": "Type"
            },
            "component_content_output_hex_hex": {
                "message": "String"
            },
            "component_content_output_hex_dump": {
                "message": "Dump"
            },
            "component_content_output_hex_caps": {
                "message": "Caps Lock"
            },
            "component_content_output_hex_lower": {
                "message": "Lower"
            },
            "component_content_output_hex_upper": {
                "message": "Upper"
            },
            "component_content_output_hex_dump_format": {
                "message": "Format"
            },
            "component_content_output_hex_dump_width": {
                "message": "Width"
            },
            "component_content_output_hex_dump_format_twos": {
                "message": "Twos"
            },
            "component_content_output_hex_dump_format_fours": {
                "message": "Fours"
            },
            "component_content_output_hex_dump_format_eights": {
                "message": "Eights"
            },
            "component_content_output_hex_dump_format_sixteens": {
                "message": "Sixteens"
            },
            "component_content_output_hex_dump_format_none": {
                "message": "None"
            },
            "component_serialize_csv_table_row_object": {
                "message": "Row Object"
            },
            "component_serialize_csv_table_keyed": {
                "message": "Keyed"
            },
            "component_serialize_csv_table_row_array": {
                "message": "Row Array"
            },
            "component_serialize_csv_table_column_array": {
                "message": "Column Array"
            },
            "component_serialize_properties_convert_to_json_tree": {
                "message": "Support (.) Multi Level"
            },
            "component_serialize_csv_quoted": {
                "message": "Quoted"
            },
            "component_serialize_csv_table_header": {
                "message": "Header"
            },
            "component_serialize_xml_attribute_prefix": {
                "message": "Attribute Prefix"
            },
            "component_serialize_text_add_quote": {
                "message": "Delimiter"
            },
            "component_serialize_text_delimiter": {
                "message": "Add Quote"
            },
            "component_editor_line_wrapping": {
                "message": "Line Wrapping"
            },
            "component_editor_line_number": {
                "message": "Show Line Number"
            },
            "component_editor_multiple": {
                "message": "Column Selection Mode"
            },
            "component_editor_goto": {
                "message": "Go to"
            },
            "component_editor_search": {
                "message": "Find/Replace"
            },
            "component_editor_inline": {
                "message": "Inline"
            },
            "component_click_help": {
                "message": "Click to view the help document"
            },
            "component_display_fold_option": {
                "message": "Fold Option"
            },
            "component_display_expand_option": {
                "message": "Expand Option"
            },
            "main_locale": {
                "message": "en"
            },
            "main_category_common": {
                "message": "Common"
            },
            "main_category_encryption": {
                "message": "En/Decrypt/Sign"
            },
            "main_category_conversion": {
                "message": "Convert"
            },
            "main_category_encoder_decoder": {
                "message": "En/Decoder"
            },
            "main_category_check": {
                "message": "Validator"
            },
            "main_category_generate": {
                "message": "Generate"
            },
            "main_category_other": {
                "message": "Other"
            },
            "main_ui_ok": {
                "message": "Ok"
            },
            "main_ui_error": {
                "message": "Error: {0}",
                "placeholders": [
                    "0"
                ]
            },
            "main_ui_cancel": {
                "message": "Cancel"
            },
            "main_ui_prompt": {
                "message": "Prompt"
            },
            "main_ui_reload": {
                "message": "Reload"
            },
            "main_ui_setting": {
                "message": "Settings"
            },
            "main_ui_config": {
                "message": "Config"
            },
            "main_ui_reset": {
                "message": "Reset"
            },
            "main_ui_save": {
                "message": "Save"
            },
            "main_ui_submit": {
                "message": "Submit"
            },
            "main_ui_views": {
                "message": "View"
            },
            "main_ui_clear": {
                "message": "Clear"
            },
            "main_ui_more": {
                "message": "More"
            },
            "main_ui_load": {
                "message": "Loading"
            },
            "main_ui_close": {
                "message": "Close"
            },
            "main_ui_null": {
                "message": "No data"
            },
            "main_ui_return": {
                "message": "Return"
            },
            "main_ui_input": {
                "message": "Input"
            },
            "main_ui_output": {
                "message": "Output"
            },
            "main_ui_down": {
                "message": "Download"
            },
            "main_ui_issues": {
                "message": "Issues Feedback"
            },
            "main_ui_open_full": {
                "message": "New Full Screen Page"
            },
            "main_ui_open_devtools": {
                "message": "Open DevTools"
            },
            "main_ui_success": {
                "message": "Success ^o^"
            },
            "main_ui_paste": {
                "message": "Paste"
            },
            "main_ui_copy": {
                "message": "Copy"
            },
            "main_ui_copy_text_ok": {
                "message": "Copy Success ^o^"
            },
            "main_ui_copy_image_ok": {
                "message": "Image Copied ^o^"
            },
            "main_ui_op": {
                "message": "Operation"
            },
            "main_ui_toggle_light": {
                "message": "Toggle Dark"
            },
            "main_ui_toggle_dark": {
                "message": "Toggle Light"
            },
            "main_ui_clipboard": {
                "message": "Clipboard"
            },
            "main_ui_advanced": {
                "message": "Advanced"
            },
            "main_ui_simple": {
                "message": "Simple"
            },
            "main_ui_reference": {
                "message": "Reference"
            },
            "main_ui_keyword": {
                "message": "Keyword"
            },
            "main_ui_enable": {
                "message": "Enable"
            },
            "main_ui_disable": {
                "message": "Disable"
            },
            "main_ui_other": {
                "message": "Other"
            },
            "main_setting_language": {
                "message": "Language"
            },
            "main_setting_layout": {
                "message": "Page Layout"
            },
            "main_setting_layout_complex": {
                "message": "Complex"
            },
            "main_setting_layout_simple": {
                "message": "Simple"
            },
            "main_tools_lists": {
                "message": "All Tool Lists"
            },
            "main_common_tool": {
                "message": "Common Tool"
            },
            "main_common_drag": {
                "message": "Drag The Corresponding Tool Button To Operate"
            },
            "main_unselected_tool": {
                "message": "Unselected Tool"
            },
            "main_keyboard_setting": {
                "message": "Setting Shortcuts"
            },
            "main_display_mode": {
                "message": "Theme"
            },
            "main_display_mode_light": {
                "message": "Light"
            },
            "main_display_mode_dark": {
                "message": "Dark"
            },
            "main_display_mode_auto": {
                "message": "Auto"
            },
            "main_copy_results_to_clipboard": {
                "message": "Copy results to clipboard"
            },
            "main_read_content_from_clipboard": {
                "message": "Read content from clipboard"
            },
            "main_read_clipboard_content_trim": {
                "message": "Read clipboard content trim"
            },
            "main_keyboard_firefox_1": {
                "message": "Need to manually set shortcuts"
            },
            "main_keyboard_firefox_2": {
                "message": "Open [Add-ons Manager(about:addons)]，Click the setting button on the right side of [Manage your extension]，Select [Manage Extension Shortcuts] to modify these shortcuts."
            },
            "main_keyboard_firefox_3": {
                "message": "Operation Method"
            },
            "main_history": {
                "message": "History"
            },
            "main_history_clear": {
                "message": "Clear history"
            },
            "main_history_time": {
                "message": "Operation time"
            },
            "main_history_data": {
                "message": "Data"
            },
            "main_history_null": {
                "message": "History not found"
            },
            "main_sidebar_expand": {
                "message": "Expand Sidebar"
            },
            "main_sidebar_collapse": {
                "message": "Collapse Sidebar"
            },
            "main_search_tool": {
                "message": "Search"
            },
            "main_search_placeholder": {
                "message": "Search Tool"
            },
            "main_recently_use": {
                "message": "Recently Used"
            },
            "main_clipboard_get": {
                "message": "Authorize Clipboard Permissions"
            },
            "main_clipboard_granted": {
                "message": "Clipboard Authorization Success"
            },
            "main_clipboard_denied": {
                "message": "No Clipboard Authorization, Please Manually Authorize"
            },
            "main_clipboard_prompt": {
                "message": "Click To Get Clipboard Authorization"
            },
            "main_new_version_found": {
                "message": "New version found. Refresh to update."
            },
            "main_last_updated": {
                "message": "Last Updated on "
            },
            "main_network_request_proxy": {
                "message": "Network Request Proxy"
            },
            "main_network_request_proxy_prompt": {
                "message": "The current function requires accessing the network. Due to platform security restrictions (cross-origin issues), you need to access it through a proxy. Please enable [Network Request Proxy] on the settings page."
            },
            "main_privacy_policy": {
                "message": "Privacy Policy"
            },
            "main_auto_fill": {
                "message": "Auto Fill"
            },
            "main_auto_fill_explain": {
                "message": "Prioritize the use of historical data within {0} seconds",
                "placeholders": [
                    "0"
                ]
            },
            "main_history_icon_badge_hidden": {
                "message": "Hide History Icon Badge"
            },
            "main_content_clear": {
                "message": "Clear Input"
            },
            "tool_hash": {
                "message": "Hash"
            },
            "tool_hash_hash_keywords": {
                "message": "md5,sha1,sha256,sha512,sm3"
            },
            "tool_encrypt": {
                "message": "Encrypt & Decrypt"
            },
            "tool_aes": {
                "message": "AES"
            },
            "tool_aes_encrypt": {
                "message": "Encrypt"
            },
            "tool_aes_decrypt": {
                "message": "Decrypt"
            },
            "tool_des": {
                "message": "DES"
            },
            "tool_des_encrypt": {
                "message": "Encrypt"
            },
            "tool_des_decrypt": {
                "message": "Decrypt"
            },
            "tool_tripleDes": {
                "message": "Triple DES"
            },
            "tool_tripleDes_encrypt": {
                "message": "Encrypt"
            },
            "tool_tripleDes_decrypt": {
                "message": "Decrypt"
            },
            "tool_rc4": {
                "message": "RC4"
            },
            "tool_rc4_encrypt": {
                "message": "Encrypt"
            },
            "tool_rc4_decrypt": {
                "message": "Decrypt"
            },
            "tool_rabbit": {
                "message": "Rabbit"
            },
            "tool_rabbit_encrypt": {
                "message": "Encrypt"
            },
            "tool_rabbit_decrypt": {
                "message": "Decrypt"
            },
            "tool_sm2": {
                "message": "SM2"
            },
            "tool_sm2_encrypt": {
                "message": "Encrypt"
            },
            "tool_sm2_decrypt": {
                "message": "Decrypt"
            },
            "tool_sm2_sign": {
                "message": "Sign"
            },
            "tool_sm2_verify": {
                "message": "VerifySign"
            },
            "tool_sm4": {
                "message": "SM4"
            },
            "tool_sm4_encrypt": {
                "message": "Encrypt"
            },
            "tool_sm4_decrypt": {
                "message": "Decrypt"
            },
            "tool_rsa": {
                "message": "RSA"
            },
            "tool_rsa_encrypt": {
                "message": "Encrypt"
            },
            "tool_rsa_decrypt": {
                "message": "Decrypt"
            },
            "tool_sign": {
                "message": "Sign"
            },
            "tool_base64": {
                "message": "Base64"
            },
            "tool_base64_encoder": {
                "message": "Encoder"
            },
            "tool_base64_decoder": {
                "message": "Decoder"
            },
            "tool_json": {
                "message": "JSON"
            },
            "tool_url": {
                "message": "Url En/Decode"
            },
            "tool_url_encoder": {
                "message": "Encoder"
            },
            "tool_url_decoder": {
                "message": "Decoder"
            },
            "tool_qrCode": {
                "message": "QR Code"
            },
            "tool_barcode": {
                "message": "Barcode"
            },
            "tool_qrCode_generate": {
                "message": "Generate"
            },
            "tool_qrCode_parse": {
                "message": "Parse"
            },
            "tool_pinyin": {
                "message": "Chinese Pinyin"
            },
            "tool_ip": {
                "message": "Ip Query"
            },
            "tool_code": {
                "message": "Code"
            },
            "tool_code_code": {
                "message": "Formatter"
            },
            "tool_code_run": {
                "message": "Run"
            },
            "tool_unicode": {
                "message": "Unicode"
            },
            "tool_unicode_encoder": {
                "message": "Encoder"
            },
            "tool_unicode_decoder": {
                "message": "Decoder"
            },
            "tool_radix": {
                "message": "Base Convert"
            },
            "tool_regex": {
                "message": "Regex"
            },
            "tool_randomString": {
                "message": "Random String"
            },
            "tool_serialize": {
                "message": "Serialize"
            },
            "tool_diffs": {
                "message": "Compare Text"
            },
            "tool_crontab": {
                "message": "Crontab"
            },
            "tool_websocket": {
                "message": "Websocket"
            },
            "tool_unit": {
                "message": "Unit Convert"
            },
            "tool_time": {
                "message": "Data Time"
            },
            "tool_time_timestamp": {
                "message": "Timestamp"
            },
            "tool_time_timezone": {
                "message": "Timezone"
            },
            "tool_time_calculator": {
                "message": "Calculator"
            },
            "tool_uuid": {
                "message": "UUID"
            },
            "tool_ascii": {
                "message": "ASCII"
            },
            "tool_variableConversion": {
                "message": "Variable Name"
            },
            "tool_jwt": {
                "message": "JWT"
            },
            "tool_hexString": {
                "message": "Hex/String"
            },
            "tool_hexString_stringToHex": {
                "message": "String => Hex"
            },
            "tool_hexString_hexToString": {
                "message": "Hex => String"
            },
            "tool_text": {
                "message": "Text"
            },
            "tool_html": {
                "message": "Html En/Decode"
            },
            "tool_binary": {
                "message": "trueForm/inverse/complement"
            },
            "tool_arm": {
                "message": "ARM/HEX"
            },
            "tool_arm_armToHex": {
                "message": "ARM to HEX"
            },
            "tool_arm_hexToArm": {
                "message": "HEX to ARM"
            },
            "tool_bcrypt": {
                "message": "Bcrypt"
            },
            "tool_ipcalc": {
                "message": "Ipcalc"
            },
            "tool_ipcalc_ipv4": {
                "message": "IPv4"
            },
            "tool_ipcalc_ipv6": {
                "message": "IPv6"
            },
            "tool_sqlFillParameter": {
                "message": "Fill SQL Parameters"
            },
            "tool_httpSnippet": {
                "message": "Http Request Code"
            },
            "tool_dataValidation": {
                "message": "BCC/CRC/LRC"
            },
            "tool_dataValidation_bcc": {
                "message": "BCC"
            },
            "tool_dataValidation_crc": {
                "message": "CRC"
            },
            "tool_dataValidation_lrc": {
                "message": "LRC"
            },
            "tool_color": {
                "message": "Color"
            },
            "tool_hmac": {
                "message": "HMAC"
            },
            "tool_gzip": {
                "message": "GZIP"
            },
            "tool_gzip_encoder": {
                "message": "Encoder"
            },
            "tool_gzip_decoder": {
                "message": "Decoder"
            },
            "tool_urlParse": {
                "message": "Url Parse"
            },
            "tool_asn1": {
                "message": "ASN.1 Decode"
            },
            "tool_dockerCompose": {
                "message": "Docker run to Compose"
            },
            "tool_hash_hash": {
                "message": "Hash"
            },
            "tool_aes_encrypt_keywords": {
                "message": ""
            },
            "tool_aes_decrypt_keywords": {
                "message": ""
            },
            "tool_des_encrypt_keywords": {
                "message": ""
            },
            "tool_des_decrypt_keywords": {
                "message": ""
            },
            "tool_tripleDes_encrypt_keywords": {
                "message": ""
            },
            "tool_tripleDes_decrypt_keywords": {
                "message": ""
            },
            "tool_rc4_encrypt_keywords": {
                "message": ""
            },
            "tool_rc4_decrypt_keywords": {
                "message": ""
            },
            "tool_rabbit_encrypt_keywords": {
                "message": ""
            },
            "tool_rabbit_decrypt_keywords": {
                "message": ""
            },
            "tool_sm2_encrypt_keywords": {
                "message": ""
            },
            "tool_sm2_decrypt_keywords": {
                "message": ""
            },
            "tool_sm2_sign_keywords": {
                "message": ""
            },
            "tool_sm2_verify_keywords": {
                "message": ""
            },
            "tool_sm4_encrypt_keywords": {
                "message": ""
            },
            "tool_sm4_decrypt_keywords": {
                "message": ""
            },
            "tool_rsa_encrypt_keywords": {
                "message": ""
            },
            "tool_rsa_decrypt_keywords": {
                "message": ""
            },
            "tool_sign_sign": {
                "message": "Sign"
            },
            "tool_sign_sign_keywords": {
                "message": ""
            },
            "tool_base64_encoder_keywords": {
                "message": ""
            },
            "tool_base64_decoder_keywords": {
                "message": ""
            },
            "tool_json_json": {
                "message": "JSON"
            },
            "tool_json_json_keywords": {
                "message": ""
            },
            "tool_url_encoder_keywords": {
                "message": ""
            },
            "tool_url_decoder_keywords": {
                "message": ""
            },
            "tool_qrCode_generate_keywords": {
                "message": ""
            },
            "tool_qrCode_parse_keywords": {
                "message": ""
            },
            "tool_barcode_barcode": {
                "message": "Barcode"
            },
            "tool_barcode_barcode_keywords": {
                "message": ""
            },
            "tool_pinyin_pinyin": {
                "message": "Chinese Pinyin"
            },
            "tool_pinyin_pinyin_keywords": {
                "message": ""
            },
            "tool_ip_ip": {
                "message": "Ip Query"
            },
            "tool_ip_ip_keywords": {
                "message": ""
            },
            "tool_code_code_keywords": {
                "message": ""
            },
            "tool_code_run_keywords": {
                "message": ""
            },
            "tool_unicode_encoder_keywords": {
                "message": ""
            },
            "tool_unicode_decoder_keywords": {
                "message": ""
            },
            "tool_radix_radix": {
                "message": "Base Convert"
            },
            "tool_radix_radix_keywords": {
                "message": ""
            },
            "tool_regex_regex": {
                "message": "Regex"
            },
            "tool_regex_regex_keywords": {
                "message": ""
            },
            "tool_randomString_randomString": {
                "message": "Random String"
            },
            "tool_randomString_randomString_keywords": {
                "message": ""
            },
            "tool_serialize_serialize": {
                "message": "Serialize"
            },
            "tool_serialize_serialize_keywords": {
                "message": ""
            },
            "tool_diffs_diffs": {
                "message": "Compare Text"
            },
            "tool_diffs_diffs_keywords": {
                "message": ""
            },
            "tool_crontab_crontab": {
                "message": "Crontab"
            },
            "tool_crontab_crontab_keywords": {
                "message": ""
            },
            "tool_websocket_websocket": {
                "message": "Websocket"
            },
            "tool_websocket_websocket_keywords": {
                "message": ""
            },
            "tool_unit_unit": {
                "message": "Unit Convert"
            },
            "tool_unit_unit_keywords": {
                "message": ""
            },
            "tool_time_timestamp_keywords": {
                "message": ""
            },
            "tool_time_timezone_keywords": {
                "message": ""
            },
            "tool_time_calculator_keywords": {
                "message": ""
            },
            "tool_uuid_uuid": {
                "message": "UUID"
            },
            "tool_uuid_uuid_keywords": {
                "message": ""
            },
            "tool_ascii_ascii": {
                "message": "ASCII"
            },
            "tool_ascii_ascii_keywords": {
                "message": ""
            },
            "tool_variableConversion_variableConversion": {
                "message": "Variable Name"
            },
            "tool_variableConversion_variableConversion_keywords": {
                "message": ""
            },
            "tool_jwt_jwt": {
                "message": "JWT"
            },
            "tool_jwt_jwt_keywords": {
                "message": ""
            },
            "tool_hexString_stringToHex_keywords": {
                "message": ""
            },
            "tool_hexString_hexToString_keywords": {
                "message": ""
            },
            "tool_text_text": {
                "message": "Text"
            },
            "tool_text_text_keywords": {
                "message": ""
            },
            "tool_html_html": {
                "message": "Html En/Decode"
            },
            "tool_html_html_keywords": {
                "message": ""
            },
            "tool_binary_binary": {
                "message": "trueForm/inverse/complement"
            },
            "tool_binary_binary_keywords": {
                "message": ""
            },
            "tool_arm_armToHex_keywords": {
                "message": ""
            },
            "tool_arm_hexToArm_keywords": {
                "message": ""
            },
            "tool_bcrypt_bcrypt": {
                "message": "Bcrypt"
            },
            "tool_bcrypt_bcrypt_keywords": {
                "message": ""
            },
            "tool_ipcalc_ipv4_keywords": {
                "message": ""
            },
            "tool_ipcalc_ipv6_keywords": {
                "message": ""
            },
            "tool_sqlFillParameter_sqlFillParameter": {
                "message": "Fill SQL Parameters"
            },
            "tool_sqlFillParameter_sqlFillParameter_keywords": {
                "message": ""
            },
            "tool_httpSnippet_httpSnippet": {
                "message": "Http Request Code"
            },
            "tool_httpSnippet_httpSnippet_keywords": {
                "message": ""
            },
            "tool_dataValidation_bcc_keywords": {
                "message": ""
            },
            "tool_dataValidation_crc_keywords": {
                "message": ""
            },
            "tool_dataValidation_lrc_keywords": {
                "message": ""
            },
            "tool_color_color": {
                "message": "Color"
            },
            "tool_color_color_keywords": {
                "message": ""
            },
            "tool_hmac_hmac": {
                "message": "HMAC"
            },
            "tool_hmac_hmac_keywords": {
                "message": ""
            },
            "tool_gzip_encoder_keywords": {
                "message": ""
            },
            "tool_gzip_decoder_keywords": {
                "message": ""
            },
            "tool_urlParse_urlParse": {
                "message": "Url Parse"
            },
            "tool_urlParse_urlParse_keywords": {
                "message": ""
            },
            "tool_asn1_asn1": {
                "message": "ASN.1 Decode"
            },
            "tool_asn1_asn1_keywords": {
                "message": ""
            },
            "tool_dockerCompose_dockerCompose": {
                "message": "Docker run to Compose"
            },
            "tool_dockerCompose_dockerCompose_keywords": {
                "message": ""
            },
            "hash_uppercase": {
                "message": "Uppercase"
            },
            "hash_salt": {
                "message": "Salt"
            },
            "hash_salt_value": {
                "message": "Salt"
            },
            "hash_salt_mode": {
                "message": "Mode"
            },
            "hash_salt_select": {
                "message": "Select Mode"
            },
            "hash_multiple": {
                "message": "Multiple"
            },
            "hash_multiple_tooltip": {
                "message": "Hash Operation By Row"
            },
            "aes_iv_auto_fill": {
                "message": "Iv Auto Fill(\\0)"
            },
            "sm2_generate_keypair": {
                "message": "Generate Public/Private Key"
            },
            "sm2_public_key": {
                "message": "Public Key"
            },
            "sm2_private_key": {
                "message": "Private Key"
            },
            "sm2_source_data": {
                "message": "Source Data"
            },
            "sm2_sign_value": {
                "message": "Sign Value"
            },
            "sm2_userId": {
                "message": "UserId"
            },
            "sm2_public_key_error": {
                "message": "Public Key Format Error"
            },
            "rsa_public": {
                "message": "PEM Public Key"
            },
            "rsa_private": {
                "message": "PEM Private Key"
            },
            "rsa_encrypt_input": {
                "message": "Encrypt Content"
            },
            "rsa_decrypt_input": {
                "message": "Decrypt Content"
            },
            "sign_sign_data": {
                "message": "Sign Data/Verify data"
            },
            "sign_verify_code": {
                "message": "Signature after Base64 encoding"
            },
            "sign_sign": {
                "message": "Sign"
            },
            "sign_verify": {
                "message": "Verify"
            },
            "sign_generate_keypair": {
                "message": "Generate Keypair"
            },
            "sign_public_key": {
                "message": "PEM Public Key"
            },
            "sign_private_key": {
                "message": "PEM Private Key"
            },
            "sign_keypair_type": {
                "message": "Type"
            },
            "sign_keypair_length": {
                "message": "Length"
            },
            "sign_verify_fail": {
                "message": "Verify Fail"
            },
            "sign_verify_ok": {
                "message": "Verify Success"
            },
            "json_common": {
                "message": "Common"
            },
            "json_from": {
                "message": "From"
            },
            "json_to": {
                "message": "To"
            },
            "json_key_rename": {
                "message": "Key Rename"
            },
            "json_format": {
                "message": "Format"
            },
            "json_compress": {
                "message": "Compress"
            },
            "json_escape": {
                "message": "Escape"
            },
            "json_clear_escape": {
                "message": "Unescape"
            },
            "json_add_escape": {
                "message": "Add Escape"
            },
            "json_unicode_to_zh": {
                "message": "Unicode->Zh"
            },
            "json_zh_to_unicode": {
                "message": "Zh->Unicode"
            },
            "json_object": {
                "message": "To Object"
            },
            "json_path": {
                "message": "Path"
            },
            "json_inline": {
                "message": "Inline"
            },
            "json_asc": {
                "message": "Asc"
            },
            "json_desc": {
                "message": "Desc"
            },
            "json_key_sort": {
                "message": "Key Sort"
            },
            "json_repair": {
                "message": "JSON Repair"
            },
            "json_json_path": {
                "message": "JSONPath"
            },
            "json_jmes_path": {
                "message": "JMESPath"
            },
            "json_line_info": {
                "message": "Length"
            },
            "qrCode_generate_option_common": {
                "message": "Common"
            },
            "qrCode_generate_option_content": {
                "message": "Content"
            },
            "qrCode_generate_option_corners_square": {
                "message": "Corners Square"
            },
            "qrCode_generate_option_corners_dot": {
                "message": "Corners Dot"
            },
            "qrCode_generate_option_background": {
                "message": "Background"
            },
            "qrCode_generate_option_margin": {
                "message": "Margin"
            },
            "qrCode_generate_option_size": {
                "message": "Size"
            },
            "qrCode_generate_option_correction": {
                "message": "Correction"
            },
            "qrCode_generate_option_gradient": {
                "message": "Gradient"
            },
            "qrCode_generate_option_linear": {
                "message": "Linear"
            },
            "qrCode_generate_option_radial": {
                "message": "Radial"
            },
            "qrCode_generate_option_rotation": {
                "message": "Rotation"
            },
            "qrCode_generate_option_style": {
                "message": "Style"
            },
            "qrCode_generate_option_dots": {
                "message": "Dots"
            },
            "qrCode_generate_option_square": {
                "message": "Square"
            },
            "qrCode_generate_option_rounded": {
                "message": "Rounded"
            },
            "qrCode_generate_option_classy": {
                "message": "Classy"
            },
            "qrCode_generate_option_dot": {
                "message": "Rounded"
            },
            "qrCode_generate_option_extra-rounded": {
                "message": "Extra Rounded"
            },
            "qrCode_generate_option_classy-rounded": {
                "message": "Classy Rounded"
            },
            "qrCode_reader_parsing_failure": {
                "message": "Image parsing failure"
            },
            "barcode_background": {
                "message": "Background"
            },
            "barcode_line_color": {
                "message": "Line Color"
            },
            "barcode_bar_width": {
                "message": "Width"
            },
            "barcode_height": {
                "message": "Height"
            },
            "barcode_margin": {
                "message": "Margin"
            },
            "barcode_text": {
                "message": "Text"
            },
            "barcode_close": {
                "message": "Hide"
            },
            "barcode_top": {
                "message": "Top"
            },
            "barcode_bottom": {
                "message": "Bottom"
            },
            "barcode_text_align": {
                "message": "Align"
            },
            "barcode_left": {
                "message": "Left"
            },
            "barcode_center": {
                "message": "Center"
            },
            "barcode_right": {
                "message": "Right"
            },
            "barcode_font": {
                "message": "Font"
            },
            "barcode_bold": {
                "message": "Bold"
            },
            "barcode_italic": {
                "message": "Italic"
            },
            "barcode_font_size": {
                "message": "Size"
            },
            "barcode_generate_fail": {
                "message": "Generate Failure"
            },
            "pinyin_normal": {
                "message": "No Tone"
            },
            "pinyin_tone": {
                "message": "Have Tone"
            },
            "pinyin_abbr": {
                "message": "First Letter"
            },
            "pinyin_delimiter_null": {
                "message": "No Delimiter"
            },
            "pinyin_delimiter_space": {
                "message": "Space Delimiter"
            },
            "pinyin_delimiter_1": {
                "message": "'-' Delimiter"
            },
            "pinyin_delimiter_2": {
                "message": "'_' Delimiter"
            },
            "pinyin_delimiter_3": {
                "message": "'.' Delimiter"
            },
            "pinyin_multiple_flag": {
                "message": "Show Polyphony"
            },
            "pinyin_tone_is_number": {
                "message": "Tone Number"
            },
            "pinyin_upper": {
                "message": "Uppercase"
            },
            "ip_input": {
                "message": "Please enter IP address (IPv4/IPv6)"
            },
            "ip_query": {
                "message": "Query"
            },
            "ip_local": {
                "message": "Local IP"
            },
            "ip_info_source": {
                "message": "IP information source"
            },
            "ip_ok": {
                "message": "Query Success"
            },
            "ip_error": {
                "message": "Query Fail:{0}",
                "placeholders": [
                    "0"
                ]
            },
            "code_indent_width": {
                "message": "Indent Space {0}",
                "placeholders": [
                    "0"
                ]
            },
            "code_indent_width_null": {
                "message": "No Indent"
            },
            "code_xml_collapse_content": {
                "message": "Collapse Content"
            },
            "code_beautify": {
                "message": "Beautify"
            },
            "code_compress": {
                "message": "Compress"
            },
            "code_run": {
                "message": "Run"
            },
            "code_running": {
                "message": "Running"
            },
            "code_run_used_times": {
                "message": "Today Used Times: {0} ",
                "placeholders": [
                    "0"
                ]
            },
            "code_run_config_explain": {
                "message": "Click to get configuration, the third-party service({0}) is at your own risk, and has nothing to do with Ctool",
                "placeholders": [
                    "0"
                ]
            },
            "code_not_support": {
                "message": "Not Support {0} {1}",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "unicode_mode_unicode_point_default": {
                "message": "Unicode Default \\u[0-9a-f]{4}",
                "placeholders": [
                    "4"
                ]
            },
            "unicode_mode_unicode_point_wide": {
                "message": "Unicode Wide \\u[0-9a-f]{4,6}",
                "placeholders": [
                    "4,6"
                ]
            },
            "unicode_mode_unicode_point_wide_brace": {
                "message": "Unicode Wide(Has Bracket) \\u{[0-9a-f]{4,6}}",
                "placeholders": [
                    "[0-9a-f]{4,6"
                ]
            },
            "unicode_mode_unicode_number": {
                "message": "Unicode Number U+[0-9A-F]{4,6}",
                "placeholders": [
                    "4,6"
                ]
            },
            "unicode_mode_html_entity_10": {
                "message": "HTML-code(Base-10) &#[0-9]+;"
            },
            "unicode_mode_html_entity_16": {
                "message": "HTML-code(Base-16) &#x[0-9a-f]{1,6};",
                "placeholders": [
                    "1,6"
                ]
            },
            "unicode_mode_css_entity": {
                "message": "Css-code(Base-16) \\[0-9a-f]{4,6}",
                "placeholders": [
                    "4,6"
                ]
            },
            "unicode_ignore_ascii": {
                "message": "忽略 Ascii 字符"
            },
            "radix_input_placeholder": {
                "message": "Please enter the number to be converted"
            },
            "radix_base": {
                "message": "Base-{0}",
                "placeholders": [
                    "0"
                ]
            },
            "radix_result": {
                "message": "Result {0}",
                "placeholders": [
                    "0"
                ]
            },
            "radix_alphabet": {
                "message": "64 Alphabet"
            },
            "radix_reset": {
                "message": "Reset"
            },
            "radix_alphabet_length_error": {
                "message": "The conversion alphabet must be 64 bits in length"
            },
            "regex_common": {
                "message": "Common"
            },
            "regex_expression": {
                "message": "Expression"
            },
            "regex_replace_content": {
                "message": "Replace Content"
            },
            "regex_replace": {
                "message": "Replace"
            },
            "regex_delete": {
                "message": "Delete"
            },
            "regex_input": {
                "message": "Input"
            },
            "regex_global": {
                "message": "Global"
            },
            "regex_ignore_case": {
                "message": "Ignore Case"
            },
            "regex_output_count": {
                "message": "{0} Total Matches",
                "placeholders": [
                    "0"
                ]
            },
            "regex_output_empty": {
                "message": "No match result, please check expression"
            },
            "regex_reference_name": {
                "message": "Char"
            },
            "regex_reference_text": {
                "message": "Description"
            },
            "randomString_length": {
                "message": "Length"
            },
            "randomString_amount": {
                "message": "Amount"
            },
            "randomString_digital": {
                "message": "Digital"
            },
            "randomString_lowercase": {
                "message": "Lowercase"
            },
            "randomString_uppercase": {
                "message": "Uppercase"
            },
            "randomString_chars": {
                "message": "Chars"
            },
            "randomString_symbol": {
                "message": "Symbol"
            },
            "diffs_collapse": {
                "message": "Collapse Identical"
            },
            "diffs_revert_direction": {
                "message": "Revert Direction"
            },
            "diffs_left_to_right": {
                "message": "Left => Right"
            },
            "diffs_right_to_left": {
                "message": "Left <= Right"
            },
            "crontab_expression": {
                "message": "Expression"
            },
            "crontab_execute_time": {
                "message": "Execute Time"
            },
            "crontab_example": {
                "message": "Example"
            },
            "crontab_format": {
                "message": "Format"
            },
            "crontab_execute_time_list": {
                "message": "Execute Time List"
            },
            "crontab_no": {
                "message": "{0}: {1}",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "crontab_symbol": {
                "message": "Symbol"
            },
            "crontab_l_prompt": {
                "message": "Use the 'L' parameter with caution and confirm in advance whether the environment supports it."
            },
            "crontab_second_prompt": {
                "message": "Use sub-second tasks with caution and confirm in advance whether the environment supports them."
            },
            "crontab_description": {
                "message": "Description"
            },
            "crontab_symbol_description_1": {
                "message": "any value"
            },
            "crontab_symbol_description_2": {
                "message": "value list separator"
            },
            "crontab_symbol_description_3": {
                "message": "range of values"
            },
            "crontab_symbol_description_4": {
                "message": "step values"
            },
            "crontab_generate": {
                "message": "Generate"
            },
            "crontab_generate_ignore": {
                "message": "Ignore"
            },
            "crontab_generate_second": {
                "message": "Second"
            },
            "crontab_generate_minute": {
                "message": "Minute"
            },
            "crontab_generate_hour": {
                "message": "Hour"
            },
            "crontab_generate_day": {
                "message": "Day"
            },
            "crontab_generate_month": {
                "message": "Month"
            },
            "crontab_generate_week": {
                "message": "Week"
            },
            "crontab_generate_any": {
                "message": "Any"
            },
            "crontab_generate_scope": {
                "message": "Scope"
            },
            "crontab_generate_interval": {
                "message": "Interval"
            },
            "crontab_generate_list": {
                "message": "List"
            },
            "websocket_connect": {
                "message": "Connect"
            },
            "websocket_reconnect": {
                "message": "Disconnect Reconnect"
            },
            "websocket_protocols": {
                "message": "Protocols"
            },
            "websocket_protocols_tip": {
                "message": "multiple values separated by comma(,)"
            },
            "websocket_close": {
                "message": "Close"
            },
            "websocket_send_content": {
                "message": "Send Content"
            },
            "websocket_log_content": {
                "message": "Request/Response/Log Content"
            },
            "websocket_send": {
                "message": "Send"
            },
            "websocket_client": {
                "message": "Client"
            },
            "websocket_server": {
                "message": "Server"
            },
            "websocket_tips": {
                "message": "Tips"
            },
            "websocket_error_connect": {
                "message": "Ws is not connected yet, or the connection fails, please check"
            },
            "websocket_error_content": {
                "message": "Send content cannot be empty"
            },
            "websocket_connect_ok": {
                "message": "Connect Success"
            },
            "websocket_close_ok": {
                "message": "Close Success"
            },
            "websocket_connect_start": {
                "message": "Connecting:{0}",
                "placeholders": [
                    "0"
                ]
            },
            "websocket_close_start": {
                "message": "Closing:{0}",
                "placeholders": [
                    "0"
                ]
            },
            "websocket_keep_scroll": {
                "message": "Keep Scroll"
            },
            "unit_length": {
                "message": "Length"
            },
            "unit_area": {
                "message": "Area"
            },
            "unit_volume": {
                "message": "Volume"
            },
            "unit_weight": {
                "message": "Weight"
            },
            "unit_temperature": {
                "message": "Temperature"
            },
            "unit_pressure": {
                "message": "Pressure"
            },
            "unit_power": {
                "message": "Power"
            },
            "unit_work": {
                "message": "Work"
            },
            "unit_density": {
                "message": "Density"
            },
            "unit_strength": {
                "message": "Strength"
            },
            "unit_time": {
                "message": "Time"
            },
            "unit_speed": {
                "message": "Speed"
            },
            "unit_byte": {
                "message": "Byte"
            },
            "unit_angle": {
                "message": "Angle"
            },
            "unit_length_km": {
                "message": "kilometres"
            },
            "unit_length_m": {
                "message": "metre"
            },
            "unit_length_dm": {
                "message": "decimetre"
            },
            "unit_length_cm": {
                "message": "centimetre"
            },
            "unit_length_mm": {
                "message": "millimetre"
            },
            "unit_length_um": {
                "message": "Micrometre"
            },
            "unit_length_nm": {
                "message": "Nanometre"
            },
            "unit_length_pm": {
                "message": "Picometre"
            },
            "unit_length_ly": {
                "message": "Light year"
            },
            "unit_length_au": {
                "message": "Astronomical unit"
            },
            "unit_length_in": {
                "message": "Inch"
            },
            "unit_length_ft": {
                "message": "Foot"
            },
            "unit_length_yd": {
                "message": "Yard"
            },
            "unit_length_mi": {
                "message": "Mile"
            },
            "unit_length_nmi": {
                "message": "Nautical mile"
            },
            "unit_length_fm": {
                "message": "Fathom"
            },
            "unit_length_fur": {
                "message": "furlong"
            },
            "unit_length_cn_li": {
                "message": "lǐ"
            },
            "unit_length_cn_zhang": {
                "message": "zhàng"
            },
            "unit_length_cn_chi": {
                "message": "chǐ"
            },
            "unit_length_cn_cun": {
                "message": "cùn"
            },
            "unit_length_cn_fen": {
                "message": "fēn"
            },
            "unit_length_cn_li2": {
                "message": "lí"
            },
            "unit_length_cn_hao": {
                "message": "háo"
            },
            "unit_area_km_2": {
                "message": "Square kilometre"
            },
            "unit_area_ha": {
                "message": "Hectare"
            },
            "unit_area_are": {
                "message": "Hectare Are"
            },
            "unit_area_m_2": {
                "message": "Square metre"
            },
            "unit_area_dm_2": {
                "message": "square decimetre"
            },
            "unit_area_cm_2": {
                "message": "Square centimetre"
            },
            "unit_area_mm_2": {
                "message": "Square millimeter"
            },
            "unit_area_acre": {
                "message": "Acre"
            },
            "unit_area_mi_2": {
                "message": "Square Acre"
            },
            "unit_area_yd_2": {
                "message": "Square Yard"
            },
            "unit_area_ft_2": {
                "message": "Square foot"
            },
            "unit_area_in_2": {
                "message": "Square inch"
            },
            "unit_area_rd_2": {
                "message": "Square rod"
            },
            "unit_area_cn_qing": {
                "message": "qǐng"
            },
            "unit_area_cn_mu": {
                "message": "mǔ"
            },
            "unit_area_cn_fen": {
                "message": "fēn"
            },
            "unit_area_cn_chi_2": {
                "message": "Square chǐ"
            },
            "unit_area_cn_cun_2": {
                "message": "Square cùn"
            },
            "unit_volume_m_3": {
                "message": "Cubic metre"
            },
            "unit_volume_dm_3": {
                "message": "cubic decimeter"
            },
            "unit_volume_cm_3": {
                "message": "Cubic centimeter"
            },
            "unit_volume_mm_3": {
                "message": "Cubic millimeter"
            },
            "unit_volume_l": {
                "message": "Litre"
            },
            "unit_volume_dl": {
                "message": "deciliter"
            },
            "unit_volume_ml": {
                "message": "milliliter"
            },
            "unit_volume_cl": {
                "message": "centiliter"
            },
            "unit_volume_uL": {
                "message": "microliter"
            },
            "unit_volume_hl": {
                "message": "hectolitre"
            },
            "unit_volume_ft_3": {
                "message": "Cubic feet"
            },
            "unit_volume_in_3": {
                "message": "Cubic inch"
            },
            "unit_volume_yd_3": {
                "message": "Cubic yards"
            },
            "unit_volume_acre_ft": {
                "message": "acre foot"
            },
            "unit_volume_uk_gal": {
                "message": "Uk gallon"
            },
            "unit_volume_us_gal": {
                "message": "Us gallon"
            },
            "unit_volume_uk_oz": {
                "message": "Uk ounce"
            },
            "unit_volume_us_oz": {
                "message": "Us ounce"
            },
            "unit_weight_kg": {
                "message": "kilogram"
            },
            "unit_weight_g": {
                "message": "gram"
            },
            "unit_weight_mg": {
                "message": "Milligrams"
            },
            "unit_weight_ug": {
                "message": "microgram"
            },
            "unit_weight_t": {
                "message": "Ton"
            },
            "unit_weight_q": {
                "message": "Quintal"
            },
            "unit_weight_ct": {
                "message": "carat"
            },
            "unit_weight_lb": {
                "message": "Pound"
            },
            "unit_weight_oz": {
                "message": "ounce"
            },
            "unit_weight_gr": {
                "message": "Grain"
            },
            "unit_weight_lt": {
                "message": "British long ton"
            },
            "unit_weight_st1": {
                "message": "US short ton"
            },
            "unit_weight_st2": {
                "message": "Stone"
            },
            "unit_weight_uk_cwt": {
                "message": "British long hundredweight"
            },
            "unit_weight_us_cwt": {
                "message": "US short hundredweight"
            },
            "unit_weight_dr": {
                "message": "Dram"
            },
            "unit_weight_cn_dan": {
                "message": "dān"
            },
            "unit_weight_cn_jin": {
                "message": "jīn"
            },
            "unit_weight_cn_liang": {
                "message": "liǎng"
            },
            "unit_weight_cn_qian": {
                "message": "qián"
            },
            "unit_temperature_c": {
                "message": "Celsius"
            },
            "unit_temperature_f": {
                "message": "Fahrenheit"
            },
            "unit_temperature_k": {
                "message": "Kelvin"
            },
            "unit_temperature_r": {
                "message": "Rankine_scale"
            },
            "unit_temperature_re": {
                "message": "Réaumur_scale"
            },
            "unit_pressure_pa": {
                "message": "Pascal"
            },
            "unit_pressure_kpa": {
                "message": "KPa"
            },
            "unit_pressure_hpa": {
                "message": "HPa"
            },
            "unit_pressure_atm": {
                "message": "Standard atmospheric pressure"
            },
            "unit_pressure_mmhg": {
                "message": "MmHg"
            },
            "unit_pressure_in_hg": {
                "message": "Inch mercury"
            },
            "unit_pressure_bar": {
                "message": "bar"
            },
            "unit_pressure_mbar": {
                "message": "millibar"
            },
            "unit_pressure_psf": {
                "message": "Pounds per square feet"
            },
            "unit_pressure_psi": {
                "message": "Pounds per square inch"
            },
            "unit_pressure_mmwg": {
                "message": "mmH2O"
            },
            "unit_pressure_kgf_cm_2": {
                "message": "Kgf/square centimeter"
            },
            "unit_pressure_kgf_m_2": {
                "message": "Kgf/Square meter"
            },
            "unit_pressure_mpa": {
                "message": "MPa"
            },
            "unit_power_w": {
                "message": "watt"
            },
            "unit_power_kw": {
                "message": "kilowatt"
            },
            "unit_power_hp": {
                "message": "Imperial horsepower"
            },
            "unit_power_ps": {
                "message": "Metric horsepower"
            },
            "unit_power_kg_m_s": {
                "message": "Kg·m/sec"
            },
            "unit_power_kcal_s": {
                "message": "Kcal/s"
            },
            "unit_power_btu_s": {
                "message": "British Thermal Unit/sec"
            },
            "unit_power_ft_lb_s": {
                "message": "Feet·lbs/sec"
            },
            "unit_power_j_s": {
                "message": "Joule/sec"
            },
            "unit_power_n_m_s": {
                "message": "Newton m/s"
            },
            "unit_power_dbm": {
                "message": "Decibel-milliwatt"
            },
            "unit_power_dbw": {
                "message": "Decibel-Watt"
            },
            "unit_work_j": {
                "message": "joule"
            },
            "unit_work_kg_m": {
                "message": "Kg·m"
            },
            "unit_work_ps_h": {
                "message": "Metric horsepower·hour"
            },
            "unit_work_hp_h": {
                "message": "British horsepower·hour"
            },
            "unit_work_kw_h": {
                "message": "Kilowatt hour"
            },
            "unit_work_kw_h_": {
                "message": "Spend"
            },
            "unit_work_cal": {
                "message": "Card"
            },
            "unit_work_kcal": {
                "message": "Kcal"
            },
            "unit_work_btu": {
                "message": "British Thermal Unit"
            },
            "unit_work_ft_lb": {
                "message": "Foot pound"
            },
            "unit_work_kj": {
                "message": "Kilojoule"
            },
            "unit_density_kg_cm_3": {
                "message": "Kg/Cubic centimeter"
            },
            "unit_density_kg_dm_3": {
                "message": "Kg/cubic decimeter"
            },
            "unit_density_kg_m_3": {
                "message": "Kg/Cubic metre"
            },
            "unit_density_g_cm_3": {
                "message": "g/Cubic centimeter"
            },
            "unit_density_g_dm_3": {
                "message": "g/cubic decimeter"
            },
            "unit_density_g_m_3": {
                "message": "g/Cubic metre"
            },
            "unit_strength_n": {
                "message": "Newton"
            },
            "unit_strength_kn": {
                "message": "Kilogram Newton"
            },
            "unit_strength_kgf": {
                "message": "Kilogram force"
            },
            "unit_strength_gf": {
                "message": "Keli 克力"
            },
            "unit_strength_tf": {
                "message": "Metric ton force"
            },
            "unit_strength_lbf": {
                "message": "Pound force"
            },
            "unit_strength_kip": {
                "message": "Kilopound force"
            },
            "unit_strength_dyn": {
                "message": "Dyne"
            },
            "unit_time_yr": {
                "message": "year"
            },
            "unit_time_week": {
                "message": "week"
            },
            "unit_time_d": {
                "message": "Day"
            },
            "unit_time_h": {
                "message": "Hour"
            },
            "unit_time_min": {
                "message": "Minute"
            },
            "unit_time_s": {
                "message": "Second"
            },
            "unit_time_ms": {
                "message": "millisecond"
            },
            "unit_time_us": {
                "message": "Microseconds"
            },
            "unit_time_ns": {
                "message": "Nanosecond"
            },
            "unit_speed_m_s": {
                "message": "metre/Sec"
            },
            "unit_speed_km_s": {
                "message": "kilometer/Sec"
            },
            "unit_speed_km_h": {
                "message": "kilometer/Hour"
            },
            "unit_speed_c": {
                "message": "Speed of light"
            },
            "unit_speed_mach": {
                "message": "Maher"
            },
            "unit_speed_mile_h": {
                "message": "Mile/hour"
            },
            "unit_speed_in_s": {
                "message": "Inch/Sec"
            },
            "unit_byte_bit": {
                "message": "Bit"
            },
            "unit_byte_b": {
                "message": "byte"
            },
            "unit_byte_kb": {
                "message": "Kilobytes"
            },
            "unit_byte_mb": {
                "message": "Megabyte"
            },
            "unit_byte_gb": {
                "message": "Gigabytes"
            },
            "unit_byte_tb": {
                "message": "Terabyte"
            },
            "unit_byte_pb": {
                "message": "Petabytes"
            },
            "unit_byte_eb": {
                "message": "Exabytes"
            },
            "unit_angle_circle": {
                "message": "circle"
            },
            "unit_angle_angle": {
                "message": "angle"
            },
            "unit_angle_gon": {
                "message": "grade"
            },
            "unit_angle_degree": {
                "message": "degree"
            },
            "unit_angle_min": {
                "message": "Minute"
            },
            "unit_angle_s": {
                "message": "Second"
            },
            "unit_angle_rad": {
                "message": "radian"
            },
            "unit_angle_mrad": {
                "message": "Milliradian"
            },
            "unit_metric_system": {
                "message": "Metric System"
            },
            "unit_imperial_units": {
                "message": "Imperial Units"
            },
            "unit_chinese_units": {
                "message": "Chinese Units"
            },
            "unit_angle_units": {
                "message": "Angle Units"
            },
            "unit_radian_units": {
                "message": "Radian Units"
            },
            "unit_all": {
                "message": "All"
            },
            "time_timezone": {
                "message": "Timezone"
            },
            "time_error_format": {
                "message": "Input Format Error"
            },
            "time_current_time": {
                "message": "Current Time"
            },
            "time_second": {
                "message": "Second"
            },
            "time_millisecond": {
                "message": "Millisecond"
            },
            "time_nanosecond": {
                "message": "Nanosecond"
            },
            "time_diff_tool": {
                "message": "Difference Calculator"
            },
            "time_and": {
                "message": "And"
            },
            "time_diff": {
                "message": "Diff"
            },
            "time_operation": {
                "message": "Time Operation"
            },
            "time_add": {
                "message": "Add"
            },
            "time_reduce": {
                "message": "Reduce"
            },
            "time_after": {
                "message": "After"
            },
            "time_is": {
                "message": "Is"
            },
            "time_error_duration_length": {
                "message": "The year/month interval can only be an integer"
            },
            "time_year": {
                "message": "Year"
            },
            "time_month": {
                "message": "Month"
            },
            "time_week": {
                "message": "Week"
            },
            "time_day": {
                "message": "Day"
            },
            "time_hour": {
                "message": "Hour"
            },
            "time_minute": {
                "message": "Minute"
            },
            "time_analyze": {
                "message": "Time Analyze"
            },
            "time_analyze_year": {
                "message": "Year"
            },
            "time_analyze_quarter": {
                "message": "Quarter"
            },
            "time_analyze_month": {
                "message": "Month"
            },
            "time_analyze_year_output": {
                "message": "{year}: Q{quarter},{weekOfYear} Week,{dayOfYear} Day,{hourOfYear} Hour,{minuteOfYear} Minute,{secondOfYear} Second",
                "placeholders": [
                    "year",
                    "quarter",
                    "weekOfYear",
                    "dayOfYear",
                    "hourOfYear",
                    "minuteOfYear",
                    "secondOfYear"
                ]
            },
            "time_analyze_quarter_output": {
                "message": "Q{quarter}:{weekOfQuarter} Week,{dayOfQuarter} Day,{hourOfQuarter} Hour,{minuteOfQuarter} Minute,{secondOfQuarter} Second",
                "placeholders": [
                    "quarter",
                    "weekOfQuarter",
                    "dayOfQuarter",
                    "hourOfQuarter",
                    "minuteOfQuarter",
                    "secondOfQuarter"
                ]
            },
            "time_analyze_month_output": {
                "message": "{month}:{weekOfMonth} Week,{hourOfMonth} Hour,{minuteOfMonth} Minute,{secondOfMonth} Second",
                "placeholders": [
                    "month",
                    "weekOfMonth",
                    "hourOfMonth",
                    "minuteOfMonth",
                    "secondOfMonth"
                ]
            },
            "time_timestamp_input_placeholder": {
                "message": "Allow YYYY-MM-DD HH:mm:ss[.\\d+] Or Timestamp(Second/Millisecond/Nanosecond) Input"
            },
            "time_unix_auto": {
                "message": "Auto Type Inference"
            },
            "time_normal_second": {
                "message": "Normal Second"
            },
            "time_normal_millisecond": {
                "message": "Normal Millisecond"
            },
            "time_normal_nanosecond": {
                "message": "Normal Nanosecond"
            },
            "time_unix_second": {
                "message": "Unix Timestamp Second"
            },
            "time_unix_millisecond": {
                "message": "Unix Timestamp Millisecond"
            },
            "time_unix_nanosecond": {
                "message": "Unix Timestamp Nanosecond"
            },
            "time_format": {
                "message": "Format"
            },
            "time_value": {
                "message": "Value"
            },
            "time_timezone_input_placeholder": {
                "message": "Allow YYYY-MM-DD HH:mm:ss[.SSS] Datetime Input"
            },
            "uuid_amount": {
                "message": "Amount"
            },
            "uuid_hyphens": {
                "message": "Hyphens(-)"
            },
            "uuid_is_upper": {
                "message": "Upper"
            },
            "uuid_uint8_array": {
                "message": "Uint8 Array"
            },
            "ascii_input_prompt": {
                "message": " Please enter the {0} number to be converted",
                "placeholders": [
                    "0"
                ]
            },
            "ascii_input_str_prompt": {
                "message": "Please enter the ascii string to be converted"
            },
            "ascii_input_str": {
                "message": "String"
            },
            "ascii_input_bin": {
                "message": "BIN"
            },
            "ascii_input_oct": {
                "message": "OCT"
            },
            "ascii_input_dec": {
                "message": "DEC"
            },
            "ascii_input_hex": {
                "message": "HEX"
            },
            "ascii_yes": {
                "message": "Y"
            },
            "ascii_no": {
                "message": "N"
            },
            "ascii_is_visible": {
                "message": "Is Visible"
            },
            "ascii_description": {
                "message": "Description"
            },
            "ascii_code_nul": {
                "message": "Null char"
            },
            "ascii_code_soh": {
                "message": "Start of Heading"
            },
            "ascii_code_stx": {
                "message": "Start of Text"
            },
            "ascii_code_etx": {
                "message": "End of Text"
            },
            "ascii_code_eot": {
                "message": "End of Transmission"
            },
            "ascii_code_enq": {
                "message": "Enquiry"
            },
            "ascii_code_ack": {
                "message": "Acknowledgment"
            },
            "ascii_code_bel": {
                "message": "Bell"
            },
            "ascii_code_bs": {
                "message": "Back Space"
            },
            "ascii_code_tab": {
                "message": "Horizontal Tab"
            },
            "ascii_code_lf": {
                "message": "Line Feed"
            },
            "ascii_code_vt": {
                "message": "Vertical Tab"
            },
            "ascii_code_ff": {
                "message": "Form Feed"
            },
            "ascii_code_cr": {
                "message": "Carriage Return"
            },
            "ascii_code_so": {
                "message": "Shift Out / X-On"
            },
            "ascii_code_si": {
                "message": "Shift In / X-Off"
            },
            "ascii_code_dle": {
                "message": "Data Line Escape"
            },
            "ascii_code_dc1": {
                "message": "Device Control 1 (oft. XON)"
            },
            "ascii_code_dc2": {
                "message": "Device Control 2"
            },
            "ascii_code_dc3": {
                "message": "Device Control 3 (oft. XOFF)"
            },
            "ascii_code_dc4": {
                "message": "Device Control 4"
            },
            "ascii_code_nak": {
                "message": "Negative Acknowledgement"
            },
            "ascii_code_syn": {
                "message": "Synchronous Idle"
            },
            "ascii_code_etb": {
                "message": "End of Transmit Block"
            },
            "ascii_code_can": {
                "message": "Cancel"
            },
            "ascii_code_em": {
                "message": "End of Medium"
            },
            "ascii_code_sub": {
                "message": "Substitute"
            },
            "ascii_code_esc": {
                "message": "Escape"
            },
            "ascii_code_fs": {
                "message": "File Separator"
            },
            "ascii_code_gs": {
                "message": "Group Separator"
            },
            "ascii_code_rs": {
                "message": "Record Separator"
            },
            "ascii_code_us": {
                "message": "Unit Separator"
            },
            "ascii_code_del": {
                "message": "Delete"
            },
            "ascii_code_space": {
                "message": "Space"
            },
            "variableConversion_input": {
                "message": "Input"
            },
            "variableConversion_input_placeholder": {
                "message": "A line of one"
            },
            "text_case_conversion": {
                "message": "Case"
            },
            "text_upper_all": {
                "message": "Upper"
            },
            "text_lower_all": {
                "message": "Lower"
            },
            "text_upper_line_start": {
                "message": "Upper Line Start"
            },
            "text_lower_line_start": {
                "message": "lower Line Start"
            },
            "text_upper_word_start": {
                "message": "Upper Word Start"
            },
            "text_lower_word_start": {
                "message": "Lower Word Start"
            },
            "text_punctuation": {
                "message": "Punctuation"
            },
            "text_cn": {
                "message": "CN"
            },
            "text_en": {
                "message": "EN"
            },
            "text_simplified_traditional": {
                "message": "Chinese"
            },
            "text_simplified": {
                "message": "Simplified"
            },
            "text_traditional": {
                "message": "Traditional"
            },
            "text_replace": {
                "message": "Replace"
            },
            "text_line_remove_duplicate": {
                "message": "Line Remove Duplicate"
            },
            "text_line_number": {
                "message": "Line Number"
            },
            "text_line_number_add": {
                "message": "Add"
            },
            "text_line_number_remove": {
                "message": "Remove"
            },
            "text_sort": {
                "message": "Sort"
            },
            "text_line_sort_asc": {
                "message": "Line Asc"
            },
            "text_line_sort_desc": {
                "message": "Line Desc"
            },
            "text_reverse_line": {
                "message": "Reverse Line"
            },
            "text_reverse_line_string": {
                "message": "Reverse Line String"
            },
            "text_reverse_all": {
                "message": "Reverse All"
            },
            "text_filter": {
                "message": "Filter"
            },
            "text_filter_trim": {
                "message": "(trim) Removes whitespace from both ends of a string"
            },
            "text_filter_blank_line": {
                "message": "Filter blank line"
            },
            "text_filter_all_br": {
                "message": "Filter newlines"
            },
            "text_stat": {
                "message": "Stat"
            },
            "text_more_stat": {
                "message": "More Stat"
            },
            "text_stat_explain": {
                "message": "Explain"
            },
            "text_replace_search": {
                "message": "Search"
            },
            "text_replace_replace": {
                "message": "Replace (Leave blank to delete)"
            },
            "text_replace_regular": {
                "message": "Regular"
            },
            "text_replace_explain": {
                "message": "You can enter multiple lines, batch replace by line"
            },
            "text_string_length": {
                "message": "String"
            },
            "text_byte_length": {
                "message": "byte(utf8/gbk)"
            },
            "text_word_length": {
                "message": "Word"
            },
            "text_line_length": {
                "message": "Line"
            },
            "text_zh_length": {
                "message": "(Cn)Char/Punctuation"
            },
            "text_en_length": {
                "message": "(En)Char/Word/Punctuation"
            },
            "text_int_length": {
                "message": "(Number)Char/word"
            },
            "text_item": {
                "message": "Item"
            },
            "text_explain": {
                "message": "Explain"
            },
            "text_explain_byte_length_utf8_name": {
                "message": "byte utf8"
            },
            "text_explain_byte_length_utf8_info": {
                "message": "Cn Char Length:3"
            },
            "text_explain_byte_length_gbk_name": {
                "message": "byte gbk"
            },
            "text_explain_byte_length_gbk_info": {
                "message": "Cn Char Length:2"
            },
            "text_explain_string_length_name": {
                "message": "String Length"
            },
            "text_explain_string_length_info": {
                "message": "Cn/En Char Length:1 Line Break Length:0"
            },
            "text_explain_word_length_name": {
                "message": "Word"
            },
            "text_explain_word_length_info": {
                "message": "Cn+En Word+punctuation+Number word"
            },
            "text_explain_int_length_name": {
                "message": "Number Char"
            },
            "text_explain_int_length_info": {
                "message": "Number Char Count. For example:'a1024 1024' result:8"
            },
            "text_explain_int_word_length_name": {
                "message": "Number Word"
            },
            "text_explain_int_word_length_info": {
                "message": "For example:'a1024 1024' result:1"
            },
            "text_explain_blank_line_length_name": {
                "message": "Line Length"
            },
            "text_explain_blank_line_length_info": {
                "message": "Blank lines are also included in the number of lines"
            },
            "text_value": {
                "message": "value"
            },
            "text_stat_show": {
                "message": "Word: {0}  UTF-8: {1}  GBK: {2}",
                "placeholders": [
                    "0",
                    "1",
                    "2"
                ]
            },
            "text_rename": {
                "message": "Rename"
            },
            "text_escape": {
                "message": "Escape"
            },
            "text_escape_single_quote": {
                "message": "single quote"
            },
            "text_escape_double_quote": {
                "message": "double quote"
            },
            "text_escape_backslash": {
                "message": "backslash"
            },
            "text_escape_new_line": {
                "message": "new line"
            },
            "text_escape_carriage_return": {
                "message": "carriage return"
            },
            "text_escape_tab": {
                "message": "tab"
            },
            "text_escape_vertical_tab": {
                "message": "vertical tab"
            },
            "text_escape_backspace": {
                "message": "backspace"
            },
            "text_escape_form_feed": {
                "message": "form feed"
            },
            "text_escape_forward": {
                "message": "Escape(\\'=>')"
            },
            "text_escape_reverse": {
                "message": "Unescape('=>\\')"
            },
            "html_input_encode": {
                "message": "Please enter a string to be encoded"
            },
            "html_input_decode": {
                "message": "Please enter a string to be decoded"
            },
            "binary_input": {
                "message": "Input"
            },
            "binary_length": {
                "message": "{0} bit",
                "placeholders": [
                    "0"
                ]
            },
            "binary_true_form": {
                "message": "trueForm"
            },
            "binary_inverse": {
                "message": "Inverse"
            },
            "binary_complement": {
                "message": "Complement"
            },
            "binary_error": {
                "message": "error: {0}",
                "placeholders": [
                    "0"
                ]
            },
            "arm_info_source": {
                "message": "Information Source: "
            },
            "arm_convert": {
                "message": "Convert"
            },
            "arm_output": {
                "message": "Output"
            },
            "arm_error": {
                "message": "error: {0}",
                "placeholders": [
                    "0"
                ]
            },
            "bcrypt_generate": {
                "message": "Generate"
            },
            "bcrypt_password": {
                "message": "String"
            },
            "bcrypt_hash": {
                "message": "Hash"
            },
            "bcrypt_rounds": {
                "message": "Rounds"
            },
            "bcrypt_check": {
                "message": "check"
            },
            "bcrypt_check_result_success": {
                "message": "Right"
            },
            "bcrypt_check_result_error": {
                "message": "Wrong"
            },
            "bcrypt_rounds_range": {
                "message": "Rounds range [{0} - {1}]",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "ipcalc_ip": {
                "message": "IP Address"
            },
            "ipcalc_format": {
                "message": "Allow Input Format"
            },
            "ipcalc_mask": {
                "message": "Subnet Mask"
            },
            "ipcalc_random": {
                "message": "Random"
            },
            "ipcalc_limit": {
                "message": "Limit"
            },
            "ipcalc_short": {
                "message": "Compress"
            },
            "ipcalc_ip_info": {
                "message": "IP Detail"
            },
            "ipcalc_ip_info_full": {
                "message": "Expand an Address"
            },
            "ipcalc_ip_info_short": {
                "message": "Compress an Address"
            },
            "ipcalc_ip_info_ptr": {
                "message": "PTR"
            },
            "ipcalc_ip_info_long": {
                "message": "Long IP"
            },
            "ipcalc_ip_info_ip8": {
                "message": "Octal IP"
            },
            "ipcalc_ip_info_ip10": {
                "message": "Decimal IP"
            },
            "ipcalc_ip_info_ip16": {
                "message": "Hexadecimal IP"
            },
            "ipcalc_ip_info_ip2": {
                "message": "Binary IP"
            },
            "ipcalc_mask_info": {
                "message": "Mask Detail"
            },
            "ipcalc_mask_info_mask": {
                "message": "Subnet Mask"
            },
            "ipcalc_mask_info_long": {
                "message": "Long Mask"
            },
            "ipcalc_mask_info_opposite": {
                "message": "Opposite Mask"
            },
            "ipcalc_mask_info_mask8": {
                "message": "Octal Mask"
            },
            "ipcalc_mask_info_mask16": {
                "message": "Hexadecimal Mask"
            },
            "ipcalc_mask_info_mask2": {
                "message": "Binary Mask"
            },
            "ipcalc_subnet": {
                "message": "Subnet Data"
            },
            "ipcalc_network_info": {
                "message": "Network Detail"
            },
            "ipcalc_network_info_available": {
                "message": "Available IP Size"
            },
            "ipcalc_network_info_size": {
                "message": "All IP Size"
            },
            "ipcalc_network_info_base": {
                "message": "Base"
            },
            "ipcalc_network_info_first": {
                "message": "First IP"
            },
            "ipcalc_network_info_last": {
                "message": "Last IP"
            },
            "ipcalc_network_info_broadcast": {
                "message": "Broadcast Address"
            },
            "ipcalc_mask_set_title": {
                "message": "Calculate mask by number of available IP"
            },
            "sqlFillParameter_parameter": {
                "message": "Parameter"
            },
            "sqlFillParameter_parameter_too_little": {
                "message": "No Enough Parameters"
            },
            "color_input_placeholder": {
                "message": "Please enter color {0} value, e.g. {1}",
                "placeholders": [
                    "0",
                    "1"
                ]
            },
            "hmac_uppercase": {
                "message": "Uppercase"
            },
            "hmac_secret": {
                "message": "Secret key"
            },
            "hmac_multiple": {
                "message": "Multiple"
            },
            "hmac_multiple_tooltip": {
                "message": "Operation By Row"
            },
            "asn1_input_der_text": {
                "message": "Please enter ASN.1 DER text"
            },
            "asn1_output_result": {
                "message": "decode result"
            }
        }
    }
}
// 工具关键字
export const toolKeywords:{ name: ToolType, feature: FeatureType, keyword: string[], search: string[] }[] = [
    {
        "name": "hash",
        "feature": "hash",
        "keyword": [
            "hash",
            "哈希(hash)",
            "md5",
            "sha1",
            "sha256",
            "sha512",
            "sm3",
            "Hash"
        ],
        "search": [
            "hash",
            "哈希(hash)",
            "md5",
            "sha1",
            "sha256",
            "sha512",
            "sm3",
            "haxi(hash)",
            "hx(hash)"
        ]
    },
    {
        "name": "aes",
        "feature": "encrypt",
        "keyword": [
            "aes",
            "encrypt",
            "AES",
            "加密",
            "Encrypt"
        ],
        "search": [
            "aes",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "aes",
        "feature": "decrypt",
        "keyword": [
            "aes",
            "decrypt",
            "AES",
            "解密",
            "Decrypt"
        ],
        "search": [
            "aes",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "des",
        "feature": "encrypt",
        "keyword": [
            "des",
            "encrypt",
            "DES",
            "加密",
            "Encrypt"
        ],
        "search": [
            "des",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "des",
        "feature": "decrypt",
        "keyword": [
            "des",
            "decrypt",
            "DES",
            "解密",
            "Decrypt"
        ],
        "search": [
            "des",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "tripleDes",
        "feature": "encrypt",
        "keyword": [
            "tripleDes",
            "encrypt",
            "Triple DES",
            "加密",
            "Encrypt"
        ],
        "search": [
            "tripledes",
            "encrypt",
            "triple des",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "tripleDes",
        "feature": "decrypt",
        "keyword": [
            "tripleDes",
            "decrypt",
            "Triple DES",
            "解密",
            "Decrypt"
        ],
        "search": [
            "tripledes",
            "decrypt",
            "triple des",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "rc4",
        "feature": "encrypt",
        "keyword": [
            "rc4",
            "encrypt",
            "RC4",
            "加密",
            "Encrypt"
        ],
        "search": [
            "rc4",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "rc4",
        "feature": "decrypt",
        "keyword": [
            "rc4",
            "decrypt",
            "RC4",
            "解密",
            "Decrypt"
        ],
        "search": [
            "rc4",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "rabbit",
        "feature": "encrypt",
        "keyword": [
            "rabbit",
            "encrypt",
            "Rabbit",
            "加密",
            "Encrypt"
        ],
        "search": [
            "rabbit",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "rabbit",
        "feature": "decrypt",
        "keyword": [
            "rabbit",
            "decrypt",
            "Rabbit",
            "解密",
            "Decrypt"
        ],
        "search": [
            "rabbit",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "sm2",
        "feature": "encrypt",
        "keyword": [
            "sm2",
            "encrypt",
            "SM2",
            "加密",
            "Encrypt"
        ],
        "search": [
            "sm2",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "sm2",
        "feature": "decrypt",
        "keyword": [
            "sm2",
            "decrypt",
            "SM2",
            "解密",
            "Decrypt"
        ],
        "search": [
            "sm2",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "sm2",
        "feature": "sign",
        "keyword": [
            "sm2",
            "sign",
            "SM2",
            "签名",
            "Sign"
        ],
        "search": [
            "sm2",
            "sign",
            "签名",
            "qianming",
            "qm"
        ]
    },
    {
        "name": "sm2",
        "feature": "verify",
        "keyword": [
            "sm2",
            "verify",
            "SM2",
            "验签",
            "VerifySign"
        ],
        "search": [
            "sm2",
            "verify",
            "验签",
            "yanqian",
            "yq",
            "verifysign"
        ]
    },
    {
        "name": "sm4",
        "feature": "encrypt",
        "keyword": [
            "sm4",
            "encrypt",
            "SM4",
            "加密",
            "Encrypt"
        ],
        "search": [
            "sm4",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "sm4",
        "feature": "decrypt",
        "keyword": [
            "sm4",
            "decrypt",
            "SM4",
            "解密",
            "Decrypt"
        ],
        "search": [
            "sm4",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "rsa",
        "feature": "encrypt",
        "keyword": [
            "rsa",
            "encrypt",
            "RSA",
            "加密",
            "Encrypt"
        ],
        "search": [
            "rsa",
            "encrypt",
            "加密",
            "jiami",
            "jm"
        ]
    },
    {
        "name": "rsa",
        "feature": "decrypt",
        "keyword": [
            "rsa",
            "decrypt",
            "RSA",
            "解密",
            "Decrypt"
        ],
        "search": [
            "rsa",
            "decrypt",
            "解密",
            "jiemi",
            "jm"
        ]
    },
    {
        "name": "sign",
        "feature": "sign",
        "keyword": [
            "sign",
            "签名/验签",
            "Sign"
        ],
        "search": [
            "sign",
            "签名/验签",
            "qianming/yanqian",
            "qm/yq"
        ]
    },
    {
        "name": "base64",
        "feature": "encoder",
        "keyword": [
            "base64",
            "encoder",
            "Base64",
            "编码",
            "Encoder"
        ],
        "search": [
            "base64",
            "encoder",
            "编码",
            "bianma",
            "bm"
        ]
    },
    {
        "name": "base64",
        "feature": "decoder",
        "keyword": [
            "base64",
            "decoder",
            "Base64",
            "解码",
            "Decoder"
        ],
        "search": [
            "base64",
            "decoder",
            "解码",
            "jiema",
            "jm"
        ]
    },
    {
        "name": "json",
        "feature": "json",
        "keyword": [
            "json",
            "JSON工具",
            "JSON"
        ],
        "search": [
            "json",
            "json工具",
            "jsongongju",
            "jsongj"
        ]
    },
    {
        "name": "url",
        "feature": "encoder",
        "keyword": [
            "url",
            "encoder",
            "URL编码",
            "编码",
            "Url En/Decode",
            "Encoder"
        ],
        "search": [
            "url",
            "encoder",
            "url编码",
            "编码",
            "urlbianma",
            "urlbm",
            "bianma",
            "bm",
            "url en/decode"
        ]
    },
    {
        "name": "url",
        "feature": "decoder",
        "keyword": [
            "url",
            "decoder",
            "URL编码",
            "解码",
            "Url En/Decode",
            "Decoder"
        ],
        "search": [
            "url",
            "decoder",
            "url编码",
            "解码",
            "urlbianma",
            "urlbm",
            "jiema",
            "jm",
            "url en/decode"
        ]
    },
    {
        "name": "qrCode",
        "feature": "generate",
        "keyword": [
            "qrCode",
            "generate",
            "二维码",
            "生成",
            "QR Code",
            "Generate"
        ],
        "search": [
            "qrcode",
            "generate",
            "二维码",
            "生成",
            "erweima",
            "ewm",
            "shengcheng",
            "sc",
            "qr code"
        ]
    },
    {
        "name": "qrCode",
        "feature": "parse",
        "keyword": [
            "qrCode",
            "parse",
            "二维码",
            "解析",
            "QR Code",
            "Parse"
        ],
        "search": [
            "qrcode",
            "parse",
            "二维码",
            "解析",
            "erweima",
            "ewm",
            "jiexi",
            "jx",
            "qr code"
        ]
    },
    {
        "name": "barcode",
        "feature": "barcode",
        "keyword": [
            "barcode",
            "条形码",
            "Barcode"
        ],
        "search": [
            "barcode",
            "条形码",
            "tiaoxingma",
            "txm"
        ]
    },
    {
        "name": "pinyin",
        "feature": "pinyin",
        "keyword": [
            "pinyin",
            "汉字转拼音",
            "Chinese Pinyin"
        ],
        "search": [
            "pinyin",
            "汉字转拼音",
            "hanzizhuanpinyin",
            "hzzpy",
            "chinese pinyin"
        ]
    },
    {
        "name": "ip",
        "feature": "ip",
        "keyword": [
            "ip",
            "IP地址查询",
            "Ip Query"
        ],
        "search": [
            "ip",
            "ip地址查询",
            "ipdizhichaxun",
            "ipdzcx",
            "ip query"
        ]
    },
    {
        "name": "code",
        "feature": "code",
        "keyword": [
            "code",
            "代码",
            "格式化",
            "js",
            "javascript",
            "markdown",
            "typescript",
            "css",
            "less",
            "scss",
            "yaml",
            "html",
            "xml",
            "php",
            "vue",
            "angular",
            "graphql",
            "sql",
            "Code",
            "Formatter"
        ],
        "search": [
            "code",
            "代码",
            "格式化",
            "js",
            "javascript",
            "markdown",
            "typescript",
            "css",
            "less",
            "scss",
            "yaml",
            "html",
            "xml",
            "php",
            "vue",
            "angular",
            "graphql",
            "sql",
            "daima",
            "dm",
            "geshihua",
            "gsh",
            "formatter"
        ]
    },
    {
        "name": "code",
        "feature": "run",
        "keyword": [
            "code",
            "run",
            "代码",
            "运行",
            "Code",
            "Run"
        ],
        "search": [
            "code",
            "run",
            "代码",
            "运行",
            "daima",
            "dm",
            "yunxing",
            "yx"
        ]
    },
    {
        "name": "unicode",
        "feature": "encoder",
        "keyword": [
            "unicode",
            "encoder",
            "Unicode",
            "编码",
            "Encoder"
        ],
        "search": [
            "unicode",
            "encoder",
            "编码",
            "bianma",
            "bm"
        ]
    },
    {
        "name": "unicode",
        "feature": "decoder",
        "keyword": [
            "unicode",
            "decoder",
            "Unicode",
            "解码",
            "Decoder"
        ],
        "search": [
            "unicode",
            "decoder",
            "解码",
            "jiema",
            "jm"
        ]
    },
    {
        "name": "radix",
        "feature": "radix",
        "keyword": [
            "radix",
            "进制转换",
            "Base Convert"
        ],
        "search": [
            "radix",
            "进制转换",
            "jinzhizhuanhuan",
            "jzzh",
            "base convert"
        ]
    },
    {
        "name": "regex",
        "feature": "regex",
        "keyword": [
            "regex",
            "正则表达式",
            "Regex"
        ],
        "search": [
            "regex",
            "正则表达式",
            "zhengzebiaodashi",
            "zzbds"
        ]
    },
    {
        "name": "randomString",
        "feature": "randomString",
        "keyword": [
            "randomString",
            "随机字符生成",
            "Random String"
        ],
        "search": [
            "randomstring",
            "随机字符生成",
            "suijizifushengcheng",
            "sjzfsc",
            "random string"
        ]
    },
    {
        "name": "serialize",
        "feature": "serialize",
        "keyword": [
            "serialize",
            "序列化",
            "json",
            "http query string",
            "csv",
            "html table",
            "xml",
            "yaml",
            "toml",
            "properties",
            "php array",
            "php serialize",
            "Serialize"
        ],
        "search": [
            "serialize",
            "序列化",
            "json",
            "http query string",
            "csv",
            "html table",
            "xml",
            "yaml",
            "toml",
            "properties",
            "php array",
            "php serialize",
            "httpquerystring",
            "htmltable",
            "phparray",
            "phpserialize",
            "xuliehua",
            "xlh"
        ]
    },
    {
        "name": "diffs",
        "feature": "diffs",
        "keyword": [
            "diffs",
            "文本比对",
            "Compare Text"
        ],
        "search": [
            "diffs",
            "文本比对",
            "wenbenbidui",
            "wbbd",
            "compare text"
        ]
    },
    {
        "name": "crontab",
        "feature": "crontab",
        "keyword": [
            "crontab",
            "Crontab"
        ],
        "search": [
            "crontab"
        ]
    },
    {
        "name": "websocket",
        "feature": "websocket",
        "keyword": [
            "websocket",
            "Websocket"
        ],
        "search": [
            "websocket"
        ]
    },
    {
        "name": "unit",
        "feature": "unit",
        "keyword": [
            "unit",
            "单位换算",
            "Unit Convert"
        ],
        "search": [
            "unit",
            "单位换算",
            "danweihuansuan",
            "dwhs",
            "unit convert"
        ]
    },
    {
        "name": "time",
        "feature": "timestamp",
        "keyword": [
            "time",
            "timestamp",
            "时间日期",
            "时间戳",
            "Data Time",
            "Timestamp"
        ],
        "search": [
            "time",
            "timestamp",
            "时间日期",
            "时间戳",
            "shijianriqi",
            "sjrq",
            "shijianchuo",
            "sjc",
            "data time"
        ]
    },
    {
        "name": "time",
        "feature": "timezone",
        "keyword": [
            "time",
            "timezone",
            "时间日期",
            "时区",
            "Data Time",
            "Timezone"
        ],
        "search": [
            "time",
            "timezone",
            "时间日期",
            "时区",
            "shijianriqi",
            "sjrq",
            "shiqu",
            "sq",
            "data time"
        ]
    },
    {
        "name": "time",
        "feature": "calculator",
        "keyword": [
            "time",
            "calculator",
            "时间日期",
            "计算器",
            "Data Time",
            "Calculator"
        ],
        "search": [
            "time",
            "calculator",
            "时间日期",
            "计算器",
            "shijianriqi",
            "sjrq",
            "jisuanqi",
            "jsq",
            "data time"
        ]
    },
    {
        "name": "uuid",
        "feature": "uuid",
        "keyword": [
            "uuid",
            "UUID生成",
            "UUID"
        ],
        "search": [
            "uuid",
            "uuid生成",
            "uuidshengcheng",
            "uuidsc"
        ]
    },
    {
        "name": "ascii",
        "feature": "ascii",
        "keyword": [
            "ascii",
            "ASCII"
        ],
        "search": [
            "ascii"
        ]
    },
    {
        "name": "variableConversion",
        "feature": "variableConversion",
        "keyword": [
            "variableConversion",
            "变量名",
            "Variable Name"
        ],
        "search": [
            "variableconversion",
            "变量名",
            "bianliangming",
            "blm",
            "variable name"
        ]
    },
    {
        "name": "jwt",
        "feature": "jwt",
        "keyword": [
            "jwt",
            "JWT解码",
            "JWT"
        ],
        "search": [
            "jwt",
            "jwt解码",
            "jwtjiema",
            "jwtjm"
        ]
    },
    {
        "name": "hexString",
        "feature": "stringToHex",
        "keyword": [
            "hexString",
            "stringToHex",
            "Hex/String",
            "String => Hex",
            "十六进制转字符串"
        ],
        "search": [
            "hexstring",
            "stringtohex",
            "hex/string",
            "string => hex",
            "十六进制转字符串",
            "shiliujinzhizhuanzifuchuan",
            "sljzzzfc"
        ]
    },
    {
        "name": "hexString",
        "feature": "hexToString",
        "keyword": [
            "hexString",
            "hexToString",
            "Hex/String",
            "Hex => String",
            "字符串转十六进制"
        ],
        "search": [
            "hexstring",
            "hextostring",
            "hex/string",
            "hex => string",
            "字符串转十六进制",
            "zifuchuanzhuanshiliujinzhi",
            "zfczsljz"
        ]
    },
    {
        "name": "text",
        "feature": "text",
        "keyword": [
            "text",
            "文本处理",
            "大小写转换",
            "中英文标点转换",
            "简繁转换",
            "字符替换",
            "字符统计",
            "行去重",
            "添加行号",
            "行排序",
            "过滤行首尾不可见字符",
            "过滤空行",
            "Text"
        ],
        "search": [
            "text",
            "文本处理",
            "大小写转换",
            "中英文标点转换",
            "简繁转换",
            "字符替换",
            "字符统计",
            "行去重",
            "添加行号",
            "行排序",
            "过滤行首尾不可见字符",
            "过滤空行",
            "wenbenchuli",
            "wbcl",
            "daxiaoxiezhuanhuan",
            "dxxzh",
            "zhongyingwenbiaodianzhuanhuan",
            "zywbdzh",
            "jianfanzhuanhuan",
            "jfzh",
            "zifutihuan",
            "zfth",
            "zifutongji",
            "zftj",
            "xingquzhong",
            "xqz",
            "tianjiahanghao",
            "tjhh",
            "xingpaixu",
            "xpx",
            "guolvxingshouweibukejianzifu",
            "glxswbkjzf",
            "guolvkongxing",
            "glkx"
        ]
    },
    {
        "name": "html",
        "feature": "html",
        "keyword": [
            "html",
            "Html编码",
            "Html En/Decode"
        ],
        "search": [
            "html",
            "html编码",
            "htmlbianma",
            "htmlbm",
            "html en/decode"
        ]
    },
    {
        "name": "binary",
        "feature": "binary",
        "keyword": [
            "binary",
            "原码/反码/补码",
            "trueForm/inverse/complement"
        ],
        "search": [
            "binary",
            "原码/反码/补码",
            "yuanma/fanma/buma",
            "ym/fm/bm",
            "trueform/inverse/complement"
        ]
    },
    {
        "name": "arm",
        "feature": "armToHex",
        "keyword": [
            "arm",
            "armToHex",
            "ARM/HEX",
            "ARM to HEX"
        ],
        "search": [
            "arm",
            "armtohex",
            "arm/hex",
            "arm to hex"
        ]
    },
    {
        "name": "arm",
        "feature": "hexToArm",
        "keyword": [
            "arm",
            "hexToArm",
            "ARM/HEX",
            "HEX to ARM"
        ],
        "search": [
            "arm",
            "hextoarm",
            "arm/hex",
            "hex to arm"
        ]
    },
    {
        "name": "bcrypt",
        "feature": "bcrypt",
        "keyword": [
            "bcrypt",
            "Bcrypt"
        ],
        "search": [
            "bcrypt"
        ]
    },
    {
        "name": "ipcalc",
        "feature": "ipv4",
        "keyword": [
            "ipcalc",
            "ipv4",
            "IP网络计算器",
            "IPv4",
            "Ipcalc"
        ],
        "search": [
            "ipcalc",
            "ipv4",
            "ip网络计算器",
            "ipwangluojisuanqi",
            "ipwljsq"
        ]
    },
    {
        "name": "ipcalc",
        "feature": "ipv6",
        "keyword": [
            "ipcalc",
            "ipv6",
            "IP网络计算器",
            "IPv6",
            "Ipcalc"
        ],
        "search": [
            "ipcalc",
            "ipv6",
            "ip网络计算器",
            "ipwangluojisuanqi",
            "ipwljsq"
        ]
    },
    {
        "name": "sqlFillParameter",
        "feature": "sqlFillParameter",
        "keyword": [
            "sqlFillParameter",
            "SQL参数填充",
            "Fill SQL Parameters"
        ],
        "search": [
            "sqlfillparameter",
            "sql参数填充",
            "sqlcanshutianchong",
            "sqlcstc",
            "fill sql parameters"
        ]
    },
    {
        "name": "httpSnippet",
        "feature": "httpSnippet",
        "keyword": [
            "httpSnippet",
            "Http请求代码",
            "Http Request Code"
        ],
        "search": [
            "httpsnippet",
            "http请求代码",
            "httpqingqiudaima",
            "httpqqdm",
            "http request code"
        ]
    },
    {
        "name": "dataValidation",
        "feature": "bcc",
        "keyword": [
            "dataValidation",
            "bcc",
            "BCC/CRC/LRC",
            "BCC"
        ],
        "search": [
            "datavalidation",
            "bcc",
            "bcc/crc/lrc"
        ]
    },
    {
        "name": "dataValidation",
        "feature": "crc",
        "keyword": [
            "dataValidation",
            "crc",
            "BCC/CRC/LRC",
            "CRC"
        ],
        "search": [
            "datavalidation",
            "crc",
            "bcc/crc/lrc"
        ]
    },
    {
        "name": "dataValidation",
        "feature": "lrc",
        "keyword": [
            "dataValidation",
            "lrc",
            "BCC/CRC/LRC",
            "LRC"
        ],
        "search": [
            "datavalidation",
            "lrc",
            "bcc/crc/lrc"
        ]
    },
    {
        "name": "color",
        "feature": "color",
        "keyword": [
            "color",
            "颜色",
            "Color"
        ],
        "search": [
            "color",
            "颜色",
            "yanse",
            "ys"
        ]
    },
    {
        "name": "hmac",
        "feature": "hmac",
        "keyword": [
            "hmac",
            "HMAC",
            "md5",
            "sha1",
            "sha256",
            "sha512",
            "sm3"
        ],
        "search": [
            "hmac",
            "md5",
            "sha1",
            "sha256",
            "sha512",
            "sm3"
        ]
    },
    {
        "name": "gzip",
        "feature": "encoder",
        "keyword": [
            "gzip",
            "encoder",
            "GZIP",
            "编码/压缩",
            "Encoder"
        ],
        "search": [
            "gzip",
            "encoder",
            "编码/压缩",
            "bianma/yasuo",
            "bm/ys"
        ]
    },
    {
        "name": "gzip",
        "feature": "decoder",
        "keyword": [
            "gzip",
            "decoder",
            "GZIP",
            "解码/解压",
            "Decoder"
        ],
        "search": [
            "gzip",
            "decoder",
            "解码/解压",
            "jiema/jieya",
            "jm/jy"
        ]
    },
    {
        "name": "urlParse",
        "feature": "urlParse",
        "keyword": [
            "urlParse",
            "Url解析",
            "Url Parse"
        ],
        "search": [
            "urlparse",
            "url解析",
            "urljiexi",
            "urljx",
            "url parse"
        ]
    },
    {
        "name": "asn1",
        "feature": "asn1",
        "keyword": [
            "asn1",
            "ASN.1解码",
            "ASN.1 Decode"
        ],
        "search": [
            "asn1",
            "asn.1解码",
            "asn.1jiema",
            "asn.1jm",
            "asn.1 decode"
        ]
    },
    {
        "name": "dockerCompose",
        "feature": "dockerCompose",
        "keyword": [
            "dockerCompose",
            "Docker run到Compose",
            "Docker run to Compose"
        ],
        "search": [
            "dockercompose",
            "docker run到compose",
            "docker rundaocompose",
            "docker rundcompose",
            "docker run to compose"
        ]
    }
]
// icon
export type iconType = "clipboard"
	|"close"
	|"common"
	|"copy"
	|"empty"
	|"error"
	|"full"
	|"github"
	|"history"
	|"info"
	|"location"
	|"moon"
	|"question"
	|"right"
	|"search"
	|"selected"
	|"setting"
	|"success"
	|"sun"
	|"up"
	|"upload"
	|"message"
	|"ad"
	|"devtools"
	|"refresh"
	|"checked"
	|"unchecked"
	|"toggle"
	|"clear"
export const iconData:{[key in iconType]:{box:number[],data:string[]}} = {
    	"clipboard":{"box":[0,0,384,512],"data":["M192 0c-41.8 0-77.4 26.7-90.5 64H48C21.5 64 0 85.5 0 112V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H282.5C269.4 26.7 233.8 0 192 0zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm-80 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},
	"close":{"box":[-3.2,92.8,323.2,419.2],"data":["M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},
	"common":{"box":[-0.01,-0.01,1024,1023.99],"data":["M910.222222 665.601143H682.666667a17.076954 17.076954 0 0 0-16.61974 13.144911l-0.445784 3.920613v227.555555a17.054093 17.054093 0 0 0 13.156341 16.60831l3.909183 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156342l0.445784-3.909182V682.666667a17.076954 17.076954 0 0 0-13.156342-16.61974z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.777778H682.666667a113.789208 113.789208 0 0 1-113.777778-113.777778V682.666667a113.777778 113.777778 0 0 1 113.777778-113.777778z m0-472.176635H682.666667a17.076954 17.076954 0 0 0-16.61974 13.167772l-0.445784 3.920612v227.532695a17.054093 17.054093 0 0 0 13.156341 16.585449l3.909183 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156341l0.445784-3.909182V113.777778A17.076954 17.076954 0 0 0 914.131404 97.158038z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.743487H682.666667a113.789208 113.789208 0 0 1-113.777778-113.777778V113.777778A113.777778 113.777778 0 0 1 682.666667 0z m-568.888889 665.601143H113.777778A17.076954 17.076954 0 0 0 97.158038 678.746054l-0.445784 3.920613v227.555555a17.054093 17.054093 0 0 0 13.156342 16.60831l3.909182 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156342l0.445784-3.909182V682.666667a17.076954 17.076954 0 0 0-13.156341-16.61974z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.777778H113.777778A113.789208 113.789208 0 0 1 0 910.222222V682.666667a113.777778 113.777778 0 0 1 113.777778-113.777778z m0-472.176635H113.777778A17.076954 17.076954 0 0 0 97.158038 109.880026l-0.445784 3.920612v227.532695a17.054093 17.054093 0 0 0 13.156342 16.585449l3.909182 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156341l0.445784-3.909182V113.777778A17.076954 17.076954 0 0 0 345.242516 97.158038z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.743487H113.777778A113.789208 113.789208 0 0 1 0 341.299042V113.777778A113.777778 113.777778 0 0 1 113.777778 0z"]},
	"copy":{"box":[0,0,512,512],"data":["M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]},
	"empty":{"box":[0,30.1,1024.09,1024],"data":["M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"]},
	"error":{"box":[64,64,960,960],"data":["M512 64c126.677333 3.328 232.192 47.146667 316.501333 131.498667C912.853333 279.808 956.672 385.28 960 512c-3.328 126.677333-47.146667 232.192-131.498667 316.501333C744.192 912.853333 638.72 956.672 512 960c-126.677333-3.328-232.192-47.146667-316.501333-131.498667C111.146667 744.192 67.328 638.72 64 512c3.328-126.677333 47.146667-232.192 131.498667-316.501333C279.808 111.146667 385.28 67.328 512 64z m0 394.026667L407.978667 354.005333a37.802667 37.802667 0 0 0-27.477334-11.989333 37.034667 37.034667 0 0 0-27.008 11.52c-7.68 7.637333-11.52 16.64-11.477333 26.965333 0 10.368 4.010667 19.541333 11.989333 27.52L458.026667 512l-104.021334 104.021333a37.802667 37.802667 0 0 0-11.989333 27.477334c0 10.325333 3.84 19.328 11.52 27.008 7.637333 7.68 16.64 11.52 26.965333 11.477333a37.930667 37.930667 0 0 0 27.52-11.989333L512 565.973333l104.021333 104.021334c10.666667 9.984 22.954667 13.184 36.992 9.514666a34.773333 34.773333 0 0 0 26.453334-26.496 37.205333 37.205333 0 0 0-9.472-36.992L565.973333 512l104.021334-104.021333a37.802667 37.802667 0 0 0 11.989333-27.477334 37.034667 37.034667 0 0 0-11.52-27.008 36.778667 36.778667 0 0 0-26.965333-11.477333 37.930667 37.930667 0 0 0-27.52 11.989333L512 458.026667z"]},
	"full":{"box":[0,32,448,480],"data":["M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},
	"github":{"box":[0,8,496,493.5],"data":["M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},
	"history":{"box":[0,0,512,512],"data":["M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"]},
	"info":{"box":[85.97,86.01,938.02,938.06],"data":["M553.984 553.984l0-256-84.010667 0 0 256 84.010667 0zM553.984 726.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z"]},
	"location":{"box":[0,0,512,512],"data":["M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128s-128 57.3-128 128zm128 80c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"]},
	"moon":{"box":[227,97.9,797.4,927.5],"data":["M518.8 512.7c0-178.9 116.1-330.9 278.5-389.1-45.6-16.3-94.6-25.7-145.9-25.7C417 97.9 227 283.7 227 512.7c0 229.1 190 414.8 424.5 414.8 51.4 0 100.3-9.4 145.9-25.7-162.5-58.1-278.6-210.1-278.6-389.1z"]},
	"question":{"box":[0,0,512,512],"data":["M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"]},
	"right":{"box":[106.04,105.43,919.17,918.56],"data":["M887.254 353.743c-20.511-48.423-49.759-91.872-87.139-129.251s-80.828-66.628-129.251-87.139c-50.123-21.238-103.402-31.918-158.257-31.918s-108.134 10.801-158.257 31.918c-48.423 20.511-91.872 49.759-129.251 87.139-37.379 37.379-66.628 80.828-87.139 129.251-21.238 50.123-31.918 103.402-31.918 158.257s10.801 108.134 31.918 158.257c20.511 48.423 49.759 91.872 87.139 129.251 37.379 37.379 80.828 66.628 129.251 87.139 50.123 21.238 103.402 31.918 158.257 31.918s108.134-10.801 158.257-31.918c48.423-20.511 91.872-49.759 129.251-87.139 37.379-37.379 66.628-80.828 87.139-129.251 21.238-50.123 31.918-103.402 31.918-158.257s-10.801-108.134-31.918-158.257zM740.405 401.923l-280.227 280.227c-11.286 11.286-29.855 11.286-41.142 0l-143.209-143.209c-11.286-11.286-11.286-29.855 0-41.142 11.286-11.286 29.855-11.286 41.142 0l122.576 122.576 259.596-259.596c11.286-11.286 29.855-11.286 41.142 0 11.408 11.286 11.408 29.733 0.122 41.142z"]},
	"search":{"box":[128,160,836.25,900.25],"data":["M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"]},
	"selected":{"box":[28.8,92.9,483.1,419.2],"data":["M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},
	"setting":{"box":[12.79,0,499.1,511.9],"data":["M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"]},
	"success":{"box":[0,0,512,512],"data":["M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},
	"sun":{"box":[114.19,98.8,911,895.6],"data":["M298.7 676.2l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.6 25.3 9.6 34.9 0l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0z m-15-372.7c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8z m-69.9 168.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.2 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.2-24.9-24.9-24.9z m298.8-249c13.8 0 24.9-11.1 24.9-24.9v-74.7c0-13.8-11.1-24.9-24.9-24.9s-24.9 11.1-24.9 24.9v74.7c0 13.8 11.2 24.9 24.9 24.9z m239.6 69.2l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.7 25.3 9.7 34.9 0z m133.9 179.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.1 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.1-24.9-24.9-24.9zM741.5 690.9c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8zM512.6 273c-123.9 0-224.3 100.4-224.3 224.3s100.4 224.3 224.3 224.3 224.3-100.4 224.3-224.3S636.5 273 512.6 273z m0 498.1c-13.8 0-24.9 11.1-24.9 24.9v74.7c0 13.8 11.1 24.9 24.9 24.9s24.9-11.1 24.9-24.9V796c0-13.7-11.1-24.9-24.9-24.9z"]},
	"up":{"box":[78.65,64,945.34,960],"data":["M512 614.656 857.344 960 945.344 872 512 438.656 78.656 872 166.656 959.872Z","M512 240.064 857.344 585.344 945.344 497.344 512 64 78.656 497.344 166.656 585.344Z"]},
	"upload":{"box":[0,32,640,480],"data":["M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"]},
	"message":{"box":[66,141.6,960,946.6],"data":["M892 141.6H134c-37.6 0-68 30.4-68 68v534.5c0 37.6 30.4 68 68 68h109.1l18.5 82c8.6 38 55.1 52.5 83.7 26l117-108H892c37.6 0 68-30.4 68-68V209.6c0-37.5-30.5-68-68-68zM314 507.8c-31.8 0-57.5-25.8-57.5-57.5s25.8-57.5 57.5-57.5c31.8 0 57.5 25.8 57.5 57.5s-25.7 57.5-57.5 57.5z m209.4 4c-31.8 0-57.5-25.8-57.5-57.5s25.8-57.5 57.5-57.5c31.8 0 57.5 25.8 57.5 57.5s-25.7 57.5-57.5 57.5z m209.4 0c-31.8 0-57.5-25.8-57.5-57.5s25.8-57.5 57.5-57.5c31.8 0 57.5 25.8 57.5 57.5s-25.7 57.5-57.5 57.5z"]},
	"ad":{"box":[102.4,99.98,921.82,924.01],"data":["M535.6544 110.1824L309.7088 264.96H161.1776C128.7168 264.96 102.4 291.328 102.4 323.7888v376.4736c0 32.4608 26.3168 58.7776 58.7776 58.7776h148.5312l225.9456 154.7776a44.032 44.032 0 0 0 68.864-36.3008V146.4832a44.032 44.032 0 0 0-68.864-36.3008zM699.6992 417.792a25.6 25.6 0 0 0-4.8128 35.8912c10.6496 13.8752 16.2304 30.5664 16.2304 48.128 0 17.664-5.632 34.3552-16.3328 48.2816a25.6 25.6 0 0 0 40.6016 31.232c17.664-22.9376 26.9312-50.432 26.9312-79.4624 0-28.928-9.2672-56.32-26.7264-79.2576a25.6512 25.6512 0 0 0-35.8912-4.8128z","M800.4608 304.5376a25.6 25.6 0 1 0-23.1936 45.6704A169.216 169.216 0 0 1 870.4 501.8112a169.216 169.216 0 0 1-93.0304 151.552 25.5488 25.5488 0 1 0 23.1936 45.6192A220.16 220.16 0 0 0 921.6 501.8112a220.3136 220.3136 0 0 0-121.1392-197.2736z"]},
	"devtools":{"box":[65,59.4,972.39,964.16],"data":["M955.140191 657.686057L482.322585 376.382253c-17.251919-10.262738-28.340465-2.425236-24.684192 17.409508l100.538811 543.990599c3.666506 19.828604 16.083304 22.576181 27.628244 6.077415 0 0 64.233953-92.081185 116.91478-148.294464l101.060697 150.524248c9.646708 14.33652 29.105898 18.077727 43.275619 8.336876l33.92567-23.452132c14.148231-9.760295 17.830087-29.519314 8.207939-43.884486L788.174482 736.668922c67.536162-27.991518 162.961512-51.606355 162.961512-51.606354 19.460214-4.800329 21.261233-17.116843 4.004197-27.376511z","M491.223303 891.487987H219.679793c-49.051159 0-88.897679-38.494733-88.897679-85.863576v-594.520435c0-47.365774 39.84652-85.924975 88.897679-85.924975v0.057305h583.463612c48.995901 0 88.843444 38.556131 88.843444 85.924975v346.19779h65.833381V211.160257c0-83.677794-69.426209-151.757333-154.681942-151.757332h-583.458495c-85.305875 0-154.672732 68.079538-154.672732 151.757332v594.519412c0 83.625606 69.366857 151.702074 154.672732 151.702074h271.542486v-65.893756z"]},
	"refresh":{"box":[31.68,103.15,996.6,928.25],"data":["M688 766.272a301.376 301.376 0 0 1-204.8 54.656c-3.392-0.32-6.72-0.896-10.176-1.344-6.528-0.896-13.056-1.728-19.392-3.008a220.672 220.672 0 0 1-11.648-2.688 261.376 261.376 0 0 1-18.496-4.8c-2.88-0.896-5.76-1.92-8.704-2.944a298.176 298.176 0 0 1-25.28-9.728 292.48 292.48 0 0 1-23.36-11.456l-1.024-0.512a311.744 311.744 0 0 1-89.152-74.432c-1.216-1.472-2.368-3.136-3.584-4.672a311.168 311.168 0 0 1-67.264-193.472h71.168a5.12 5.12 0 0 0 4.544-2.752 4.992 4.992 0 0 0-0.256-5.248L161.088 322.24a5.12 5.12 0 0 0-8.64 0L32.896 503.872c-1.024 1.472-1.216 3.52-0.256 5.248s2.688 2.752 4.544 2.752h71.168c0 86.016 26.496 165.696 71.424 231.552 0.576 0.96 0.96 1.92 1.536 2.816 4.672 6.72 9.856 12.992 14.848 19.392 1.856 2.368 3.648 4.864 5.568 7.232 7.36 9.088 15.168 17.472 23.232 25.856l2.24 2.304a397.888 397.888 0 0 0 122.752 84.8l7.424 3.328c8.512 3.584 17.344 6.72 26.112 9.728 4.16 1.408 8.256 2.88 12.48 4.16 7.744 2.304 15.616 4.224 23.552 6.144 5.312 1.28 10.496 2.624 15.936 3.648 2.176 0.512 4.288 1.152 6.528 1.472 7.488 1.344 14.976 2.112 22.528 3.008l8.064 1.152a397.12 397.12 0 0 0 271.104-71.936 49.408 49.408 0 0 0 11.904-68.224 48.064 48.064 0 0 0-67.584-12.032m227.776-254.4a409.856 409.856 0 0 0-71.104-231.04c-0.704-1.152-1.152-2.304-1.792-3.264a428.928 428.928 0 0 0-17.664-23.04l-2.112-2.752a399.68 399.68 0 0 0-150.656-114.624 161.28 161.28 0 0 1-4.8-2.24 502.976 502.976 0 0 0-28.352-10.56c-3.648-1.152-7.04-2.432-10.624-3.456a377.856 377.856 0 0 0-25.344-6.656c-4.672-1.088-9.408-2.304-14.208-3.264-2.368-0.448-4.544-1.152-6.912-1.6-6.4-1.152-12.8-1.6-19.2-2.432-4.352-0.576-8.768-1.28-13.184-1.728a413.568 413.568 0 0 0-32-1.6c-1.92 0-3.84-0.32-5.824-0.32a397.312 397.312 0 0 0-231.488 73.92 49.408 49.408 0 0 0-11.968 68.288 48.128 48.128 0 0 0 67.584 11.968 302.464 302.464 0 0 1 205.12-54.656l8.128 1.152c7.36 0.832 14.592 1.92 21.696 3.328 3.136 0.576 6.272 1.408 9.344 2.112 6.976 1.6 14.016 3.328 20.8 5.376l6.4 2.24c7.808 2.56 15.424 5.312 22.976 8.512l2.368 1.088c45.12 19.648 84.736 49.92 115.648 87.808l0.576 0.768a311.04 311.04 0 0 1 69.696 196.736h-71.104a5.12 5.12 0 0 0-4.288 8l119.616 181.568a5.12 5.12 0 0 0 8.576 0l119.488-181.568a5.12 5.12 0 1 0-4.288-8h-71.104v-0.064z m0 0"]},
	"checked":{"box":[54.57,54.57,969.42,969.42],"data":["M512 773.42464c-144.47488 0-261.45024-116.97536-261.45024-261.42464 0-144.31616 116.97536-261.29024 261.45024-261.29024 144.28544 0 261.25952 116.97536 261.25952 261.29024C773.25952 656.45056 656.28544 773.42464 512 773.42464L512 773.42464zM512 119.97952C295.4752 119.97952 119.85536 295.47392 119.85536 512c0 216.49536 175.61984 392.14464 392.14464 392.14464 216.46464 0 391.9552-175.65056 391.9552-392.14464C903.9552 295.47392 728.46464 119.97952 512 119.97952L512 119.97952zM512 969.42976C259.29472 969.42976 54.57024 764.67968 54.57024 512 54.57024 259.4496 259.29472 54.57024 512 54.57024c252.51968 0 457.42976 204.87936 457.42976 457.42976C969.42976 764.67968 764.51968 969.42976 512 969.42976L512 969.42976zM512 969.42976"]},
	"unchecked":{"box":[54.57,54.57,969.42,969.42],"data":["M512.00512 54.57024c-252.71424 0-457.43488 204.87936-457.43488 457.42464 0 252.67968 204.72064 457.43488 457.43488 457.43488 252.51456 0 457.42464-204.7552 457.42464-457.43488C969.42976 259.4496 764.51968 54.57024 512.00512 54.57024L512.00512 54.57024zM512.00512 904.14976c-216.52992 0-392.13952-175.6544-392.13952-392.15488 0-216.51968 175.6096-392.01536 392.13952-392.01536 216.45952 0 391.9552 175.49568 391.9552 392.01536C903.96032 728.49536 728.46464 904.14976 512.00512 904.14976L512.00512 904.14976zM512.00512 904.14976"]},
	"toggle":{"box":[330.24,270.84,694.27,857.08],"data":["M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z"]},
	"clear":{"box":[96.1,96,937.3,927.9],"data":["M479.3 863.6L899.9 443c37.4-37.4 37.4-98.3 0-135.8L716.7 124.1C698.5 106 674.4 96 648.7 96c-25.8 0-50.4 10.8-68.6 29l-455 455c-18.2 18.2-29 42.8-29 68.6 0 25.7 9.9 49.9 28.1 68l183.1 183.2c18.1 18.1 42.2 28.1 67.9 28.1 3 0 5.9-0.1 8.8-0.4v0.1h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H479.3z m-126.8-9L169.4 671.5c-6-6-9.4-14.1-9.4-22.6 0-8.5 3.3-16.6 9.4-22.6l104.9-104.9 228.4 228.4-104.9 104.8c-6 6-14.1 9.4-22.6 9.4-8.6 0-16.6-3.3-22.7-9.4z"]},
}