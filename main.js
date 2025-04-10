javascript:
function GetStats() {  
    window._statsListenerAdded = true;
    let oKeyPressed = false;
    let needtimeoutcode = true;

    const keydownListener = function(event) {
      if (event.key === 'e' && !oKeyPressed) {
        oKeyPressed = true;
        askForStats(true);
        needtimeoutcode = false;

      } else if (oKeyPressed) {
        askForStats(false);
        needtimeoutcode = true;
      }
    };

    const keyupListener = function(event) {
      if (event.key === 'e') {
        oKeyPressed = false;
      }
    };
    document.addEventListener('keydown', keydownListener);
    document.addEventListener('keyup', keyupListener);

    setTimeout(() => {
      document.removeEventListener('keydown', keydownListener);
      document.removeEventListener('keyup', keyupListener);
      window._statsListenerAdded = false;
      if (needtimeoutcode) {
        const totalQrandomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        const rightQrandomNumber = Math.floor(Math.random() * (totalQrandomNumber - 20)) + 20;
        const time = Math.floor((totalQrandomNumber - 50) * (39 / 50)) + 20;
        const SECrandomNumber = Math.floor(Math.random() * (59 - 0 + 1));
        updateStatistics(totalQrandomNumber, rightQrandomNumber, time, SECrandomNumber);
      }
    }, 100);

    function askForStats(usePrompt) {
      let totalQrandomNumber, rightQrandomNumber, time;

      if (usePrompt) {
        totalQrandomNumber = parseInt(prompt("Enter Total Questions (e.g. 50 - 100):"), 10);
        rightQrandomNumber = parseInt(prompt("Enter Correct Questions:"), 10);
        time = parseInt(prompt("Enter Time (in minutes):"), 10);
        if (time > 59) {
          time = 59;
        }
      } else {
        totalQrandomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        rightQrandomNumber = Math.floor(Math.random() * (totalQrandomNumber - 20)) + 20;
        time = Math.floor((totalQrandomNumber - 50) * (39 / 50)) + 20;
      }

      const SECrandomNumber = Math.floor(Math.random() * 60);
      updateStatistics(totalQrandomNumber, rightQrandomNumber, time, SECrandomNumber);
    }

    function updateStatistics(totalQrandomNumber, rightQrandomNumber, time, SECrandomNumber) {

      const section = document.querySelector('.breadcrumb-content');

      const grade = section.querySelector('.breadcrumb-link').innerText;

      const skillCode = section.querySelector('.breadcrumb-selected').childNodes[0].textContent.trim();

      const skillName = section.querySelector('.breadcrumb-skill-name').innerText;

      const permacode = section.querySelector('.grades-landing-permacode').innerText;

      const prizeMessageElement = section.querySelector('.award-notification-body');
      const prizeMessage = prizeMessageElement ? prizeMessageElement.childNodes[0].textContent.trim() : '';

      const nameElement = document.querySelector('.display-name.js-display-name');
      const name = nameElement ? nameElement.textContent.trim() : null;

      const profilePic = document.querySelector('.user-avatar-container img');
      const profilePicUrl = profilePic ? profilePic.src : null;

      let state = null;
      const stateElement = document.querySelector('#ixl-nav-categories > ul.box-site-nav-categories-left.category-menus > li:nth-child(2) > nav > ul > div.grid-item.x-2.y-0 > li > ul > li:nth-child(2) > a');
      const stateText = stateElement ? stateElement.textContent.trim() : null;

      if (stateElement) {
          state = stateElement.textContent.trim();
      }

      if (!state && window.RUNTIME_CONTEXT && window.RUNTIME_CONTEXT.sunshine) {
          state = window.RUNTIME_CONTEXT.sunshine.googleTagManagerConfiguration?.region || null;
      }

      document.querySelectorAll('.yui3-js-enabled').forEach(container => {
      container.innerHTML = `
      <html lang="en-US" class="yui3-js-enabled" id="yui_3_18_1_1_1741205961862_629"><script type="text/javascript">window.script1741205962306=1;</script><head>

          <link rel="icon" href="/ixl-favicon.png">

          <script type="text/javascript" async="" charset="utf-8" src="https://www.gstatic.com/recaptcha/releases/EGO3I7Q26cZ-jBw3BEtzIx7-/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-61VR//KO5vDNAFE1O0P7MzEOKj68zRELxJeYIL5DD4Cj1hdU5Cro7XZfUD04Ca7S"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-MQKK9F&amp;gtm_auth=rVfbE8en3IxbGbyIWqZqog&amp;gtm_preview=env-36&amp;gtm_cookies_win=x"></script><script type="text/javascript" async="" src="//www.google-analytics.com/analytics.js"></script><script src="/dv3/zeyzJp_xIi5ITRc4JU9PrloOEik/yui3/prepage/preventDefault-min.js"></script><style type="text/css" id="operaUserStyle"></style>

            <script src="/dv3/zeyzJp_xIi5ITRc4JU9PrloOEik/yui3/prepage/polyfill-min.js"></script>

          <meta name="com.silverpop.brandeddomains" content="www.pages02.net,email.ixl.com,www.ixl.com,au.ixl.com,ca.ixl.com,eu.ixl.com,in.ixl.com,ie.ixl.com,nz.ixl.com,sg.ixl.com,za.ixl.com,uk.ixl.com">
          <meta name="com.silverpop.cothost" content="pod2.ibmmarketingcloud.com">

          <script type="text/javascript" src="/frontend/runtime/runtime.fb3230e9c7fa0f978262.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff.9f4aaa6f963d24f701bc.bundle.js"></script><script type="text/javascript" src="/frontend/sunshineGlobals/sunshineGlobals.3a901a4f02517441d579.bundle.js"></script>
            <title>
              IXL | ${skillName} | ${grade} language arts
            </title>

            <meta name="description" content="Improve your language arts knowledge with free questions in &quot;Complete the short e word&quot; and thousands of other language arts skills.">

              <meta name="viewport" content="width=device-width, initial-scale=1">

            <meta name="robots" content="noarchive">

            <link rel="stylesheet" href="/dv3/_WE0Ue32g-6-dWJhWEXP5hywP-8/yui3/crisp/crisp-css-base-min.css">
          <link rel="stylesheet" href="/dv3/_WE0Ue32g-6-dWJhWEXP5hywP-8/yui3/crisp/crisp-css-buttons-min.css">
          <link rel="stylesheet" href="/dv3/_WE0Ue32g-6-dWJhWEXP5hywP-8/yui3/crisp/crisp-css-forms-min.css">

            <link rel="preconnect" href="https://www.googletagmanager.com">
          <link rel="preconnect" href="https://www.google-analytics.com">
          <link rel="prefetch" href="/yui2.9.0/yuiloader/yuiloader-min.js">
          <link rel="prefetch" href="/yui2.9.0/cookie/cookie-min.js">
          <link rel="prefetch" href="/yui2.9.0/utilities/utilities.js">
          <link rel="prefetch" href="/yui2.9.0/container/container-min.js">
          <link rel="prefetch" href="/yui2.9.0/menu/assets/skins/sam/menu.css">
          <link rel="prefetch" href="/yui2.9.0/menu/menu-min.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/ixlloader.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/utils.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/flowdialog.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/account/login.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/marketing/marketing.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/navigation/international/international.js">
          <link rel="prefetch" href="/yui2.9.0/carousel/assets/skins/sam/carousel.css">
          <link rel="prefetch" href="/yui2.9.0/carousel/carousel-min.js">
          <link rel="prefetch" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/account/profile.js">

            <link rel="stylesheet" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/css/style.css ">
            <link rel="stylesheet" href="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/site-nav-css-min.css">

          <link rel="stylesheet" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/marketing/css/marketing.css ">
          <link rel="stylesheet" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/ixl/practice/ixl-practice-crate.css ">
          <link rel="stylesheet" href="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/ixl/practice/ixl-html-crate.css ">

          <link rel="stylesheet" href="/combo/dv3/eMIz5r1mfb_Py1ucaj7a1fG6Kh4/yui3/practice/?modules=practice-css-audio-min.css,practice-css-practice-min.css,practice-css-stats-min.css,practice-css-multipart-min.css,practice-css-toggle-spanish-button-min.css">

          <link rel="stylesheet" href="/combo/dv3/gY9w33cEP7-89Rcp9GEOLehnMVw/yui3/webfont/?modules=webfont-css-robotoslab-min.css,webfont-css-roboto-min.css">

              <link rel="stylesheet" href="/dv3/JkZl3_xMR5vjo6USZh4jysCt3Pc/yui3/marketing/marketing-css-mobile-app-banner-min.css">

            <link rel="stylesheet" href="/frontend/snow-capped-mountain/snow-capped-mountain.d1ec0753928e232f5747.bundle.css">
            <link rel="stylesheet" href="/frontend/translationPopover/translationPopover.832e7f71e8a3a541570b.bundle.css">

          <script>
            window.__NAVIGATION_DIRECT_LINKS_PROPS__ = {
              isSignedIn: true,
            };
          </script>
          <script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff.9f4aaa6f963d24f701bc.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_redux_lib_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_redux_lib_index_js.18c6a32f7d0aa04813bf.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_header_navigation_quickLoginForm_features_signin_signinSlice_js/commons-ixl_header_navigation_quickLoginForm_features_signin_signinSlice_js.40aeb70042d6ce8f43cb.bundle.js"></script><script type="text/javascript" src="/frontend/navigationDirectLinks/navigationDirectLinks.732970d8db999025e09c.bundle.js"></script>

          <script charset="utf-8" id="yui_3_18_1_1_1741205961862_2" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=util/YUA-min.js,util/YLang-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_3" src="/combo/dv3/xXJ_FBA7JnkwS-9xZcmkp3cjulo/yui3/util/?modules=util-UAPatch-min.js,util-StaticResources/lang/util-StaticResources.js,util-StaticResources-min.js,util-DateTimeFormat-min.js,util-NumberFormat-min.js,util-GrammarFunctions-min.js,util-PluralRules-min.js,util-ErrorTracking-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_4" src="/combo/yui/3.18.1?modules=oop/oop-min.js,event-custom-base/event-custom-base-min.js,event-base/event-base-min.js,dom-core/dom-core-min.js,dom-base/dom-base-min.js,selector-native/selector-native-min.js,selector/selector-min.js,node-core/node-core-min.js,dom-style/dom-style-min.js,node-base/node-base-min.js,event-delegate/event-delegate-min.js,node-event-delegate/node-event-delegate-min.js,pluginhost-base/pluginhost-base-min.js,pluginhost-config/pluginhost-config-min.js,node-pluginhost/node-pluginhost-min.js,dom-screen/dom-screen-min.js,node-screen/node-screen-min.js,node-style/node-style-min.js,querystring-stringify-simple/querystring-stringify-simple-min.js,io-base/io-base-min.js,datatype-xml-parse/datatype-xml-parse-min.js,io-xdr/io-xdr-min.js,io-form/io-form-min.js,io-upload-iframe/io-upload-iframe-min.js,queue-promote/queue-promote-min.js,io-queue/io-queue-min.js,event-custom-complex/event-custom-complex-min.js,intl/intl-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_5" src="/combo/dv3/jtBfMoh64IpiLjxoYdjEAQaOpNo/yui3/transfer-rosters/?modules=transfer-rosters-TransferRosters/lang/transfer-rosters-TransferRosters.js,transfer-rosters-TransferRosters-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_6" src="/combo/dv3/s2zTSYl6oFV5v3-X77RIVuBDtvM/yui3/util-commonjs/?modules=ixl_util-commonjs_DateTimeFormat/lang/ixl_util-commonjs_DateTimeFormat.js,CheckBrowser-min.js,YEscape-min.js,Intl-min.js,YMerge-min.js,DateTimeFormat-min.js,NumberFormat-min.js,ixl_util-commonjs_GrammarFunctions/lang/ixl_util-commonjs_GrammarFunctions.js,GrammarFunctions-min.js,PluralRules-min.js,Request-min.js,ErrorTracking-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_7" src="/combo/dv3/iN4IY6kNCb03RM5mNfQVVFcnyg4/yui3/external/?modules=moment/dist-2.18.1/moment-min.js,moment/moment-min.js,Promise-min.js,fetch-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_8" src="/combo/dv3/jwVQsepMPemEJSNBvIiAN4fyUxQ/yui3/signin-commonjs/?modules=utils/signinConstants-min.js,utils/recordSignin-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_9" src="/combo/dv3/gjyg6SpgYJv96UGFkPc4n9uqU70/yui3/tracking-utils/?modules=snakeCaseUtils-min.js,dataLayer-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_11" src="/yui2.9.0/yuiloader/yuiloader-min.js"></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_13" src="/combo/dv3/xXJ_FBA7JnkwS-9xZcmkp3cjulo/yui3/util/?modules=util-Intl-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_12" src="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/ixlloader.js"></script><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_29" href="/combo/yui/3.18.1?modules=widget-base/assets/skins/sam/widget-base.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_30" href="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=util/audio/TranslationButtonDisplay-min.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_31" href="/combo/dv3/mneDNmc8mLkT6r5llbM-h3pDTNI/yui3/product-components/?modules=IxlModal-min.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_32" href="/combo/dv3/HmoREk4eI9cYzk56GbJxfI9fn2Y/yui3/qgen/?modules=q-css-Bundle-min.css,q-css-Expression-min.css,q-css-QMTypicalBinaryOperator-min.css,q-css-Section-min.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_33" href="/combo/dv3/IN3OVF4AqSgi19AdefUxxmeT0AU/yui3/qela/?modules=qela-css-ExplainedDictionaryEntry-min.css,qela-css-WordSumEquationView-min.css"><script charset="utf-8" id="yui_3_18_1_1_1741205961862_34" src="/combo/yui/3.18.1?modules=array-extras/array-extras-min.js,attribute-core/attribute-core-min.js,attribute-observable/attribute-observable-min.js,attribute-extras/attribute-extras-min.js,attribute-base/attribute-base-min.js,base-core/base-core-min.js,base-observable/base-observable-min.js,base-base/base-base-min.js,base-pluginhost/base-pluginhost-min.js,base-build/base-build-min.js,querystring-parse/querystring-parse-min.js,querystring-stringify/querystring-stringify-min.js,event-touch/event-touch-min.js,event-synthetic/event-synthetic-min.js,event-move/event-move-min.js,json-parse/json-parse-min.js,json-stringify/json-stringify-min.js,matrix/matrix-min.js,classnamemanager/classnamemanager-min.js,graphics/graphics-min.js,graphics-svg-default/graphics-svg-default-min.js,graphics-svg/graphics-svg-min.js,view/view-min.js,attribute-complex/attribute-complex-min.js,event-focus/event-focus-min.js,widget-base/widget-base-min.js,widget-htmlparser/widget-htmlparser-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_35" src="/combo/yui/3.18.1?modules=widget-skin/widget-skin-min.js,widget-uievents/widget-uievents-min.js,arraylist/arraylist-min.js,widget-parent/widget-parent-min.js,swfdetect/swfdetect-min.js,escape/escape-min.js,swf/swf-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_36" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=util/CustomEventFactory-min.js,util/AudioEventManager-min.js,util/get-window-min.js,util/get-document-min.js,util/audio-translation-text-util-min.js,util/has-class-min.js,util/add-class-min.js,util/join-classes-min.js,util/remove-class-min.js,util/ClassNameUtils-min.js,util/ContentContext-min.js,util/ancestor-any-min.js,util/InnerTranslationButtonFallbackUtil-min.js,util/audio-button-utils-min.js,util/ReactAudioWrapper-min.js,util/audio/AudioPolicyConstants-min.js,util/audio/AudioIndicatorEvents-min.js,util/getDisplayName-min.js,util/hoc/withAudioPlaying-min.js,util/audio/TEXT_REGEX-min.js,util/debounce-min.js,util/get-min-screen-side-min.js,util/is-mobile-device-min.js,util/ScreenOrientation-min.js,util/get-raw-screen-dimensions-min.js,util/is-mobile-app-min.js,util/get-available-screen-dimensions-min.js,util/browser-resize-listener-min.js,util/orientation-change-listener-min.js,components/introBox/IntroBoxConstants-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_37" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=fauxcus/withTabFocus-min.js,util/dragAndDrop/practice-agent-scroll-controller-min.js,util/html-order-comparator-min.js,util/fillIn/FillInNavigationController-min.js,util/int-to-hex-color-min.js,util/IXLContentColorUtils-min.js,color/QG3ColorSetting-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_38" src="/combo/dv3/eMIz5r1mfb_Py1ucaj7a1fG6Kh4/yui3/practice/?modules=practice-AudioManager-min.js,practice-AudioManagerInitializerUtils-min.js,practice-AudioManagerInitializer-min.js,practice-IncompleteAnswerPopover/lang/practice-IncompleteAnswerPopover.js,practice-IncompleteAnswerPopoverButton-min.js,practice-IncompleteAnswerPopover-min.js,practice-AudioButtonDelegate-min.js,practice-FlashAudio-min.js,practice-HTML5Audio-min.js,practice-PracticeAudioBackends-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_39" src="/combo/dv3/iN4IY6kNCb03RM5mNfQVVFcnyg4/yui3/external/?modules=react/react-17-0-2/react-devprod-min.js,react/react-min.js,snap/eve-min.js,snap/snap.svg-min.js,react/prop-types-15-6-0/prop-types-min.js,react/prop-types-min.js,react/react-17-0-2/react-dom-devprod-min.js,react/reactDom-min.js,react/create-react-class-15-6-2/create-react-class-min.js,react/create-react-class-min.js,snap/Snap-min.js,snap/SnapUtil-min.js,CSSColorParser-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_40" src="/combo/dv3/mneDNmc8mLkT6r5llbM-h3pDTNI/yui3/product-components/?modules=IxlModal-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_41" src="/combo/dv3/HmoREk4eI9cYzk56GbJxfI9fn2Y/yui3/qgen/?modules=q-Lang-min.js,q-AudioButtonVerticalAlignTileComponents-min.js,q-AudioHTMLUtils-min.js,q-ComponentSimple-min.js,q-DOMAttachAware-min.js,q-TranslationAPI-min.js,q-RavenTranslationButton-min.js,q-AudioWrapper-min.js,q-CSSClassNames-min.js,q-ContextAware-min.js,q-Component-min.js,q-GC-min.js,q-QMDelegate-min.js,q-QMTypicalBinaryOperator-min.js,q-GradingGroup-min.js,q-Guessable-min.js,q-ObjectUtils-min.js,q-StabilizerBase-min.js,q-SubmitStabilizer-min.js,q-Question-min.js,q-ColorUtils/lang/q-ColorUtils.js,q-ColorDirective-min.js,q-ColorSetting-min.js,q-ContentColorWithBrightness-min.js,q-MathUtils-min.js,q-ColorUtils-min.js,q-HTMLUtils-min.js,q-Section-min.js,q-AudioUtils-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_42" src="/combo/dv3/is474p-ADNHFE62tlRcvpS0FrfM/yui3/global/?modules=global-React-min.js,global-Snap-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_43" src="/combo/dv3/93mliL_YD8Ewvj40lVtkysZ5ikY/yui3/yui-gallery/?modules=yui-gallery-object-extras-min.js,yui-gallery-funcprog-min.js,yui-gallery-nodelist-extras-min.js,yui-gallery-nodelist-extras2-min.js,yui-gallery-svg-focus-patch-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_44" src="/combo/dv3/IN3OVF4AqSgi19AdefUxxmeT0AU/yui3/qela/?modules=qela-DictionaryEntryDefinitionView-min.js,qela-DictionaryEntryExplanationView-min.js,qela-WordSumEquationView-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_106" src="/combo/yui/3.18.1?modules=cookie/cookie-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_107" src="/combo/dv3/JkZl3_xMR5vjo6USZh4jysCt3Pc/yui3/marketing/?modules=marketing-mobileAppBanner-min.js" async=""></script><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_109" href="/combo/dv3/hN-k0BBpqDENA7779wkm1EnJrTk/yui3/customizable-delay-tooltips/?modules=customizable-delay-tooltips-css-tooltip-min.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_110" href="/combo/yui/3.18.1?modules=widget-stack/assets/skins/sam/widget-stack.css"><script charset="utf-8" id="yui_3_18_1_1_1741205961862_111" src="/combo/dv3/k2Mz2vgSspCT20X3qsG5frYdnhw/yui3/suggested-skills/?modules=ixl_suggested-skills_utils_SuggestionIconTooltipUtils/lang/ixl_suggested-skills_utils_SuggestionIconTooltipUtils.js,utils/SuggestionIconTooltipUtils-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_112" src="/combo/dv3/hN-k0BBpqDENA7779wkm1EnJrTk/yui3/customizable-delay-tooltips/?modules=customizable-delay-tooltips-Tooltip-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_113" src="/combo/yui/3.18.1?modules=event-mouseenter/event-mouseenter-min.js,event-hover/event-hover-min.js,widget-position/widget-position-min.js,widget-stack/widget-stack-min.js,selector-css2/selector-css2-min.js,selector-css3/selector-css3-min.js" async=""></script><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_168" href="/combo/dv3/6vZlGiWF1tdlXWyfR1crTHmSIRE/yui3/recaptcha-commonjs/?modules=css/GoogleRecaptchaClient-min.css"><script charset="utf-8" id="yui_3_18_1_1_1741205961862_169" src="/combo/dv3/s2zTSYl6oFV5v3-X77RIVuBDtvM/yui3/util-commonjs/?modules=Cookie-min.js,Websocket-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_170" src="/combo/dv3/qWG1J4dR8eZKjmiGnMC-BPI0G8M/yui3/site-nav-commonjs/?modules=set-up-site-nav-banner-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_171" src="/combo/dv3/7V6dbvO5kffrWmEVq2MzvSLP2zI/yui3/ab-testing-commonjs/?modules=FirstTimeOnIXLCookieHelper-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_172" src="/combo/dv3/iN4IY6kNCb03RM5mNfQVVFcnyg4/yui3/external/?modules=socket.io/socket.io-4.7.5/socket.io-4.7.5-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_173" src="/combo/dv3/6vZlGiWF1tdlXWyfR1crTHmSIRE/yui3/recaptcha-commonjs/?modules=GoogleRecaptchaClient-min.js" async=""></script><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_207" href="/combo/dv3/HmoREk4eI9cYzk56GbJxfI9fn2Y/yui3/qgen/?modules=q-css-min.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_208" href="/combo/dv3/eMIz5r1mfb_Py1ucaj7a1fG6Kh4/yui3/practice/?modules=practice-css-GCDisabler-min.css,practice-css-audio-min.css"><script charset="utf-8" id="yui_3_18_1_1_1741205961862_209" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=infrastructure/isObjectOrArray-min.js,infrastructure/convertWalk-min.js,infrastructure/findTypes-min.js,util/AutoFocusVersion-min.js,util/fire-custom-event-min.js,util/GCDisabler-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_210" src="/combo/dv3/HmoREk4eI9cYzk56GbJxfI9fn2Y/yui3/qgen/?modules=q-Q-min.js,q-DOMAfterAttached-min.js,q-DelayedRendering-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_211" src="/combo/yui/3.18.1?modules=timers/timers-min.js,promise/promise-min.js,event-key/event-key-min.js,model/model-min.js,widget-stdmod/widget-stdmod-min.js,array-invoke/array-invoke-min.js,event-tap/event-tap-min.js,widget-child/widget-child-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_212" src="/combo/dv3/eMIz5r1mfb_Py1ucaj7a1fG6Kh4/yui3/practice/?modules=practice-FillInNavigationControllerBridge-min.js,practice-FeedbackAudio-min.js,practice-QuestionWidget/lang/practice-QuestionWidget.js,practice-CrateModel-min.js,practice-CrateView/lang/practice-CrateView.js,practice-CrateView-min.js,practice-CrateWidget-min.js,practice-Focusable-min.js,practice-GCDisabler-min.js,practice-QuestionWidget-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_213" src="/combo/dv3/93mliL_YD8Ewvj40lVtkysZ5ikY/yui3/yui-gallery/?modules=yui-gallery-soon-min.js" async=""></script><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_214" href="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=util/audio/AudioButtonDisplay-min.css,util/audio/AudioEnabledComponent-min.css,components/spanish/QMGloss/Gloss-min.css,components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoicePassage-min.css,components/GCTileMultipleChoices/TileMultipleChoices-min.css,components/layout/TileLayout-min.css,components/Tiles/AudioForSelectableTile-min.css,components/Tiles/SelectableTile-min.css,components/Tiles/TileSkinCheckMark-min.css,components/Tiles/TileSkinBare-min.css,components/Tiles/TileSkinClassic-min.css,util/css/withHorizontalScrollIndicator-min.css,components/image/DCImage-min.css"><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_215" href="/combo/dv3/IN3OVF4AqSgi19AdefUxxmeT0AU/yui3/qela/?modules=qela-css-RichText-min.css"><script charset="utf-8" id="yui_3_18_1_1_1741205961862_216" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=components/semantic/Stylizer-min.js,text/_Ellipsis-min.js,text/_ParagraphSpan-min.js,text/_Rogue-min.js,text/_Word-min.js,util/lang/is-string-min.js,text/utext/UText-min.js,text/utext/UTextPropType-min.js,util/KeyCodes-min.js,util/audio/AudioButtonConstants-min.js,util/get-values-min.js,util/audio/AudioButtonDisplay-min.js,util/audio/AudioNodeIteration-min.js,util/audio/audio-playing-utils-min.js,propTypes/audioPathsPropType-min.js,util/audio/propTypes/enableAudioPropTypes-min.js,util/audio/AudioButton-min.js,util/audio/AudioButtonCfg-min.js,util/audio/AudioSystemNumberConstants-min.js,util/audio/createAudioSources-min.js,util/audio/enableAudio-min.js,util/lang/is-function-min.js,util/request-css-module-for-page-min.js,text/Paragraph-min.js,util/audio/generate-audio-info-min.js,util/Rand-min.js,components/GCFillInMultipleChoiceUpgrade/FIMCConstants-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_217" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoiceComponentWrapper-min.js,components/GCFillInMultipleChoiceUpgrade/AudioWrappingHelper-min.js,components/GCFillInMultipleChoiceUpgrade/PrecedingLineBreakHelper-min.js,components/GCFillInMultipleChoiceUpgrade/FIMCBlankWithLineBreakSupport-min.js,components/GCFillInMultipleChoiceUpgrade/DynamicBlank-min.js,util/get-absolute-coordinates-min.js,util/module-logger-min.js,util/bounding-box-helpers-min.js,components/spanish/QMGloss/Gloss-min.js,components/GCFillInMultipleChoiceUpgrade/FIMCTextParsing-min.js,components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoiceTextFragment-min.js,components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoiceCompletePassage-min.js,components/GCFillInMultipleChoiceUpgrade/StaticBlank-min.js,components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoiceSizer-min.js,components/GCFillInMultipleChoiceUpgrade/CorrectAnswerPassageNoWrapping-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_218" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=components/spanish/QMDialogueWithSpeechBubbles/calculate-speech-bubbles-dialogue-line-width-min.js,util/responsive-design-listener-min.js,components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoicePassageController-min.js,util/convert-to-value-min.js,util/is-DOM-min.js,util/hash-min.js,util/invoke-if-defined-min.js,util/supports-passive-event-listeners-min.js,util/unwrap-position-info-min.js,components/ClickToSelect/ClickToSelectController-min.js,components/ClickToSelect/ClickToSelectControllerReactMixin-min.js,components/GCTileMultipleChoices/TileMultipleChoiceConstants-min.js,components/Tiles/TilePropEnum-min.js,fauxcus/FauxcusManagerEnums-min.js,fauxcus/FauxcusManager-min.js,components/layout/GriddyLayout-min.js,components/Tiles/TileDimensionsMap-min.js,util/get-tile-size-map-min.js,components/layout/TileSizingUtils-min.js,components/layout/VerticalLayout-min.js,util/query-selector-array-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_219" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=components/GCTileMultipleChoices/withTileMultipleChoice-min.js,components/Tiles/TileSkinCheckMarkBottom-min.js,components/Tiles/TileSkinCheckMarkLeft-min.js,components/Tiles/withSelectableTile-min.js,components/Tiles/SelectableCheckedTile-min.js,components/Tiles/SelectableTile-min.js,components/Tiles/SelectableTileMobile-min.js,components/Tiles/TileSkinBare-min.js,components/Tiles/TileSkinClassic-min.js,responsive/ResponsiveHocConstants-min.js,responsive/getCustomizedResponsiveHoc-min.js,util/hoc/horizontalScrollFadeSize-min.js,util/hoc/withAudio-min.js,util/hoc/withDelayedRendering-min.js,util/hoc/HorizontalScrollConstants-min.js,util/hoc/withHorizontalScrollIndicator-min.js,components/GCTileMultipleChoices/TileMultipleChoicesController-min.js,components/GCFillInMultipleChoiceUpgrade/FillInMultipleChoiceTiles-min.js,components/image/interfaceHOCs/withOnLoadProp-min.js,util/srcset-utils-min.js,components/image/ImageBase-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_220" src="/combo/dv3/IcDrgw75qCQoX1-_BF5FyCGnlj4/yui3/content/?modules=components/image/ImageInfoPropType-min.js,components/image/interfaceHOCs/withImageInfoProp-min.js,components/image/interfaceHOCs/withSizableProp-min.js,components/image/RasterImage-min.js,components/image/VectorImage-min.js,components/image/DCImage-min.js,components/image/DCImageResponsiveCfg-min.js,components/image/ImageInfo-min.js,responsive/getCustomizedResponsivePropType-min.js,components/image/ResponsiveImage-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_221" src="/combo/dv3/iN4IY6kNCb03RM5mNfQVVFcnyg4/yui3/external/?modules=query-string/queryString-min.js,classnames-min.js,MersenneTwister-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_222" src="/combo/dv3/HmoREk4eI9cYzk56GbJxfI9fn2Y/yui3/qgen/?modules=q-PlainText-min.js,q-Rand-min.js,q-ContextHelper-min.js,q-GCFillInMultipleChoicePassage/lang/q-GCFillInMultipleChoicePassage.js,q-QuestionFocus-min.js,q-ReactBridge-min.js,q-GCReactBridge-min.js,q-GCFillInMultipleChoicePassage-min.js,q-GCFillInMultipleChoiceComponentWrapper-min.js,q-QMReactBridge-min.js,q-DCReactBridge-min.js,q-DCFillInMultipleChoiceTiles-min.js,q-DCImageBridge-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_223" src="/combo/dv3/IN3OVF4AqSgi19AdefUxxmeT0AU/yui3/qela/?modules=qela-RichTextEnrichmentToHTMLMap-min.js,qela-RichText-min.js" async=""></script><script charset="utf-8" id="yui_3_18_1_1_1741205961862_351" src="/combo/dv3/HmoREk4eI9cYzk56GbJxfI9fn2Y/yui3/qgen/?modules=q-LabeledItem-min.js,q-QMMatrix-min.js,q-QMLabeledItem-min.js,q-QMMultipleSourceAudioWrapper-min.js" async=""></script><link charset="utf-8" rel="stylesheet" id="yui_3_18_1_1_1741205961862_448" href="/combo/dv3/IN3OVF4AqSgi19AdefUxxmeT0AU/yui3/qela/?modules=qela-css-ExampleImagesTable-min.css"><script charset="utf-8" id="yui_3_18_1_1_1741205961862_449" src="/combo/dv3/IN3OVF4AqSgi19AdefUxxmeT0AU/yui3/qela/?modules=qela-ExampleImagesTableRow-min.js,qela-ExampleImagesTable-min.js" async=""></script><script type="text/javascript" charset="utf8" async="" src="https://cdnapi.kaltura.com/p/4764982/sp/476498200/embedIframeJs/uiconf_id/50822372/partner_id/4764982"></script><style type="text/css">:root [href^="//mage98rquewz.com/"], :root [href^="//x4pollyxxpush.com/"], :root span[id^="ezoic-pub-ad-placeholder-"], :root ins.adsbygoogle[data-ad-slot], :root ins.adsbygoogle[data-ad-client], :root img[src^="https://s-img.adskeeper.com/"], :root guj-ad, :root gpt-ad, :root div[id^="zergnet-widget"], :root div[id^="vuukle-ad-"], :root div[id^="taboola-stream-"], :root div[id^="sticky_ad_"], :root div[id^="st"][style^="z-index: 999999999;"], :root div[id^="gpt_ad_"], :root div[id^="ezoic-pub-ad-"], :root div[id^="dfp-ad-"], :root div[id^="crt-"][style], :root div[id^="adspot-"], :root div[id^="adrotate_widgets-"], :root ps-connatix-module, :root div[id^="ad_position_"], :root div[id^="ad-div-"], :root div[id*="ScriptRoot"], :root div[id*="MarketGid"], :root div[data-id-advertdfpconf], :root div[data-dfp-id], :root hl-adsense, :root div[data-contentexchange-widget], :root div[data-alias="300x250 Ad 2"], :root div[data-adzone], :root div[data-adunit-path], :root div[data-adname], :root div[data-ad-targeting], :root div[data-ad-placeholder], :root div[aria-label="Ads"], :root display-ads, :root display-ad-component, :root atf-ad-slot, :root aside[id^="adrotate_widgets-"], :root ark-top-ad, :root amp-fx-flying-carpet, :root amp-embed[type="taboola"], :root amp-connatix-player, :root amp-ad-custom, :root amp-ad, :root div[id^="google_dfp_"], :root ad-slot, :root ad-shield-ads, :root a[style="width:100%;height:100%;z-index:10000000000000000;position:absolute;top:0;left:0;"], :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source, :root a[href^="https://xbet-4.com/"], :root div[id^="ad-position-"], :root a[href^="https://www.toprevenuegate.com/"], :root a[href^="https://www.purevpn.com/"][href*="&utm_source=aff-"], :root a[href^="https://www.privateinternetaccess.com/"] > img, :root a[href^="https://www.onlineusershielder.com/"], :root a[href^="https://www.infowarsstore.com/"] > img, :root a[href^="https://www.highperformancecpmgate.com/"], :root a[href^="https://www.highcpmrevenuenetwork.com/"], :root a[href^="https://lnkxt.bannerator.com/"], :root a[href^="https://www.geekbuying.com/dynamic-ads/"], :root a[href^="https://www.financeads.net/tc.php?"], :root a[href^="https://www.effectiveratecpm.com/"], :root [href^="https://www.herbanomic.com/"] > img, :root a[href^="https://maymooth-stopic.com/"], :root a[href^="https://www.dql2clk.com/"], :root a[href^="https://www.nutaku.net/signup/landing/"], :root a[href^="https://www.dating-finder.com/signup/?ai_d="], :root a[href^="https://explore-site.com/"], :root a[href^="https://www.brazzersnetwork.com/landing/"], :root a[href^="https://www.adxsrve.com/"], :root [data-template-type="nativead"], :root a[href^="https://www.endorico.com/Smartlink/"], :root a[href^="https://www.adultempire.com/"][href*="?partner_id="], :root a[href^="https://voluum.prom-xcams.com/"], :root a[href^="https://twinrdsrv.com/"], :root a[href^="https://trk.nfl-online-streams.club/"], :root a[href^="https://tracking.avapartner.com/"], :root a[href^="https://track.wg-aff.com"], :root a[href^="https://track.ultravpn.com/"], :root a[href^="https://track.afcpatrk.com/"], :root a[href^="https://torguard.net/aff.php"] > img, :root [data-identity="adhesive-ad"], :root a[href^="https://tc.tradetracker.net/"] > img, :root a[href^="https://tatrck.com/"], :root a[href^="https://click.candyoffers.com/"], :root [href^="https://zstacklife.com/"] img, :root a[href^="https://t.aslnk.link/"], :root a[href^="https://t.adating.link/"], :root a[href^="https://t.acam.link/"], :root a[href*="//daichoho.com/"], :root a[href^="https://syndication.optimizesrv.com/"], :root a[href^="https://go.trackitalltheway.com/"], :root [href^="https://track.fiverr.com/visit/"] > img, :root a[href^="https://syndication.exoclick.com/"], :root a[href^="https://syndication.dynsrvtbg.com/"], :root div[data-alias="300x250 Ad 1"], :root a[href^="https://syndicate.contentsserved.com/"], :root a[href^="https://svb-analytics.trackerrr.com/"], :root a[href^="https://ad.doubleclick.net/"], :root a[href^="https://static.fleshlight.com/images/banners/"], :root a[href^="https://slkmis.com/"], :root bottomadblock, :root a[href^="https://s.zlinkd.com/"], :root a[href^="https://s.zlink3.com/"], :root a[href^="https://www.mrskin.com/account/"], :root a[href^="https://s.optzsrv.com/"], :root a[href^="https://s.ma3ion.com/"], :root #kt_player > div[style$="display: block;"][style*="inset: 0px;"], :root a[href^="https://quotationfirearmrevision.com/"], :root a[href^="https://pubads.g.doubleclick.net/"], :root a[href^="https://ak.oalsauwy.net/"], :root a[href^="https://softwa.cfd/"], :root a[href^="https://play1ad.shop/"], :root a[href^="https://prf.hn/click/"][href*="/camref:"] > img, :root a[href^="https://www.dating-finder.com/?ai_d="], :root a[href^="https://serve.awmdelivery.com/"], :root a[href^="https://prf.hn/click/"][href*="/adref:"] > img, :root app-ad, :root [href^="https://ap.octopuspop.com/click/"] > img, :root a[href^="https://postback1win.com/"], :root a[href^="https://mmwebhandler.aff-online.com/"], :root a[href^="https://www.bet365.com/"][href*="affiliate="], :root a[href^="https://pb-track.com/"], :root a[href^="https://pb-front.com/"], :root a[href^="https://paid.outbrain.com/network/redir?"], :root a[href^="https://streamate.com/landing/click/"], :root div[class^="Adstyled__AdWrapper-"], :root a[href^="https://startgaming.net/tienda/" i], :root a[href^="https://osfultrbriolenai.info/"], :root a[href^="https://upsups.click/"], :root a[href^="https://ndt5.net/"], :root a[href^="http://eighteenderived.com/"], :root a[href^="https://natour.naughtyamerica.com/track/"], :root a[href^="https://mediaserver.entainpartners.com/renderBanner.do?"], :root a[href^="https://m.do.co/c/"] > img, :root .nya-slot[style], :root a[href^="https://a.bestcontentweb.top/"], :root a[href^="https://lobimax.com/"], :root a[href^="https://lead1.pl/"], :root a[href^="https://landing.brazzersnetwork.com/"], :root a[href^="https://join.virtuallust3d.com/"], :root a[href^="https://kiksajex.com/"], :root a[href^="https://juicyads.in/"], :root a[href^="https://snowdayonline.xyz/"], :root a[href^="https://mediaserver.gvcaffiliates.com/renderBanner.do?"], :root a[href^="https://join.dreamsexworld.com/"], :root a[href^="https://jaxofuna.com/"], :root a[href^="https://italarizege.xyz/"], :root a[href^="https://iqbroker.com/"][href*="?aff="], :root a[href^="https://hot-growngames.life/"], :root a[href^="https://helmethomicidal.com/"], :root a[href^="https://golinks.work/"], :root a[href^="https://go.xxxvjmp.com/"], :root [class^="tile-picker__CitrusBannerContainer-sc-"], :root a[href^="https://go.xxxiijmp.com"], :root a[href^="https://go.xtbaffiliates.com/"], :root [data-role="tile-ads-module"], :root a[href^="https://go.xlviirdr.com"], :root a[href^="https://go.xlviiirdr.com"], :root a[href^="https://ismlks.com/"], :root [href^="https://www.mypillow.com/"] > img, :root a[href^="https://go.xlirdr.com"], :root [data-css-class="dfp-inarticle"], :root a[href^="https://l.hyenadata.com/"], :root a[href^="https://go.tmrjmp.com"], :root a[href^="https://zirdough.net/"], :root a[href^="https://s.deltraff.com/"], :root a[href^="https://go.markets.com/visit/?bta="], :root a[href^="https://billing.purevpn.com/aff.php"] > img, :root a[href^="https://go.hpyrdr.com/"], :root a[href^="https://lijavaxa.com/"], :root a[href^="https://go.goaserv.com/"], :root a[href^="https://t.hrtye.com/"], :root a[href^="https://go.etoro.com/"] > img, :root a[href^="https://go.dmzjmp.com"], :root a[href^="https://www.bang.com/?aff="], :root #mgb-container > #mgb, :root a[href^="https://go.admjmp.com"], :root a[href^="https://ak.stikroltiltoowi.net/"], :root a[href^="https://get.surfshark.net/aff_c?"][href*="&aff_id="] > img, :root a[href^="https://www.mrskin.com/tour"], :root a[href^="https://financeads.net/tc.php?"], :root a[href^="https://www.adskeeper.com"], :root a[data-redirect^="https://paid.outbrain.com/network/redir?"], :root [href^="https://clicks.affstrack.com/"] > img, :root a[href^="https://ak.hauchiwu.com/"], :root a[href^="https://engine.phn.doublepimp.com/"], :root a[href^="https://engine.blueistheneworanges.com/"], :root a[href^="https://drumskilxoa.click/"], :root a[href^="https://dl-protect.net/"], :root a[href^="https://rixofa.com/"], :root #ads[style^="position: absolute; z-index: 30; width: 100%; height"], :root a[href^="https://disobediencecalculatormaiden.com/"], :root a[href*=".foxqck.com/"], :root a[href^="https://ctosrd.com/"], :root a[href^="https://clixtrac.com/"], :root [href^="https://noqreport.com/"] > img, :root a[href^="https://clicks.pipaffiliates.com/"], :root app-advertisement, :root a[href^="https://getmatchedlocally.com/"], :root a[href^="https://clickins.slixa.com/"], :root a[href^="https://datewhisper.life/"], :root a[href^="https://get-link.xyz/"], :root a[href^="https://click.linksynergy.com/fs-bin/"] > img, :root a[href^="https://combodef.com/"], :root a[href^="https://click.hoolig.app/"], :root a[href^="https://track.totalav.com/"], :root a[href^="https://ctrdwm.com/"], :root img[src^="https://images.purevpnaffiliates.com"], :root a[href^="https://porntubemate.com/"], :root a[href^="https://clickadilla.com/"], :root a[href^="https://click.dtiserv2.com/"], :root a[href^="https://go.xlvirdr.com"], :root a[href^="http://www.iyalc.com/"], :root a[href^="https://claring-loccelkin.com/"], :root a[href^="https://bongacams2.com/track?"], :root a[href^="https://t.ajrkm1.com/"], :root [href="https://masstortfinancing.com"] img, :root a[href^="https://bongacams10.com/track?"], :root a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="], :root a[href^="https://bngpt.com/"], :root a[href^="https://black77854.com/"], :root a[href^="https://banners.livepartners.com/"], :root a[href^="https://myclick-2.com/"], :root a[href^="https://sexynearme.com/"], :root a[href^="https://baipahanoop.net/"], :root a[href^="http://revolvemockerycopper.com/"], :root a[href^="https://awptjmp.com/"], :root a[href^="https://join.sexworld3d.com/track/"], :root a[href^="https://aweptjmp.com/"], :root a[href^="https://ausoafab.net/"], :root a[href^="https://adclick.g.doubleclick.net/"], :root a[href^="https://bc.game/"], :root a[href^="https://a.bestcontentoperation.top/"], :root a[href^="https://adultfriendfinder.com/go/"], :root a[href^="https://ads.planetwin365affiliate.com/"], :root a[href^="https://ads.leovegas.com/"], :root a[href^="https://auesk.cfd/"], :root a[href^="https://a2.adform.net/"], :root a[href^="https://a.candyai.love/"], :root a[href^="https://playnano.online/offerwalls/?ref="], :root a[href^="https://a.adtng.com/"], :root .banner-img > .pbl, :root [data-m-ad-id], :root a[href^="https://a-ads.com/"], :root a[href^="https://ak.psaltauw.net/"], :root a[href^="https://1winpb.com/"], :root div[id^="rc-widget-"], :root a[href^="http://eslp34af.click/"], :root a[href^="https://turnstileunavailablesite.com/"], :root a[href^="https://chaturbate.com/in/?"], :root a[href^="https://prf.hn/click/"][href*="/creativeref:"] > img, :root a[href*="&maxads="], :root a[href^="http://www.adultempire.com/unlimited/promo?"][href*="&partner_id="], :root a[href^="https://1betandgonow.com/"], :root a[href^="https://eergortu.net/"], :root div[id^="optidigital-adslot"], :root a[href^="https://123-stream.org/"], :root a[href^="http://www.friendlyduck.com/AF_"], :root a[href^="https://allhost.shop/aff.php?"], :root [data-dynamic-ads], :root a[href^="http://vnte9urn.click/"], :root a[href^="https://getvideoz.click/"], :root a[href^="http://troopsassistedstupidity.com/"], :root a[href^="http://trk.globwo.online/"], :root a[href^="https://random-affiliate.atimaze.com/"], :root a-ad, :root a[href^="https://offhandpump.com/"], :root a[href^="http://stickingrepute.com/"], :root #slashboxes > .deals-rail, :root a[href^="http://roadcontagion.com/"], :root a[href^="http://premonitioninventdisagree.com/"], :root a[href^="http://naggingirresponsible.com/"], :root a[href^="https://in.rabbtrk.com/"], :root a[href^="http://www.h4trck.com/"], :root a[href^="https://81ac.xyz/"], :root a[href^="http://guestblackmail.com/"], :root a[href^="http://cam4com.go2cloud.org/aff_c?"], :root a[href^="https://ads.betfair.com/redirect.aspx?"], :root [href^="https://www.mypatriotsupply.com/"] > img, :root a[href^="https://trk.softonixs.xyz/"], :root a[href^="http://dragnag.com/"], :root a[href^="http://dragfault.com/"], :root [data-advadstrackid], :root a[href^="http://muzzlematrix.com/"], :root a[href^="https://track.adform.net/"], :root a[href^="http://avthelkp.net/"], :root a[href^="https://a.medfoodhome.com/"], :root a[href^="https://engine.flixtrial.com/"], :root [data-type="ad-vertical"], :root [data-taboola-options], :root a[href^="http://annulmentequitycereals.com/"], :root a[href^="//startgaming.net/tienda/" i], :root a[href^="https://www.get-express-vpn.com/offer/"], :root a[href^="https://s.cant3am.com/"], :root a[href^="//s.st1net.com/splash.php"], :root a[href^="https://join.virtualtaboo.com/track/"], :root [id^="ad_sky"], :root a[href^="http://coefficienttolerategravel.com/"], :root a[href^="https://a.medfoodsafety.com/"], :root a[href^="//go.eabids.com/"], :root a[href^="//ejitsirdosha.net/"], :root a[href^=" https://www.friendlyduck.com/AF_"], :root a[href*="/jump/next.php?r="], :root [href^="https://ilovemyfreedoms.com/landing-"], :root a[href^="https://go.nordvpn.net/aff"] > img, :root .\[\&_\.gdprAdTransparencyCogWheelButton\]\:\!pjra-z-\[5\], :root [href^="http://clicks.totemcash.com/"], :root a[href^="https://ad.zanox.com/ppc/"] > img, :root a[href^="https://lone-pack.com/"], :root [data-d-ad-id], :root a[href*=".engine.adglare.net/"], :root a[href^="https://t.ajrkm3.com/"], :root [href^="https://aads.com/campaigns/"], :root a[href^="//stighoazon.com/"], :root [href^="https://www.profitablegatecpm.com/"], :root div[id^="lazyad-"], :root a[href^="http://com-1.pro/"], :root a[href*=".cfm?domain="][href*="&fp="], :root [data-ad-name], :root a[href^="https://loboclick.com/"], :root a[data-url^="https://vulpix.bet/?ref="], :root a[href^="https://ab.advertiserurl.com/aff/"], :root a[data-oburl^="https://paid.outbrain.com/network/redir?"], :root a[href^="https://go.xlivrdr.com"], :root [onclick^="location.href='https://1337x.vpnonly.site/"], :root [name^="google_ads_iframe"], :root [id^="section-ad-banner"], :root a[href^="https://www.goldenfrog.com/vyprvpn?offer_id="][href*="&aff_id="], :root a[href*="//jjgirls.com/sex/Chaturbate"], :root [id^="ad-wrap-"], :root [href^="https://zone.gotrackier.com/"], :root a[href^="http://sarcasmadvisor.com/"], :root [href^="https://www.restoro.com/"], :root [href^="https://www.targetingpartner.com/"], :root .section-subheader > .section-hotel-prices-header, :root [href^="https://www.hostg.xyz/"] > img, :root a[href^="http://adultfriendfinder.com/go/"], :root a[href^="https://fastestvpn.com/lifetime-special-deal?a_aid="], :root a[href^="https://tour.mrskin.com/"], :root [href^="https://www.brighteonstore.com/products/"] img, :root citrus-ad-wrapper, :root a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"], :root a[href^="https://go.grinsbest.com/"], :root a[href^="https://vo2.qrlsx.com/"], :root [href^="https://www.avantlink.com/click.php"] img, :root [href^="https://wct.link/click?"], :root div[data-adunit], :root app-large-ad, :root [href^="https://turtlebids.irauctions.com/"] img, :root div[id^="div-ads-"], :root [href^="https://rapidgator.net/article/premium/ref/"], :root [href^="https://join.girlsoutwest.com/"], :root a[href^="https://activate-game.com/"], :root .scroll-fixable.rail-right > .deals-rail, :root [data-wpas-zoneid], :root a[href^="https://track.aftrk3.com/"], :root [href^="https://join3.bannedsextapes.com"], :root a[href^="https://bodelen.com/"], :root a[href*=".g2afse.com/"], :root div[id^="adngin-"], :root [data-rc-widget], :root span[data-ez-ph-id], :root [href^="https://track.aftrk1.com/"], :root [href^="https://join.playboyplus.com/track/"], :root a[href^="https://go.xxxijmp.com"], :root [href^="https://istlnkcl.com/"], :root a[href^="https://tm-offers.gamingadult.com/"], :root [href^="https://charmingdatings.life/"], :root [href^="https://glersakr.com/"], :root a[href^="https://a.bestcontentfood.top/"], :root [href^="https://cpa.10kfreesilver.com/"], :root [data-id^="div-gpt-ad"], :root a[href^="https://tracker.loropartners.com/"], :root [href^="https://awbbjmp.com/"], :root div[ow-ad-unit-wrapper], :root a[data-href^="http://ads.trafficjunky.net/"], :root a[href^="http://partners.etoro.com/"], :root a[href^="https://www.friendlyduck.com/AF_"], :root [href^="https://ad1.adfarm1.adition.com/"], :root a[href^="https://bngprm.com/"], :root [href^="https://shiftnetwork.infusionsoft.com/go/"] > img, :root a[href^="https://go.strpjmp.com/"], :root a[href^="https://go.bushheel.com/"], :root a[href^="https://ctjdwm.com/"], :root a[href^="https://camfapr.com/landing/click/"], :root div[data-ad-wrapper], :root .gnt_em_vp_c[data-g-s="vp_dk"], :root [href="//sexcams.plus/"], :root [href^="http://www.mypillow.com/"] > img, :root a[href^="https://promerycergerful.com/"], :root #kt_player > a[target="_blank"], :root a[href^="http://bongacams.com/track?"], :root [href^="http://mypillow.com/"] > img, :root [href="https://ourgoldguy.com/contact/"] img, :root a[href^="https://wittered-mainging.com/"], :root #teaser3[style="width: 100%;text-align: center;display: scroll;position:fixed;bottom: 0;margin: 0 auto;z-index: 103;"], :root [href="https://www.masstortfinancing.com/"] > img, :root .ob_container .item-container-obpd, :root [id^="div-gpt-ad"], :root a[href^="https://go.rmhfrtnd.com/"], :root [href="https://jdrucker.com/gold"] > img, :root [href^="https://go.xlrdr.com"], :root [data-testid^="taboola-"], :root a[href^="https://track.1234sd123.com/"], :root zeus-ad, :root [data-testid="prism-ad-wrapper"], :root [href^="https://ad.admitad.com/"], :root [href^="https://mypillow.com/"] > img, :root [data-testid="ad_testID"], :root [href^="https://antiagingbed.com/discount/"] > img, :root a[href*=".adsrv.eacdn.com/"], :root [href^="https://optimizedelite.com/"] > img, :root [data-name="adaptiveConstructorAd"], :root a[href^="https://go.cmtaffiliates.com/"], :root [data-testid="adBanner-wrapper"], :root [href^="https://mylead.global/stl/"] > img, :root [href^="https://mypatriotsupply.com/"] > img, :root a[href^="https://go.hpyjmp.com"], :root iframe[scrolling="no"][sandbox*="allow-popups allow-modals"][style^="width: 100%; height: 100%; border: none;"], :root [href^="https://mystore.com/"] > img, :root a[href^="https://believessway.com/"], :root a[href^="https://witnessjacket.com/"], :root [data-mobile-ad-id], :root [class^="amp-ad-"], :root a[href^="http://handgripvegetationhols.com/"], :root a[href^="https://go.bbrdbr.com"], :root a[href^="https://fc.lc/ref/"], :root [data-adshim], :root topadblock, :root a[href^="//s.zlinkd.com/"], :root #teaser1[style^="width:autopx;"], :root [href^="https://www.cloudways.com/en/?id"], :root [data-asg-ins], :root a[href^="https://gamingadlt.com/?offer="], :root [data-desktop-ad-id], :root a[href^="https://www.liquidfire.mobi/"], :root .grid > .container > #aside-promotion, :root DFP-AD, :root [id^="ad_slider"], :root [data-adbridg-ad-class], :root #teaser3[style^="width:autopx;"], :root [data-adblockkey], :root [data-block-type="ad"], :root [data-ad-width], :root [onclick*="content.ad/"], :root [data-ad-manager-id], :root AMP-AD, :root [data-ad-cls], :root [data-ez-name], :root a[href^="https://go.mnaspm.com/"], :root a[href^="https://service.bv-aff-trx.com/"], :root a[href^="https://6-partner.com/"], :root [class^="s2nPlayer"], :root a[href^="https://traffdaq.com/"], :root [data-testid="commercial-label-taboola"], :root [class^="div-gpt-ad"], :root a[href^="http://tc.tradetracker.net/"] > img, :root a[href^="https://www8.smartadserver.com/"], :root a[href^="https://pb-imc.com/"], :root [href^="https://affiliate.fastcomet.com/"] > img, :root [class^="adDisplay-module"], :root [data-freestar-ad][id], :root AD-SLOT, :root a[href^="https://www.googleadservices.com/pagead/aclk?"] > img, :root [data-ad-module], :root a[href^="https://go.skinstrip.net"][href*="?campaignId="], :root #teaser2[style^="width:autopx;"], :root a[href^="https://ngineet.cfd/"], :root [data-revive-zoneid], :root a[href^="https://losingoldfry.com/"], :root div[id^="div-gpt-"], :root a[href^="https://gml-grp.com/"], :root .ob_dual_right > .ob_ads_header ~ .odb_div, :root a[href^="https://cam4com.go2cloud.org/"], :root a[href^="http://li.blogtrottr.com/click?"], :root a[href^="https://t.ajump1.com/"], :root a[href^="https://go.xxxjmp.com"], :root #leader-companion > a[href], :root #target.pk-page-ready #pk-status-message { display: none !important; }</style><link id="yui__dyn_0" type="text/css" rel="stylesheet" href="/yui2.9.0/menu/assets/skins/sam/menu.css" charset="utf-8"><link id="yui__dyn_1" type="text/css" rel="stylesheet" href="/yui2.9.0/carousel/assets/skins/sam/carousel.css" charset="utf-8"><script id="yui__dyn_2" type="text/javascript" src="/yui2.9.0/cookie/cookie-min.js" charset="utf-8"></script><script id="yui__dyn_3" type="text/javascript" src="/yui2.9.0/utilities/utilities.js" charset="utf-8"></script><script id="yui__dyn_0" type="text/javascript" src="/yui2.9.0/container/container-min.js" charset="utf-8"></script><script id="yui__dyn_1" type="text/javascript" src="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/utils.js" charset="utf-8"></script><script src="https://www.recaptcha.net/recaptcha/api.js?render=6Lcq04AUAAAAAGSiB3-3J5ZSQZSTARc4GfabojnP&amp;hl=en"></script><script id="yui__dyn_2" type="text/javascript" src="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/flowdialog.js" charset="utf-8"></script><script id="yui__dyn_3" type="text/javascript" src="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/account/login.js" charset="utf-8"></script><script id="yui__dyn_4" type="text/javascript" src="/yui2.9.0/menu/menu-min.js" charset="utf-8"></script><script id="yui__dyn_5" type="text/javascript" src="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/marketing/marketing.js" charset="utf-8"></script><script id="yui__dyn_6" type="text/javascript" src="/yui2.9.0/carousel/carousel-min.js" charset="utf-8"></script><script id="yui__dyn_7" type="text/javascript" src="/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/account/profile.js" charset="utf-8"></script></head>
          <body class="ixl-skin practice-jsp flush-footer snow-capped-mountain responsive edition-us>" id="yui_3_18_1_1_1741205961862_628">

          <link rel="stylesheet" href="/frontend/header/header.0e433e8afd1e61012fed.bundle.css">

          <link rel="stylesheet" href="/dv3/SSgqFPnxb3k-ioRg-AIacjbVIO0/yui3/common/common-css-cta-btn-min.css">

            <link rel="stylesheet" href="/combo/dv3/gY9w33cEP7-89Rcp9GEOLehnMVw/yui3/webfont/?modules=webfont-css-opensans-min.css,webfont-css-roboto-min.css,webfont-css-robotoslab-min.css">

          <script>
            window.__SSO_CLIENT_ID__ = '116858415990-0ib16tvd7bg1sn25f7m3641vsaf2tfkn.apps.googleusercontent.com';
          </script>

            <a href="#maincontent" class="skip-to-main-content js-skip-to-main-content" data-cy="skip-to-main-content">
              SKIP TO CONTENT
            </a>

          <div id="banners-wrapper" class="banners-wrapper">

            <div id="banner-carousel" class="banner-carousel"></div>
          </div>

          <style>
            .banners-placeholder {
              visibility: hidden;
              box-sizing: border-box;
              font: 13px/18px Open Sans, sans-serif;
              margin: auto;
              display: flex;
              flex-direction: column;
              text-align: center;
              padding: 7px 67px 7px 42px;

              &.single-banner-sent {
                padding-left: 20px;
              }
            }

            @media screen and (min-width: 800px) {
              .banners-placeholder {
                padding: 15px 67px 15px 42px;
                text-align: left;
                flex-direction: row;
              }

              .banners-placeholder-cta {
                min-width: 140px;
              }
            }
          </style>

          <div class="site-nav-header add-to-zindex-calculation site-nav-2022 consolidated with-sub-nav" data-has-user-nav-and-quick-login="true">
            <input type="hidden" id="current_nav_category" value="learning">

            <input type="checkbox" id="header-menu-state">

            <input type="checkbox" id="mobile-search-state">
            <div class="background-anchor">

                <div class="sub-nav-background"></div>

            </div>
            <div class="category-menu-mask js-category-menu-mask" style="height: 0px;"></div>

            <div id="hd" class="site-nav-header-container">
              <div class="box-site-nav-func">
                <div class="box-site-nav-func-left">
                  <a class="site-nav-ixl-logo" href="/" id="hd-logo" role="banner">IXL Learning</a>
                </div>

                <form id="searchBar" data-cy="search-form" class="skill-search-box crisp-form" method="get" action="/search"><div class="box-search-input-btn "><input type="search" autocomplete="off" class="skill-search-input" maxlength="200" name="q" placeholder="Search topics, skills, and more" aria-label="Search topics, skills, and more" data-cy="search-input" value=""><input type="hidden" name="resultPageOrigin" value="searchbar"><div class="skill-search-icon"></div><button type="submit" class="skill-search-button site-nav-header-button" aria-label="Search topics, skills, and more"></button></div></form>

                <div class="box-site-nav-func-right">

                  <div class="mobile-search-state-label-container">
                    <button id="mobile-search-toggle-btn" class="mobile-search-state-label" aria-controls="searchBar" aria-haspopup="true">
                      <img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/icon-mag-glass-white.svg" alt="Search for skill">
                    </button>
                  </div>

                      <div id="student-live-messages-container-hamburger" class="student-live-messages-container" data-cy="student-live-messages-container"></div>

                      <button id="header-menu-toggle-btn" class="header-menu-state-label" aria-label="Open navigation menu" aria-controls="mobile-nav-content" aria-haspopup="true" data-cy="header-menu-toggle-btn"></button>

                </div>
              </div>

          <div id="mobile-nav-content" class="box-site-nav-content">
            <div class="visible-content">

            <div class="site-nav-ixl-logo-container">
              <a class="site-nav-ixl-logo" href="/" id="hd-logo" role="banner">IXL Learning</a>
            </div>

            <nav id="ixl-nav-categories" class="box-site-nav-categories has-site-nav-category-selected" role="navigation" data-cy="ixl-nav-categories">

          <ul class="box-site-nav-categories-left category-menus" data-cy="category-menu-list">

                <li class="ixl-nav-category-entry

                  no-category-menu" data-cy="my-ixl-category-entry">
                  <a data-cy="site-nav-category" class="site-nav-category

                      " href="/dashboard" data-google-analytics="Main navigation.Category clicked.My IXL">My IXL</a>

                </li>

                <li class="ixl-nav-category-entry

                  " data-cy="learning-category-entry">
                  <a data-cy="site-nav-category" class="site-nav-category site-nav-category-selected" href="/recommendations" data-google-analytics="Main navigation.Category clicked.Learning">Learning</a>

                    <nav class="category-menu hover-active" style="left: -345.5px; width: 1200px;">
                      <ul class="category-menu-list">

                              <div class="grid-item x-0 y-0" data-cy="category-menu-column">

                                  <li class="menu-list-item" data-cy="category-menu-item">
                                    <div class="subcategory-header">
                                      <a href="/math" class="subcategory-header-link category-menu-link category-menu-subcat-math" data-google-analytics="Main navigation.Header in hover menu clicked.Learning - Math" data-cy="category-menu-subcategory-header-link">
                                        <svg aria-hidden="true" class="subcategory-icon" width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.34502 17.8062C9.94256 17.6134 19.0496 14.5511 19.0496 14.5511C19.0496 14.5511 11.359 10.3532 11.261 10.3829C9.40807 10.9511 1.27571 12.8535 1.08301 12.8535L9.34502 17.8062Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5407 0.326042L9.81481 0.00167847L10.0583 0.348429C10.0597 0.350447 10.0612 0.352482 10.0626 0.354534L20.1478 14.7174L9.47294 18.146C9.46815 18.1476 9.4633 18.1492 9.45841 18.1506L9.3256 18.1933L9.20427 18.1223C9.20063 18.1203 9.19703 18.1182 9.19348 18.116L0.118164 12.808L0.341253 12.5123L0.735778 11.9893L1.77593 10.6107L4.93261 6.4271C7.80505 2.62064 9.34189 0.585122 9.52164 0.350451C9.52762 0.342011 9.53398 0.333866 9.5407 0.326042ZM9.43622 1.55449C8.67112 2.56733 7.23777 4.46612 5.46051 6.82129L2.30186 11.0075L1.26172 12.3861L1.18249 12.4911L9.21415 10.5749L9.43622 1.55449ZM9.19738 11.2562L1.7911 13.0233L9.04936 17.2685L9.19738 11.2562ZM9.70566 17.3793L9.86029 11.098L11.3929 10.7324L18.5818 14.5284L9.70566 17.3793ZM9.87707 10.4167L10.0565 3.12804C10.109 3.14776 10.1672 3.15433 10.2265 3.14441C10.4059 3.11439 10.527 2.94459 10.497 2.76515L10.3552 1.91772L18.7489 13.8716L11.7358 10.1684L11.5517 9.0681C11.5217 8.88867 11.3519 8.76755 11.1724 8.79758C10.993 8.8276 10.8719 8.9974 10.9019 9.17684L11.0621 10.134L9.87707 10.4167ZM11.3408 7.80751L11.1298 6.54692C11.0998 6.36749 10.93 6.24637 10.7506 6.2764C10.5711 6.30642 10.45 6.47622 10.48 6.65566L10.691 7.91625C10.721 8.09568 10.8908 8.2168 11.0702 8.18677C11.2497 8.15675 11.3708 7.98695 11.3408 7.80751ZM10.7079 4.02574L10.9189 5.28633C10.9489 5.46577 10.8278 5.63557 10.6484 5.66559C10.4689 5.69562 10.2991 5.5745 10.2691 5.39507L10.0582 4.13448C10.0281 3.95504 10.1492 3.78524 10.3287 3.75521C10.5081 3.72519 10.6779 3.84631 10.7079 4.02574Z"></path>
          </svg>

                                        <span class="subcategory-header-label"><span data-cy="category-menu-subcategory-header-link-label">Math</span></span>
                                      </a>
                                    </div>
                                    <ul class="subcategory-list horizontal">

                                        <li class="subcategory-item">
                                          <a href="/math" class="subcategory-item-link category-menu-link category-menu-page-math-skills" data-google-analytics="Main navigation.Link in hover menu clicked.Math - Skills" data-cy="category-menu-subcategory-item-link">
                                            Skills
                                          </a>
                                        </li>

                                          <img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/ellipse.svg" alt="" class="ellipse">

                                        <li class="subcategory-item">
                                          <a href="/math/lessons" class="subcategory-item-link category-menu-link category-menu-page-math-lessons" data-google-analytics="Main navigation.Link in hover menu clicked.Math - Lessons" data-cy="category-menu-subcategory-item-link">
                                            Lessons
                                          </a>
                                        </li>

                                          <img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/ellipse.svg" alt="" class="ellipse">

                                        <li class="subcategory-item">
                                          <a href="/math/videos" class="subcategory-item-link category-menu-link category-menu-page-math-videos" data-google-analytics="Main navigation.Link in hover menu clicked.Math - Videos" data-cy="category-menu-subcategory-item-link">
                                            Videos
                                          </a>
                                        </li>

                                          <img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/ellipse.svg" alt="" class="ellipse">

                                        <li class="subcategory-item">
                                          <a href="/math/games" class="subcategory-item-link category-menu-link category-menu-page-math-games" data-google-analytics="Main navigation.Link in hover menu clicked.Math - Games" data-cy="category-menu-subcategory-item-link">
                                            Games
                                          </a>
                                        </li>

                                    </ul>
                                  </li>

                                  <li class="menu-list-item" data-cy="category-menu-item">
                                    <div class="subcategory-header">
                                      <a href="/ela" class="subcategory-header-link category-menu-link category-menu-subcat-ela" data-google-analytics="Main navigation.Header in hover menu clicked.Learning - Language arts" data-cy="category-menu-subcategory-header-link">
                                        <svg aria-hidden="true" class="subcategory-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M16.2289 5.28529V4.39341H13.4371C13.1135 4.39341 12.8491 4.70882 12.8491 5.09753V12.3932C12.8491 12.7819 13.1135 13.0973 13.4371 13.0973C13.7624 13.0973 14.0251 13.4119 14.0251 13.8006V15.3348C14.0251 15.7235 14.2887 16.0381 14.6131 16.0381H17.8446C18.1691 16.0381 18.4326 15.7235 18.4326 15.3348V5.98859C18.4326 5.59988 18.1691 5.28529 17.8446 5.28529H16.2289Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71714 3.86314V11.4263C4.71714 11.5915 4.84709 11.7274 5.01209 11.7349C7.97259 11.8679 9.54651 13.0898 9.87322 14.8762C9.7533 14.7791 9.63279 14.6978 9.50043 14.6247C8.92506 14.3063 8.22317 14.2405 7.43783 14.3671C7.14683 14.4136 6.91482 14.4673 6.4215 14.594C5.98865 14.7051 5.80181 14.7496 5.56973 14.7924C4.74153 14.9441 3.9076 14.9365 3.12829 14.7643V3.86314H4.71714ZM4.71714 3.23396H2.81371H2.79917C2.63332 3.23396 2.49887 3.37481 2.49887 3.54855L2.49912 3.56143V4.28989H1.86574C1.35518 4.28989 0.940918 4.70415 0.940918 5.21471V16.2311C0.940918 16.7416 1.35515 17.1551 1.86574 17.1551H8.27822C8.35721 17.6708 8.77951 18.0412 9.28739 18.0412H11.058C11.5765 18.0412 12.0058 17.6551 12.0739 17.1551H18.4788C18.99 17.1551 19.4044 16.7418 19.4044 16.2311V5.21471C19.4044 4.70396 18.99 4.28989 18.4788 4.28989H18.0901V3.44075C18.0901 3.42757 18.0893 3.41458 18.0877 3.40182C18.0887 3.37174 18.0853 3.34101 18.0771 3.31044C18.0322 3.1426 17.8597 3.04294 17.6919 3.08785C16.8466 3.31403 15.9281 3.33984 15.017 3.17212C14.7835 3.12943 14.596 3.08484 14.1727 2.97633C13.6694 2.84733 13.4396 2.79412 13.1485 2.74758C12.3636 2.62104 11.6617 2.68692 11.0862 3.00531C10.8202 3.15233 10.602 3.33224 10.3404 3.60742C9.41583 1.91125 7.16852 0.137718 5.02596 0.137718C4.8554 0.137718 4.71714 0.275983 4.71714 0.446542V3.23396ZM10.5554 4.30681V15.0136C10.7301 14.8519 10.8959 14.7299 11.0862 14.6247C11.6617 14.3063 12.3636 14.2405 13.1485 14.367C13.4399 14.4136 13.6719 14.4673 14.1769 14.597C14.5981 14.7051 14.7849 14.7496 15.0167 14.7923C15.8935 14.9529 16.7148 14.963 17.4609 14.8032V3.78711C16.6363 3.95045 15.7653 3.94961 14.9034 3.79097C14.6511 3.74482 14.454 3.69796 14.0089 3.58387C13.5318 3.46158 13.3148 3.41134 13.0488 3.3688C12.3903 3.26264 11.8248 3.31572 11.3907 3.5559C11.1246 3.70295 10.9018 3.91087 10.5595 4.30216L10.5554 4.30681ZM17.8342 15.3608C16.9354 15.5975 15.9495 15.6028 14.903 15.4111C14.6519 15.3649 14.4557 15.3181 14.0088 15.2034C13.5341 15.0815 13.3151 15.0308 13.0488 14.9882C12.3903 14.8821 11.8248 14.9351 11.3907 15.1753C11.1246 15.3224 10.9018 15.5303 10.5595 15.9216C10.4904 16.0006 10.3905 16.0367 10.2934 16.0277C10.1963 16.0367 10.0963 16.0006 10.0272 15.9216C9.68498 15.5303 9.4621 15.3224 9.19595 15.1753C8.76193 14.9351 8.19648 14.8821 7.53756 14.9883C7.27163 15.0308 7.05261 15.0815 6.56633 15.2064C6.13105 15.3181 5.9348 15.3649 5.6834 15.4112C4.68526 15.594 3.67582 15.5661 2.74062 15.3173C2.60212 15.2844 2.49912 15.1598 2.49912 15.0113V4.91907H1.86574C1.70266 4.91907 1.57009 5.05163 1.57009 5.21471V16.2311C1.57009 16.3939 1.70237 16.5259 1.86574 16.5259H8.60056C8.79117 16.5259 8.93799 16.6941 8.91228 16.8829L8.89127 17.0159C8.89127 17.2341 9.06913 17.412 9.28739 17.412H11.058C11.2762 17.412 11.4541 17.2341 11.4568 16.9749L11.4798 16.7995C11.5004 16.6429 11.6338 16.5259 11.7917 16.5259H18.4788C18.6429 16.5259 18.7753 16.3939 18.7753 16.2311V5.21471C18.7753 5.05157 18.6426 4.91907 18.4788 4.91907L18.0901 4.8984V15.0517C18.0901 15.2054 17.9799 15.3333 17.8342 15.3608ZM9.93772 13.3573V4.18445C9.26793 2.68236 7.25085 0.943558 5.33478 0.769578V11.1349C7.61639 11.2968 9.15179 12.1186 9.93772 13.3573ZM12.7824 6.25416C12.4232 6.16227 12.0258 6.22362 11.7131 6.41929C11.5904 6.49599 11.4288 6.45877 11.3521 6.33615C11.2754 6.21353 11.3127 6.05195 11.4353 5.97525C11.8697 5.70349 12.4144 5.61939 12.9134 5.74703C13.1019 5.79615 13.2427 5.85495 13.5423 5.9972C13.6634 6.05467 13.7174 6.07975 13.7835 6.10826C14.4338 6.38827 15.1734 6.46189 15.8676 6.31571C16.0091 6.28591 16.148 6.37648 16.1778 6.51801C16.2076 6.65954 16.1171 6.79843 15.9755 6.82824C15.1757 6.99667 14.3259 6.91209 13.5762 6.58924C13.5022 6.55735 13.4444 6.5305 13.3116 6.46747C13.0475 6.34211 12.9274 6.29195 12.7824 6.25416ZM11.7372 9.28921C12.0501 9.09349 12.4472 9.03233 12.8052 9.12475C12.953 9.16276 13.0727 9.21264 13.3413 9.34007C13.4698 9.40102 13.527 9.42752 13.6003 9.45916C14.3501 9.782 15.1998 9.86661 15.9989 9.69814C16.1404 9.66831 16.231 9.52939 16.2011 9.38787C16.1713 9.24635 16.0324 9.15581 15.8909 9.18564C15.1975 9.33181 14.4579 9.25817 13.8076 8.97818C13.7421 8.94989 13.6887 8.92514 13.5681 8.86797C13.267 8.72512 13.1266 8.66659 12.9358 8.61755C12.4391 8.48929 11.8942 8.57321 11.4594 8.84516C11.3368 8.92187 11.2996 9.08345 11.3763 9.20607C11.453 9.32869 11.6146 9.36591 11.7372 9.28921ZM12.782 12.1366C12.4232 12.0441 12.026 12.1053 11.7131 12.301C11.5904 12.3777 11.4288 12.3405 11.3521 12.2179C11.2754 12.0953 11.3127 11.9337 11.4353 11.857C11.8701 11.585 12.4149 11.5011 12.9127 11.6294C13.1016 11.6781 13.2434 11.7372 13.5362 11.876L13.5441 11.8798C13.6641 11.9367 13.7179 11.9617 13.7835 11.99C14.4338 12.27 15.1734 12.3436 15.8676 12.1974C16.0091 12.1676 16.148 12.2582 16.1778 12.3997C16.2076 12.5413 16.1171 12.6802 15.9755 12.71C15.1757 12.8784 14.3259 12.7938 13.5762 12.471C13.5028 12.4393 13.4452 12.4126 13.3195 12.353L13.3116 12.3492C13.0487 12.2245 12.928 12.1742 12.782 12.1366Z"></path>
          </svg>

                                        <span class="subcategory-header-label"><span data-cy="category-menu-subcategory-header-link-label">Language arts</span></span>
                                      </a>
                                    </div>
                                    <ul class="subcategory-list horizontal">

                                        <li class="subcategory-item">
                                          <a href="/ela" class="subcategory-item-link category-menu-link category-menu-page-ela-skills" data-google-analytics="Main navigation.Link in hover menu clicked.Language arts - Skills" data-cy="category-menu-subcategory-item-link">
                                            Skills
                                          </a>
                                        </li>

                                          <img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/ellipse.svg" alt="" class="ellipse">

                                        <li class="subcategory-item">
                                          <a href="/ela/videos" class="subcategory-item-link category-menu-link category-menu-page-ela-videos" data-google-analytics="Main navigation.Link in hover menu clicked.Language arts - Videos" data-cy="category-menu-subcategory-item-link">
                                            Videos
                                          </a>
                                        </li>

                                          <img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/ellipse.svg" alt="" class="ellipse">

                                        <li class="subcategory-item">
                                          <a href="/ela/games" class="subcategory-item-link category-menu-link category-menu-page-ela-games" data-google-analytics="Main navigation.Link in hover menu clicked.Language arts - Games" data-cy="category-menu-subcategory-item-link">
                                            Games
                                          </a>
                                        </li>

                                    </ul>
                                  </li>

                              </div>

                              <div class="grid-item x-1 y-0" data-cy="category-menu-column">

                                  <li class="menu-list-item" data-cy="category-menu-item">
                                    <div class="subcategory-header">
                                      <a href="/recommendations" class="subcategory-header-link category-menu-link category-menu-subcat-recommendations" data-google-analytics="Main navigation.Header in hover menu clicked.Learning - Recommendations" data-cy="category-menu-subcategory-header-link">
                                        <svg aria-hidden="true" class="subcategory-icon" width="21" height="18" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12.6455 14.6454H2.91876C2.86688 14.6454 2.81829 14.6207 2.7837 14.577L0.672171 12.9399C0.61123 12.8625 0.61123 12.7455 0.672171 12.6689L2.7837 11.0309C2.81829 10.9881 2.86688 10.9626 2.91876 10.9626H12.6117"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6698 1.63701C11.6698 2.4034 11.1431 3.04649 10.4321 3.22446V4.09113H17.768C17.8612 4.09113 17.9505 4.12873 18.0156 4.19541L20.1642 6.39671C20.2968 6.53257 20.2951 6.74994 20.1604 6.88372L18.0118 9.01749C17.947 9.08184 17.8594 9.11795 17.768 9.11795H10.4321V9.72786H12.6292C12.8202 9.72786 12.9751 9.88271 12.9751 10.0737V14.4648C12.9751 14.6558 12.8202 14.8107 12.6292 14.8107H10.4316L10.4241 17.294H15.2373C15.4284 17.294 15.5832 17.4489 15.5832 17.6399C15.5832 17.8309 15.4284 17.9858 15.2373 17.9858H5.32699C5.13596 17.9858 4.9811 17.8309 4.9811 17.6399C4.9811 17.4489 5.13596 17.294 5.32699 17.294H9.73235L9.73986 14.8107H2.65875C2.56738 14.8107 2.47972 14.7745 2.41491 14.7101L0.220208 12.5286C0.0847606 12.3939 0.0840626 12.175 0.218649 12.0395L2.41335 9.82999C2.47829 9.76462 2.56662 9.72786 2.65875 9.72786H9.74036V9.11795H6.93287C6.74184 9.11795 6.58699 8.96309 6.58699 8.77207V4.43701C6.58699 4.24598 6.74184 4.09113 6.93287 4.09113H9.74036V3.24727C8.97559 3.10937 8.39628 2.44137 8.39628 1.63701C8.39628 0.732556 9.12868 -0.000167847 10.0335 -0.000167847C10.937 -0.000167847 11.6698 0.732968 11.6698 1.63701ZM10.0335 0.691597C10.5549 0.691597 10.978 1.11495 10.978 1.63701C10.978 2.15884 10.5551 2.5816 10.0335 2.5816C9.51058 2.5816 9.08805 2.15925 9.08805 1.63701C9.08805 1.11454 9.5108 0.691597 10.0335 0.691597ZM19.4296 6.63451L17.6255 8.42618H15.5736L17.6213 6.56634L15.5839 4.78289H17.6223L19.4296 6.63451ZM14.8398 8.15813C14.7615 8.22927 14.7233 8.32812 14.7267 8.42618H7.27875V4.78289H14.7276C14.7239 4.88332 14.7639 4.98448 14.8454 5.05583L16.5819 6.57587L14.8398 8.15813ZM12.2833 10.4196V14.1189H5.6147C5.61232 14.0278 5.57419 13.9379 5.50141 13.8718L3.72964 12.2635L5.49318 10.7522C5.59212 10.6674 5.6314 10.5388 5.60691 10.4196H12.2833ZM4.81815 10.4196L2.68398 12.2485L4.74443 14.1189H2.80141L0.953109 12.2817L2.8027 10.4196H4.81815ZM2.24699 17.294H3.05322C3.24425 17.294 3.39911 17.4489 3.39911 17.6399C3.39911 17.8309 3.24425 17.9858 3.05322 17.9858H2.24699C2.05596 17.9858 1.9011 17.8309 1.9011 17.6399C1.9011 17.4489 2.05596 17.294 2.24699 17.294Z"></path>
          </svg>

                                        <span class="subcategory-header-label"><span data-cy="category-menu-subcategory-header-link-label">Recommendations</span></span>
                                      </a>
                                    </div>
                                    <ul class="subcategory-list">

                                        <li class="subcategory-item">
                                          <a href="/recommendations" class="subcategory-item-link category-menu-link category-menu-page-recommendations-wall" data-google-analytics="Main navigation.Link in hover menu clicked.Recommendations - Recommendations wall" data-cy="category-menu-subcategory-item-link">
                                            Recommendations wall
                                          </a>
                                        </li>

                                    </ul>
                                  </li>

                              </div>

                              <div class="grid-item x-2 y-0" data-cy="category-menu-column">

                                  <li class="menu-list-item" data-cy="category-menu-item">
                                    <div class="subcategory-header">
                                      <a href="/skill-plans" class="subcategory-header-link category-menu-link category-menu-subcat-skill-plans" data-google-analytics="Main navigation.Header in hover menu clicked.Learning - Skill plans" data-cy="category-menu-subcategory-header-link">
                                        <svg aria-hidden="true" class="subcategory-icon" width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M13.5014 16.7859H13.3934C12.4237 16.7827 11.6384 15.9974 11.6353 15.0277V6.948C11.6384 5.97845 12.4238 5.19337 13.3934 5.19059H13.5014C14.4708 5.19338 15.256 5.97857 15.2588 6.948V15.0277C15.256 15.9973 14.4709 16.7827 13.5014 16.7859Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.59536 0.709472C4.77777 0.923166 4.89676 1.1734 4.95565 1.44146C5.90259 1.10649 6.90209 1.18961 7.63612 1.73969L7.76049 1.8396H7.77047L7.89109 1.95998C8.3786 2.44653 8.61189 3.09487 8.61013 3.78095H16.7572C17.158 3.78095 17.4826 4.1228 17.4834 4.54486V17.4707C17.4834 17.8927 17.1587 18.2353 16.7579 18.2353H5.16336C4.7626 18.2353 4.43793 17.8927 4.43793 17.4707V7.47459C3.91481 7.39627 3.43168 7.17081 3.04906 6.78895C2.41322 6.15583 2.20948 5.24686 2.39515 4.33753C1.96891 4.31453 1.56822 4.15476 1.25954 3.84655C0.494348 3.08346 0.642149 1.75745 1.52579 0.876234C2.37352 0.0324977 3.62964 -0.138522 4.40596 0.520591L4.50443 0.611283L4.59536 0.709472ZM4.23774 3.58131C4.1205 3.69823 3.9954 3.80224 3.86481 3.89292L4.16732 4.1944C4.37616 4.40146 4.71348 4.40146 4.92233 4.1944L5.03948 4.07683C5.24712 3.86856 5.24712 3.53289 5.04023 3.32537L4.69396 2.97982C4.57512 3.19366 4.4225 3.39724 4.23774 3.58131ZM3.63127 6.20812C3.18987 5.76861 3.05713 5.09817 3.22129 4.41265L3.58594 4.77606C4.08553 5.27139 4.8733 5.30053 5.40616 4.86409L5.50468 4.77508L5.62354 4.65583C6.15049 4.12726 6.15049 3.27419 5.6235 2.74559L5.12952 2.25263C5.94102 1.9309 6.78678 2.02047 7.30782 2.54049L7.33619 2.5688L7.41981 2.66435C8.05412 3.453 7.85793 4.81105 6.88253 5.78377C5.85464 6.80884 4.39504 6.97038 3.63127 6.20812ZM5.1235 17.4707V7.4953C5.82095 7.43741 6.54158 7.14608 7.15942 6.64062L8.16091 7.63937L8.74324 7.05864L7.74177 6.05992C8.1342 5.58303 8.39799 5.04494 8.52419 4.50367H16.7572C16.7789 4.50367 16.7963 4.52246 16.7963 4.54486V17.4707C16.7963 17.4945 16.7789 17.5126 16.7572 17.5126H5.16263C5.14162 17.5126 5.1235 17.4945 5.1235 17.4707ZM6.32076 11.5613C6.48149 11.4009 6.74221 11.4008 6.90308 11.561L7.45765 12.1136L8.85736 10.7178C9.01816 10.5574 9.27888 10.5574 9.43968 10.7178C9.60048 10.8781 9.60048 11.1381 9.43968 11.2985L7.4579 13.2748L6.32101 12.142C6.16014 11.9817 6.16002 11.7217 6.32076 11.5613ZM6.61205 9.56269H8.06146V8.83997H6.61205V9.56269ZM15.3085 9.56269H10.2356V8.83997H15.3085V9.56269ZM10.2356 12.4536H15.3085V11.7308H10.2356V12.4536ZM15.3085 15.3444H10.2356V14.6217H15.3085V15.3444ZM6.61205 15.3444H8.06146V14.6217H6.61205V15.3444ZM3.84534 1.12462L3.92229 1.19219C4.33355 1.60181 4.2427 2.41549 3.65556 3.00044C3.06841 3.58598 2.25318 3.67652 1.84204 3.266C1.43045 2.85554 1.52108 2.04238 2.10783 1.45725C2.66102 0.906659 3.41587 0.793918 3.84534 1.12462Z"></path>
          </svg>

                                        <span class="subcategory-header-label"><span data-cy="category-menu-subcategory-header-link-label">Skill plans</span></span>
                                      </a>
                                    </div>
                                    <ul class="subcategory-list">

                                        <li class="subcategory-item">
                                          <a href="/skill-plans#spotlight-skill-plans" class="subcategory-item-link category-menu-link category-menu-page-ixl-plans" data-google-analytics="Main navigation.Link in hover menu clicked.Skill plans - IXL plans" data-cy="category-menu-subcategory-item-link">
                                            IXL plans
                                          </a>
                                        </li>

                                        <li class="subcategory-item">
                                          <a href="/skill-plans#standards-skill-plans" class="subcategory-item-link category-menu-link category-menu-page-region-standards" data-google-analytics="Main navigation.Link in hover menu clicked.Skill plans - ${stateText}" data-cy="category-menu-subcategory-item-link">
                                            ${stateText}
                                          </a>
                                        </li>

                                        <li class="subcategory-item">
                                          <a href="/skill-plans#textbook-skill-plans" class="subcategory-item-link category-menu-link category-menu-page-textbooks" data-google-analytics="Main navigation.Link in hover menu clicked.Skill plans - Textbooks" data-cy="category-menu-subcategory-item-link">
                                            Textbooks
                                          </a>
                                        </li>

                                        <li class="subcategory-item">
                                          <a href="/skill-plans#test-preparation-skill-plans" class="subcategory-item-link category-menu-link category-menu-page-test-prep" data-google-analytics="Main navigation.Link in hover menu clicked.Skill plans - Test prep" data-cy="category-menu-subcategory-item-link">
                                            Test prep
                                          </a>
                                        </li>

                                    </ul>
                                  </li>

                              </div>

                              <div class="grid-item x-3 y-0" data-cy="category-menu-column">

                                  <li class="menu-list-item" data-cy="category-menu-item">
                                    <div class="subcategory-header">
                                      <a href="/awards" class="subcategory-header-link category-menu-link category-menu-subcat-awards-educator-and-student" data-google-analytics="Main navigation.Header in hover menu clicked.Learning - Awards" data-cy="category-menu-subcategory-header-link">
                                        <svg aria-hidden="true" class="subcategory-icon" width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M6.57888 7.34208C7.41312 6.73926 8.87818 7.75549 9.47029 8.38385C10.0624 9.0122 10.3729 9.9922 9.97677 10.7597C9.75441 11.1913 5.127 15.1401 4.11653 15.7849C3.49888 16.1777 2.73959 15.5584 3.01135 14.8782C4.049 12.2898 6.2643 7.6262 6.57888 7.34208Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5871 2.93802C11.3985 2.93802 12.0563 2.28052 12.0563 1.46884C12.0563 0.657735 11.3982 -0.000335693 10.5871 -0.000335693C9.77591 -0.000335693 9.1171 0.657818 9.1171 1.46884C9.1171 2.28044 9.77566 2.93802 10.5871 2.93802ZM1.03713 16.4368C1.06633 16.3611 1.12582 16.2078 1.2094 15.9933C1.34865 15.636 1.50453 15.2379 1.6733 14.8091C2.15555 13.584 2.64456 12.3589 3.11052 11.2152C3.17147 11.0656 3.23171 10.9182 3.29118 10.773C4.46756 7.903 5.21975 6.22398 5.52639 5.91693L5.79503 5.6483C6.07994 5.36379 6.54122 5.32839 7.1106 5.4947C7.78068 3.66441 7.68913 2.01936 6.63524 1.72231C5.76286 1.47625 5.15419 1.87247 5.15419 2.54503C5.15419 3.06917 5.81889 3.36459 6.11126 3.07222L6.57712 3.53808C5.86207 4.25313 4.49537 3.64571 4.49537 2.54503C4.49537 1.41094 5.5422 0.729486 6.81403 1.08821C8.39431 1.53363 8.533 3.56531 7.72766 5.73312C8.65142 6.16696 9.75463 6.99332 10.8272 8.06635C12.8905 10.1296 14.0412 12.3025 13.2451 13.0987L13.245 13.0988L13.2451 13.0988L13.2379 13.106C13.2004 13.1438 13.1224 13.222 12.9766 13.3671C12.6697 13.674 10.9912 14.4263 8.12186 15.6026C7.97645 15.6622 7.82872 15.7226 7.67879 15.7837C6.53516 16.2497 5.31012 16.7388 4.08512 17.221C3.6564 17.3898 3.2583 17.5457 2.90099 17.685C2.68654 17.7685 2.5333 17.828 2.45662 17.8576C2.02664 18.0324 1.53019 17.9657 1.22922 17.666C0.927929 17.3647 0.86084 16.8667 1.03713 16.4368ZM6.2608 6.11424C6.36524 6.01006 6.5782 6.00587 6.86839 6.08983C6.78618 6.27341 6.69673 6.45758 6.60023 6.64122L7.18345 6.94767C7.28957 6.74571 7.38829 6.5426 7.47924 6.33949C8.27611 6.7395 9.33857 7.509 10.3613 8.53216C12.1564 10.3273 13.1703 12.2417 12.7792 12.6328L12.7749 12.6372C12.3746 13.0161 10.4663 12.0027 8.67861 10.2151C6.88398 8.42048 5.87014 6.50562 6.26089 6.11433L6.2608 6.11424ZM5.6483 6.98851C5.95466 8.00776 6.89862 9.36683 8.21275 10.681C9.52661 11.9948 10.886 12.9389 11.9053 13.2453C11.1404 13.6202 9.71698 14.2366 7.87195 14.993C7.72698 15.0525 7.57968 15.1127 7.43018 15.1736C6.28924 15.6385 5.06653 16.1266 3.84378 16.608C3.41579 16.7765 3.01838 16.9321 2.66175 17.0711C2.44784 17.1545 2.29512 17.2138 2.21378 17.2452C2.00961 17.3281 1.79465 17.2993 1.6946 17.1996C1.59449 17.0995 1.56554 16.8846 1.64915 16.6806C1.68061 16.5992 1.73989 16.4465 1.82325 16.2326C1.96224 15.8759 2.11785 15.4785 2.28634 15.0504C2.7677 13.8276 3.25578 12.6048 3.72065 11.4638C3.78143 11.3146 3.84149 11.1676 3.90079 11.0229C4.65724 9.17737 5.27369 7.75357 5.6483 6.98851ZM11.3975 1.46884C11.3975 1.02159 11.0343 0.658488 10.5871 0.658488C10.1396 0.658488 9.77592 1.02182 9.77592 1.46884C9.77592 1.91636 10.1393 2.27919 10.5871 2.27919C11.0347 2.27919 11.3975 1.91659 11.3975 1.46884ZM13.4251 10.3108C13.3261 10.381 13.2578 10.4344 13.2246 10.4625L12.7995 9.95908C12.8462 9.91967 12.929 9.85505 13.0436 9.7736C13.2322 9.63968 13.4443 9.50609 13.6759 9.38129C14.614 8.8759 15.5823 8.65648 16.508 8.89961C16.7759 8.96998 17.034 9.07896 17.2802 9.22847C18.9627 10.2512 18.6499 12.2413 17.1289 12.4789C16.0372 12.6501 15.0845 11.7198 15.2695 10.953L15.9099 11.1074C15.8395 11.3996 16.3818 11.9292 17.027 11.828C17.9239 11.6879 18.11 10.5039 16.9382 9.79154C16.7467 9.67529 16.5475 9.59114 16.3406 9.53682C15.6051 9.34365 14.7934 9.5276 13.9884 9.96129C13.782 10.0725 13.5926 10.1918 13.4251 10.3108ZM18.5426 1.92688L18.0309 3.68483L19.1993 5.1406L17.2455 5.27194L16.2634 6.6951L15.5099 5.06418L13.8155 4.39192L15.245 3.32628L15.307 1.37232L16.8011 2.49425L18.5426 1.92688ZM15.9253 2.66049L16.6794 3.22679L17.5617 2.93934L17.3026 3.82986L17.8949 4.56797L16.8839 4.63593L16.3771 5.37041L15.9975 4.54887L15.1554 4.21478L15.8934 3.66465L15.9253 2.66049ZM10.4811 6.31148C12.3199 5.67746 13.2961 3.67135 12.6605 1.83301L13.2831 1.61773C14.0377 3.80013 12.8789 6.18161 10.6959 6.93432L10.4811 6.31148Z"></path>
          </svg>

                                        <span class="subcategory-header-label"><span data-cy="category-menu-subcategory-header-link-label">Awards</span></span>
                                      </a>
                                    </div>
                                    <ul class="subcategory-list">

                                        <li class="subcategory-item">
                                          <a href="/awards/math" class="subcategory-item-link category-menu-link category-menu-page-math-awards" data-google-analytics="Main navigation.Link in hover menu clicked.Awards - Math awards" data-cy="category-menu-subcategory-item-link">
                                            Math awards
                                          </a>
                                        </li>

                                        <li class="subcategory-item">
                                          <a href="/awards/ela" class="subcategory-item-link category-menu-link category-menu-page-ela-awards" data-google-analytics="Main navigation.Link in hover menu clicked.Awards - Language arts awards" data-cy="category-menu-subcategory-item-link">
                                            Language arts awards
                                          </a>
                                        </li>

                                        <li class="subcategory-item">
                                          <a href="/awards/certificates" class="subcategory-item-link category-menu-link category-menu-page-certificates-center" data-google-analytics="Main navigation.Link in hover menu clicked.Awards - Certificates center" data-cy="category-menu-subcategory-item-link">
                                            Certificates center
                                          </a>
                                        </li>

                                    </ul>
                                  </li>

                              </div>

                      </ul>

                    </nav>

                </li>

                <li class="ixl-nav-category-entry

                  no-category-menu" data-cy="assessment-category-entry">
                  <a data-cy="site-nav-category" class="site-nav-category

                      " href="/diagnostic/student-stats" data-google-analytics="Main navigation.Category clicked.Assessment">Assessment</a>

                </li>

                <li class="ixl-nav-category-entry

                  no-category-menu" data-cy="analytics-category-entry">
                  <a data-cy="site-nav-category" class="site-nav-category

                      " href="/analytics" data-google-analytics="Main navigation.Category clicked.Analytics">Analytics</a>

                </li>

          </ul>

          <ul class="box-site-nav-categories-left hamburger category-list">

                <li class="ixl-nav-category-entry" data-cy="hamburger-category-item">

                    <a class="category-hamburger link" href="/dashboard" data-google-analytics="Hamburger menu.Category link clicked.My IXL"><span class="link-text">My IXL</span></a>

                </li>

                <li class="ixl-nav-category-entry" data-cy="hamburger-category-item">

                    <button class="hamburger-button category-hamburger" aria-expanded="false" aria-controls="cat_learning-nav">
                      <span class="button-text">Learning</span>
                      <svg aria-hidden="true" class="right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.29936L1.39726 0L10 8L1.39726 16L0 14.7006L7.2047 7.99908L0 1.29936Z"></path>
          </svg>

                    </button>
                    <nav id="cat_learning-nav" class="category-nav hamburger-nav">
                      <button class="back-button category-hamburger" aria-expanded="true" aria-controls="cat_learning-nav" data-cy="hamburger-category-back-button">
                        <svg aria-hidden="true" class="left" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.29936L8.60274 0L0 8L8.60274 16L10 14.7006L2.7953 7.99908L10 1.29936Z"></path>
          </svg>

                        <span class="back-button-text">All</span>
                      </button>
                      <h2 class="category-hamburger-title">Learning</h2>
                      <ul class="subcategory-list hamburger-nav-list">

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_math" class="subcategory-hamburger link hamburger-subcat-math" href="/math" data-google-analytics="Hamburger menu.Subcategory link clicked.Learning - Math"><span class="link-text">Math</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_ela" class="subcategory-hamburger link hamburger-subcat-ela" href="/ela" data-google-analytics="Hamburger menu.Subcategory link clicked.Learning - Language arts"><span class="link-text">Language arts</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_recommendations" class="subcategory-hamburger link hamburger-subcat-recommendations" href="/recommendations" data-google-analytics="Hamburger menu.Subcategory link clicked.Learning - Recommendations"><span class="link-text">Recommendations</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <button class="hamburger-button subcategory-hamburger" aria-expanded="false" aria-controls="subcat_skill_plans-nav">
                                  <span class="button-text">Skill plans</span>
                                  <svg aria-hidden="true" class="right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.29936L1.39726 0L10 8L1.39726 16L0 14.7006L7.2047 7.99908L0 1.29936Z"></path>
          </svg>

                                </button>
                                <nav id="subcat_skill_plans-nav" class="hamburger-nav">
                                  <button class="back-button subcategory-hamburger" aria-expanded="true" aria-controls="subcat_skill_plans-nav" data-cy="hamburger-subcategory-back-button">
                                    <svg aria-hidden="true" class="left" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.29936L8.60274 0L0 8L8.60274 16L10 14.7006L2.7953 7.99908L10 1.29936Z"></path>
          </svg>

                                    <span class="back-button-text">Learning</span>
                                  </button>
                                  <h2 class="category-hamburger-title">Skill plans</h2>
                                  <ul class="pages-list hamburger-nav-list">

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/skill-plans#spotlight-skill-plans" data-google-analytics="Hamburger menu.Page link clicked.Skill plans - IXL plans"><span class="link-text">IXL plans</span></a>
                                      </li>

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/skill-plans#standards-skill-plans" data-google-analytics="Hamburger menu.Page link clicked.Skill plans - ${stateText}"><span class="link-text">${stateText}</span></a>
                                      </li>

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/skill-plans#textbook-skill-plans" data-google-analytics="Hamburger menu.Page link clicked.Skill plans - Textbooks"><span class="link-text">Textbooks</span></a>
                                      </li>

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/skill-plans#test-preparation-skill-plans" data-google-analytics="Hamburger menu.Page link clicked.Skill plans - Test prep"><span class="link-text">Test prep</span></a>
                                      </li>

                                  </ul>
                                </nav>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <button class="hamburger-button subcategory-hamburger" aria-expanded="false" aria-controls="subcat_awards_educator_and_student-nav">
                                  <span class="button-text">Awards</span>
                                  <svg aria-hidden="true" class="right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.29936L1.39726 0L10 8L1.39726 16L0 14.7006L7.2047 7.99908L0 1.29936Z"></path>
          </svg>

                                </button>
                                <nav id="subcat_awards_educator_and_student-nav" class="hamburger-nav">
                                  <button class="back-button subcategory-hamburger" aria-expanded="true" aria-controls="subcat_awards_educator_and_student-nav" data-cy="hamburger-subcategory-back-button">
                                    <svg aria-hidden="true" class="left" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.29936L8.60274 0L0 8L8.60274 16L10 14.7006L2.7953 7.99908L10 1.29936Z"></path>
          </svg>

                                    <span class="back-button-text">Learning</span>
                                  </button>
                                  <h2 class="category-hamburger-title">Awards</h2>
                                  <ul class="pages-list hamburger-nav-list">

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/awards/math" data-google-analytics="Hamburger menu.Page link clicked.Awards - Math awards"><span class="link-text">Math awards</span></a>
                                      </li>

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/awards/ela" data-google-analytics="Hamburger menu.Page link clicked.Awards - Language arts awards"><span class="link-text">Language arts awards</span></a>
                                      </li>

                                      <li data-cy="hamburger-page-item">
                                        <a class="link page-hamburger" href="/awards/certificates" data-google-analytics="Hamburger menu.Page link clicked.Awards - Certificates center"><span class="link-text">Certificates center</span></a>
                                      </li>

                                  </ul>
                                </nav>

                            </li>

                      </ul>
                    </nav>

                </li>

                <li class="ixl-nav-category-entry" data-cy="hamburger-category-item">

                    <a class="category-hamburger link" href="/diagnostic/student-stats" data-google-analytics="Hamburger menu.Category link clicked.Assessment"><span class="link-text">Assessment</span></a>

                </li>

                <li class="ixl-nav-category-entry" data-cy="hamburger-category-item">

                    <button class="hamburger-button category-hamburger" aria-expanded="false" aria-controls="cat_analytics_student-nav">
                      <span class="button-text">Analytics</span>
                      <svg aria-hidden="true" class="right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.29936L1.39726 0L10 8L1.39726 16L0 14.7006L7.2047 7.99908L0 1.29936Z"></path>
          </svg>

                    </button>
                    <nav id="cat_analytics_student-nav" class="category-nav hamburger-nav">
                      <button class="back-button category-hamburger" aria-expanded="true" aria-controls="cat_analytics_student-nav" data-cy="hamburger-category-back-button">
                        <svg aria-hidden="true" class="left" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.29936L8.60274 0L0 8L8.60274 16L10 14.7006L2.7953 7.99908L10 1.29936Z"></path>
          </svg>

                        <span class="back-button-text">All</span>
                      </button>
                      <h2 class="category-hamburger-title">Analytics</h2>
                      <ul class="subcategory-list hamburger-nav-list">

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_usage_anl" class="subcategory-hamburger link hamburger-subcat-usage-anl" href="/analytics/student-usage" data-google-analytics="Hamburger menu.Subcategory link clicked.Analytics - Usage"><span class="link-text">Usage</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_trouble_spots_anl" class="subcategory-hamburger link hamburger-subcat-trouble-spots-anl" href="/analytics/trouble-spots" data-google-analytics="Hamburger menu.Subcategory link clicked.Analytics - Trouble Spots"><span class="link-text">Trouble Spots</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_scores_anl" class="subcategory-hamburger link hamburger-subcat-scores-anl" href="/analytics/score-grid" data-google-analytics="Hamburger menu.Subcategory link clicked.Analytics - Scores"><span class="link-text">Scores</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_questions_anl" class="subcategory-hamburger link hamburger-subcat-questions-anl" href="/analytics/questions-log" data-google-analytics="Hamburger menu.Subcategory link clicked.Analytics - Questions"><span class="link-text">Questions</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_progress_improvement_anl" class="subcategory-hamburger link hamburger-subcat-progress-improvement-anl" href="/analytics/progress-and-improvement" data-google-analytics="Hamburger menu.Subcategory link clicked.Analytics - Progress"><span class="link-text">Progress</span></a>

                            </li>

                            <li data-cy="hamburger-subcategory-item">

                                <a id="hamburger-subcat_student_summary" class="subcategory-hamburger link hamburger-subcat-student-summary" href="/analytics/student-summary" data-google-analytics="Hamburger menu.Subcategory link clicked.Analytics - Summary"><span class="link-text">Summary</span></a>

                            </li>

                      </ul>
                    </nav>

                </li>

          </ul>

            </nav>

              <div class="consolidated-rhs-container">

                <div class="consolidated-search-trigger-container" id="consolidated-search-trigger" data-cy="search-popover-trigger-container">

      <div class=""><button class="search-popover-trigger js-search-popover-trigger" data-cy="search-popover-trigger"><div class="popover-trigger-icon"><img alt="" class="search-icon" src="data:image/svg+xml,%3csvg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath id='search-icon' fill-rule='evenodd' fill='%23FFFFFF'/%3e %3c/svg%3e"></div></button></div></div>

                  <button aria-haspopup="true" class="user-nav-wrapper icon-and-name-button" href="#" id="user-nav-wrapper" data-cy="user-nav-wrapper">
                    <div class="user-avatar-container js-user-avatar-container custom-user-avatar-container">
                      <img alt="" class="user-avatar js-user-avatar" src="${profilePicUrl}" title="Drag award here" data-draggable="true">
                    </div>
                    <span class="display-name js-display-name" data-cy="${nameElement}">${name}</span>
                  </button>

                <input type="hidden" name="" value="2" id="userType">
              </div>

            <nav class="box-site-nav-links">

                <div aria-hidden="true" class="user-nav-popover-mask js-user-nav-popover-mask"></div>
                <div id="user-nav-container" data-cy="user-nav-container" class="user-nav-container icon-and-name-button-container">

                    <button class="js-close-user-nav-button icon-and-name-button">
                      <div class="user-avatar-container js-user-avatar-container custom-user-avatar-container">
                        <img alt="" class="user-avatar js-user-avatar" src="${profilePicUrl}" title="Drag award here" data-draggable="true">
                      </div>
                      <span class="display-name js-display-name">${name}</span>
                    </button>

                  <div class="user-nav-box" id="user-nav">
                    <div class="user-nav-arrow-up"></div>

                      <ul class="user-nav-group mobile-layout-only" data-for-dev="display block in mobile layout; a flag in UserNav.js">
                        <li class="user-nav-item current-user">
                          <span class="user-nav-current-user mobile">
                            Welcome, ${name}!
                          </span>
                        </li>
                      </ul>

                      <ul class="user-nav-group" role="none">

                        <li class="user-nav-item" role="none">
                          <a class="user-nav-item-link" id="profileLink" data-cy="profile-settings-link" href="/profile" name="Profile">Profile &amp; settings</a>
                        </li>

                      </ul>

                    <ul class="user-nav-group user-nav-group-last" role="none">
                      <li class="user-nav-item signout" role="none">

                          <a class="user-nav-item-link" href="/signout" data-cy="sign-out-link">
                            Sign out</a>

                      </li>
                    </ul>
                  </div>
                </div>

            </nav>
            </div>
          </div>

            <nav class="sub-navigation js-sub-navigation" role="navigation" aria-label="Learning Navigation" data-cy="sub-navigation">

                <ul class="sub-nav-subcategories">

          <li class="sub-nav-subcategory hover-active" data-cy="subnav-subcategory">
            <a class="subcategory-link sub-nav-subcat-math
                " href="/math" data-google-analytics="Subnavigation.Header clicked.Math">

                <svg aria-hidden="true" class="subcategory-icon" width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.34502 17.8062C9.94256 17.6134 19.0496 14.5511 19.0496 14.5511C19.0496 14.5511 11.359 10.3532 11.261 10.3829C9.40807 10.9511 1.27571 12.8535 1.08301 12.8535L9.34502 17.8062Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5407 0.326042L9.81481 0.00167847L10.0583 0.348429C10.0597 0.350447 10.0612 0.352482 10.0626 0.354534L20.1478 14.7174L9.47294 18.146C9.46815 18.1476 9.4633 18.1492 9.45841 18.1506L9.3256 18.1933L9.20427 18.1223C9.20063 18.1203 9.19703 18.1182 9.19348 18.116L0.118164 12.808L0.341253 12.5123L0.735778 11.9893L1.77593 10.6107L4.93261 6.4271C7.80505 2.62064 9.34189 0.585122 9.52164 0.350451C9.52762 0.342011 9.53398 0.333866 9.5407 0.326042ZM9.43622 1.55449C8.67112 2.56733 7.23777 4.46612 5.46051 6.82129L2.30186 11.0075L1.26172 12.3861L1.18249 12.4911L9.21415 10.5749L9.43622 1.55449ZM9.19738 11.2562L1.7911 13.0233L9.04936 17.2685L9.19738 11.2562ZM9.70566 17.3793L9.86029 11.098L11.3929 10.7324L18.5818 14.5284L9.70566 17.3793ZM9.87707 10.4167L10.0565 3.12804C10.109 3.14776 10.1672 3.15433 10.2265 3.14441C10.4059 3.11439 10.527 2.94459 10.497 2.76515L10.3552 1.91772L18.7489 13.8716L11.7358 10.1684L11.5517 9.0681C11.5217 8.88867 11.3519 8.76755 11.1724 8.79758C10.993 8.8276 10.8719 8.9974 10.9019 9.17684L11.0621 10.134L9.87707 10.4167ZM11.3408 7.80751L11.1298 6.54692C11.0998 6.36749 10.93 6.24637 10.7506 6.2764C10.5711 6.30642 10.45 6.47622 10.48 6.65566L10.691 7.91625C10.721 8.09568 10.8908 8.2168 11.0702 8.18677C11.2497 8.15675 11.3708 7.98695 11.3408 7.80751ZM10.7079 4.02574L10.9189 5.28633C10.9489 5.46577 10.8278 5.63557 10.6484 5.66559C10.4689 5.69562 10.2991 5.5745 10.2691 5.39507L10.0582 4.13448C10.0281 3.95504 10.1492 3.78524 10.3287 3.75521C10.5081 3.72519 10.6779 3.84631 10.7079 4.02574Z"></path>
          </svg>

              <span class="subcategory-name">Math</span>

            </a>

          </li>

          <li class="sub-nav-subcategory active hover-active" data-cy="subnav-subcategory">
            <a class="subcategory-link sub-nav-subcat-ela
                " href="/ela" data-google-analytics="Subnavigation.Header clicked.Language arts">

                <svg aria-hidden="true" class="subcategory-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M16.2289 5.28529V4.39341H13.4371C13.1135 4.39341 12.8491 4.70882 12.8491 5.09753V12.3932C12.8491 12.7819 13.1135 13.0973 13.4371 13.0973C13.7624 13.0973 14.0251 13.4119 14.0251 13.8006V15.3348C14.0251 15.7235 14.2887 16.0381 14.6131 16.0381H17.8446C18.1691 16.0381 18.4326 15.7235 18.4326 15.3348V5.98859C18.4326 5.59988 18.1691 5.28529 17.8446 5.28529H16.2289Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71714 3.86314V11.4263C4.71714 11.5915 4.84709 11.7274 5.01209 11.7349C7.97259 11.8679 9.54651 13.0898 9.87322 14.8762C9.7533 14.7791 9.63279 14.6978 9.50043 14.6247C8.92506 14.3063 8.22317 14.2405 7.43783 14.3671C7.14683 14.4136 6.91482 14.4673 6.4215 14.594C5.98865 14.7051 5.80181 14.7496 5.56973 14.7924C4.74153 14.9441 3.9076 14.9365 3.12829 14.7643V3.86314H4.71714ZM4.71714 3.23396H2.81371H2.79917C2.63332 3.23396 2.49887 3.37481 2.49887 3.54855L2.49912 3.56143V4.28989H1.86574C1.35518 4.28989 0.940918 4.70415 0.940918 5.21471V16.2311C0.940918 16.7416 1.35515 17.1551 1.86574 17.1551H8.27822C8.35721 17.6708 8.77951 18.0412 9.28739 18.0412H11.058C11.5765 18.0412 12.0058 17.6551 12.0739 17.1551H18.4788C18.99 17.1551 19.4044 16.7418 19.4044 16.2311V5.21471C19.4044 4.70396 18.99 4.28989 18.4788 4.28989H18.0901V3.44075C18.0901 3.42757 18.0893 3.41458 18.0877 3.40182C18.0887 3.37174 18.0853 3.34101 18.0771 3.31044C18.0322 3.1426 17.8597 3.04294 17.6919 3.08785C16.8466 3.31403 15.9281 3.33984 15.017 3.17212C14.7835 3.12943 14.596 3.08484 14.1727 2.97633C13.6694 2.84733 13.4396 2.79412 13.1485 2.74758C12.3636 2.62104 11.6617 2.68692 11.0862 3.00531C10.8202 3.15233 10.602 3.33224 10.3404 3.60742C9.41583 1.91125 7.16852 0.137718 5.02596 0.137718C4.8554 0.137718 4.71714 0.275983 4.71714 0.446542V3.23396ZM10.5554 4.30681V15.0136C10.7301 14.8519 10.8959 14.7299 11.0862 14.6247C11.6617 14.3063 12.3636 14.2405 13.1485 14.367C13.4399 14.4136 13.6719 14.4673 14.1769 14.597C14.5981 14.7051 14.7849 14.7496 15.0167 14.7923C15.8935 14.9529 16.7148 14.963 17.4609 14.8032V3.78711C16.6363 3.95045 15.7653 3.94961 14.9034 3.79097C14.6511 3.74482 14.454 3.69796 14.0089 3.58387C13.5318 3.46158 13.3148 3.41134 13.0488 3.3688C12.3903 3.26264 11.8248 3.31572 11.3907 3.5559C11.1246 3.70295 10.9018 3.91087 10.5595 4.30216L10.5554 4.30681ZM17.8342 15.3608C16.9354 15.5975 15.9495 15.6028 14.903 15.4111C14.6519 15.3649 14.4557 15.3181 14.0088 15.2034C13.5341 15.0815 13.3151 15.0308 13.0488 14.9882C12.3903 14.8821 11.8248 14.9351 11.3907 15.1753C11.1246 15.3224 10.9018 15.5303 10.5595 15.9216C10.4904 16.0006 10.3905 16.0367 10.2934 16.0277C10.1963 16.0367 10.0963 16.0006 10.0272 15.9216C9.68498 15.5303 9.4621 15.3224 9.19595 15.1753C8.76193 14.9351 8.19648 14.8821 7.53756 14.9883C7.27163 15.0308 7.05261 15.0815 6.56633 15.2064C6.13105 15.3181 5.9348 15.3649 5.6834 15.4112C4.68526 15.594 3.67582 15.5661 2.74062 15.3173C2.60212 15.2844 2.49912 15.1598 2.49912 15.0113V4.91907H1.86574C1.70266 4.91907 1.57009 5.05163 1.57009 5.21471V16.2311C1.57009 16.3939 1.70237 16.5259 1.86574 16.5259H8.60056C8.79117 16.5259 8.93799 16.6941 8.91228 16.8829L8.89127 17.0159C8.89127 17.2341 9.06913 17.412 9.28739 17.412H11.058C11.2762 17.412 11.4541 17.2341 11.4568 16.9749L11.4798 16.7995C11.5004 16.6429 11.6338 16.5259 11.7917 16.5259H18.4788C18.6429 16.5259 18.7753 16.3939 18.7753 16.2311V5.21471C18.7753 5.05157 18.6426 4.91907 18.4788 4.91907L18.0901 4.8984V15.0517C18.0901 15.2054 17.9799 15.3333 17.8342 15.3608ZM9.93772 13.3573V4.18445C9.26793 2.68236 7.25085 0.943558 5.33478 0.769578V11.1349C7.61639 11.2968 9.15179 12.1186 9.93772 13.3573ZM12.7824 6.25416C12.4232 6.16227 12.0258 6.22362 11.7131 6.41929C11.5904 6.49599 11.4288 6.45877 11.3521 6.33615C11.2754 6.21353 11.3127 6.05195 11.4353 5.97525C11.8697 5.70349 12.4144 5.61939 12.9134 5.74703C13.1019 5.79615 13.2427 5.85495 13.5423 5.9972C13.6634 6.05467 13.7174 6.07975 13.7835 6.10826C14.4338 6.38827 15.1734 6.46189 15.8676 6.31571C16.0091 6.28591 16.148 6.37648 16.1778 6.51801C16.2076 6.65954 16.1171 6.79843 15.9755 6.82824C15.1757 6.99667 14.3259 6.91209 13.5762 6.58924C13.5022 6.55735 13.4444 6.5305 13.3116 6.46747C13.0475 6.34211 12.9274 6.29195 12.7824 6.25416ZM11.7372 9.28921C12.0501 9.09349 12.4472 9.03233 12.8052 9.12475C12.953 9.16276 13.0727 9.21264 13.3413 9.34007C13.4698 9.40102 13.527 9.42752 13.6003 9.45916C14.3501 9.782 15.1998 9.86661 15.9989 9.69814C16.1404 9.66831 16.231 9.52939 16.2011 9.38787C16.1713 9.24635 16.0324 9.15581 15.8909 9.18564C15.1975 9.33181 14.4579 9.25817 13.8076 8.97818C13.7421 8.94989 13.6887 8.92514 13.5681 8.86797C13.267 8.72512 13.1266 8.66659 12.9358 8.61755C12.4391 8.48929 11.8942 8.57321 11.4594 8.84516C11.3368 8.92187 11.2996 9.08345 11.3763 9.20607C11.453 9.32869 11.6146 9.36591 11.7372 9.28921ZM12.782 12.1366C12.4232 12.0441 12.026 12.1053 11.7131 12.301C11.5904 12.3777 11.4288 12.3405 11.3521 12.2179C11.2754 12.0953 11.3127 11.9337 11.4353 11.857C11.8701 11.585 12.4149 11.5011 12.9127 11.6294C13.1016 11.6781 13.2434 11.7372 13.5362 11.876L13.5441 11.8798C13.6641 11.9367 13.7179 11.9617 13.7835 11.99C14.4338 12.27 15.1734 12.3436 15.8676 12.1974C16.0091 12.1676 16.148 12.2582 16.1778 12.3997C16.2076 12.5413 16.1171 12.6802 15.9755 12.71C15.1757 12.8784 14.3259 12.7938 13.5762 12.471C13.5028 12.4393 13.4452 12.4126 13.3195 12.353L13.3116 12.3492C13.0487 12.2245 12.928 12.1742 12.782 12.1366Z"></path>
          </svg>

              <span class="subcategory-name">Language arts</span>

            </a>

          </li>

          <li class="sub-nav-subcategory hover-active" data-cy="subnav-subcategory">
            <a class="subcategory-link sub-nav-subcat-recommendations
              has-divider " href="/recommendations" data-google-analytics="Subnavigation.Header clicked.Recommendations">

                <svg aria-hidden="true" class="subcategory-icon" width="21" height="18" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12.6455 14.6454H2.91876C2.86688 14.6454 2.81829 14.6207 2.7837 14.577L0.672171 12.9399C0.61123 12.8625 0.61123 12.7455 0.672171 12.6689L2.7837 11.0309C2.81829 10.9881 2.86688 10.9626 2.91876 10.9626H12.6117"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6698 1.63701C11.6698 2.4034 11.1431 3.04649 10.4321 3.22446V4.09113H17.768C17.8612 4.09113 17.9505 4.12873 18.0156 4.19541L20.1642 6.39671C20.2968 6.53257 20.2951 6.74994 20.1604 6.88372L18.0118 9.01749C17.947 9.08184 17.8594 9.11795 17.768 9.11795H10.4321V9.72786H12.6292C12.8202 9.72786 12.9751 9.88271 12.9751 10.0737V14.4648C12.9751 14.6558 12.8202 14.8107 12.6292 14.8107H10.4316L10.4241 17.294H15.2373C15.4284 17.294 15.5832 17.4489 15.5832 17.6399C15.5832 17.8309 15.4284 17.9858 15.2373 17.9858H5.32699C5.13596 17.9858 4.9811 17.8309 4.9811 17.6399C4.9811 17.4489 5.13596 17.294 5.32699 17.294H9.73235L9.73986 14.8107H2.65875C2.56738 14.8107 2.47972 14.7745 2.41491 14.7101L0.220208 12.5286C0.0847606 12.3939 0.0840626 12.175 0.218649 12.0395L2.41335 9.82999C2.47829 9.76462 2.56662 9.72786 2.65875 9.72786H9.74036V9.11795H6.93287C6.74184 9.11795 6.58699 8.96309 6.58699 8.77207V4.43701C6.58699 4.24598 6.74184 4.09113 6.93287 4.09113H9.74036V3.24727C8.97559 3.10937 8.39628 2.44137 8.39628 1.63701C8.39628 0.732556 9.12868 -0.000167847 10.0335 -0.000167847C10.937 -0.000167847 11.6698 0.732968 11.6698 1.63701ZM10.0335 0.691597C10.5549 0.691597 10.978 1.11495 10.978 1.63701C10.978 2.15884 10.5551 2.5816 10.0335 2.5816C9.51058 2.5816 9.08805 2.15925 9.08805 1.63701C9.08805 1.11454 9.5108 0.691597 10.0335 0.691597ZM19.4296 6.63451L17.6255 8.42618H15.5736L17.6213 6.56634L15.5839 4.78289H17.6223L19.4296 6.63451ZM14.8398 8.15813C14.7615 8.22927 14.7233 8.32812 14.7267 8.42618H7.27875V4.78289H14.7276C14.7239 4.88332 14.7639 4.98448 14.8454 5.05583L16.5819 6.57587L14.8398 8.15813ZM12.2833 10.4196V14.1189H5.6147C5.61232 14.0278 5.57419 13.9379 5.50141 13.8718L3.72964 12.2635L5.49318 10.7522C5.59212 10.6674 5.6314 10.5388 5.60691 10.4196H12.2833ZM4.81815 10.4196L2.68398 12.2485L4.74443 14.1189H2.80141L0.953109 12.2817L2.8027 10.4196H4.81815ZM2.24699 17.294H3.05322C3.24425 17.294 3.39911 17.4489 3.39911 17.6399C3.39911 17.8309 3.24425 17.9858 3.05322 17.9858H2.24699C2.05596 17.9858 1.9011 17.8309 1.9011 17.6399C1.9011 17.4489 2.05596 17.294 2.24699 17.294Z"></path>
          </svg>

              <span class="subcategory-name">Recommendations</span>

            </a>

          </li>

          <li class="sub-nav-subcategory hover-active" data-cy="subnav-subcategory">
            <a class="subcategory-link sub-nav-subcat-skill-plans
              has-divider " href="/skill-plans" data-google-analytics="Subnavigation.Header clicked.Skill plans">

                <svg aria-hidden="true" class="subcategory-icon" width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M13.5014 16.7859H13.3934C12.4237 16.7827 11.6384 15.9974 11.6353 15.0277V6.948C11.6384 5.97845 12.4238 5.19337 13.3934 5.19059H13.5014C14.4708 5.19338 15.256 5.97857 15.2588 6.948V15.0277C15.256 15.9973 14.4709 16.7827 13.5014 16.7859Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.59536 0.709472C4.77777 0.923166 4.89676 1.1734 4.95565 1.44146C5.90259 1.10649 6.90209 1.18961 7.63612 1.73969L7.76049 1.8396H7.77047L7.89109 1.95998C8.3786 2.44653 8.61189 3.09487 8.61013 3.78095H16.7572C17.158 3.78095 17.4826 4.1228 17.4834 4.54486V17.4707C17.4834 17.8927 17.1587 18.2353 16.7579 18.2353H5.16336C4.7626 18.2353 4.43793 17.8927 4.43793 17.4707V7.47459C3.91481 7.39627 3.43168 7.17081 3.04906 6.78895C2.41322 6.15583 2.20948 5.24686 2.39515 4.33753C1.96891 4.31453 1.56822 4.15476 1.25954 3.84655C0.494348 3.08346 0.642149 1.75745 1.52579 0.876234C2.37352 0.0324977 3.62964 -0.138522 4.40596 0.520591L4.50443 0.611283L4.59536 0.709472ZM4.23774 3.58131C4.1205 3.69823 3.9954 3.80224 3.86481 3.89292L4.16732 4.1944C4.37616 4.40146 4.71348 4.40146 4.92233 4.1944L5.03948 4.07683C5.24712 3.86856 5.24712 3.53289 5.04023 3.32537L4.69396 2.97982C4.57512 3.19366 4.4225 3.39724 4.23774 3.58131ZM3.63127 6.20812C3.18987 5.76861 3.05713 5.09817 3.22129 4.41265L3.58594 4.77606C4.08553 5.27139 4.8733 5.30053 5.40616 4.86409L5.50468 4.77508L5.62354 4.65583C6.15049 4.12726 6.15049 3.27419 5.6235 2.74559L5.12952 2.25263C5.94102 1.9309 6.78678 2.02047 7.30782 2.54049L7.33619 2.5688L7.41981 2.66435C8.05412 3.453 7.85793 4.81105 6.88253 5.78377C5.85464 6.80884 4.39504 6.97038 3.63127 6.20812ZM5.1235 17.4707V7.4953C5.82095 7.43741 6.54158 7.14608 7.15942 6.64062L8.16091 7.63937L8.74324 7.05864L7.74177 6.05992C8.1342 5.58303 8.39799 5.04494 8.52419 4.50367H16.7572C16.7789 4.50367 16.7963 4.52246 16.7963 4.54486V17.4707C16.7963 17.4945 16.7789 17.5126 16.7572 17.5126H5.16263C5.14162 17.5126 5.1235 17.4945 5.1235 17.4707ZM6.32076 11.5613C6.48149 11.4009 6.74221 11.4008 6.90308 11.561L7.45765 12.1136L8.85736 10.7178C9.01816 10.5574 9.27888 10.5574 9.43968 10.7178C9.60048 10.8781 9.60048 11.1381 9.43968 11.2985L7.4579 13.2748L6.32101 12.142C6.16014 11.9817 6.16002 11.7217 6.32076 11.5613ZM6.61205 9.56269H8.06146V8.83997H6.61205V9.56269ZM15.3085 9.56269H10.2356V8.83997H15.3085V9.56269ZM10.2356 12.4536H15.3085V11.7308H10.2356V12.4536ZM15.3085 15.3444H10.2356V14.6217H15.3085V15.3444ZM6.61205 15.3444H8.06146V14.6217H6.61205V15.3444ZM3.84534 1.12462L3.92229 1.19219C4.33355 1.60181 4.2427 2.41549 3.65556 3.00044C3.06841 3.58598 2.25318 3.67652 1.84204 3.266C1.43045 2.85554 1.52108 2.04238 2.10783 1.45725C2.66102 0.906659 3.41587 0.793918 3.84534 1.12462Z"></path>
          </svg>

              <span class="subcategory-name">Skill plans</span>

            </a>

              <ul class="sub-nav-dropdown">

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/skill-plans#spotlight-skill-plans" data-google-analytics="Subnavigation.Link in dropdown clicked.Skill plans - IXL plans">
                      IXL plans
                    </a>
                  </li>

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/skill-plans#standards-skill-plans" data-google-analytics="Subnavigation.Link in dropdown clicked.Skill plans - ${stateText}">
                      ${stateText}
                    </a>
                  </li>

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/skill-plans#textbook-skill-plans" data-google-analytics="Subnavigation.Link in dropdown clicked.Skill plans - Textbooks">
                      Textbooks
                    </a>
                  </li>

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/skill-plans#test-preparation-skill-plans" data-google-analytics="Subnavigation.Link in dropdown clicked.Skill plans - Test prep">
                      Test prep
                    </a>
                  </li>

              </ul>

          </li>

          <li class="sub-nav-subcategory hover-active" data-cy="subnav-subcategory">
            <a class="subcategory-link sub-nav-subcat-awards-educator-and-student
              has-divider " href="/awards" data-google-analytics="Subnavigation.Header clicked.Awards">

                <svg aria-hidden="true" class="subcategory-icon" width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M6.57888 7.34208C7.41312 6.73926 8.87818 7.75549 9.47029 8.38385C10.0624 9.0122 10.3729 9.9922 9.97677 10.7597C9.75441 11.1913 5.127 15.1401 4.11653 15.7849C3.49888 16.1777 2.73959 15.5584 3.01135 14.8782C4.049 12.2898 6.2643 7.6262 6.57888 7.34208Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5871 2.93802C11.3985 2.93802 12.0563 2.28052 12.0563 1.46884C12.0563 0.657735 11.3982 -0.000335693 10.5871 -0.000335693C9.77591 -0.000335693 9.1171 0.657818 9.1171 1.46884C9.1171 2.28044 9.77566 2.93802 10.5871 2.93802ZM1.03713 16.4368C1.06633 16.3611 1.12582 16.2078 1.2094 15.9933C1.34865 15.636 1.50453 15.2379 1.6733 14.8091C2.15555 13.584 2.64456 12.3589 3.11052 11.2152C3.17147 11.0656 3.23171 10.9182 3.29118 10.773C4.46756 7.903 5.21975 6.22398 5.52639 5.91693L5.79503 5.6483C6.07994 5.36379 6.54122 5.32839 7.1106 5.4947C7.78068 3.66441 7.68913 2.01936 6.63524 1.72231C5.76286 1.47625 5.15419 1.87247 5.15419 2.54503C5.15419 3.06917 5.81889 3.36459 6.11126 3.07222L6.57712 3.53808C5.86207 4.25313 4.49537 3.64571 4.49537 2.54503C4.49537 1.41094 5.5422 0.729486 6.81403 1.08821C8.39431 1.53363 8.533 3.56531 7.72766 5.73312C8.65142 6.16696 9.75463 6.99332 10.8272 8.06635C12.8905 10.1296 14.0412 12.3025 13.2451 13.0987L13.245 13.0988L13.2451 13.0988L13.2379 13.106C13.2004 13.1438 13.1224 13.222 12.9766 13.3671C12.6697 13.674 10.9912 14.4263 8.12186 15.6026C7.97645 15.6622 7.82872 15.7226 7.67879 15.7837C6.53516 16.2497 5.31012 16.7388 4.08512 17.221C3.6564 17.3898 3.2583 17.5457 2.90099 17.685C2.68654 17.7685 2.5333 17.828 2.45662 17.8576C2.02664 18.0324 1.53019 17.9657 1.22922 17.666C0.927929 17.3647 0.86084 16.8667 1.03713 16.4368ZM6.2608 6.11424C6.36524 6.01006 6.5782 6.00587 6.86839 6.08983C6.78618 6.27341 6.69673 6.45758 6.60023 6.64122L7.18345 6.94767C7.28957 6.74571 7.38829 6.5426 7.47924 6.33949C8.27611 6.7395 9.33857 7.509 10.3613 8.53216C12.1564 10.3273 13.1703 12.2417 12.7792 12.6328L12.7749 12.6372C12.3746 13.0161 10.4663 12.0027 8.67861 10.2151C6.88398 8.42048 5.87014 6.50562 6.26089 6.11433L6.2608 6.11424ZM5.6483 6.98851C5.95466 8.00776 6.89862 9.36683 8.21275 10.681C9.52661 11.9948 10.886 12.9389 11.9053 13.2453C11.1404 13.6202 9.71698 14.2366 7.87195 14.993C7.72698 15.0525 7.57968 15.1127 7.43018 15.1736C6.28924 15.6385 5.06653 16.1266 3.84378 16.608C3.41579 16.7765 3.01838 16.9321 2.66175 17.0711C2.44784 17.1545 2.29512 17.2138 2.21378 17.2452C2.00961 17.3281 1.79465 17.2993 1.6946 17.1996C1.59449 17.0995 1.56554 16.8846 1.64915 16.6806C1.68061 16.5992 1.73989 16.4465 1.82325 16.2326C1.96224 15.8759 2.11785 15.4785 2.28634 15.0504C2.7677 13.8276 3.25578 12.6048 3.72065 11.4638C3.78143 11.3146 3.84149 11.1676 3.90079 11.0229C4.65724 9.17737 5.27369 7.75357 5.6483 6.98851ZM11.3975 1.46884C11.3975 1.02159 11.0343 0.658488 10.5871 0.658488C10.1396 0.658488 9.77592 1.02182 9.77592 1.46884C9.77592 1.91636 10.1393 2.27919 10.5871 2.27919C11.0347 2.27919 11.3975 1.91659 11.3975 1.46884ZM13.4251 10.3108C13.3261 10.381 13.2578 10.4344 13.2246 10.4625L12.7995 9.95908C12.8462 9.91967 12.929 9.85505 13.0436 9.7736C13.2322 9.63968 13.4443 9.50609 13.6759 9.38129C14.614 8.8759 15.5823 8.65648 16.508 8.89961C16.7759 8.96998 17.034 9.07896 17.2802 9.22847C18.9627 10.2512 18.6499 12.2413 17.1289 12.4789C16.0372 12.6501 15.0845 11.7198 15.2695 10.953L15.9099 11.1074C15.8395 11.3996 16.3818 11.9292 17.027 11.828C17.9239 11.6879 18.11 10.5039 16.9382 9.79154C16.7467 9.67529 16.5475 9.59114 16.3406 9.53682C15.6051 9.34365 14.7934 9.5276 13.9884 9.96129C13.782 10.0725 13.5926 10.1918 13.4251 10.3108ZM18.5426 1.92688L18.0309 3.68483L19.1993 5.1406L17.2455 5.27194L16.2634 6.6951L15.5099 5.06418L13.8155 4.39192L15.245 3.32628L15.307 1.37232L16.8011 2.49425L18.5426 1.92688ZM15.9253 2.66049L16.6794 3.22679L17.5617 2.93934L17.3026 3.82986L17.8949 4.56797L16.8839 4.63593L16.3771 5.37041L15.9975 4.54887L15.1554 4.21478L15.8934 3.66465L15.9253 2.66049ZM10.4811 6.31148C12.3199 5.67746 13.2961 3.67135 12.6605 1.83301L13.2831 1.61773C14.0377 3.80013 12.8789 6.18161 10.6959 6.93432L10.4811 6.31148Z"></path>
          </svg>

              <span class="subcategory-name">Awards</span>

            </a>

              <ul class="sub-nav-dropdown">

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/awards/math" data-google-analytics="Subnavigation.Link in dropdown clicked.Awards - Math awards">
                      Math awards
                    </a>
                  </li>

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/awards/ela" data-google-analytics="Subnavigation.Link in dropdown clicked.Awards - Language arts awards">
                      Language arts awards
                    </a>
                  </li>

                  <li class="sub-nav-page" data-cy="subnav-page">
                    <a class="sub-nav-page-link" href="/awards/certificates" data-google-analytics="Subnavigation.Link in dropdown clicked.Awards - Certificates center">
                      Certificates center
                    </a>
                  </li>

              </ul>

          </li>

                </ul>

            </nav>

            </div>
            <label for="header-menu-state" class="site-nav-header-mask header-menu"></label>
            <label for="mobile-search-state" class="site-nav-header-mask mobile-search"></label>
          </div>

            <div id="student-same-question-mode-container" class="student-same-question-mode-container">
            <div class="same-q-mode-banners"></div></div>
            <div id="student-focus-session-container" class="student-focus-session-container"></div>
            <div id="general-notifications-container"></div>

          <script>var rc={"navigationRuntimeContext":{"generalNotification":{"token":"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEyMDU5NjcsImV4cCI6MTc0MTIyMDM2NywicGF5bG9hZCI6IntcImNoYW5uZWxcIjpcIiNub3RpZmljYXRpb25fMTY0MTc5MjAxXCJ9In0.jUPALUCEcAYOZCD-DQpHXA1i5c05AnqYQC2ixIRdoqc","pubsubEndpoint":"https://pubsub.ixl.com","liveMessageSystemModel":{"isEligibleToReceiveMessages":true,"onMultipleActiveRosters":true,"expirationMilliseconds":3600000},"studentInvitationsModel":{"userIsStudent":true,"invitations":[],"timerDurationMs":1200000}},"isSkipToContentEnabled":true,"isUserSignedIn":true,"userType":2,"assessmentBannerModel":{"mathInProgress":false,"elaInProgress":false},"isUserEligibleForFocusMode":true,"hasSparkStudioAccess":false,"hasSharedAnalyticsAccess":false},"bannersRuntimeContext":{"banners":[],"isSingleBanner":false},"shouldShowBannerCarousel":true};if (!window.RUNTIME_CONTEXT) { window.RUNTIME_CONTEXT={}; }window.RUNTIME_CONTEXT.header=rc;</script>
          <script type="text/javascript" src="/frontend/resources/header/header_en.4c933ac7bab0e1c3322e.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff.9f4aaa6f963d24f701bc.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_react-dom_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_react-dom_index_js.959289a270fbb7790aa7.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_utils_i18n_index_js/commons-ixl_utils_i18n_index_js.b91833419da2dbb6bb25.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_content_util_YUA_js/commons-yui3_ixl_content_util_YUA_js.5c5e0c8477d7e422a7f7.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_utils_FetchUtils_js/commons-ixl_utils_FetchUtils_js.e28fcb4f8a4c413d92b3.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_util-commonjs_ErrorTracking_js/commons-yui3_ixl_util-commonjs_ErrorTracking_js.528c1e4666d391b065be.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_external_react_prop-types_js/commons-yui3_ixl_external_react_prop-types_js.4ed78ce66029c2b34c04.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_resize-observer-polyfill_-e7d454/commons-build_output_build_work_client-js-dependencies_node_modules_resize-observer-polyfill_-e7d454.21c034ddbd28d188cc21.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_utils_IxlModal_jsx/commons-ixl_utils_IxlModal_jsx.87461a09c0089b82f57a.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_typed--1cab5f/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_typed--1cab5f.926036445f550c0be31b.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_analytics-commonjs_shared_utils_constants_js/commons-yui3_ixl_analytics-commonjs_shared_utils_constants_js.9930b5c6a673b01c3873.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-31c7d6/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-31c7d6.bb702608ed06791e8727.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_analytics-commonjs_shared_utils_UrlBuildingUtils_js/commons-yui3_ixl_analytics-commonjs_shared_utils_UrlBuildingUtils_js.a12a8e1e983a6518b383.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-16a4e6/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-16a4e6.d32b342e5e939cd9d2ee.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_aria-hidden_dist_es2015_in-763b06/vendor-build_output_build_work_client-js-dependencies_node_modules_aria-hidden_dist_es2015_in-763b06.81ca4f18c2326dbdec6b.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_redux_lib_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_redux_lib_index_js.18c6a32f7d0aa04813bf.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_react-redux_es_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_react-redux_es_index_js.8e8b75885d0acaa31b15.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-4c2565/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-4c2565.71572da54aeb5307409b.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_ixl-node-build_node_modules_buffer_index_js/commons-build_output_build_work_ixl-node-build_node_modules_buffer_index_js.0bed6b297847b7f30ef3.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_header_navigation_quickLoginForm_features_signin_signinSlice_js/commons-ixl_header_navigation_quickLoginForm_features_signin_signinSlice_js.40aeb70042d6ce8f43cb.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_utils_ixlModal_IxlModal_jsx/commons-ixl_utils_ixlModal_IxlModal_jsx.1c8f658bc8602d087b86.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_react-beautiful-dnd_dist_-7affe9/commons-build_output_build_work_client-js-dependencies_node_modules_react-beautiful-dnd_dist_-7affe9.5e6a9a7348d40bf3bd60.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_componentLibrary_atoms_AfterArrowRight_jsx-ixl_componentLibrary_atoms_Image_jsx-i-d6ff6b/commons-ixl_componentLibrary_atoms_AfterArrowRight_jsx-ixl_componentLibrary_atoms_Image_jsx-i-d6ff6b.d2e8bac2cfd058ef27b9.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_analytics-commonjs_teacher_selectors_utils_TypeableDropdownUtils_jsx-yui3_ix-760725/commons-yui3_ixl_analytics-commonjs_teacher_selectors_utils_TypeableDropdownUtils_jsx-yui3_ix-760725.8f54d4d229b913205471.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_utils_SkillPickerUtils_jsx/commons-ixl_utils_SkillPickerUtils_jsx.8303119e36b2f069fdd7.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_radix-ui_react-dropdown-me-83c60d/vendor-build_output_build_work_client-js-dependencies_node_modules_radix-ui_react-dropdown-me-83c60d.817cafaf8cd622966b62.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_js-joda_core_dist_js-joda-260bf3/commons-build_output_build_work_client-js-dependencies_node_modules_js-joda_core_dist_js-joda-260bf3.ca12b183ac5771f1d947.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_sameQuestionMode_components_StudentAvatar_jsx-ixl_sameQuestionMode_components_Stu-db4818/commons-ixl_sameQuestionMode_components_StudentAvatar_jsx-ixl_sameQuestionMode_components_Stu-db4818.1453c388e0ef7c5c1619.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_newsfeed_external_shared_Newsfeed_Newsfeed_jsx-ixl_newsfeed_external_shared_toast-bb5744/commons-ixl_newsfeed_external_shared_Newsfeed_Newsfeed_jsx-ixl_newsfeed_external_shared_toast-bb5744.f8e0df03924ff08fd999.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_componentLibrary_atoms_CtaBtn_jsx-ixl_componentLibrary_molecules_SubSectionParagr-436b77/commons-ixl_componentLibrary_atoms_CtaBtn_jsx-ixl_componentLibrary_molecules_SubSectionParagr-436b77.d6cf6ae3a292e280b024.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_react-slick_lib_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_react-slick_lib_index_js.393d8616e0cfbc2aa999.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/commons-ixl_componentLibrary_atoms_InlineSvg_jsx-ixl_header_navigation_portalProviders_modalP-6ab7a7/commons-ixl_componentLibrary_atoms_InlineSvg_jsx-ixl_header_navigation_portalProviders_modalP-6ab7a7.241e7073f84a3ce92ff8.bundle.js" defer=""></script><script type="text/javascript" src="/frontend/header/header.a3963b1a4db722ba47a8.bundle.js" defer=""></script>

            <script src="/v2/bwB7jb2cV5R7aNpsVGO6h4R-Pqc/yui3/browser/config.js"></script>
          <script src="/vendor/yui/3.18.1/yui/yui-min.js"></script><div id="yui3-css-stamp" style="position: absolute !important; visibility: hidden !important" class=""></div>
          <script src="/combo/dv3/zeyzJp_xIi5ITRc4JU9PrloOEik/yui3/prepage/?modules=yuiPerf-min.js,quire-min.js"></script>
          <script src="/dv3/ON4OXH_9QzrTZ2-imMQLUcRGNfc/yui3/intl/Intl-min.js"></script>
          <script src="/dv3/ON4OXH_9QzrTZ2-imMQLUcRGNfc/yui3/intl/en-US-min.js"></script>

            <main id="practice-page-container"><article class="practice-page us has-mobile-view has-summary"><nav class="breadcrumb-nav site-nav-breadcrumb unzoom practice-breadcrumb responsive"><section class="breadcrumb-content site-nav-breadcrumb-content" data-cy="breadcrumb-content"><a href="/ela/level-c" class="breadcrumb-link breadcrumb-element">${grade}</a><img class="breadcrumb-sep breadcrumb-element" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAMAAABVab95AAAAdVBMVEV/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39drN8cAAAAJ3RSTlMAswEEB4eWBm1bbggCfml4ZnpfhW+IgFZiXokKYWWEaIFrf4J8eXAFIvj3AAAAW0lEQVR4Xj3ORRLFMAwD0CgNNWXGz3D/I3Zhx1q90Wgh5cZScQKajKkDOnGNStxi9my14mOSewziHFORvMBKLdywH6QTlqb6hrshPfBkvfD2pIgvX4j4sZT7J10qIANZobzyMQAAAABJRU5ErkJggg==" alt=""><span data-skill="2020020088" class="suggestion-toggle-icon hidden"></span><div class="breadcrumb-selected"> ${skillCode} <h1 class="breadcrumb-skill-name" data-cy="breadcrumb-skill-name">${skillName}</h1></div><h1 class="grades-landing-permacode">${permacode}</h1></section></nav><section class="summary-container snow-capped-mountain responsive"><div class="summary-body"><aside class="practice-summary-box" aria-hidden="true"><article class="practice-stats-summary" aria-label="practice statistics summary"><section class="time-spent practice-stats-row"><h3 class="hdr-time-spent">Time spent</h3><span class="practice-stats-value">${time} min ${SECrandomNumber} sec</span></section><section class="smart-score practice-stats-row"><h3 class="hdr-smart-score">SmartScore</h3><span class="practice-stats-value">100</span></section><section class="problems-correct practice-stats-row"><h3 class="hdr-problems-correct">Questions correct</h3><span class="practice-stats-value"><a class="lk-problems-correct" href="/analytics/questions-log#skill=2020020088">${rightQrandomNumber} / ${totalQrandomNumber}</a></span></section></article></aside><section class="mastery-box"><h2 class="mastery-header">Congratulations!</h2><p class="mastery-message">You have mastered the skill and earned a gold medal.</p></section><section class="keep-practice-container"><div class="gold-medal "></div><p class="keep-practice-message">Win more prizes!</p><aside class="dv-keep-practice-lk"><a class="keep-practicing-lk" href="/ela/level-c"><em>Keep practicing</em><span class="continue-symbol">&gt;&gt;</span></a></aside></section></div><div class="dv-bottom-trim"></div></section></article></main>
            <script>
              var signedIn = true;
              window.__JS_ERROR_TRACKING_CONFIG__ = {"failToReportTolerance":5,"isReportingEnabled":false,"maxDuplicateErrorPerPageLoad":5,"samplingOneOf":100,"sendIntervalMs":1000};;
          (function() {
            var Y = PROD_YUI;
            Y.use(["node","io","transfer-rosters-TransferRosters","util-StaticResources","util-DateTimeFormat","util-NumberFormat","util-GrammarFunctions","util-PluralRules","util-ErrorTracking","ixl_signin-commonjs_utils_recordSignin"]);
            Y.Get.js(["/yui2.9.0/yuiloader/yuiloader-min.js","/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static/math/common/ixlloader.js"], {
              onSuccess: function() {
                Y.use(["util-StaticResources"], function() {
                  var loader = YAHOO.util.IXLLoader.makeDefaultLoader(true,false,"/dv3/iN1nJkwu8woulUteLlPpRUaiPig/static",Y);

                loader.insert({
                  onSuccess: function() {
                    this.defaultSuccess();
                  }
                });

                  });
              }
              });
            }());

              var smartScoreToolTipLink = "/resources/IXL_SmartScore_guide.pdf";
              var hasRefererLink = false;
              window.__PRACTICE_MODEL__ = {
                pesId: 'b1b96ec63897a26e9a7b4e13fad01dd8_m7wd2qqq_5nxv',
                initialQuestionKey: 'axnYN6EUkWdzGkRIETJN',
                practiceStatistics: {"highScore" : 0, "prevScore" : null, "prevQuestionNumber" : null, "hasPrevQuestion" : false, "lastBonusRoundQuestion" : null, "prizesToReveal" : true, "score" : 0, "problemsAttempted" : 0, "recordedSecondsSpent" : 0, "lastCorrect" : false, "lastResponseDate" : null},
                initialTimeElapsed: 0,
                maxTimePerQuestion: 120000,
                numMedals: 0,
                showTakeABreakLink: true,
                takeABreakLink: '/recommendations/',
                scoringType: 'TRADITIONAL_SMART_SCORE',
                isParent: false,
                practiceLimited: false,
                practiceLimitReached: false,
                practiceRecorded: true,
                subjectWarningMessage: "",
                smartScoreToolTipLink: smartScoreToolTipLink,
                incompleteAnswerPopoverPaths: {"buttonAudioPaths":{"GO_BACK":{"OPUS":"/media/0/practice/go_back_button.opus","AAC":"/media/0/practice/go_back_button.m4a"},"SUBMIT":{"OPUS":"/media/0/practice/submit_button.opus","AAC":"/media/0/practice/submit_button.m4a"}},"warningMessageAudioPaths":{"MULTIPLE_CHOICE":{"OPUS":"/media/0/practice/warning_message_multiple_choice.opus","AAC":"/media/0/practice/warning_message_multiple_choice.m4a"},"DEFAULT":{"OPUS":"/media/0/practice/warning_message_default.opus","AAC":"/media/0/practice/warning_message_default.m4a"},"MULTIPLE_SELECT":{"OPUS":"/media/0/practice/warning_message_multiple_select.opus","AAC":"/media/0/practice/warning_message_multiple_select.m4a"},"FILL_IN":{"OPUS":"/media/0/practice/warning_message_fill_in.opus","AAC":"/media/0/practice/warning_message_fill_in.m4a"}}},
                diagnosePracticeUrl: '/practice-help',
                cutoff: 

          {"cutoffType":"PRACTICE_LIMIT","cutoffMessage":"","popover":{"header":"","dialogType":"signedOutPracticeLimit","functionalLayoutData":"","body":"<h3 class=\"dailyLimitHeader logged-in\"><\/h3>\n        <div id=\"dailylimit\" class=\"logged-in\">\n          <p>\n            \n            \n          <\/p>\n      \n          <div class=\"becomemember\">\n            \n          <\/div>\n\n          \n\n          \n\n        <\/div>\n        \n          <div class=\"practice-limit-image-location-small skill-subject-1\"><\/div>","buttons":[],"signedInStatus":"1","width":"545px"}}
          ,
                teacherPreviewBoxEnabled: false,
                isSpanishSkill: false,
                isSkillStepJumpsEnabled: true,
                hasNeutralAccolades: false,

                sampleAvailableInitially: true,
                isLoggedIn: !false,
                returnTargetInfo: {
                  returnsToSkillPlan: false,
                  returnUrl: "/ela/level-c",
                  returnPhrase: "Level C",
                },
                selectedSummaryTheme: JSON.parse("{\"themeId\":\"snow-capped-mountain\",\"cssSettings\":{\"cssModule\":\"practice-css-snow-capped-mountain\",\"cssClassname\":\"snow-capped-mountain\"}}"),
                edition: "US",
                subject: "LANGUAGE_ARTS",
                grade: "US_GRADE_1",
                isCheckpointSkill: false,
                shareConfig: {
                  name: "IXL language arts practice - Complete the short e word (Level C)",
                  link: "https://www.ixl.com/ela/level-c/complete-the-short-e-word",
                  tweetLink: "https://www.ixl.com/ela/level-c/complete-the-short-e-word",
                  picture: "https://www.ixl.com/static/ixl/socialSharing/images/square-og-icon.png",
                  fbDescription: "Boost your vocabulary and sharpen your grammar skills with IXL language arts! Try free exercises on 'Complete the short e word' and hundreds of other skills for grades P-12.",
                  tweetDescription: "Check+out+this+fun+language+arts+skill+from+%23IXLLearning%21",
                  customDomainUrl: "https://www.ixl.com/signin/harrisoncsd",
                  emailTitle: "IXL language arts practice - Complete the short e word (Level C)",
                  emailSummary: "Explore the wonderful world of words with IXL! Language arts comes to life for grades P-12, in hundreds of different skills. Try it today!",
                  shouldShowCopyLink: true,
                  pageType: 'skill',
                  showGoogleClassroomButton: false,
                  showShowCopyLink: true,
                  loadOnly: false,
                },
                showRecommendations: true,
                showPracticeTimer: true,
                enableScratchpad: false,
                userId: signedIn ? 164179201 : null,
                refererUrl: hasRefererLink ? "" : null,
                showPermacodes: true,
                breadCrumbConfig: {
                  showSocialSharing: false,
                  breadcrumbLink: {
                    linkTitle: "Level C",
                    url: "/ela/level-c",
                  },
                  suggestedState: 1,
                  skillStarIsDisabled: false,
                  skillHasBeenSuggestedByCoteachers: false,
                  hasSuggestedSkillStar: true,
                  shouldShowSkillAnalysisIcon: false,
                  isTeacher: false,
                  currSkillId: 2020020088,
                  skillHasLimitedAccess: false,
                  skillNumber: "J.2",
                  skillName: "Complete the short e word",
                  showPermacodes: true,
                  skillPermacode: "HXK",
                },
                stageStatistics: {"state" : null, "numStages" : 4, "stageNumber" : 1},
                isResponsive: true,
                rootDomain: "ixl.com",
                prizesText: JSON.parse("{\"prizeTypeSingular\":\"keychain\",\"prizeTypePlural\":\"keychains\",\"prizeLocation\":\"collection\",\"prizeLocationSummary\":\"the awards tab\"}"),
                prizeUrl: '/awards/ela/level-c#/ela/level-c/complete-the-short-e-word',
                skillId: 2020020088,
                skillName: "Complete the short e word",
                canSetUpSameQuestionMode: false,
                isFromExpiredSameQuestionMode: false,
                videoDisplayContainer: JSON.parse("{\"videoId\":\"1_772r003l\",\"skillVideoProvider\":\"KALTURA\",\"thumbnailUrl\":\"https://cfvod.kaltura.com/p/4764982/sp/476498200/thumbnail/entry_id/1_772r003l/version/100011\",\"playerId\":\"50822372\",\"partnerId\":\"4764982\"}"),
                navigatedFromGc: false,
                accountHeaderId: 3686437,
                <!-- calls wyzant action due to legacy code -->
                <!-- see resources-navigation-banner.jsp for more information -->
                resourcesBannerModel: JSON.parse("{\"bannerTitleKeyword\":\"learning\",\"keyword\":\"elementary school english language arts\",\"userType\":-1,\"wyzantBaseUrl\":\"https://wyzant.com/match/search?\"}"),
                showResourcesBanner: false,
                showVideoDirectly: false,
                userKalturaSession: "djJ8NDc2NDk4MnzNuq8TTp_k3_ycqUrZep7X0iI3ken9pQ3kF5z_6c_f4WtczoJtmxNe58dbIbL02J1iLZMfdRhhArSf07z_G6vV9RspQxpfQNvMsRCuXCAwww==",
                hasSpanishTranslations: false,
                isLMEdition: false,
                ravenLanguage: null,
                ravenWithoutOptionalAudio: JSON.parse("false"),
                botDetectionExecutionProbability: JSON.parse("0.05"),
                <!-- Recaptcha related fields for script loading and token generation -->
                recaptchaSiteKey: '6Lcq04AUAAAAAGSiB3-3J5ZSQZSTARc4GfabojnP',
                recaptchaScriptSrc: 'https://www.recaptcha.net/recaptcha/api.js?render=6Lcq04AUAAAAAGSiB3-3J5ZSQZSTARc4GfabojnP&hl=en',
                <!-- Fields related to Takeoff lesson alignments to this particular skill -->
                showTakeoffLessonAlignmentLink: false,
                takeoffLessonAlignmentUrl: '',
                alignedLessonId: -1,
                teacherEngagementToolsModel: null,
                pubsubEndpoint: "https://pubsub.ixl.com",
                pubsubToken: "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDEyMDU5NjcsImV4cCI6MTc0MTIyMDM2NywicGF5bG9hZCI6IntcImNoYW5uZWxcIjpcIiNub3RpZmljYXRpb25fMTY0MTc5MjAxXCJ9In0.jUPALUCEcAYOZCD-DQpHXA1i5c05AnqYQC2ixIRdoqc",
                focusSession: null,
              };
            </script>

          <script>var rc={"googleAnalyticsConfiguration":{"sessionUserType":"C","shouldSendHits":true,"subscriptionStatus":"A","scriptUrl":"//www.google-analytics.com/analytics.js","gaTrackingId":"UA-18268683-1","userType":"SS"},"googleTagManagerConfiguration":{"gtmAccountId":"GTM-MQKK9F","auth":"rVfbE8en3IxbGbyIWqZqog","preview":"env-36","country":"US","debugId":"5590fa37-3799-4943-85ce-af867215ee95","hashedAccntHeaderId":"null","region":"${state}"},"isUserSignedIn":true};if (!window.RUNTIME_CONTEXT) { window.RUNTIME_CONTEXT={}; }window.RUNTIME_CONTEXT.sunshine=rc;</script>
          <script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff.9f4aaa6f963d24f701bc.bundle.js"></script><script type="text/javascript" src="/frontend/sunshine/sunshine.0a962561e22b3f8a4a5f.bundle.js"></script>
            <script type="text/javascript" src="/frontend/resources/snow-capped-mountain/snow-capped-mountain_en.972501f00fba4af3cf39.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff.9f4aaa6f963d24f701bc.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_react-dom_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_react-dom_index_js.959289a270fbb7790aa7.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_utils_i18n_index_js/commons-ixl_utils_i18n_index_js.b91833419da2dbb6bb25.bundle.js"></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_content_util_YUA_js/commons-yui3_ixl_content_util_YUA_js.5c5e0c8477d7e422a7f7.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_utils_FetchUtils_js/commons-ixl_utils_FetchUtils_js.e28fcb4f8a4c413d92b3.bundle.js"></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_util-commonjs_ErrorTracking_js/commons-yui3_ixl_util-commonjs_ErrorTracking_js.528c1e4666d391b065be.bundle.js"></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_external_react_prop-types_js/commons-yui3_ixl_external_react_prop-types_js.4ed78ce66029c2b34c04.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_resize-observer-polyfill_-e7d454/commons-build_output_build_work_client-js-dependencies_node_modules_resize-observer-polyfill_-e7d454.21c034ddbd28d188cc21.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_utils_IxlModal_jsx/commons-ixl_utils_IxlModal_jsx.87461a09c0089b82f57a.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_typed--1cab5f/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_typed--1cab5f.926036445f550c0be31b.bundle.js"></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_analytics-commonjs_shared_utils_constants_js/commons-yui3_ixl_analytics-commonjs_shared_utils_constants_js.9930b5c6a673b01c3873.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_lodash_lodash_js/commons-build_output_build_work_client-js-dependencies_node_modules_lodash_lodash_js.ae3eab56e81a0697c025.bundle.js"></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-31c7d6/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-31c7d6.bb702608ed06791e8727.bundle.js"></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_analytics-commonjs_shared_utils_UrlBuildingUtils_js/commons-yui3_ixl_analytics-commonjs_shared_utils_UrlBuildingUtils_js.a12a8e1e983a6518b383.bundle.js"></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-16a4e6/vendor-build_output_build_work_client-js-dependencies_node_modules_tanstack_query-core_build_-16a4e6.d32b342e5e939cd9d2ee.bundle.js"></script><script type="text/javascript" src="/frontend/vendor-build_output_build_work_client-js-dependencies_node_modules_aria-hidden_dist_es2015_in-763b06/vendor-build_output_build_work_client-js-dependencies_node_modules_aria-hidden_dist_es2015_in-763b06.81ca4f18c2326dbdec6b.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_redux_lib_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_redux_lib_index_js.18c6a32f7d0aa04813bf.bundle.js"></script><script type="text/javascript" src="/frontend/commons-yui3_ixl_product-components_IxlModal_jsx-ixl_utils_ClassNameUtils_js/commons-yui3_ixl_product-components_IxlModal_jsx-ixl_utils_ClassNameUtils_js.94cac6d99535c6aac0fb.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_utils_videos_KalturaPlayer_jsx/commons-ixl_utils_videos_KalturaPlayer_jsx.6bc899211903cf61ca5a.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_practice_components_views_IndicatorContainer_jsx-ixl_practice_util_UseYUIPractice-3839e0/commons-ixl_practice_components_views_IndicatorContainer_jsx-ixl_practice_util_UseYUIPractice-3839e0.b46c42298ba22e5bfc50.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_radix-ui_react-dialog_dis-75c5cd/commons-build_output_build_work_client-js-dependencies_node_modules_radix-ui_react-dialog_dis-75c5cd.ef8f34f5e3179fa42ca7.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_utils_PlainTooltip_jsx-ixl_utils_crispButton_CrispButton_jsx-ixl_utils_hooks_UseO-ba2055/commons-ixl_utils_PlainTooltip_jsx-ixl_utils_crispButton_CrispButton_jsx-ixl_utils_hooks_UseO-ba2055.54ab8de6f5cb8296488b.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_practice_components_popovers_incompleteAnswerPopover_AudioWrapperGenerationUtils_jsx/commons-ixl_practice_components_popovers_incompleteAnswerPopover_AudioWrapperGenerationUtils_jsx.fca7ee4c0efbf6850e6d.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_practice_components_widgets_Question_jsx-ixl_scratchPad_components_Scratchpad_jsx-c0668a/commons-ixl_practice_components_widgets_Question_jsx-ixl_scratchPad_components_Scratchpad_jsx-c0668a.abb86acccbabe979fee9.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_ixl-node-build_node_modules_buffer_index_js/commons-build_output_build_work_ixl-node-build_node_modules_buffer_index_js.0bed6b297847b7f30ef3.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_header_navigation_quickLoginForm_features_signin_signinSlice_js/commons-ixl_header_navigation_quickLoginForm_features_signin_signinSlice_js.40aeb70042d6ce8f43cb.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_radix-ui_react-tabs_dist_-7df0d2/commons-build_output_build_work_client-js-dependencies_node_modules_radix-ui_react-tabs_dist_-7df0d2.cd34720c13d6995da472.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_practice_components_core_PracticeViewManager_jsx-ixl_practice_components_core_wit-0d482c/commons-ixl_practice_components_core_PracticeViewManager_jsx-ixl_practice_components_core_wit-0d482c.77d993b7eb0818c24e13.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_componentLibrary_atoms_AfterArrowRight_jsx-ixl_componentLibrary_atoms_Image_jsx-i-d6ff6b/commons-ixl_componentLibrary_atoms_AfterArrowRight_jsx-ixl_componentLibrary_atoms_Image_jsx-i-d6ff6b.d2e8bac2cfd058ef27b9.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_practice_index_jsx/commons-ixl_practice_index_jsx.1c1be80078ec77891b7a.bundle.js"></script><script type="text/javascript" src="/frontend/snow-capped-mountain/snow-capped-mountain.b75d73131f5c47b0372c.bundle.js"></script>

          <div id="footer-spacer"></div>
          <footer class="site-nav-footer">
            <div id="ft" class="site-nav-fixed-width content-width-1200">
              <div class="utility-links">

                <a href="/company" target="_blank">Company</a> |

                <a href="https://blog.ixl.com">Blog</a> |
                <a href="/help-center">Help center</a> |

                  <a href="/userguides">User guides</a> |

                <a href="/feedback">Tell us what you think</a> |
                <a href="/testimonials">Testimonials</a> |

                <a href="/contact">Contact us</a> |

                <a href="/termsofservice">Terms of service</a> |
                <a href="/privacypolicy"> <b>Privacy policy</b></a>
              </div>

              <div class="copyright">
                <a href="/company/"><img src="/dv3/R0QzGgdqCM4n_L1rr1ioLUmkvzU/yui3/site-nav/assets/footer-logo.svg" class="copyright-ixl-logo" alt="IXL Learning" title="IXL Learning"></a>
                Â© 2025 IXL Learning. All rights reserved.

              </div>

            </div>
          </footer>

          <script>
            window.dataLayer = window.dataLayer || [];
            const handleClick = (e) => {
              const {innerText, href} = e.currentTarget;
              let buttonText = innerText.trim();
              let clickText = innerText.trim();
              if (e.currentTarget.getAttribute('data-ga-social')){
                clickText = href;
                buttonText = e.currentTarget.getAttribute('data-ga-social')
              }
              window.dataLayer.push({
                event: 'click_button',
                feature: 'Footer',
                module: 'Footer',
                button: buttonText,
                click_text: clickText,
                click_url: href,
                outbound: e.currentTarget.getAttribute('data-ga-outbound') || false,
              })
            }

            const footerLinks = document.querySelectorAll('.site-nav-footer a')
            for (let i=0; i < footerLinks.length; i++) {
              footerLinks[i].addEventListener('click', handleClick, false)
            }
          </script>

            <div id="loginDialog" class="" style="visibility: hidden;"></div>

          <script>
            PROD_YUI.use('marketing-mobileAppBanner', function(Y) {
              Y.IXL.setupMobileAppBanner('mobile_app_banner_dismissed', 'Skill');
            });
          </script>

              <link rel="stylesheet" href="/dv3/k2Mz2vgSspCT20X3qsG5frYdnhw/yui3/suggested-skills/css/SuggestedSkillsPracticePage-min.css">

          <script>

              PROD_YUI.use("ixl_suggested-skills_utils_SuggestionIconTooltipUtils", "customizable-delay-tooltips-Tooltip", "selector-css3", function(Y) {
                var tooltipContainerClassName = ".site-nav-breadcrumb";
                var suggestingTeachers = {"2020020088":{"teacherLastNames":"","numSuggestingTeachers":0,"numRosters":8,"teacherDisplayNames":""}};
                var tooltip = new Y.IXL.CustomizableDelayTooltip({
                  triggerNodes: ".suggestion-toggle-icon",
                  delegate: tooltipContainerClassName,
                  autoHide: false,
                  showDelay: 700,
                  offsetXY: [15, -35],
                  zIndex: 26,
                  maxWidth: 600
                });
                tooltip.render(tooltipContainerClassName);

                // When the star is clicked, hide the tooltip.

                // Set tooltip content
                var TooltipTextUtils = require('ixl/suggested-skills/utils/SuggestionIconTooltipUtils');
                tooltip.on("triggerEnter", function (e) {
                  var star = e.node;
                  if (star && star.hasClass('suggestion-toggle-icon')) {
                    var tooltipText = '';
                    // boolean indicates whether the skill is suggested (includes half suggested for instructor).
                    var isSkillSuggested = !star.hasClass('not-suggested');
                    var currSkillId = star.getAttribute("data-skill");

                      if (suggestingTeachers[currSkillId]) {
                        tooltipText = TooltipTextUtils.getStudentTooltipText(
                          suggestingTeachers[currSkillId]["teacherDisplayNames"],
                          suggestingTeachers[currSkillId]["numRosters"],
                          suggestingTeachers[currSkillId]["numSuggestingTeachers"]);
                      }

                  }

                  this.setTriggerContent(tooltipText);
                });

                  tooltip.on("triggerEnter", function(e) {
                    var star = e.node;

                    // For students/children, don't show tooltip on hidden stars.
                    if (star && star.hasClass('suggestion-toggle-icon') && star.hasClass('hidden')) {
                      e.preventDefault();
                    }
                  });

                }
              );

          </script>

            <link rel="stylesheet" href="/dv3/h5rFbjb3hF6ZG8uMtkCG2TDWMXI/yui3/sticky-overlay/sticky-overlay-css-base-min.css">

          <script>window.COMMON_PAGE_END_MODEL={"googleRecaptchaModel":{"siteKey":"6Lcq04AUAAAAAGSiB3-3J5ZSQZSTARc4GfabojnP","scriptSrc":"https://www.recaptcha.net/recaptcha/api.js?render=6Lcq04AUAAAAAGSiB3-3J5ZSQZSTARc4GfabojnP&hl=en","tokenInputName":"recaptchaModel.recaptchaToken","protectedByRecaptchaMsg":"This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy?hl=en' target='_blank' tabindex='-1' class='recaptcha-msg-privacy-link'>Privacy&nbsp;Policy</a> and <a href='https://policies.google.com/terms?hl=en' target='_blank' tabindex='-1' class='recaptcha-msg-tos-link'>Terms&nbsp;of&nbsp;Service</a> apply.","protectedByRecaptchaBadgeText":"protected by reCAPTCHA","privacyLinkText":"Privacy","privacyLinkHref":"https://policies.google.com/privacy?hl=en","termsLinkText":"Terms","termsLinkHref":"https://policies.google.com/terms?hl=en","scoreThreshold":0.5,"whitelistIps":["209.237.27.128/27","96.45.197.222/30","12.216.73.226/27"],"verificationFailedMsg":"reCAPTCHA verification failed. Please try again.","enabled":false,"checkingHsi":true,"backgroundScriptEnabled":true}};</script>

          <script>
            // Check UserAgent to see if the browser is Internet Explorer.
            var isInternetExplorer = PROD_YUI && PROD_YUI.UA.ie > 0;

            var isRecaptchaBackgroundScriptEnabled = window.COMMON_PAGE_END_MODEL
              && window.COMMON_PAGE_END_MODEL.googleRecaptchaModel
              && window.COMMON_PAGE_END_MODEL.googleRecaptchaModel.backgroundScriptEnabled;

            var modules = [
              'ixl_site-nav-commonjs_set-up-site-nav-banner',
              'ixl_ab-testing-commonjs_FirstTimeOnIXLCookieHelper',
              'ixl_util-commonjs_Websocket',
            ];

            if (isInternetExplorer) {
              modules.push('ixl_common-commonjs_js_setUpIEBanner');
            }

            if (isRecaptchaBackgroundScriptEnabled) {
              modules.push('ixl_recaptcha-commonjs_GoogleRecaptchaClient');
            }

            PROD_YUI.use(modules, function(Y) {
              var setUpSiteNavBanner = require('ixl/site-nav-commonjs/set-up-site-nav-banner');
              setUpSiteNavBanner();

              var firstTimeOnIXLCookieHelper = require('ixl/ab-testing-commonjs/FirstTimeOnIXLCookieHelper');
              firstTimeOnIXLCookieHelper();

              if (isInternetExplorer) {
                var setUpIEBanner = require('ixl/common-commonjs/js/setUpIEBanner');
                setUpIEBanner();
              }

              if (isRecaptchaBackgroundScriptEnabled) {
                var GoogleRecaptchaClient = require("ixl/recaptcha-commonjs/GoogleRecaptchaClient");
                GoogleRecaptchaClient.getRecaptchaChecker(
                  window.COMMON_PAGE_END_MODEL.googleRecaptchaModel.siteKey,
                  window.COMMON_PAGE_END_MODEL.googleRecaptchaModel.scriptSrc
                );
              }

            });
          </script>

          <div id="user-welcome-modal-container" class="user-welcome-modal-container"></div>

          <script>
            var rosterPopoverModel = window.COMMON_PAGE_END_MODEL &&
              window.COMMON_PAGE_END_MODEL.rosterPopoverModel;
            if (rosterPopoverModel !== undefined) {
              window.USE_NEW_ROSTER_POPOVER = true;
              PROD_YUI.use('ixl_user-welcome_user-welcome-modal', function(Y) {

                var durationDays = rosterPopoverModel.durationDays;
                var UserWelcomeModalSetup = require('ixl/user-welcome/user-welcome-modal');

                UserWelcomeModalSetup({
                  selector: "#user-welcome-modal-container",
                  props: {
                    durationDays: durationDays,
                    isNewTrialAccount: rosterPopoverModel.isNewTrial,
                    isTrialAccount: rosterPopoverModel.isTrial
                  },
                });
              });
            }
          </script>

          <div id="merge-invite-popover-root" class="merge-invite-popover-container"></div>

          <script>
            var mergeInvitePopoverModel = window.COMMON_PAGE_END_MODEL &&
              window.COMMON_PAGE_END_MODEL.mergeInvitePopoverModel;

            if (mergeInvitePopoverModel) {
              PROD_YUI.use('ixl_merge-invite_merge-invite-popover', function(Y) {
                var MergeInvitePopoverSetup = require('ixl/merge-invite/merge-invite-popover');

                MergeInvitePopoverSetup({
                  selector: "#merge-invite-popover-root",
                  props: {
                    token: mergeInvitePopoverModel.token,
                    siteAccountName: mergeInvitePopoverModel.siteAccountName,
                    teacherId: mergeInvitePopoverModel.teacherId,
                    isDistrict: mergeInvitePopoverModel.isDistrict
                  }
                });
              });
            }
          </script>

            <section class="translation-popover-container" id="translation-popover-container"></section>
            <script type="text/javascript" src="/frontend/resources/translationPopover/translationPopover_en.3c91d71567ee1b3cf8b5.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_array_-ee4dff.9f4aaa6f963d24f701bc.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_react-dom_index_js/commons-build_output_build_work_client-js-dependencies_node_modules_react-dom_index_js.959289a270fbb7790aa7.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_utils_i18n_index_js/commons-ixl_utils_i18n_index_js.b91833419da2dbb6bb25.bundle.js"></script><script type="text/javascript" src="/frontend/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_typed--1cab5f/commons-build_output_build_work_client-js-dependencies_node_modules_core-js_modules_es_typed--1cab5f.926036445f550c0be31b.bundle.js"></script><script type="text/javascript" src="/frontend/commons-ixl_practice_components_popovers_incompleteAnswerPopover_AudioWrapperGenerationUtils_jsx/commons-ixl_practice_components_popovers_incompleteAnswerPopover_AudioWrapperGenerationUtils_jsx.fca7ee4c0efbf6850e6d.bundle.js"></script><script type="text/javascript" src="/frontend/translationPopover/translationPopover.c189925eb6192ba1a059.bundle.js"></script>

          <div><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-q40dtcm8ylcb" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6Lcq04AUAAAAAGSiB3-3J5ZSQZSTARc4GfabojnP&amp;co=aHR0cHM6Ly93d3cuaXhsLmNvbTo0NDM.&amp;hl=en&amp;v=EGO3I7Q26cZ-jBw3BEtzIx7-&amp;size=invisible&amp;cb=ps14kqn47wnz"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div><iframe style="position: absolute; top: 0; height: 0; width: 100%; border: 0px;" id="responsive-info-higher-order-component-iframe" aria-hidden="true"></iframe></body><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap" type="text/css"><div style="all: initial !important;"></div></html>
      `;
      });
      }}

GetStats();
