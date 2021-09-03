(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7125],{7125:function(e){"use strict";e.exports=JSON.parse("{\"md\":\"# Core Events\\n\\n## Introduction\\n\\nCore Events are pre-defined Platform Events that are provided by the Scale8 Platform. This is similar to the list of events provided by Google Tag Manager, Telium, Adobe DTM etc.\\n\\n<Info>\\n\\nA new feature will be released soon, that will make other Platforms created by developers outside Scale8 available. These new Platforms can contain Platform Events and users will be free to install and use them.\\n\\n</Info>\\n\\n## Click Elements\\n\\nElements will be selected via the 'selector' provided and a click event listener will be added to it.\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| selector | Any valid Document.querySelector() value. See MDN Web Docs for more information. | STRING |  | Yes |\\n\\n## Consent Management Platform - Has Consent\\n\\nThis event will be triggered when the necessary consent has been met. We only support IAB compatible frameworks for both GDPR and CCPA Consent Management Platforms (CMPs). This event will trigger if not caught by GDPR or CCPA requirements (geographical restrictions listed).\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| ccpa_enabled | If your Consent Management Platform (CMP) is CCPA compliant, have you enabled it for the United States? If you select 'Enabled' we will check for compliance via the API | STRING | Enabled | No |\\n| gdpr_consent_purposes | A list of consent purposes to check against that apply only to GDPR. If GDPR is not applicable this list will be ignored. | ARRAY_INT |  | Yes |\\n| gdpr_consent_vendors | A list of vendors to check against that apply only to GDPR. If GDPR is not applicable this list will be ignored. | ARRAY_INT |  | Yes |\\n\\n## HTML Element Attribute Match\\n\\nTest for an HTML element's attribute to match some provided value\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| selector | Any valid Document.querySelector() value. See MDN Web Docs for more information. | STRING |  | Yes |\\n| attribute | The name of the HTML element's attribute that holds the value to be compared | STRING |  | Yes |\\n| condition | A condition that should match the HTML element's attribute to the provided value | STRING |  | Yes |\\n| value | The value that will be compared to the HTML element's attribute value via the condition specified | STRING |  | Yes |\\n\\n## HTML Element In-view\\n\\nAn element will be selected via the 'selector' provided and will be monitored to see if it comes in view.\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| selector | Any valid Document.querySelector() value. See MDN Web Docs for more information. | STRING |  | Yes |\\n| in_view_percentage | The percentage in-view before this event should fire | STRING |  | Yes |\\n| minimum_time_in_view | The minimum duration the element must be in-view for. This is reset on any toggle of view status | INT | 0 | No |\\n\\n## HTML Form Submit\\n\\nAn element will be selected via the 'selector' provided and a form submit event listener will be added to it.\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| selector | Any valid Document.querySelector() value. See MDN Web Docs for more information. | STRING |  | Yes |\\n\\n## History Change\\n\\nTest will return true if the query string has been changed\\n\\n## JavaScript Error\\n\\nTest will return true if there was a JavaScript error\\n\\n## Page Blur\\n\\nTest will return true only when the page is not in focus\\n\\n## Page Focus\\n\\nTest will return true only when the page is in focus\\n\\n## Page Loaded\\n\\nTest will return true when the DOM is ready and all resources have been loaded\\n\\n## Page Ready\\n\\nTest will return true when the DOM is ready\\n\\n## Tag Click\\n\\nThis event will fire if the tag's container is clicked\\n\\n## Tag In-view\\n\\nThis event will fire when the tag's container reaches the in-view requirement specified\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| in_view_percentage | The percentage in-view before this event should fire | STRING |  | Yes |\\n| minimum_time_in_view | The minimum duration the element must be in-view for. This is reset on any toggle of view status | INT | 0 | No |\\n\\n## Tag Timer\\n\\nOnce the tag is called, the timer is set and the event will trigger once the delay time has elapsed\\n\\n### Configuration Properties\\n\\n| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |\\n|---|---|---|---|---|\\n| delay | The delay in milliseconds before the event should fire | INT |  | Yes |\"}")}}]);