(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4859],{94859:function(e){"use strict";e.exports=JSON.parse("{\"md\":\"# Tags\\n\\n## Introduction\\n\\nTags contain one or more Rule Groups that define logic to be executed on the client (or server, via server-to-server actions[^1]). The below is an example Tag that could be installed on a web-page.\\n\\n```html\\n\x3c!-- Tag - Example Placement --\x3e\\n<div data-s8=\\\"true\\\" data-code=\\\"c2a9b01da36026715dd9\\\"></div>\\n\x3c!-- / Tag --\x3e\\n```\\n\\nThere are two types of tags, **Head** Tags and **Placement** Tags. A Head Tag has no visible container and can be auto-loaded when the Tag Manager is called on the page. A Placement tag is designed to contain some advert or widget code and will render that for the visitor to see.\\n\\nA tag can be called multiple times on a page - this is particularly useful for ad-slots. Our debug tool will help you locate any placements installed and also inform you of any tags that could be potentially missing from the page.\\n\\n[^1]: This feature has not yet been released and is still currently in private beta.\\n\\n## Adding a new Tag\\n\\nTo create a new Tag, click on the 'Add' button in the top right of the page. Please make sure you have navigated to the correct Revision under the desired Application to make the new Tag addition.\\n\\nOn clicking the 'Add' button you should be prompted with a new right window pane that is prompting you to enter a name and select a type. If Placement type is selected you will be prompted to enter both width and height and that should directly correspond to the advert or widget that will be placed inside. A head tag has no size and will be invisible to the user. The purpose of the head tag is to inject scripts, drop marketing pixels or take other actions that don't require a designated area to render a script or block of HTML.\\n\\nOnce submitted and provided there are no errors, the window pane will close, and the table should refresh. You should be prompted to install your new Tag and the snippet will look similar to the one above in the introduction.\\n\\n## Automatic loading\\n\\nHead tags have the option of being automatically loaded by the Tag Manager. This feature enabled tags to load quicker and reduces the operational complexity too.\\n\\n## Duplicating Tags\\n\\nWhile Revisions of the same tag will all share the same Tag 'Code' (e.g. c2a9b01da36026715dd9), if a Tag is duplicated, that clone will automatically be assigned a new Tag 'Code'.\\n\\nTo duplicate an existing Tag, select the Duplicate Tag (Copy icon) in the 'Actions' column of the Tag you wish to clone. Enter a new name for the placement and select \\\"Create Tag\\\".\\n\\n## Installing Tags\\n\\nTo install a Tag, select the 'Code' icon. A window will then display a snippet of code that needs to be copied and pasted into your web-page. For Head tags, these need to be placed in the top of the body section. Placement tags need to be installed on the website where the component (advert or widget) should be rendered.\\n\\n## Managing Tags\\n\\nTo change the dimensions or loading characteristics of the Tag, select the 'Pencil' icon in the 'Actions' column of the Tag which you would like to alter. A right window pane should present itself with and display the properties relevant to the type of tag you are editing.\\n\\n## Deleting Tags\\n\\nPlease make sure that tags are no longer in use before deleting them. To delete a Tag please select the 'Trash' icon in the 'Actions' menu on the Tag you wish to delete. Once deleted, all the children including any Rule Groups, Rules, Actions etc will all be removed. \\n\\n<Info>\\n\\nPlease also note that removing this tag from this Revision **will not** remove it from any other Revision.\\n\\n</Info>\\n\"}")}}]);