var LLMS=window.LLMS||{};!function(t){"use strict";LLMS.Ajax={url:window.ajaxurl||window.llms.ajaxurl,type:"post",data:[],cache:!1,dataType:"json",async:!0,response:[],init:function(t){if(null===t||"object"!=typeof t)return!1;t.url=this.url,t.type="type"in t?t.type:this.type,t.data="data"in t?t.data:this.data,t.cache="cache"in t?t.cache:this.cache,t.dataType="dataType"in t?t.dataType:this.dataType,t.async="async"in t?t.async:this.async,t.data._ajax_nonce=wp_ajax_data.nonce;var e=LLMS.Rest,s=e.get_query_vars();return t.data.post_id="post"in s?s.post:null,t},call:function(t){var e=this.init(t);return!!e&&(this.request(e),this)},request:function(e){return t.ajax(e),this}},LLMS.l10n=LLMS.l10n||{},LLMS.l10n.translate=function(t){var e=this;return e.strings[t]?e.strings[t]:t},LLMS.LessonPreview={$els:null,init:function(){var e=this;this.$locked=t('a[href="#llms-lesson-locked"]'),this.$locked.length&&e.bind(),t(".llms-course-navigation").length&&LLMS.wait_for_matchHeight(function(){e.match_height()})},bind:function(){var e=this;this.$locked.on("click",function(){return!1}),this.$locked.on("mouseenter",function(){var s=t(this).find(".llms-tooltip");if(!s.length){var n=t(this).attr("data-tooltip-msg");n||(n=LLMS.l10n.translate("You do not have permission to access to this content")),s=e.get_tooltip(n),t(this).append(s)}setTimeout(function(){s.addClass("show")},10)}),this.$locked.on("mouseleave",function(){var e=t(this).find(".llms-tooltip");e.removeClass("show")})},match_height:function(){t(".llms-course-navigation .llms-lesson-link").matchHeight()},get_tooltip:function(e){var s=t('<div class="llms-tooltip" />');return s.append('<div class="llms-tooltip-content">'+e+"</div>"),s}},LLMS.Loops={init:function(){var e=this;t(".llms-loop").length&&LLMS.wait_for_matchHeight(function(){e.match_height()})},match_height:function(){t(".llms-loop-item .llms-loop-item-content").matchHeight()}},LLMS.MB_Course_Outline={init:function(){window.llms.post&&"course"===window.llms.post.post_type&&this.bind()},alreadySubmitted:!1,bind:function(){function e(){t("#llms-outline-add").removeClass("clicked"),t("#llms-outline-add").addClass("bt"),t("#llms-outline-menu").removeClass("fade-in"),t("#triangle").show()}var s=this;t(document).ready(function(){s.addSectionRowFunctionality(),s.addLessonRowFunctionality()}),t(".llms-modal-cancel").click(function(e){e.preventDefault(),t(window).trigger("build")}),t(document).ready(function(){t(".llms-chosen-select").chosen({width:"100%"})}),t(".tab-link").on("click",function(){t("#content_ifr").css("height","300px"),t("#excerpt_ifr").css("height","300px")}),t("#_has_prerequisite").attr("checked")?(t(".llms-prereq-top").addClass("top"),t(".llms-prereq-bottom").show()):t(".llms-prereq-bottom").hide(),t("#_has_prerequisite").change(function(){t("#_has_prerequisite").attr("checked")?(t(".llms-prereq-top").addClass("top"),t(".llms-prereq-bottom").show()):(t(".llms-prereq-top").removeClass("top"),t(".llms-prereq-bottom").hide())}),this.toggle_custom_single_price_field(),t("a.llms-modal").click(function(){t("#"+t(this).attr("data-modal_id")).topModal({title:t(this).attr("data-modal_title"),closed:function(){s.alreadySubmitted=!1}})}),t("a.llms-modal-new-lesson-link").click(function(){t("#"+t(this).attr("data-modal_id")).topModal({title:t(this).attr("data-modal_title"),open:function(){s.getSections(),t("#llms_create_lesson").find('input[value="Create Lesson"]').removeProp("disabled")},closed:function(){s.alreadySubmitted=!1}})}),t("a.llms-modal-existing-lesson-link").click(function(){t("#"+t(this).attr("data-modal_id")).topModal({title:t(this).attr("data-modal_title"),open:function(){s.getSections()},closed:function(){s.alreadySubmitted=!1}})}),this.setup_course(),t(window).click(function(s){"llms-outline-add"!==s.target.id&&t("#llms-outline-add").hasClass("clicked")&&(t("#llms-outline-menu").css("display","none"),e())}),t(window).scroll(function(){if(t("#llms-outline-add").hasClass("clicked")){t("#triangle").hide();var e=t("#llms-outline-menu"),s=-t("#llms-outline-add").offset().top-81+t(window).scrollTop()+t(window).height()/2;e.css("top",s)}}),t("#llms-outline-add").click(function(e){e.preventDefault();var s=t("#llms-outline-menu");if(t(this).hasClass("bt")){if(t(this).offset().top-t(window).scrollTop()<200)s.css("top","43px"),t(window).width()<851&&(s.find("#triangle").css("left","164px"),s.css("top","57px"),s.css("left","-138px"),s.css("bottom","15px"));else if(s.css("top",""),t(window).width()<851){s.css("top","-54px");var n=t(window).width()<400?-Math.abs(t(window).width()/2):-242;n+="px",s.css("left",n),s.css("bottom","15px"),s.find("#triangle").css("left","227px")}t(this).removeClass("bt"),t(this).addClass("clicked"),s.addClass("fade-in"),s.css("display","block")}else t(this).removeClass("clicked"),t(this).addClass("bt"),s.removeClass("fade-in"),s.css("display","none"),s.find("#triangle").show()}),t("#tooltip_menu a").click(function(e){var s=t("#llms-outline-menu");s.removeClass("fade-in"),s.css("display","none"),e.preventDefault()}),t("a.tooltip").click(function(t){t.preventDefault()}),t("#llms_create_section").on("submit",function(e){e.preventDefault();var n={};t.each(t(this).serializeArray(),function(t,e){n[e.name]=e.value}),s.alreadySubmitted===!1&&(s.alreadySubmitted=!0,s.createSection(n))}),t("#llms_create_lesson").on("submit",function(e){e.preventDefault();var n={};t.each(t(this).serializeArray(),function(t,e){n[e.name]=e.value}),s.alreadySubmitted===!1&&(s.alreadySubmitted=!0,s.createLesson(n))}),t("#llms_add_existing_lesson").on("submit",function(e){e.preventDefault();var n={};t.each(t(this).serializeArray(),function(t,e){n[e.name]=e.value}),s.alreadySubmitted===!1&&(s.alreadySubmitted=!0,s.addExistingLesson(n))}),t("#llms_edit_lesson").on("submit",function(e){e.preventDefault();var n={};t.each(t(this).serializeArray(),function(t,e){n[e.name]=e.value}),s.updateLesson(n)}),t("#llms_edit_section").on("submit",function(e){e.preventDefault();var n={};t.each(t(this).serializeArray(),function(t,e){n[e.name]=e.value}),s.updateSection(n)}),t("#llms_delete_section").on("submit",function(e){e.preventDefault();var n={};t.each(t(this).serializeArray(),function(t,e){n[e.name]=e.value}),s.deleteSection(n)})},toggle_custom_single_price_field:function(){t("#_is_custom_single_price").attr("checked")?(t(".llms-custom-single-price-top").removeClass("bottom"),t(".llms-custom-single-price-top").addClass("top"),t(".llms-custom-single-price-bottom").show()):t(".llms-custom-single-price-bottom").hide(),t("#_is_custom_single_price").change(function(){t("#_is_custom_single_price").attr("checked")?(t(".llms-custom-single-price-top").removeClass("bottom"),t(".llms-custom-single-price-top").addClass("top"),t(".llms-custom-single-price-bottom").show()):(t(".llms-custom-single-price-top").removeClass("top"),t(".llms-custom-single-price-top").addClass("bottom"),t(".llms-custom-single-price-bottom").hide())})},resortSections:function(){var e={};t(".llms-section").each(function(s){s++,t(this).find('[name="llms_section_order[]"]').val(s),t(this).find(".llms-section-order").html(s);var n=t(this).find('[name="llms_section_id[]"]').val();e[n]=s}),LLMS.MB_Course_Outline.updateSectionOrder(e)},updateSectionOrder:function(t){LLMS.Ajax.call({data:{action:"update_section_order",sections:t},beforeSend:function(){},success:function(){}})},updateLessonOrder:function(t){LLMS.Ajax.call({data:{action:"update_lesson_order",lessons:t},beforeSend:function(){},success:function(){}})},resortLessons:function(){var e={};t(".llms-lesson-tree").each(function(){t(this).find(".llms-lesson").each(function(s){s++;var n=t(this).parent().parent().find('[name="llms_section_id[]"]').val();t(this).find('[name="llms_lesson_parent_section[]"]').val(n),t(this).find('[name="llms_lesson_order[]"]').val(s),t(this).find(".llms-lesson-order").html(s);var i=t(this).find('[name="llms_lesson_id[]"]').val();e[i]={parent_section:n,order:s}})}),LLMS.MB_Course_Outline.updateLessonOrder(e)},createSection:function(e){LLMS.Ajax.call({data:{action:"create_section",title:e.llms_section_name},beforeSend:function(){},success:function(e){e.success===!0&&(t("#llms_course_outline_sort").append(e.data),t(window).trigger("build"),LLMS.MB_Course_Outline.addSectionRowFunctionality(),t("#llms_create_section").each(function(){this.reset()}))}})},addSectionRowFunctionality:function(){t(".llms-lesson-tree").sortable({connectWith:".llms-lesson-tree",axis:"y",placeholder:"placeholder",cursor:"move",forcePlaceholderSize:!0,stop:function(){LLMS.MB_Course_Outline.resortLessons()}}).disableSelection(),t("#llms_course_outline_sort").sortable({connectWith:".sortablewrapper",axis:"y",placeholder:"placeholder",cursor:"move",forcePlaceholderSize:!0,stop:function(){LLMS.MB_Course_Outline.resortSections()}}).disableSelection(),t("a.llms-edit-section-link").click(function(){var e=t(this);t("#"+t(this).attr("data-modal_id")).topModal({title:t(this).attr("data-modal_title"),open:function(){var t=e.parent().parent().find('[name="llms_section_id[]"]').val();LLMS.MB_Course_Outline.getSection(t)}})}),t("a.llms-delete-section-link").click(function(){var e=t(this);t("#"+t(this).attr("data-modal_id")).topModal({title:t(this).attr("data-modal_title"),open:function(){var s=e.parent().parent().find('[name="llms_section_id[]"]').val();t("#llms-section-delete-id").val(s)}})})},addLessonRowFunctionality:function(){t("a.llms-edit-lesson-link").click(function(){var e=t(this);t("#"+t(this).attr("data-modal_id")).topModal({title:t(this).attr("data-modal_title"),open:function(){var t=e.parent().parent().parent().find('[name="llms_lesson_id[]"]').val();LLMS.MB_Course_Outline.getLesson(t)}})}),t(".llms-remove-lesson-link").on("click",function(e){e.preventDefault();var s=t(this).parent().parent().parent().find('[name="llms_lesson_id[]"]').val();LLMS.MB_Course_Outline.removeLesson(s)})},createLesson:function(e){LLMS.Ajax.call({data:{action:"create_lesson",title:e.llms_lesson_name,excerpt:e.llms_lesson_excerpt,section_id:e.llms_section},beforeSend:function(){},success:function(s){s.success===!0&&(t(".llms-section").each(function(){var n=t(this).find('[name="llms_section_id[]"]').val();n===e.llms_section&&t(this).find("#llms_section_tree_"+e.llms_section).append(s.data)}),t(window).trigger("build"),LLMS.MB_Course_Outline.addLessonRowFunctionality(),t("#llms_create_lesson").each(function(){this.reset()}))}})},addExistingLesson:function(e){LLMS.Ajax.call({data:{action:"add_lesson_to_course",lesson_id:e.llms_lesson,section_id:e.llms_section},beforeSend:function(){},success:function(s){s.success===!0&&(t(".llms-section").each(function(){var n=t(this).find('[name="llms_section_id[]"]').val();n===e.llms_section&&t(this).find("#llms_section_tree_"+e.llms_section).append(s.data)}),t(window).trigger("build"),LLMS.MB_Course_Outline.addLessonRowFunctionality(),t("#llms_add_existing_lesson").each(function(){this.reset()}))}})},getSections:function(){LLMS.Ajax.call({data:{action:"get_course_sections"},success:function(e){e.success===!0&&(t("#llms-section-select").empty(),t.each(e.data,function(e,s){var n=t('<option value="'+s.ID+'">'+s.post_title+"</option>");t("#llms-section-select").append(n)}),t("#llms-section-select").trigger("chosen:updated"))}})},getSection:function(e){LLMS.Ajax.call({data:{action:"get_course_section",section_id:e},success:function(e){e.success===!0&&(t("#llms-section-edit-name").val(e.data.post.post_title),t("#llms-section-edit-id").val(e.data.id))}})},getLesson:function(e){LLMS.Ajax.call({data:{action:"get_course_lesson",lesson_id:e},success:function(e){e.success===!0&&(t("#llms-lesson-edit-name").val(e.data.title),t("#llms-lesson-edit-excerpt").val(e.data.excerpt),t("#llms-lesson-edit-id").val(e.data.id))}})},updateSection:function(e){LLMS.Ajax.call({data:{action:"update_course_section",section_id:e.llms_section_edit_id,title:e.llms_section_edit_name},success:function(s){s.success===!0&&(t(".llms-section").each(function(){var n=t(this).find('[name="llms_section_id[]"]').val();n===e.llms_section_edit_id&&t(this).find(".llms-section-title").html(s.data.title)}),t(window).trigger("build"),t("#llms_edit_section").each(function(){this.reset()}))}})},updateLesson:function(e){LLMS.Ajax.call({data:{action:"update_course_lesson",lesson_id:e.llms_lesson_edit_id,title:e.llms_lesson_edit_name,excerpt:e.llms_lesson_edit_excerpt},success:function(s){s.success===!0&&(t(".llms-lesson").each(function(){var n=t(this).find('[name="llms_lesson_id[]"]').val();n===e.llms_lesson_edit_id&&(t(this).find(".llms-lesson-title").html(s.data.title.title),t(this).find(".llms-lesson-excerpt").html(s.data.excerpt.post_excerpt))}),t(window).trigger("build"),t("#llms_edit_lesson").each(function(){this.reset()}))}})},removeLesson:function(e){LLMS.Ajax.call({data:{action:"remove_course_lesson",lesson_id:e},success:function(s){s.success===!0&&t(".llms-lesson").each(function(){var s=t(this).find('[name="llms_lesson_id[]"]').val();s===e&&(t(this).remove(),LLMS.MB_Course_Outline.resortLessons())})}})},deleteSection:function(e){LLMS.Ajax.call({data:{action:"delete_course_section",section_id:e.llms_section_delete_id},success:function(s){s.success===!0&&(t(".llms-section").each(function(){var s=t(this).find('[name="llms_section_id[]"]').val();s===e.llms_section_delete_id&&(t(this).remove(),LLMS.MB_Course_Outline.resortSections())}),t(window).trigger("build"))}})},getLessons:function(){LLMS.Ajax.call({data:{action:"get_lesson_options_for_select"},success:function(e){e.success===!0&&(t("#llms-lesson-select").empty(),t.each(e.data,function(e,s){var n=t('<option value="'+e+'">'+s+"</option>");t("#llms-lesson-select").append(n)}),t("#llms-lesson-select").trigger("chosen:updated"))}})},setup_course:function(){var e=LLMS.Rest,s=["post-new.php"],n="course",i=e.get_query_vars();e.is_path(s)&&i.post_type===n&&(t(document).ready(function(){t("#pop1").topModal({title:"Create New Course"})}),t("#llms-create-course-submit").click(function(e){t("#title").val(t("#llms-course-name").val()),t("#save-post").click(),e.preventDefault()}))}},LLMS.OutlineCollapse={$outlines:null,init:function(){this.$outlines=t(".llms-widget-syllabus--collapsible"),this.$outlines.length&&this.bind()},bind:function(){var e=this;this.$outlines.each(function(){var s=t(this),n=s.find(".llms-section .section-header");n.on("click",function(s){s.preventDefault();var n=t(this),i=n.closest(".llms-section"),l=e.get_section_state(i);switch(l){case"closed":e.open_section(i);break;case"opened":e.close_section(i)}}),s.find(".llms-collapse-toggle").on("click",function(s){s.preventDefault();var i=t(this),l=i.attr("data-action"),o="close"===l?"opened":"closed";n.each(function(){var s=t(this).closest(".llms-section"),n=e.get_section_state(s);if(o!==n)return!0;switch(n){case"closed":e.close_section(s);break;case"opened":e.open_section(s)}t(this).trigger("click")})})})},close_section:function(t){t.removeClass("llms-section--opened").addClass("llms-section--closed")},open_section:function(t){t.removeClass("llms-section--closed").addClass("llms-section--opened")},get_section_state:function(t){return t.hasClass("llms-section--opened")?"opened":"closed"}},t.extend(LLMS.PasswordStrength,{$pass:t(".llms-password"),$conf:t(".llms-password-confirm"),$meter:t(".llms-password-strength-meter"),$form:null,init:function(){if(!t("body").hasClass("wp-admin")&&this.$meter.length){this.$form=this.$pass.closest("form");var e,s=this,n=0;e=setInterval(function(){if(n>=300)console.log("cannot do password strength meter.");else{if("undefined"==typeof wp&&"undefined"==typeof wp.passwordStrength)return void n++;s.bind()}clearInterval(e)},100)}},bind:function(){var t=this;this.$form.hasClass("llms-checkout")||this.$form.on("submit",t,t.submit),t.$pass.add(t.$conf).on("keyup",function(){t.check_strength()})},check_strength:function(){var t=this.$pass.closest(".llms-form-field"),e=this.$conf.closest(".llms-form-field"),s=this.$pass.val().length,n=this.$conf.val().length;return s||n?(this.get_current_strength_status()?(t.removeClass("invalid").addClass("valid"),n&&e.removeClass("invalid").addClass("valid")):(t.removeClass("valid").addClass("invalid"),n&&e.removeClass("valid").addClass("invalid")),this.$meter.removeClass("too-short very-weak weak medium strong mismatch"),this.$meter.show().addClass(this.get_current_strength("slug")),void this.$meter.html(this.get_current_strength("text"))):(t.removeClass("valid invalid"),e.removeClass("valid invalid"),void this.$meter.hide())},checkout:function(t,e){e(t.get_current_strength_status()?!0:LLMS.l10n.translate("There is an issue with your chosen password."))},get_blacklist:function(){var t=wp.passwordStrength.userInputBlacklist();return t},get_current_strength:function(t){t=t||"int";var e,s=this.$pass.val(),n=this.$conf.val();return s.length<6?e=-1:(e=wp.passwordStrength.meter(s,this.get_blacklist(),n),0===e&&(e=1)),"slug"===t?this.get_strength_slug(e):"text"===t?this.get_strength_text(e):e},get_current_strength_status:function(){var t=this.get_current_strength(),e=this.get_strength_value(this.get_minimum_strength());return 5!==t&&t>=e},get_strength_slug:function(t){var e={"-1":"too-short",1:"very-weak",2:"weak",3:"medium",4:"strong",5:"mismatch"};return e[t]?e[t]:e[5]},get_strength_text:function(t){var e={"-1":LLMS.l10n.translate("Too Short"),1:LLMS.l10n.translate("Very Weak"),2:LLMS.l10n.translate("Weak"),3:LLMS.l10n.translate("Medium"),4:LLMS.l10n.translate("Strong"),5:LLMS.l10n.translate("Mismatch")};return e[t]?e[t]:e[5]},get_strength_value:function(t){var e={"too-short":-1,"very-weak":1,weak:2,medium:3,strong:4,mismatch:5};return e[t]?e[t]:e.mismatch},submit:function(e){var s=e.data;e.preventDefault(),s.$pass.trigger("keyup"),s.get_current_strength_status()?(s.$form.off("submit",s.submit),s.$form.trigger("submit")):(t("html, body").animate({scrollTop:s.$meter.offset().top-100},200),s.$meter.hide(),setTimeout(function(){s.$meter.fadeIn(400)},220))}}),LLMS.Pricing_Tables={init:function(){var e=this;t("body").hasClass("wp-admin")||t(".llms-access-plans").length&&(LLMS.wait_for_matchHeight(function(){e.bind()}),this.$locked=t('a[href="#llms-plan-locked"]'),this.$locked.length&&e.bind_locked())},bind:function(){t(".llms-access-plan-content").matchHeight(),t(".llms-access-plan-pricing.trial").matchHeight()},bind_locked:function(){var e=this;this.$locked.on("click",function(){return!1}),this.$locked.on("mouseenter",function(){var s=t(this).find(".llms-tooltip");s.length||(s=e.get_tooltip(),t(this).append(s)),setTimeout(function(){s.addClass("show")},10)}),this.$locked.on("mouseleave",function(){var e=t(this).find(".llms-tooltip");e.removeClass("show")})},get_tooltip:function(){var e=LLMS.l10n.translate("This plan is for members only. Click the links above to learn more."),s=t('<div class="llms-tooltip" />');return s.append('<div class="llms-tooltip-content">'+e+"</div>"),s}},LLMS.Quiz={init:function(){var e=LLMS.Rest,s=["llms_quiz"];(e.is_path(s)||t("body").hasClass("single-llms_quiz"))&&this.bind()},bind:function(){var e=this;t("#llms-quiz-timer").hide(),t("#llms_start_quiz").click(function(){return e.start_quiz(),!1}),t(".view-summary").click(function(){var e=t(".accordion");e.hasClass("hidden")?(e.fadeIn(300),e.removeClass("hidden"),t(this).text(LLMS.l10n.translate("Hide Summary"))):(e.fadeOut(300),e.addClass("hidden"),t(this).text(LLMS.l10n.translate("View Summary")))}),this.chart_quiz_grade()},chart_quiz_grade:function(){var e=t(".llms-animated-circle"),s=t(".llms-progress-circle-count"),n=t("#llms-grade-value").val(),i=430*n/100;e.css({"stroke-dashoffset":430-i}),s.html(Math.round(n)+"%")},start_quiz:function(){var e=t("#llms-quiz").val(),s=t("#llms-user").val(),n=new Ajax("post",{action:"start_quiz",quiz_id:e,user_id:s},(!0));n.start_quiz(e,s)},answer_question:function(){if(t("input[name=llms_option_selected]:checked").length<=0){t("#llms-quiz-question-wrapper .llms-error").remove();var e=LLMS.l10n.translate("You must enter an answer to continue.");t("#llms-quiz-question-wrapper").prepend('<div class="llms-error">'+e+"</div>")}else{var s=t("#llms-quiz").val(),n=t("#question-type").val(),i=t("#question-id").val(),l=t("input[name=llms_option_selected]:checked").val(),o=new Ajax("post",{action:"answer_question",quiz_id:s,question_type:n,question_id:i,answer:l},(!0));o.answer_question(n,i,l)}},previous_question:function(){var e=t("#llms-quiz").val(),s=t("#question-id").val(),n=new Ajax("post",{action:"previous_question",quiz_id:e,question_id:s},(!0));n.previous_question(e,s)},start_quiz_timer:function(){var e=t("#set-time").val();if(e){var s,n,i,l,o=(new Date).getTime()+60*e*1e3,a=60*e*1e3,c=document.getElementById("tiles"),r=this;setTimeout(function(){r.complete_quiz()},a),this.getCountdown(e,o,a,s,n,i,l,c),setInterval(function(){r.getCountdown(e,o,a,s,n,i,l,c)},1e3)}},getCountdown:function(e,s,n,i,l,o,a,c){var r=(new Date).getTime(),d=(s-r)/1e3;d>=0&&(1e3*d<n/2&&(t("#tiles").removeClass("color-full"),t("#tiles").addClass("color-half")),1e3*d<n/4&&(t("#tiles").removeClass("color-half"),t("#tiles").addClass("color-empty")),i=this.pad(parseInt(d/86400)),d%=86400,l=this.pad(parseInt(d/3600)),d%=3600,o=this.pad(parseInt(d/60)),a=this.pad(parseInt(d%60)),c.innerHTML="<span>"+l+":</span><span>"+o+":</span><span>"+a+"</span>")},pad:function(t){return(t<10?"0":"")+t},complete_quiz:function(){var e=t("#llms-quiz").val(),s=t("#question-type").val(),n=t("#question-id").val(),i=t("input[name=llms_option_selected]:checked").val(),l=new Ajax("post",{action:"complete_quiz",quiz_id:e,question_id:n,question_type:s,answer:i},(!0));l.complete_quiz(e,n,s,i)}},LLMS.Review={init:function(){this.bind()},bind:function(){t("#llms_review_submit_button").click(function(){""!==t("#review_title").val()&&""!==t("#review_text").val()?jQuery.ajax({type:"post",dataType:"json",url:window.llms.ajaxurl,data:{action:"LLMSSubmitReview",review_title:t("#review_title").val(),review_text:t("#review_text").val(),pageID:t("#post_ID").val()},success:function(){console.log("Review success"),t("#review_box").hide("swing"),t("#thank_you_box").show("swing")},error:function(t,e,s){console.log(t),console.log(e),console.log(s)}}):(""===t("#review_title").val()?t("#review_title_error").show("swing"):t("#review_title_error").hide("swing"),""===t("#review_text").val()?t("#review_text_error").show("swing"):t("#review_text_error").hide("swing"))}),t("#_llms_display_reviews").attr("checked")?(t(".llms-num-reviews-top").addClass("top"),t(".llms-num-reviews-bottom").show()):t(".llms-num-reviews-bottom").hide(),t("#_llms_display_reviews").change(function(){t("#_llms_display_reviews").attr("checked")?(t(".llms-num-reviews-top").addClass("top"),t(".llms-num-reviews-bottom").show()):(t(".llms-num-reviews-top").removeClass("top"),t(".llms-num-reviews-bottom").hide())}),console.log("Review Methods Bound")}},LLMS.Spinner={get:function(e,s){var n=e.find(".llms-spinning").first();return n.length||(s=s?s:"default",n=t('<div class="llms-spinning"><i class="llms-spinner '+s+'"></i></div>'),e.append(n)),n},start:function(e,s){var n=this;e.each(function(){n.get(t(this),s).show()})},stop:function(e){var s=this;e.each(function(){s.get(t(this)).hide()})}},LLMS.Rest={init:function(){this.bind()},bind:function(){},is_path:function(t){for(var e=!1,s=window.location.href,n=0;n<t.length;n++)s.search(t[n])>0&&!e&&(e=!0);return e},get_query_vars:function(){for(var t,e=[],s=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),n=0;n<s.length;n++)t=s[n].split("="),e.push(t[0]),e[t[0]]=t[1];return e}},LLMS.init=function(){for(var t in LLMS)"object"==typeof LLMS[t]&&null!==LLMS[t]&&void 0!==LLMS[t].init&&"function"==typeof LLMS[t].init&&LLMS[t].init()},LLMS.wait_for_matchHeight=function(e){var s,n=0;s=setInterval(function(){if(n>=300)console.log("cannot match access plan item heights.");else{if("undefined"==typeof t.fn.matchHeight)return void n++;e()}clearInterval(s)},100)},LLMS.init(t)}(jQuery);