/* @ds-bundle: {"format":4,"namespace":"CoolieSecretMenuDesignSystem_9a775d","components":[{"name":"ChatBubble","sourcePath":"components/coolie/ChatBubble.jsx"},{"name":"CoolieAvatar","sourcePath":"components/coolie/CoolieAvatar.jsx"},{"name":"MacroStat","sourcePath":"components/coolie/MacroStat.jsx"},{"name":"RecipeCard","sourcePath":"components/coolie/RecipeCard.jsx"},{"name":"StickerFrame","sourcePath":"components/coolie/StickerFrame.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SHAPE_GEOMETRY","sourcePath":"components/core/ShapeIcon.jsx"},{"name":"SHAPES","sourcePath":"components/core/ShapeIcon.jsx"},{"name":"ShapeIcon","sourcePath":"components/core/ShapeIcon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressMeter","sourcePath":"components/feedback/ProgressMeter.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"ChipGroup","sourcePath":"components/forms/ChipGroup.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/shapes/shapes.js":"bc7ad44d9eb7","components/coolie/ChatBubble.jsx":"8c8cbce989d9","components/coolie/CoolieAvatar.jsx":"ebd13a21b180","components/coolie/MacroStat.jsx":"dbc65d0343a4","components/coolie/RecipeCard.jsx":"3ff0a47ada33","components/coolie/StickerFrame.jsx":"2c2b0bb86b64","components/core/Badge.jsx":"388258366ae0","components/core/Button.jsx":"1bb7a14e0001","components/core/Card.jsx":"c731f9a4b047","components/core/IconButton.jsx":"f75b0b8de566","components/core/Marquee.jsx":"d3a6fa9f73fc","components/core/SectionHeading.jsx":"116e4456d969","components/core/ShapeIcon.jsx":"9fd1c6df2dd6","components/core/Tag.jsx":"c91127ecace3","components/feedback/Dialog.jsx":"7a487dc0dbf9","components/feedback/ProgressMeter.jsx":"6a27b85d72f9","components/feedback/Toast.jsx":"50b2571d96f5","components/forms/Checkbox.jsx":"a08e3c658c88","components/forms/ChipGroup.jsx":"babc8b856fbc","components/forms/Input.jsx":"58e711da5c4e","components/forms/SearchBar.jsx":"cb7d1ae24b69","components/forms/Select.jsx":"23241590b8a0","components/forms/Switch.jsx":"126ae5c73c1c","components/navigation/Footer.jsx":"88c3a39ffae5","components/navigation/NavBar.jsx":"ea2e672c13b7","components/navigation/Tabs.jsx":"dd8eb1c1181f","ui_kits/website/App.jsx":"51db6f0bfb87","ui_kits/website/BrowseScreen.jsx":"ac37df3cb0df","ui_kits/website/ChatScreen.jsx":"4fb4c64ed99d","ui_kits/website/HomeScreen.jsx":"151b8dc0ce9b","ui_kits/website/PlanScreen.jsx":"0ef5c9bc153e","ui_kits/website/RecipeScreen.jsx":"326ccf493e6b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoolieSecretMenuDesignSystem_9a775d = window.CoolieSecretMenuDesignSystem_9a775d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/shapes/shapes.js
try { (() => {
/* Coolie Secret Menu — brand shape geometry, extracted from assets/shapes/*.svg so shapes can be
   inlined and recoloured (fill/stroke = currentColor) without CSS masks. Generated; do not hand-edit. */
window.CSM_SHAPES = {
  "asterisk-solid": {
    "viewBox": "0 0 102.968 102.97",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m56.368,102.97h-9.766c-2.252,0-4.078-1.826-4.078-4.078v-23.27c0-.845-1.02-1.271-1.621-.677l-16.608,16.399c-1.591,1.591-4.173,1.591-5.764,0l-6.905-6.905c-.77-.77-1.196-1.795-1.194-2.886,0-1.089.426-2.114,1.196-2.882l16.451-16.452c.598-.598.178-1.62-.667-1.625l-23.334-.147c-2.248,0-4.078-1.83-4.078-4.078v-9.766c0-2.252,1.826-4.078,4.078-4.078h23.268c.845,0,1.271-1.02.677-1.621L11.627,24.298c-.768-.766-1.194-1.791-1.194-2.88-.002-1.091.424-2.116,1.194-2.886l6.905-6.905c1.592-1.592,4.172-1.592,5.764,0l16.456,16.456c.598.598,1.62.178,1.625-.667l.147-23.338c0-2.248,1.83-4.078,4.078-4.078h9.766c2.252,0,4.078,1.826,4.078,4.078v23.268c0,.845,1.02,1.271,1.621.677l16.606-16.397c1.591-1.591,4.173-1.591,5.764,0l6.905,6.905c.77.77,1.196,1.795,1.194,2.886,0,1.089-.426,2.114-1.196,2.882l-16.451,16.452c-.598.598-.178,1.62.667,1.625l23.334.147c2.248,0,4.078,1.83,4.078,4.078v9.766c0,2.252-1.826,4.078-4.078,4.078h-23.268c-.845,0-1.271,1.02-.677,1.621l16.397,16.606c.768.766,1.194,1.791,1.194,2.88.002,1.091-.424,2.116-1.194,2.886l-6.905,6.905c-1.592,1.592-4.172,1.592-5.764,0l-16.454-16.454c-.598-.598-1.62-.178-1.625.667l-.147,23.336c0,2.248-1.83,4.078-4.078,4.078Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "asterisk-outline": {
    "viewBox": "0 0 102.968 102.97",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m56.368,102.97h-9.766c-2.248,0-4.078-1.83-4.078-4.078v-25.548l-18.229,17.999c-1.591,1.591-4.173,1.591-5.764,0l-6.905-6.905c-.77-.77-1.196-1.795-1.194-2.886,0-1.089.426-2.114,1.196-2.882l18.061-18.063-25.612-.161c-2.248,0-4.078-1.83-4.078-4.078v-9.766c0-2.248,1.83-4.078,4.078-4.078h25.546L11.627,24.298c-.768-.766-1.194-1.791-1.194-2.88-.002-1.091.424-2.116,1.194-2.886l6.905-6.905c1.591-1.591,4.173-1.591,5.764,0l18.067,18.067.161-25.616c0-2.248,1.83-4.078,4.078-4.078h9.766c2.248,0,4.078,1.83,4.078,4.078v25.546l18.227-17.997c1.591-1.591,4.173-1.591,5.764,0l6.905,6.905c.77.77,1.196,1.795,1.194,2.886,0,1.089-.426,2.114-1.196,2.882l-18.061,18.063,25.612.161c2.248,0,4.078,1.83,4.078,4.078v9.766c0,2.248-1.83,4.078-4.078,4.078h-25.546l17.997,18.227c.768.766,1.194,1.791,1.194,2.88.002,1.091-.424,2.116-1.194,2.886l-6.905,6.905c-1.591,1.591-4.173,1.591-5.764,0l-18.065-18.065-.161,25.614c0,2.248-1.83,4.078-4.078,4.078Zm-13.943-33.706c.527,0,1.058.103,1.567.313,1.527.634,2.514,2.112,2.514,3.767v25.548l9.861.095.095-25.641c0-1.655.988-3.133,2.514-3.767,1.534-.63,3.273-.288,4.445.881l18.065,18.067,7.037-6.905-18.063-18.199c-1.171-1.171-1.517-2.915-.885-4.443.634-1.528,2.112-2.516,3.767-2.516h25.546l.095-9.861-.095-.095h-25.546c-1.655,0-3.133-.988-3.767-2.516-.632-1.528-.286-3.273.885-4.443l18.063-18.065-6.905-7.039-18.198,18.065c-1.169,1.173-2.911,1.515-4.445.883-1.527-.634-2.514-2.112-2.514-3.767V4.078l-9.861-.095-.095,25.643c0,1.655-.988,3.133-2.514,3.767-1.53.632-3.271.288-4.445-.881L21.48,14.442l-7.037,6.905,18.063,18.199c1.171,1.171,1.517,2.915.885,4.443-.634,1.528-2.112,2.516-3.767,2.516H4.078l-.095,9.861,25.641.095c1.655,0,3.133.988,3.767,2.516.632,1.528.286,3.273-.885,4.443l-18.063,18.065,6.905,7.039,18.199-18.067c.782-.782,1.82-1.196,2.878-1.196Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "sparkle-6": {
    "viewBox": "0 0 163.844 189.191",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m108.76,84.389c18.879-11.544,37.374-23.681,55.084-37.091-20.468,8.632-40.227,18.58-59.663,29.158-7.853,4.274-17.454-1.269-17.679-10.207-.557-22.122-1.821-44.208-4.58-66.249-2.758,22.037-4.022,44.118-4.579,66.235-.225,8.939-9.828,14.482-17.681,10.205C40.23,65.858,20.472,55.914,0,47.298c17.695,13.419,36.181,25.555,55.057,37.089,7.631,4.663,7.631,15.753,0,20.417C36.181,116.338,17.695,128.475,0,141.893c20.468-8.615,40.222-18.556,59.649-29.136,7.854-4.277,17.458,1.268,17.681,10.208.551,22.114,1.819,44.192,4.592,66.225,2.774-22.038,4.041-44.12,4.592-66.239.223-8.939,9.824-14.484,17.679-10.21,19.433,10.576,39.188,20.521,59.651,29.152-17.71-13.41-36.204-25.547-55.084-37.091-7.628-4.664-7.628-15.75,0-20.414Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "crosshair-sparkle": {
    "viewBox": "0 0 238.968 238.968",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m238.968,115.718h-95.939c-10.924,0-19.779-8.856-19.779-19.779V0h-7.532v95.939c0,10.924-8.856,19.779-19.779,19.779H0v7.532h95.939c10.924,0,19.779,8.856,19.779,19.779v95.939h7.532v-95.939c0-10.924,8.856-19.779,19.779-19.779h95.939v-7.532Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "star-8": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"467.5 250 358.25 294.81 403.79 403.79 294.81 358.25 250 467.5 205.19 358.25 96.21 403.79 141.75 294.81 32.5 250 141.75 205.19 96.21 96.21 205.19 141.75 250 32.5 294.81 141.75 403.79 96.21 358.25 205.19 467.5 250\"></polygon>"
  },
  "burst-seal": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"467.5 250 426.91 290.4 446 344.4 391.85 363.11 385.62 420.05 328.72 413.5 298.39 462.09 250 431.42 201.61 462.09 171.28 413.5 114.38 420.05 108.15 363.11 54.01 344.4 73.09 290.4 32.5 250 73.09 209.6 54.01 155.6 108.15 136.89 114.38 79.95 171.28 86.5 201.61 37.91 250 68.58 298.39 37.91 328.72 86.5 385.62 79.95 391.85 136.89 446 155.6 426.91 209.6 467.5 250\"></polygon>"
  },
  "blob-star": {
    "viewBox": "0 0 197.3 139.575",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m185.025,129.767l-26.394-71.503c-1.674-4.535.473-9.589,4.899-11.532l30.161-13.243c5.842-2.565,4.21-11.263-2.165-11.534l-54.624-2.329c-2.922-.125-5.608-1.641-7.225-4.078l-5.198-7.834c-5.294-7.978-16.073-10.118-24.013-4.766l-17.566,11.841c-1.509,1.017-3.288,1.561-5.108,1.561h-36.181c-5.495,0-8.817,6.075-5.852,10.702l4.075,6.356c2.527,3.943,1.665,9.157-1.996,12.077L2.48,73.679c-5.392,4.3-1.271,12.933,5.463,11.444l65.016-14.373c2.507-.554,5.131-.028,7.231,1.449l93.85,66.019c5.825,4.097,13.452-1.77,10.986-8.451Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "globe-wire": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M410.25,156.87H467.5v-2H409.12q-3.51-6.18-7.54-12.11A184.67,184.67,0,0,0,314.38,74a179.92,179.92,0,0,0-62.5-11.44l-.17,0a8.92,8.92,0,0,0-3.61.06C193.91,63.48,141,88.28,106.3,132A177,177,0,0,0,91,154.84H32.5v2H89.84a195.16,195.16,0,0,0-23.56,92.41H32.5v1.52H66.27c0,32.11,7.8,64.21,23.44,92.41H32.5v2H90.86l.47.84c39.27,67.79,119.49,103.76,196.24,87.75,51.79-10.8,95.52-44.12,121.2-88.59H467.5v-2H409.92a183.11,183.11,0,0,0,21.78-64.65,214.47,214.47,0,0,0,1.87-26.8c0-.35,0-.69,0-1H467.5v-1.52H433.59c0-.43,0-1,0-1.51C433.1,215.88,425.57,184.66,410.25,156.87Zm19.52,63.59a165.92,165.92,0,0,1,2.8,28.82H366.16c0-.43,0-1,0-1.54-.29-30.8-4.6-61.78-14.83-90.87h53.28A178.81,178.81,0,0,1,429.77,220.46ZM152.26,156.87h62.63a732.11,732.11,0,0,0-5.12,79.26q-.11,6.57-.12,13.15H134.59A254.79,254.79,0,0,1,152.26,156.87Zm99.56,271.49c-1.17,0-2.35,0-3.52,0-3.7-.73-6.8-3.65-9.09-6.61-4.87-6.29-7.88-14.08-10.44-21.54a250.19,250.19,0,0,1-8.85-35.39c-1.21-6.5-2.26-13-3.2-19.6h66.53c-.46,3.2-.93,6.4-1.44,9.59-3.37,21-7.21,44.4-18.32,62.91C260.9,422.07,257.14,427.3,251.82,428.36Zm-35.38-85.15a665.9,665.9,0,0,1-5.66-78.79q-.12-6.81-.14-13.62h78.7c-.06,30.84-1.6,61.82-5.81,92.41Zm0-186.34h67.11a639.78,639.78,0,0,1,5.24,64.49q.5,14,.51,27.92H210.65a691,691,0,0,1,5.75-91.84C216.42,157.28,216.45,157.08,216.48,156.87Zm30.85-85.18c1.54-.06,3.09-.08,4.63,0a13.67,13.67,0,0,1,5.56,3.13c5.44,4.72,8.67,12,11.29,18.57a196.71,196.71,0,0,1,9.39,32.47c2.05,9.61,3.73,19.29,5.11,29H216.76C219,139.46,229.29,76.93,247.33,71.69Zm43,177.59c0-.26,0-.56,0-.89a762.72,762.72,0,0,0-5.27-91.52H347.8a247.07,247.07,0,0,1,15.69,63.93,268.32,268.32,0,0,1,1.66,28.48Zm-5.54-94.44q-.78-6.12-1.69-12.24a344.17,344.17,0,0,0-8.38-41C272.11,92.13,269,82.42,264,73.87l-.69-1.14a74.12,74.12,0,0,1,8.78,2.1c25.63,7.82,45.61,28,59.61,50.14A194.38,194.38,0,0,1,347,154.84ZM236.62,72.9c-4,6.33-6.67,13.64-9,20.67a280.09,280.09,0,0,0-9,38q-2,11.58-3.51,23.25H153.08c10.73-26.19,26.94-51.63,50.51-68A85.05,85.05,0,0,1,236.62,72.9Zm-27,177.9a752.86,752.86,0,0,0,5.29,92.41H152.16c-11.79-29-17.56-60.71-17.56-92.41Zm5.54,94.43c.07.5.12,1,.19,1.49,3.19,24.66,7,51,17.69,73.78a59.63,59.63,0,0,0,3.73,6.78,76.63,76.63,0,0,1-17.38-5.19c-25.22-10.91-43.94-33.17-56.84-56.82a211.67,211.67,0,0,1-9.59-20Zm48.29,81.93a77.84,77.84,0,0,0,6.3-13.42,217.92,217.92,0,0,0,9.48-34.24c2.32-11.33,4.16-22.77,5.63-34.27h62c-1.33,3.22-2.7,6.41-4.18,9.56-11.89,25.28-29.51,49.61-54.35,63.44A80.23,80.23,0,0,1,263.48,427.16Zm21.67-84c2.63-21.23,4-42.65,4.71-64q.47-14,.48-28v-.42h74.81c-.18,31.39-5.67,63.17-17.39,92.41ZM403.27,154.84H350.58c-1.45-4-3-8-4.68-11.89-10.83-25.25-27.06-50-50.12-65.66C340.16,88.81,378.54,117.15,403.27,154.84Zm-199.91-77c-19.3,13.38-33.86,33.51-44.23,54.26a211.54,211.54,0,0,0-9.72,22.73H96.49C121.52,116.33,160.22,89.37,203.36,77.85Zm-108.17,79h53.47c-8.85,25.15-13.31,51.88-14.49,78.44q-.31,7-.34,14H67.45C67.62,216.74,77.88,184.31,95.19,156.87Zm-27,108.31q-.71-7.17-.74-14.38h66.4c0,31.33,4.48,62.83,14.87,92.41H95.19A180.32,180.32,0,0,1,68.18,265.18Zm43.33,100.05a181.55,181.55,0,0,1-15-20h52.92c10.32,28.55,26.7,56.72,51.42,75.12.85.64,1.72,1.26,2.6,1.86A183.44,183.44,0,0,1,111.51,365.23ZM311.2,418.08q-7.6,2.7-15.35,4.67c16.28-11.11,29.34-27.14,39.18-44a205.08,205.08,0,0,0,15.59-33.54h52.66C381.53,378.37,349.14,404.62,311.2,418.08Zm93.39-74.87H351.36a266,266,0,0,0,13.57-64.83c.78-8.81,1.14-17.64,1.21-26.48,0-.4,0-.79,0-1.1h66.41C432.29,284,422,315.87,404.59,343.21Z\"></path>"
  },
  "globe-oval": {
    "viewBox": "0 0 280.45 101.893",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <g> <path d=\"m140.225,0C62.785,0,0,22.82,0,50.956s62.785,50.937,140.225,50.937,140.225-22.82,140.225-50.937S217.665,0,140.225,0Zm0,99.085c-63.999,0-115.872-21.545-115.872-48.129S76.226,2.808,140.225,2.808s115.872,21.545,115.872,48.149-51.873,48.129-115.872,48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m59.618,50.956c0-26.603,36.082-48.149,80.606-48.149-53.645,0-97.114,21.545-97.114,48.149s43.469,48.129,97.114,48.129c-44.525,0-80.606-21.545-80.606-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m237.339,50.956c0-26.603-43.469-48.149-97.114-48.149,44.525,0,80.606,21.545,80.606,48.149s-36.082,48.129-80.606,48.129c53.645,0,97.114-21.545,97.114-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m89.627,50.956c0-26.603,22.661-48.149,50.598-48.149-33.772,0-61.172,21.545-61.172,48.149s27.4,48.129,61.172,48.129c-27.937,0-50.598-21.545-50.598-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m201.376,50.956c0-26.603-27.38-48.149-61.152-48.149,27.937,0,50.598,21.545,50.598,48.149s-22.661,48.129-50.598,48.129c33.772,0,61.152-21.545,61.152-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m115.692,50.956c0-26.603,10.992-48.149,24.532-48.149-16.946,0-30.685,21.545-30.685,48.149s13.74,48.129,30.685,48.129c-13.541,0-24.532-21.545-24.532-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m170.91,50.956c0-26.603-13.74-48.149-30.685-48.149,13.541,0,24.532,21.545,24.532,48.149s-10.992,48.129-24.532,48.129c16.946,0,30.685-21.545,30.685-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g> </g>"
  },
  "star-5": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"250 23.99 277.07 223.97 487.64 196.65 296.38 269.2 396.87 476.01 253.42 294.17 103.13 476.01 217.28 269.2 12.36 196.65 233.17 220.55 250 23.99\"></polygon>"
  },
  "sparkle-4": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M394.51,264.84l87.73-14.84-87.73-14.84c-66.41-11.24-118.43-63.26-129.67-129.67l-14.84-87.73-14.84,87.73c-11.24,66.41-63.26,118.43-129.67,129.67l-87.73,14.84,87.73,14.84c66.41,11.24,118.43,63.26,129.67,129.67l14.84,87.73,14.84-87.73c11.24-66.41,63.26-118.43,129.67-129.67Z\"></path>"
  },
  "slab-quarters": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M44.32,258.81h0c0-60.04,24.34-114.4,63.68-153.75,39.35-39.35,93.7-63.68,153.75-63.68h0v217.43H44.32Z\"></path> <path fill=\"currentColor\" d=\"M238.25,258.81h0c0-88.57,52.96-164.78,128.95-198.67,27.03-12.06,56.97-18.76,88.48-18.76h0v217.43h-217.43Z\"></path> <path fill=\"currentColor\" d=\"M44.32,458.61h0c0-70.07,33.15-132.4,84.62-172.16,36.73-28.38,82.8-45.26,132.81-45.26h0v217.43H44.32Z\"></path> <path fill=\"currentColor\" d=\"M238.25,458.61h0c0-72.28,35.27-136.32,89.53-175.85,35.89-26.15,80.09-41.57,127.9-41.57h0v217.43h-217.43Z\"></path>"
  },
  "pinwheel": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M334.14,302.31v1.3c0,46.11-18.69,87.86-48.91,118.08-30.22,30.22-71.97,48.91-118.08,48.91h-1.3s0-168.29,0-168.29h168.29Z\"></path> <path fill=\"currentColor\" d=\"M197.69,334.15h-1.3c-46.11,0-87.86-18.69-118.08-48.91-30.22-30.22-48.91-71.97-48.91-118.08v-1.3s168.29,0,168.29,0v168.29Z\"></path> <path fill=\"currentColor\" d=\"M165.85,197.69v-1.3c0-46.11,18.69-87.86,48.91-118.08,30.22-30.22,71.97-48.91,118.08-48.91h1.3s0,168.29,0,168.29h-168.29Z\"></path> <path fill=\"currentColor\" d=\"M302.31,165.86h1.3c45.09,0,86.01,17.87,116.06,46.92,31.41,30.36,50.93,72.94,50.93,120.07v1.3s-168.29,0-168.29,0v-168.29Z\"></path>"
  },
  "sparkle-pair": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"246.25 352.1 386.27 327.93 246.25 303.76 222.56 160.93 198.87 303.76 58.85 327.93 198.87 352.1 222.56 494.93 246.25 352.1\"></polygon> <polygon fill=\"currentColor\" points=\"341.72 140.82 441.15 123.66 341.72 106.5 324.89 5.07 308.07 106.5 208.64 123.66 308.07 140.82 324.89 242.26 341.72 140.82\"></polygon>"
  },
  "cushion": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M378.4,407.8l101.57,72.17-72.17-101.57c-54.63-76.88-54.63-179.92,0-256.8l72.17-101.57-101.57,72.17c-76.88,54.63-179.92,54.63-256.8,0L20.03,20.03l72.17,101.57c54.63,76.88,54.63,179.92,0,256.8l-72.17,101.57,101.57-72.17c76.88-54.63,179.92-54.63,256.8,0Z\"></path>"
  },
  "star-cushion": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M341.15,355.56l70.52,50.11-50.11-70.52c-37.93-53.38-37.93-124.92,0-178.3l50.11-70.52-70.52,50.11c-53.38,37.93-124.92,37.93-178.3,0l-70.52-50.11,50.11,70.52c37.93,53.38,37.93,124.92,0,178.3l-50.11,70.52,70.52-50.11c53.38-37.93,124.92-37.93,178.3,0Z\"></path> <path fill=\"currentColor\" d=\"M252.35,387.25l23.28,83.32,5.43-86.34c4.11-65.36,49.12-120.96,112.19-138.58l83.32-23.28-86.34-5.43c-65.36-4.11-120.96-49.12-138.58-112.19l-23.28-83.32-5.43,86.34c-4.11,65.36-49.12,120.96-112.19,138.58l-83.32,23.28,86.34,5.43c65.36,4.11,120.96,49.12,138.58,112.19Z\"></path>"
  },
  "atom-x": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"245.71 272.1 312.27 319.4 264.98 252.84 312.27 186.28 245.71 233.57 179.15 186.28 226.45 252.84 179.15 319.4 245.71 272.1\"></polygon> <path fill=\"currentColor\" d=\"M120.85,488.22c-32.68,0-59.93-9.94-79.53-29.54-31.93-31.93-38.22-84.14-17.7-147.02,19.04-58.36,59.37-120.33,113.54-174.5,54.17-54.17,116.15-94.5,174.51-113.54,62.88-20.52,115.09-14.24,147.01,17.7,31.93,31.93,38.22,84.14,17.7,147.01-19.04,58.36-59.37,120.34-113.54,174.51-54.17,54.17-116.15,94.5-174.5,113.54-24.26,7.92-46.95,11.84-67.48,11.84ZM378.78,51.24c-16.29,0-34.85,3.24-54.9,9.79-52.59,17.16-109.01,54.08-158.89,103.96h0c-49.88,49.88-86.8,106.31-103.95,158.89-15.46,47.37-12.5,86.37,8.11,106.99,20.62,20.61,59.61,23.57,106.99,8.11,52.58-17.16,109.01-54.08,158.89-103.95,49.88-49.88,86.8-106.3,103.96-158.89,15.46-47.37,12.5-86.37-8.12-106.98-11.89-11.89-29.89-17.91-52.08-17.91Z\"></path> <path fill=\"currentColor\" d=\"M379.15,488.23c-20.54,0-43.22-3.93-67.48-11.85-58.36-19.04-120.34-59.37-174.51-113.54-54.17-54.17-94.5-116.15-113.54-174.51C3.1,125.46,9.39,73.25,41.32,41.32c63.27-63.27,204.5-21.18,321.52,95.84,54.17,54.17,94.5,116.15,113.54,174.51,20.52,62.87,14.23,115.09-17.7,147.02-19.61,19.61-46.86,29.55-79.53,29.55ZM121.22,51.24c-22.19,0-40.19,6.02-52.08,17.91-20.61,20.62-23.57,59.61-8.11,106.98,17.16,52.58,54.08,109.01,103.95,158.89,49.88,49.88,106.31,86.8,158.89,103.95,47.36,15.46,86.37,12.5,106.98-8.11,20.62-20.62,23.57-59.61,8.12-106.99-17.16-52.58-54.08-109.01-103.96-158.89-49.88-49.88-106.3-86.79-158.89-103.95-20.06-6.54-38.61-9.79-54.91-9.79Z\"></path> <circle fill=\"currentColor\" cx=\"100.48\" cy=\"108.87\" r=\"24.05\"></circle> <circle fill=\"currentColor\" cx=\"406.54\" cy=\"106.68\" r=\"24.05\"></circle> <circle fill=\"currentColor\" cx=\"393.42\" cy=\"395.25\" r=\"24.05\"></circle> <circle fill=\"currentColor\" cx=\"102.67\" cy=\"399.62\" r=\"24.05\"></circle>"
  },
  "cloud-blob": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M294.84,117.61c47-113.48-156.68-113.48-109.68,0C138.16,4.13-5.87,148.16,107.61,195.16c-113.48-47-113.48,156.68,0,109.68-113.48,47,30.55,191.03,77.55,77.55-47,113.48,156.68,113.48,109.68,0,47,113.48,191.03-30.55,77.55-77.55,113.48,47,113.48-156.68,0-109.68,113.48-47-30.55-191.03-77.55-77.55Z\"></path>"
  },
  "daisy": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M276.04,163c72.07-174-144.14-174-72.07,0-72.07-174-224.96-21.11-50.96,50.96-174-72.07-174,144.14,0,72.07-174,72.07-21.11,224.96,50.96,50.96-72.07,174,144.14,174,72.07,0,72.07,174,224.96,21.11,50.96-50.96,174,72.07,174-144.14,0-72.07,174-72.07,21.11-224.96-50.96-50.96Z\"></path>"
  },
  "starburst-fine": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M254.46,250c26.89-7.92,89.47-43.05,203.04-90.09-113.57,47.04-182.66,66.45-207.28,79.87,13.42-24.61,32.82-93.7,79.87-207.28-47.04,113.57-82.17,176.15-90.09,203.04-7.92-26.89-43.05-89.47-90.09-203.04,47.04,113.57,66.45,182.66,79.87,207.28-24.61-13.42-93.7-32.82-207.28-79.87,113.57,47.04,176.15,82.17,203.04,90.09-26.89,7.92-89.47,43.05-203.04,90.09,113.57-47.04,182.66-66.45,207.28-79.87-13.42,24.61-32.82,93.7-79.87,207.28,47.04-113.57,82.17-176.15,90.09-203.04,7.92,26.89,43.05,89.47,90.09,203.04-47.04-113.57-66.45-182.66-79.87-207.28,24.61,13.42,93.7,32.82,207.28,79.87-113.57-47.04-176.15-82.17-203.04-90.09Z\"></path>"
  },
  "spark-cross": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"245.79 313.12 453.55 453.55 313.12 245.79 482.63 17.37 254.21 186.88 46.45 46.45 186.88 254.21 17.37 482.63 245.79 313.12\"></polygon> <polygon fill=\"currentColor\" points=\"220.57 279.43 237.29 440.63 275.75 275.75 440.63 237.29 279.43 220.57 262.71 59.37 224.25 224.25 59.37 262.71 220.57 279.43\"></polygon>"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/shapes/shapes.js", error: String((e && e.message) || e) }); }

// components/coolie/CoolieAvatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CoolieAvatar({
  variant = 1,
  size = 96,
  frame = 'circle',
  tone = 'acid',
  base = '../../assets/character/',
  style,
  ...rest
}) {
  const src = `${base}coolie-0${Math.min(8, Math.max(1, variant))}.jpg`;
  const bg = tone === 'acid' ? 'var(--csm-acid)' : tone === 'hot' ? 'var(--csm-magenta)' : tone === 'lavender' ? 'var(--csm-lavender)' : tone === 'pink' ? 'var(--csm-pink)' : 'var(--csm-white)';
  const radius = frame === 'square' ? 'var(--radius-0)' : frame === 'soft' ? 'var(--radius-md)' : 'var(--radius-pill)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      overflow: 'hidden',
      background: bg,
      border: 'var(--border-hard)',
      borderRadius: radius,
      boxShadow: 'var(--shadow-sticker-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Coolie",
    style: {
      width: '112%',
      height: '112%',
      objectFit: 'cover',
      objectPosition: '50% 42%',
      margin: '-6%',
      mixBlendMode: 'multiply'
    }
  }));
}
Object.assign(__ds_scope, { CoolieAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coolie/CoolieAvatar.jsx", error: String((e && e.message) || e) }); }

// components/coolie/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChatBubble({
  children,
  from = 'coolie',
  avatarVariant = 1,
  tone,
  base,
  style,
  ...rest
}) {
  const mine = from === 'user';
  const bg = tone || (mine ? 'var(--csm-lavender)' : 'var(--csm-white)');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-end',
      flexDirection: mine ? 'row-reverse' : 'row',
      ...style
    }
  }, rest), !mine && /*#__PURE__*/React.createElement(__ds_scope.CoolieAvatar, {
    variant: avatarVariant,
    size: 44,
    tone: "acid",
    base: base
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      background: bg,
      color: 'var(--text-strong)',
      border: 'var(--border-2) solid var(--line-hard)',
      borderRadius: mine ? 'var(--radius-lg) var(--radius-lg) var(--radius-sm) var(--radius-lg)' : 'var(--radius-lg) var(--radius-lg) var(--radius-lg) var(--radius-sm)',
      padding: 'var(--space-3) var(--space-4)',
      boxShadow: 'var(--shadow-sticker-sm)',
      font: 'var(--weight-semibold) var(--body-size)/1.45 var(--font-body)',
      animation: 'csm-pop-in var(--dur-fast) var(--ease-pop)'
    }
  }, children));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coolie/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/coolie/MacroStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MacroStat({
  value,
  unit,
  label,
  tone = 'acid',
  size = 'md',
  style,
  ...rest
}) {
  const bg = tone === 'acid' ? 'var(--csm-acid)' : tone === 'hot' ? 'var(--csm-magenta)' : tone === 'deep' ? 'var(--csm-purple)' : tone === 'lavender' ? 'var(--csm-lavender)' : 'var(--csm-white)';
  const fg = tone === 'hot' || tone === 'deep' ? 'var(--csm-white)' : 'var(--csm-ink)';
  const fs = size === 'lg' ? 56 : size === 'sm' ? 28 : 40;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: 'flex-start',
      background: bg,
      color: fg,
      padding: 'var(--space-4)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sticker-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      font: `var(--weight-black) ${fs}px/0.85 var(--font-display)`,
      letterSpacing: '-0.04em'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 14px/1 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--label-sm-size)/1.2 var(--font-mono)',
      letterSpacing: 'var(--label-sm-tracking)',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, label));
}
Object.assign(__ds_scope, { MacroStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coolie/MacroStat.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PALETTE = {
  primary: {
    bg: 'var(--action-primary)',
    fg: 'var(--text-on-hot)',
    press: 'var(--action-primary-press)'
  },
  secondary: {
    bg: 'var(--action-secondary)',
    fg: 'var(--text-on-accent)',
    press: 'var(--action-secondary-press)'
  },
  deep: {
    bg: 'var(--surface-deep)',
    fg: 'var(--text-inverse)',
    press: 'var(--csm-purple-press)'
  },
  ink: {
    bg: 'var(--surface-inverse)',
    fg: 'var(--text-inverse)',
    press: 'var(--csm-ink)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-strong)',
    press: 'var(--csm-pink-wash)'
  },
  paper: {
    bg: 'var(--action-tertiary)',
    fg: 'var(--text-strong)',
    press: 'var(--csm-pink-wash)'
  }
};
const SIZE = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 'var(--space-4)',
    fs: 'var(--label-sm-size)',
    ls: 'var(--label-sm-tracking)'
  },
  md: {
    h: 'var(--control-h-md)',
    px: 'var(--space-5)',
    fs: 'var(--label-size)',
    ls: 'var(--label-tracking)'
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 'var(--space-6)',
    fs: '16px',
    ls: '0.1em'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = 'button',
  style,
  ...rest
}) {
  const p = PALETTE[variant] || PALETTE.primary;
  const s = SIZE[size] || SIZE.md;
  const [down, setDown] = React.useState(false);
  const [hot, setHot] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => {
      setHot(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      minHeight: s.h,
      height: s.h,
      padding: `0 ${s.px}`,
      font: `var(--weight-bold) ${s.fs}/1 var(--font-mono)`,
      letterSpacing: s.ls,
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: p.fg,
      background: down && !disabled ? p.press : p.bg,
      border: 'var(--border-hard)',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : shape === 'square' ? 'var(--radius-0)' : 'var(--radius-md)',
      boxShadow: disabled ? 'none' : down ? 'var(--shadow-press)' : hot ? 'var(--shadow-sticker-lg)' : 'var(--shadow-sticker)',
      transform: disabled ? 'none' : down ? 'translate(4px,4px)' : hot ? 'translate(-2px,-2px)' : 'none',
      transition: 'var(--transition-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-strong)'
  },
  lavender: {
    bg: 'var(--surface-card-alt)',
    fg: 'var(--text-strong)'
  },
  acid: {
    bg: 'var(--surface-accent)',
    fg: 'var(--text-on-accent)'
  },
  hot: {
    bg: 'var(--surface-hot)',
    fg: 'var(--text-on-hot)'
  },
  deep: {
    bg: 'var(--surface-deep)',
    fg: 'var(--text-inverse)'
  },
  ink: {
    bg: 'var(--surface-inverse)',
    fg: 'var(--text-inverse)'
  },
  wash: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-strong)'
  }
};
function Card({
  children,
  tone = 'paper',
  shape = 'soft',
  shadow = 'sticker',
  tilt = 0,
  interactive = false,
  padding = 'var(--space-5)',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  const [hot, setHot] = React.useState(false);
  const sh = shadow === 'none' ? 'none' : shadow === 'lg' ? 'var(--shadow-sticker-lg)' : shadow === 'hot' ? 'var(--shadow-sticker-hot)' : shadow === 'acid' ? 'var(--shadow-sticker-acid)' : 'var(--shadow-sticker)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHot(true) : undefined,
    onMouseLeave: interactive ? () => setHot(false) : undefined,
    style: {
      background: t.bg,
      color: t.fg,
      padding,
      border: 'var(--border-hard)',
      borderRadius: shape === 'square' ? 'var(--radius-0)' : shape === 'pill' ? 'var(--radius-lg)' : 'var(--radius-md)',
      boxShadow: interactive && hot ? 'var(--shadow-sticker-lg)' : sh,
      transform: `rotate(${tilt}deg)${interactive && hot ? ' translate(-3px,-3px)' : ''}`,
      transition: 'var(--transition-control)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 'md',
  shape = 'pill',
  ...rest
}) {
  const d = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    size: size,
    shape: shape,
    "aria-label": label,
    title: label,
    style: {
      width: d,
      height: d,
      padding: 0,
      minWidth: d
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Marquee({
  items = [],
  separator = '✳',
  tone = 'ink',
  speed = 'var(--dur-marquee)',
  reverse = false,
  borders = true,
  style,
  ...rest
}) {
  const map = {
    ink: ['var(--csm-ink)', 'var(--csm-paper)'],
    acid: ['var(--csm-acid)', 'var(--csm-ink)'],
    hot: ['var(--csm-magenta)', 'var(--csm-white)'],
    pink: ['var(--csm-pink)', 'var(--csm-ink)'],
    lavender: ['var(--csm-lavender)', 'var(--csm-ink)'],
    deep: ['var(--csm-purple)', 'var(--csm-white)']
  };
  const [bg, fg] = map[tone] || map.ink;
  const run = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      color: fg,
      overflow: 'hidden',
      borderTop: borders ? 'var(--border-hard)' : 'none',
      borderBottom: borders ? 'var(--border-hard)' : 'none',
      padding: '10px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      whiteSpace: 'nowrap',
      animation: `csm-marquee ${speed} linear infinite${reverse ? ' reverse' : ''}`,
      willChange: 'transform'
    }
  }, run.concat(run).map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      font: 'var(--weight-bold) var(--ticker-size)/1 var(--font-mono)',
      letterSpacing: 'var(--ticker-tracking)',
      textTransform: 'uppercase'
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/ShapeIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Geometry extracted from assets/shapes/*.svg (fills normalised to currentColor) so shapes
   recolour anywhere and survive rasterisers that drop CSS masks. */
const SHAPE_GEOMETRY = {
  "asterisk-solid": {
    "viewBox": "0 0 102.968 102.97",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m56.368,102.97h-9.766c-2.252,0-4.078-1.826-4.078-4.078v-23.27c0-.845-1.02-1.271-1.621-.677l-16.608,16.399c-1.591,1.591-4.173,1.591-5.764,0l-6.905-6.905c-.77-.77-1.196-1.795-1.194-2.886,0-1.089.426-2.114,1.196-2.882l16.451-16.452c.598-.598.178-1.62-.667-1.625l-23.334-.147c-2.248,0-4.078-1.83-4.078-4.078v-9.766c0-2.252,1.826-4.078,4.078-4.078h23.268c.845,0,1.271-1.02.677-1.621L11.627,24.298c-.768-.766-1.194-1.791-1.194-2.88-.002-1.091.424-2.116,1.194-2.886l6.905-6.905c1.592-1.592,4.172-1.592,5.764,0l16.456,16.456c.598.598,1.62.178,1.625-.667l.147-23.338c0-2.248,1.83-4.078,4.078-4.078h9.766c2.252,0,4.078,1.826,4.078,4.078v23.268c0,.845,1.02,1.271,1.621.677l16.606-16.397c1.591-1.591,4.173-1.591,5.764,0l6.905,6.905c.77.77,1.196,1.795,1.194,2.886,0,1.089-.426,2.114-1.196,2.882l-16.451,16.452c-.598.598-.178,1.62.667,1.625l23.334.147c2.248,0,4.078,1.83,4.078,4.078v9.766c0,2.252-1.826,4.078-4.078,4.078h-23.268c-.845,0-1.271,1.02-.677,1.621l16.397,16.606c.768.766,1.194,1.791,1.194,2.88.002,1.091-.424,2.116-1.194,2.886l-6.905,6.905c-1.592,1.592-4.172,1.592-5.764,0l-16.454-16.454c-.598-.598-1.62-.178-1.625.667l-.147,23.336c0,2.248-1.83,4.078-4.078,4.078Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "asterisk-outline": {
    "viewBox": "0 0 102.968 102.97",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m56.368,102.97h-9.766c-2.248,0-4.078-1.83-4.078-4.078v-25.548l-18.229,17.999c-1.591,1.591-4.173,1.591-5.764,0l-6.905-6.905c-.77-.77-1.196-1.795-1.194-2.886,0-1.089.426-2.114,1.196-2.882l18.061-18.063-25.612-.161c-2.248,0-4.078-1.83-4.078-4.078v-9.766c0-2.248,1.83-4.078,4.078-4.078h25.546L11.627,24.298c-.768-.766-1.194-1.791-1.194-2.88-.002-1.091.424-2.116,1.194-2.886l6.905-6.905c1.591-1.591,4.173-1.591,5.764,0l18.067,18.067.161-25.616c0-2.248,1.83-4.078,4.078-4.078h9.766c2.248,0,4.078,1.83,4.078,4.078v25.546l18.227-17.997c1.591-1.591,4.173-1.591,5.764,0l6.905,6.905c.77.77,1.196,1.795,1.194,2.886,0,1.089-.426,2.114-1.196,2.882l-18.061,18.063,25.612.161c2.248,0,4.078,1.83,4.078,4.078v9.766c0,2.248-1.83,4.078-4.078,4.078h-25.546l17.997,18.227c.768.766,1.194,1.791,1.194,2.88.002,1.091-.424,2.116-1.194,2.886l-6.905,6.905c-1.591,1.591-4.173,1.591-5.764,0l-18.065-18.065-.161,25.614c0,2.248-1.83,4.078-4.078,4.078Zm-13.943-33.706c.527,0,1.058.103,1.567.313,1.527.634,2.514,2.112,2.514,3.767v25.548l9.861.095.095-25.641c0-1.655.988-3.133,2.514-3.767,1.534-.63,3.273-.288,4.445.881l18.065,18.067,7.037-6.905-18.063-18.199c-1.171-1.171-1.517-2.915-.885-4.443.634-1.528,2.112-2.516,3.767-2.516h25.546l.095-9.861-.095-.095h-25.546c-1.655,0-3.133-.988-3.767-2.516-.632-1.528-.286-3.273.885-4.443l18.063-18.065-6.905-7.039-18.198,18.065c-1.169,1.173-2.911,1.515-4.445.883-1.527-.634-2.514-2.112-2.514-3.767V4.078l-9.861-.095-.095,25.643c0,1.655-.988,3.133-2.514,3.767-1.53.632-3.271.288-4.445-.881L21.48,14.442l-7.037,6.905,18.063,18.199c1.171,1.171,1.517,2.915.885,4.443-.634,1.528-2.112,2.516-3.767,2.516H4.078l-.095,9.861,25.641.095c1.655,0,3.133.988,3.767,2.516.632,1.528.286,3.273-.885,4.443l-18.063,18.065,6.905,7.039,18.199-18.067c.782-.782,1.82-1.196,2.878-1.196Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "sparkle-6": {
    "viewBox": "0 0 163.844 189.191",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m108.76,84.389c18.879-11.544,37.374-23.681,55.084-37.091-20.468,8.632-40.227,18.58-59.663,29.158-7.853,4.274-17.454-1.269-17.679-10.207-.557-22.122-1.821-44.208-4.58-66.249-2.758,22.037-4.022,44.118-4.579,66.235-.225,8.939-9.828,14.482-17.681,10.205C40.23,65.858,20.472,55.914,0,47.298c17.695,13.419,36.181,25.555,55.057,37.089,7.631,4.663,7.631,15.753,0,20.417C36.181,116.338,17.695,128.475,0,141.893c20.468-8.615,40.222-18.556,59.649-29.136,7.854-4.277,17.458,1.268,17.681,10.208.551,22.114,1.819,44.192,4.592,66.225,2.774-22.038,4.041-44.12,4.592-66.239.223-8.939,9.824-14.484,17.679-10.21,19.433,10.576,39.188,20.521,59.651,29.152-17.71-13.41-36.204-25.547-55.084-37.091-7.628-4.664-7.628-15.75,0-20.414Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "crosshair-sparkle": {
    "viewBox": "0 0 238.968 238.968",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m238.968,115.718h-95.939c-10.924,0-19.779-8.856-19.779-19.779V0h-7.532v95.939c0,10.924-8.856,19.779-19.779,19.779H0v7.532h95.939c10.924,0,19.779,8.856,19.779,19.779v95.939h7.532v-95.939c0-10.924,8.856-19.779,19.779-19.779h95.939v-7.532Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "star-8": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"467.5 250 358.25 294.81 403.79 403.79 294.81 358.25 250 467.5 205.19 358.25 96.21 403.79 141.75 294.81 32.5 250 141.75 205.19 96.21 96.21 205.19 141.75 250 32.5 294.81 141.75 403.79 96.21 358.25 205.19 467.5 250\"></polygon>"
  },
  "burst-seal": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"467.5 250 426.91 290.4 446 344.4 391.85 363.11 385.62 420.05 328.72 413.5 298.39 462.09 250 431.42 201.61 462.09 171.28 413.5 114.38 420.05 108.15 363.11 54.01 344.4 73.09 290.4 32.5 250 73.09 209.6 54.01 155.6 108.15 136.89 114.38 79.95 171.28 86.5 201.61 37.91 250 68.58 298.39 37.91 328.72 86.5 385.62 79.95 391.85 136.89 446 155.6 426.91 209.6 467.5 250\"></polygon>"
  },
  "blob-star": {
    "viewBox": "0 0 197.3 139.575",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <path d=\"m185.025,129.767l-26.394-71.503c-1.674-4.535.473-9.589,4.899-11.532l30.161-13.243c5.842-2.565,4.21-11.263-2.165-11.534l-54.624-2.329c-2.922-.125-5.608-1.641-7.225-4.078l-5.198-7.834c-5.294-7.978-16.073-10.118-24.013-4.766l-17.566,11.841c-1.509,1.017-3.288,1.561-5.108,1.561h-36.181c-5.495,0-8.817,6.075-5.852,10.702l4.075,6.356c2.527,3.943,1.665,9.157-1.996,12.077L2.48,73.679c-5.392,4.3-1.271,12.933,5.463,11.444l65.016-14.373c2.507-.554,5.131-.028,7.231,1.449l93.85,66.019c5.825,4.097,13.452-1.77,10.986-8.451Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g>"
  },
  "globe-wire": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M410.25,156.87H467.5v-2H409.12q-3.51-6.18-7.54-12.11A184.67,184.67,0,0,0,314.38,74a179.92,179.92,0,0,0-62.5-11.44l-.17,0a8.92,8.92,0,0,0-3.61.06C193.91,63.48,141,88.28,106.3,132A177,177,0,0,0,91,154.84H32.5v2H89.84a195.16,195.16,0,0,0-23.56,92.41H32.5v1.52H66.27c0,32.11,7.8,64.21,23.44,92.41H32.5v2H90.86l.47.84c39.27,67.79,119.49,103.76,196.24,87.75,51.79-10.8,95.52-44.12,121.2-88.59H467.5v-2H409.92a183.11,183.11,0,0,0,21.78-64.65,214.47,214.47,0,0,0,1.87-26.8c0-.35,0-.69,0-1H467.5v-1.52H433.59c0-.43,0-1,0-1.51C433.1,215.88,425.57,184.66,410.25,156.87Zm19.52,63.59a165.92,165.92,0,0,1,2.8,28.82H366.16c0-.43,0-1,0-1.54-.29-30.8-4.6-61.78-14.83-90.87h53.28A178.81,178.81,0,0,1,429.77,220.46ZM152.26,156.87h62.63a732.11,732.11,0,0,0-5.12,79.26q-.11,6.57-.12,13.15H134.59A254.79,254.79,0,0,1,152.26,156.87Zm99.56,271.49c-1.17,0-2.35,0-3.52,0-3.7-.73-6.8-3.65-9.09-6.61-4.87-6.29-7.88-14.08-10.44-21.54a250.19,250.19,0,0,1-8.85-35.39c-1.21-6.5-2.26-13-3.2-19.6h66.53c-.46,3.2-.93,6.4-1.44,9.59-3.37,21-7.21,44.4-18.32,62.91C260.9,422.07,257.14,427.3,251.82,428.36Zm-35.38-85.15a665.9,665.9,0,0,1-5.66-78.79q-.12-6.81-.14-13.62h78.7c-.06,30.84-1.6,61.82-5.81,92.41Zm0-186.34h67.11a639.78,639.78,0,0,1,5.24,64.49q.5,14,.51,27.92H210.65a691,691,0,0,1,5.75-91.84C216.42,157.28,216.45,157.08,216.48,156.87Zm30.85-85.18c1.54-.06,3.09-.08,4.63,0a13.67,13.67,0,0,1,5.56,3.13c5.44,4.72,8.67,12,11.29,18.57a196.71,196.71,0,0,1,9.39,32.47c2.05,9.61,3.73,19.29,5.11,29H216.76C219,139.46,229.29,76.93,247.33,71.69Zm43,177.59c0-.26,0-.56,0-.89a762.72,762.72,0,0,0-5.27-91.52H347.8a247.07,247.07,0,0,1,15.69,63.93,268.32,268.32,0,0,1,1.66,28.48Zm-5.54-94.44q-.78-6.12-1.69-12.24a344.17,344.17,0,0,0-8.38-41C272.11,92.13,269,82.42,264,73.87l-.69-1.14a74.12,74.12,0,0,1,8.78,2.1c25.63,7.82,45.61,28,59.61,50.14A194.38,194.38,0,0,1,347,154.84ZM236.62,72.9c-4,6.33-6.67,13.64-9,20.67a280.09,280.09,0,0,0-9,38q-2,11.58-3.51,23.25H153.08c10.73-26.19,26.94-51.63,50.51-68A85.05,85.05,0,0,1,236.62,72.9Zm-27,177.9a752.86,752.86,0,0,0,5.29,92.41H152.16c-11.79-29-17.56-60.71-17.56-92.41Zm5.54,94.43c.07.5.12,1,.19,1.49,3.19,24.66,7,51,17.69,73.78a59.63,59.63,0,0,0,3.73,6.78,76.63,76.63,0,0,1-17.38-5.19c-25.22-10.91-43.94-33.17-56.84-56.82a211.67,211.67,0,0,1-9.59-20Zm48.29,81.93a77.84,77.84,0,0,0,6.3-13.42,217.92,217.92,0,0,0,9.48-34.24c2.32-11.33,4.16-22.77,5.63-34.27h62c-1.33,3.22-2.7,6.41-4.18,9.56-11.89,25.28-29.51,49.61-54.35,63.44A80.23,80.23,0,0,1,263.48,427.16Zm21.67-84c2.63-21.23,4-42.65,4.71-64q.47-14,.48-28v-.42h74.81c-.18,31.39-5.67,63.17-17.39,92.41ZM403.27,154.84H350.58c-1.45-4-3-8-4.68-11.89-10.83-25.25-27.06-50-50.12-65.66C340.16,88.81,378.54,117.15,403.27,154.84Zm-199.91-77c-19.3,13.38-33.86,33.51-44.23,54.26a211.54,211.54,0,0,0-9.72,22.73H96.49C121.52,116.33,160.22,89.37,203.36,77.85Zm-108.17,79h53.47c-8.85,25.15-13.31,51.88-14.49,78.44q-.31,7-.34,14H67.45C67.62,216.74,77.88,184.31,95.19,156.87Zm-27,108.31q-.71-7.17-.74-14.38h66.4c0,31.33,4.48,62.83,14.87,92.41H95.19A180.32,180.32,0,0,1,68.18,265.18Zm43.33,100.05a181.55,181.55,0,0,1-15-20h52.92c10.32,28.55,26.7,56.72,51.42,75.12.85.64,1.72,1.26,2.6,1.86A183.44,183.44,0,0,1,111.51,365.23ZM311.2,418.08q-7.6,2.7-15.35,4.67c16.28-11.11,29.34-27.14,39.18-44a205.08,205.08,0,0,0,15.59-33.54h52.66C381.53,378.37,349.14,404.62,311.2,418.08Zm93.39-74.87H351.36a266,266,0,0,0,13.57-64.83c.78-8.81,1.14-17.64,1.21-26.48,0-.4,0-.79,0-1.1h66.41C432.29,284,422,315.87,404.59,343.21Z\"></path>"
  },
  "globe-oval": {
    "viewBox": "0 0 280.45 101.893",
    "inner": "<g id=\"c\" data-name=\"Layer 1\"> <g> <path d=\"m140.225,0C62.785,0,0,22.82,0,50.956s62.785,50.937,140.225,50.937,140.225-22.82,140.225-50.937S217.665,0,140.225,0Zm0,99.085c-63.999,0-115.872-21.545-115.872-48.129S76.226,2.808,140.225,2.808s115.872,21.545,115.872,48.149-51.873,48.129-115.872,48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m59.618,50.956c0-26.603,36.082-48.149,80.606-48.149-53.645,0-97.114,21.545-97.114,48.149s43.469,48.129,97.114,48.129c-44.525,0-80.606-21.545-80.606-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m237.339,50.956c0-26.603-43.469-48.149-97.114-48.149,44.525,0,80.606,21.545,80.606,48.149s-36.082,48.129-80.606,48.129c53.645,0,97.114-21.545,97.114-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m89.627,50.956c0-26.603,22.661-48.149,50.598-48.149-33.772,0-61.172,21.545-61.172,48.149s27.4,48.129,61.172,48.129c-27.937,0-50.598-21.545-50.598-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m201.376,50.956c0-26.603-27.38-48.149-61.152-48.149,27.937,0,50.598,21.545,50.598,48.149s-22.661,48.129-50.598,48.129c33.772,0,61.152-21.545,61.152-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m115.692,50.956c0-26.603,10.992-48.149,24.532-48.149-16.946,0-30.685,21.545-30.685,48.149s13.74,48.129,30.685,48.129c-13.541,0-24.532-21.545-24.532-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> <path d=\"m170.91,50.956c0-26.603-13.74-48.149-30.685-48.149,13.541,0,24.532,21.545,24.532,48.149s-10.992,48.129-24.532,48.129c16.946,0,30.685-21.545,30.685-48.129Z\" fill=\"currentColor\" stroke-width=\"0\"></path> </g> </g>"
  },
  "star-5": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"250 23.99 277.07 223.97 487.64 196.65 296.38 269.2 396.87 476.01 253.42 294.17 103.13 476.01 217.28 269.2 12.36 196.65 233.17 220.55 250 23.99\"></polygon>"
  },
  "sparkle-4": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M394.51,264.84l87.73-14.84-87.73-14.84c-66.41-11.24-118.43-63.26-129.67-129.67l-14.84-87.73-14.84,87.73c-11.24,66.41-63.26,118.43-129.67,129.67l-87.73,14.84,87.73,14.84c66.41,11.24,118.43,63.26,129.67,129.67l14.84,87.73,14.84-87.73c11.24-66.41,63.26-118.43,129.67-129.67Z\"></path>"
  },
  "slab-quarters": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M44.32,258.81h0c0-60.04,24.34-114.4,63.68-153.75,39.35-39.35,93.7-63.68,153.75-63.68h0v217.43H44.32Z\"></path> <path fill=\"currentColor\" d=\"M238.25,258.81h0c0-88.57,52.96-164.78,128.95-198.67,27.03-12.06,56.97-18.76,88.48-18.76h0v217.43h-217.43Z\"></path> <path fill=\"currentColor\" d=\"M44.32,458.61h0c0-70.07,33.15-132.4,84.62-172.16,36.73-28.38,82.8-45.26,132.81-45.26h0v217.43H44.32Z\"></path> <path fill=\"currentColor\" d=\"M238.25,458.61h0c0-72.28,35.27-136.32,89.53-175.85,35.89-26.15,80.09-41.57,127.9-41.57h0v217.43h-217.43Z\"></path>"
  },
  "pinwheel": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M334.14,302.31v1.3c0,46.11-18.69,87.86-48.91,118.08-30.22,30.22-71.97,48.91-118.08,48.91h-1.3s0-168.29,0-168.29h168.29Z\"></path> <path fill=\"currentColor\" d=\"M197.69,334.15h-1.3c-46.11,0-87.86-18.69-118.08-48.91-30.22-30.22-48.91-71.97-48.91-118.08v-1.3s168.29,0,168.29,0v168.29Z\"></path> <path fill=\"currentColor\" d=\"M165.85,197.69v-1.3c0-46.11,18.69-87.86,48.91-118.08,30.22-30.22,71.97-48.91,118.08-48.91h1.3s0,168.29,0,168.29h-168.29Z\"></path> <path fill=\"currentColor\" d=\"M302.31,165.86h1.3c45.09,0,86.01,17.87,116.06,46.92,31.41,30.36,50.93,72.94,50.93,120.07v1.3s-168.29,0-168.29,0v-168.29Z\"></path>"
  },
  "sparkle-pair": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"246.25 352.1 386.27 327.93 246.25 303.76 222.56 160.93 198.87 303.76 58.85 327.93 198.87 352.1 222.56 494.93 246.25 352.1\"></polygon> <polygon fill=\"currentColor\" points=\"341.72 140.82 441.15 123.66 341.72 106.5 324.89 5.07 308.07 106.5 208.64 123.66 308.07 140.82 324.89 242.26 341.72 140.82\"></polygon>"
  },
  "cushion": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M378.4,407.8l101.57,72.17-72.17-101.57c-54.63-76.88-54.63-179.92,0-256.8l72.17-101.57-101.57,72.17c-76.88,54.63-179.92,54.63-256.8,0L20.03,20.03l72.17,101.57c54.63,76.88,54.63,179.92,0,256.8l-72.17,101.57,101.57-72.17c76.88-54.63,179.92-54.63,256.8,0Z\"></path>"
  },
  "star-cushion": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M341.15,355.56l70.52,50.11-50.11-70.52c-37.93-53.38-37.93-124.92,0-178.3l50.11-70.52-70.52,50.11c-53.38,37.93-124.92,37.93-178.3,0l-70.52-50.11,50.11,70.52c37.93,53.38,37.93,124.92,0,178.3l-50.11,70.52,70.52-50.11c53.38-37.93,124.92-37.93,178.3,0Z\"></path> <path fill=\"currentColor\" d=\"M252.35,387.25l23.28,83.32,5.43-86.34c4.11-65.36,49.12-120.96,112.19-138.58l83.32-23.28-86.34-5.43c-65.36-4.11-120.96-49.12-138.58-112.19l-23.28-83.32-5.43,86.34c-4.11,65.36-49.12,120.96-112.19,138.58l-83.32,23.28,86.34,5.43c65.36,4.11,120.96,49.12,138.58,112.19Z\"></path>"
  },
  "atom-x": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"245.71 272.1 312.27 319.4 264.98 252.84 312.27 186.28 245.71 233.57 179.15 186.28 226.45 252.84 179.15 319.4 245.71 272.1\"></polygon> <path fill=\"currentColor\" d=\"M120.85,488.22c-32.68,0-59.93-9.94-79.53-29.54-31.93-31.93-38.22-84.14-17.7-147.02,19.04-58.36,59.37-120.33,113.54-174.5,54.17-54.17,116.15-94.5,174.51-113.54,62.88-20.52,115.09-14.24,147.01,17.7,31.93,31.93,38.22,84.14,17.7,147.01-19.04,58.36-59.37,120.34-113.54,174.51-54.17,54.17-116.15,94.5-174.5,113.54-24.26,7.92-46.95,11.84-67.48,11.84ZM378.78,51.24c-16.29,0-34.85,3.24-54.9,9.79-52.59,17.16-109.01,54.08-158.89,103.96h0c-49.88,49.88-86.8,106.31-103.95,158.89-15.46,47.37-12.5,86.37,8.11,106.99,20.62,20.61,59.61,23.57,106.99,8.11,52.58-17.16,109.01-54.08,158.89-103.95,49.88-49.88,86.8-106.3,103.96-158.89,15.46-47.37,12.5-86.37-8.12-106.98-11.89-11.89-29.89-17.91-52.08-17.91Z\"></path> <path fill=\"currentColor\" d=\"M379.15,488.23c-20.54,0-43.22-3.93-67.48-11.85-58.36-19.04-120.34-59.37-174.51-113.54-54.17-54.17-94.5-116.15-113.54-174.51C3.1,125.46,9.39,73.25,41.32,41.32c63.27-63.27,204.5-21.18,321.52,95.84,54.17,54.17,94.5,116.15,113.54,174.51,20.52,62.87,14.23,115.09-17.7,147.02-19.61,19.61-46.86,29.55-79.53,29.55ZM121.22,51.24c-22.19,0-40.19,6.02-52.08,17.91-20.61,20.62-23.57,59.61-8.11,106.98,17.16,52.58,54.08,109.01,103.95,158.89,49.88,49.88,106.31,86.8,158.89,103.95,47.36,15.46,86.37,12.5,106.98-8.11,20.62-20.62,23.57-59.61,8.12-106.99-17.16-52.58-54.08-109.01-103.96-158.89-49.88-49.88-106.3-86.79-158.89-103.95-20.06-6.54-38.61-9.79-54.91-9.79Z\"></path> <circle fill=\"currentColor\" cx=\"100.48\" cy=\"108.87\" r=\"24.05\"></circle> <circle fill=\"currentColor\" cx=\"406.54\" cy=\"106.68\" r=\"24.05\"></circle> <circle fill=\"currentColor\" cx=\"393.42\" cy=\"395.25\" r=\"24.05\"></circle> <circle fill=\"currentColor\" cx=\"102.67\" cy=\"399.62\" r=\"24.05\"></circle>"
  },
  "cloud-blob": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M294.84,117.61c47-113.48-156.68-113.48-109.68,0C138.16,4.13-5.87,148.16,107.61,195.16c-113.48-47-113.48,156.68,0,109.68-113.48,47,30.55,191.03,77.55,77.55-47,113.48,156.68,113.48,109.68,0,47,113.48,191.03-30.55,77.55-77.55,113.48,47,113.48-156.68,0-109.68,113.48-47-30.55-191.03-77.55-77.55Z\"></path>"
  },
  "daisy": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M276.04,163c72.07-174-144.14-174-72.07,0-72.07-174-224.96-21.11-50.96,50.96-174-72.07-174,144.14,0,72.07-174,72.07-21.11,224.96,50.96,50.96-72.07,174,144.14,174,72.07,0,72.07,174,224.96,21.11,50.96-50.96,174,72.07,174-144.14,0-72.07,174-72.07,21.11-224.96-50.96-50.96Z\"></path>"
  },
  "starburst-fine": {
    "viewBox": "0 0 500 500",
    "inner": "<path fill=\"currentColor\" d=\"M254.46,250c26.89-7.92,89.47-43.05,203.04-90.09-113.57,47.04-182.66,66.45-207.28,79.87,13.42-24.61,32.82-93.7,79.87-207.28-47.04,113.57-82.17,176.15-90.09,203.04-7.92-26.89-43.05-89.47-90.09-203.04,47.04,113.57,66.45,182.66,79.87,207.28-24.61-13.42-93.7-32.82-207.28-79.87,113.57,47.04,176.15,82.17,203.04,90.09-26.89,7.92-89.47,43.05-203.04,90.09,113.57-47.04,182.66-66.45,207.28-79.87-13.42,24.61-32.82,93.7-79.87,207.28,47.04-113.57,82.17-176.15,90.09-203.04,7.92,26.89,43.05,89.47,90.09,203.04-47.04-113.57-66.45-182.66-79.87-207.28,24.61,13.42,93.7,32.82,207.28,79.87-113.57-47.04-176.15-82.17-203.04-90.09Z\"></path>"
  },
  "spark-cross": {
    "viewBox": "0 0 500 500",
    "inner": "<polygon fill=\"currentColor\" points=\"245.79 313.12 453.55 453.55 313.12 245.79 482.63 17.37 254.21 186.88 46.45 46.45 186.88 254.21 17.37 482.63 245.79 313.12\"></polygon> <polygon fill=\"currentColor\" points=\"220.57 279.43 237.29 440.63 275.75 275.75 440.63 237.29 279.43 220.57 262.71 59.37 224.25 224.25 59.37 262.71 220.57 279.43\"></polygon>"
  }
};
const SHAPES = ["asterisk-solid", "asterisk-outline", "spark-cross", "sparkle-6", "sparkle-4", "sparkle-pair", "crosshair-sparkle", "starburst-fine", "star-8", "star-5", "star-cushion", "burst-seal", "blob-star", "cushion", "cloud-blob", "daisy", "slab-quarters", "pinwheel", "globe-wire", "globe-oval", "atom-x"];
function ShapeIcon({
  name = 'sparkle-6',
  size = 24,
  color = 'var(--csm-ink)',
  spin = false,
  title,
  style,
  ...rest
}) {
  const g = SHAPE_GEOMETRY[name] || SHAPE_GEOMETRY['sparkle-6'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: g.viewBox,
    width: size,
    height: size,
    fill: "currentColor",
    role: title ? 'img' : 'presentation',
    "aria-label": title,
    "aria-hidden": title ? undefined : 'true',
    focusable: "false",
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      color,
      overflow: 'visible',
      animation: spin ? 'csm-spin var(--dur-spin) var(--ease-linear) infinite' : undefined,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: g.inner
    }
  }, rest));
}
Object.assign(__ds_scope, { SHAPE_GEOMETRY, SHAPES, ShapeIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ShapeIcon.jsx", error: String((e && e.message) || e) }); }

// components/coolie/StickerFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StickerFrame({
  src,
  alt = '',
  tone = 'lavender',
  shape = 'soft',
  size = '100%',
  tilt = -3,
  sparkle = true,
  sparkleShape = 'star-8',
  style,
  ...rest
}) {
  const bg = tone === 'acid' ? 'var(--csm-acid)' : tone === 'hot' ? 'var(--csm-magenta)' : tone === 'pink' ? 'var(--csm-pink)' : tone === 'deep' ? 'var(--csm-purple)' : tone === 'wash' ? 'var(--csm-pink-wash)' : 'var(--csm-lavender)';
  const radius = shape === 'square' ? 'var(--radius-0)' : shape === 'pill' ? 'var(--radius-pill)' : shape === 'blob' ? 'var(--radius-blob)' : 'var(--radius-lg)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      background: bg,
      aspectRatio: '1/1',
      border: 'var(--border-hard)',
      borderRadius: radius,
      boxShadow: 'var(--shadow-sticker)',
      transform: `rotate(${tilt}deg)`,
      display: 'grid',
      placeItems: 'center',
      overflow: shape === 'blob' ? 'hidden' : 'visible',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '84%',
      height: '84%',
      objectFit: 'contain',
      mixBlendMode: 'multiply'
    }
  }), sparkle && /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: sparkleShape,
    size: 40,
    color: "var(--csm-ink)",
    style: {
      position: 'absolute',
      right: -14,
      top: -14
    }
  }));
}
Object.assign(__ds_scope, { StickerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coolie/StickerFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  sub,
  shape = 'burst-seal',
  tone = 'hot',
  size = 132,
  tilt = -8,
  style,
  ...rest
}) {
  const color = tone === 'hot' ? 'var(--csm-magenta)' : tone === 'acid' ? 'var(--csm-acid)' : tone === 'deep' ? 'var(--csm-purple)' : tone === 'crimson' ? 'var(--csm-crimson)' : 'var(--csm-ink)';
  const fg = tone === 'acid' ? 'var(--csm-ink)' : 'var(--csm-white)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      transform: `rotate(${tilt}deg)`,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: shape,
    size: size,
    color: color,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '18%',
      display: 'grid',
      placeContent: 'center',
      textAlign: 'center',
      color: fg,
      font: `var(--weight-black) ${Math.round(size * 0.17)}px/0.95 var(--font-display)`,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, children), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      font: `var(--weight-bold) ${Math.round(size * 0.085)}px/1 var(--font-mono)`,
      letterSpacing: '0.14em'
    }
  }, sub)));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  children,
  highlight,
  align = 'left',
  level = 'display-2',
  shape,
  style,
  ...rest
}) {
  const size = level === 'display-1' ? 'var(--display-1-size)' : level === 'display-3' ? 'var(--display-3-size)' : 'var(--display-2-size)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginBottom: 'var(--space-3)'
    }
  }, shape && /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: shape,
    size: 14,
    color: "var(--csm-magenta)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: `var(--weight-black) ${size}/var(--display-2-leading) var(--font-display)`,
      letterSpacing: 'var(--display-2-tracking)',
      textTransform: 'uppercase',
      margin: 0
    }
  }, children, highlight && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-hot)',
      WebkitTextStroke: '0',
      display: 'inline'
    }
  }, highlight))));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  acid: ['var(--csm-acid)', 'var(--csm-ink)'],
  hot: ['var(--csm-magenta)', 'var(--csm-white)'],
  pink: ['var(--csm-pink)', 'var(--csm-ink)'],
  lavender: ['var(--csm-lavender)', 'var(--csm-ink)'],
  deep: ['var(--csm-purple)', 'var(--csm-white)'],
  crimson: ['var(--csm-crimson)', 'var(--csm-white)'],
  paper: ['var(--csm-white)', 'var(--csm-ink)'],
  ink: ['var(--csm-ink)', 'var(--csm-paper)']
};
function Tag({
  children,
  tone = 'acid',
  size = 'md',
  outlined = true,
  icon,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.acid;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: size === 'sm' ? '4px 10px' : '6px 14px',
      background: bg,
      color: fg,
      border: outlined ? `var(--border-1) solid var(--line-hard)` : 'none',
      borderRadius: 'var(--radius-pill)',
      font: `var(--weight-bold) ${size === 'sm' ? 'var(--label-sm-size)' : 'var(--label-size)'}/1 var(--font-mono)`,
      letterSpacing: size === 'sm' ? 'var(--label-sm-tracking)' : 'var(--label-tracking)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/coolie/RecipeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RecipeCard({
  title,
  kcal,
  minutes,
  tags = [],
  image,
  tone = 'paper',
  imageTone = 'wash',
  tilt = 0,
  onClick,
  style,
  ...rest
}) {
  const imgBg = imageTone === 'acid' ? 'var(--csm-acid)' : imageTone === 'hot' ? 'var(--csm-magenta)' : imageTone === 'lavender' ? 'var(--csm-lavender)' : 'var(--csm-pink-wash)';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    tilt: tilt,
    interactive: true,
    onClick: onClick,
    padding: "0",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: imgBg,
      borderBottom: 'var(--border-2) solid var(--line-hard)',
      aspectRatio: '4/3',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: "globe-wire",
    size: 200,
    color: "rgba(20,26,27,.12)",
    style: {
      position: 'absolute',
      right: -50,
      top: -30
    }
  }), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '78%',
      height: '78%',
      objectFit: 'contain',
      filter: 'drop-shadow(6px 8px 0 rgba(20,26,27,.18))'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "csm-label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "image"), minutes && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-3)',
      top: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "ink",
    size: "sm"
  }, minutes, " min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: 'var(--weight-black) 22px/0.98 var(--font-display)',
      letterSpacing: '-0.025em',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, tags.slice(0, 3).map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    tone: "lavender",
    size: "sm"
  }, t))), kcal != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      font: 'var(--weight-bold) var(--label-sm-size)/1 var(--font-mono)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-deep)'
    }
  }, kcal, " kcal")));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coolie/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520,
  tone = 'paper',
  contained = false,
  style,
  ...rest
}) {
  if (!open) return null;
  const bg = tone === 'lavender' ? 'var(--surface-card-alt)' : tone === 'acid' ? 'var(--surface-accent)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: contained ? 'absolute' : 'fixed',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(20,26,27,.55)',
      backdropFilter: 'blur(3px)',
      padding: 'var(--space-5)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      width: '100%',
      maxWidth: width,
      background: bg,
      color: 'var(--text-strong)',
      border: 'var(--border-2) solid var(--line-hard)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sticker-lg)',
      animation: 'csm-pop-in var(--dur-base) var(--ease-pop)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: 'var(--border-2) solid var(--line-hard)',
      background: 'var(--csm-ink)',
      color: 'var(--csm-paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-black) 22px/1 var(--font-display)',
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: "sm",
    variant: "paper",
    onClick: onClose,
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-black) 16px/1 var(--font-display)'
      }
    }, "\u2715")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: 'var(--border-2) solid var(--line-hard)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressMeter({
  value = 0,
  max = 100,
  label,
  tone = 'hot',
  showValue = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = tone === 'acid' ? 'var(--csm-acid)' : tone === 'deep' ? 'var(--csm-purple)' : tone === 'ink' ? 'var(--csm-ink)' : 'var(--csm-magenta)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "csm-label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "csm-label",
    style: {
      color: 'var(--text-muted)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20,
      background: 'var(--csm-white)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      borderRight: pct > 0 && pct < 100 ? 'var(--border-hard)' : 'none',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressMeter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  good: ['var(--status-good)', 'var(--csm-ink)', 'star-8'],
  hype: ['var(--status-hype)', 'var(--csm-white)', 'sparkle-6'],
  warn: ['var(--status-warn)', 'var(--csm-white)', 'asterisk-solid'],
  info: ['var(--status-info)', 'var(--csm-ink)', 'crosshair-sparkle']
};
function Toast({
  children,
  tone = 'good',
  title,
  style,
  ...rest
}) {
  const [bg, fg, shape] = TONES[tone] || TONES.good;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      background: bg,
      color: fg,
      padding: 'var(--space-3) var(--space-5)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sticker)',
      animation: 'csm-pop-in var(--dur-base) var(--ease-pop)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: shape,
    size: 20,
    color: fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "csm-label"
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--body-sm-size)/1.35 var(--font-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--hit-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      background: checked ? 'var(--csm-magenta)' : 'var(--csm-white)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-sticker-sm)',
      transition: 'var(--transition-control)',
      color: 'var(--csm-white)',
      font: 'var(--weight-black) 15px/1 var(--font-display)'
    }
  }, checked ? '✓' : ''), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--body-size)/1.3 var(--font-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChipGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChipGroup({
  options = [],
  value = [],
  onChange,
  multi = true,
  style,
  ...rest
}) {
  const toggle = v => {
    if (!onChange) return;
    if (!multi) return onChange([v]);
    onChange(value.includes(v) ? value.filter(x => x !== v) : [...value, v]);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), options.map(o => {
    const on = value.includes(o);
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      onClick: () => toggle(o),
      "aria-pressed": on,
      style: {
        padding: '8px 16px',
        minHeight: 38,
        cursor: 'pointer',
        background: on ? 'var(--csm-ink)' : 'var(--csm-white)',
        color: on ? 'var(--csm-paper)' : 'var(--text-strong)',
        border: 'var(--border-hard)',
        borderRadius: 'var(--radius-pill)',
        font: 'var(--weight-bold) var(--label-size)/1 var(--font-mono)',
        letterSpacing: 'var(--label-tracking)',
        textTransform: 'uppercase',
        boxShadow: on ? 'var(--shadow-press)' : 'var(--shadow-sticker-sm)',
        transform: on ? 'translate(1px,1px)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { ChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChipGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  prefix,
  suffix,
  as = 'input',
  rows = 4,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const [hot, setHot] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    className: "csm-label",
    style: {
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: as === 'textarea' ? 'flex-start' : 'center',
      gap: 'var(--space-2)',
      background: 'var(--csm-white)',
      color: 'var(--text-strong)',
      border: `var(--border-2) solid ${error ? 'var(--csm-crimson)' : 'var(--line-hard)'}`,
      borderRadius: as === 'textarea' ? 'var(--radius-md)' : 'var(--radius-pill)',
      padding: as === 'textarea' ? 'var(--space-3) var(--space-4)' : `0 var(--space-4)`,
      minHeight: as === 'textarea' ? undefined : size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)',
      boxShadow: hot ? 'var(--shadow-sticker-sm)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, prefix, /*#__PURE__*/React.createElement(Tag, _extends({
    id: rid,
    rows: as === 'textarea' ? rows : undefined,
    onFocus: () => setHot(true),
    onBlur: () => setHot(false),
    style: {
      flex: 1,
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'inherit',
      font: 'var(--weight-semibold) var(--body-size)/1.4 var(--font-body)',
      padding: as === 'textarea' ? 0 : '0',
      resize: as === 'textarea' ? 'vertical' : undefined
    }
  }, rest)), suffix), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--label-sm-size)/1.3 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: error ? 'var(--csm-crimson)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchBar({
  placeholder = 'ask coolie anything…',
  value,
  onChange,
  onSubmit,
  cta = 'Cook it',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: 'var(--csm-white)',
      border: 'var(--border-2) solid var(--line-hard)',
      borderRadius: 'var(--radius-pill)',
      padding: 'var(--space-2)',
      boxShadow: 'var(--shadow-sticker)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: "crosshair-sparkle",
    size: 22,
    color: "var(--csm-magenta)",
    style: {
      marginLeft: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--weight-semibold) var(--body-lg-size)/1.2 var(--font-body)',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: "md"
  }, cta));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  style,
  ...rest
}) {
  const rid = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    className: "csm-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    style: {
      appearance: 'none',
      width: '100%',
      height: size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)',
      padding: '0 var(--space-7) 0 var(--space-4)',
      background: 'var(--csm-white)',
      color: 'var(--text-strong)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-bold) var(--label-size)/1 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      font: 'var(--weight-black) 12px/1 var(--font-mono)',
      color: 'var(--csm-magenta)'
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--label-sm-size)/1.3 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--hit-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 60,
      height: 30,
      flex: '0 0 auto',
      position: 'relative',
      background: checked ? 'var(--csm-acid)' : 'var(--csm-white)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sticker-sm)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 30 : 2,
      width: 22,
      height: 22,
      background: 'var(--csm-ink)',
      borderRadius: 'var(--radius-pill)',
      transition: 'left var(--dur-fast) var(--ease-pop)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "csm-label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  brand = 'Coolie',
  tagline = 'the secret menu for people who actually eat',
  columns = [],
  social = ['IG', 'TT', 'YT', 'SP'],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--csm-ink)',
      color: 'var(--csm-paper)',
      borderTop: 'var(--border-2) solid var(--line-hard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(240px,1.4fr) repeat(auto-fit,minmax(140px,1fr))',
      gap: 'var(--space-7)',
      padding: 'var(--space-8) var(--page-pad-x) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: "asterisk-solid",
    size: 30,
    color: "var(--csm-acid)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-black) 34px/0.9 var(--font-display)',
      letterSpacing: '-0.045em',
      textTransform: 'uppercase'
    }
  }, brand)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '34ch',
      font: 'var(--weight-semibold) var(--body-size)/1.45 var(--font-body)',
      color: 'var(--csm-pink-soft)'
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "your@email",
    label: "get the drop",
    style: {
      flex: 1,
      maxWidth: 260
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "md"
  }, "Go"))), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-label",
    style: {
      color: 'var(--csm-acid)'
    }
  }, c.title), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'var(--csm-paper)',
      textDecoration: 'none',
      font: 'var(--weight-semibold) var(--body-sm-size)/1.4 var(--font-body)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 'var(--space-4) var(--page-pad-x)',
      borderTop: '2px solid rgba(242,242,242,.25)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--label-sm-size)/1 var(--font-mono)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--csm-lavender)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Coolie \u2014 eat loud"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: 'var(--csm-acid)',
      textDecoration: 'none',
      font: 'var(--weight-bold) var(--label-size)/1 var(--font-mono)',
      letterSpacing: '0.14em'
    }
  }, s)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = 'Coolie',
  wordmarkSub = 'secret menu',
  links = [],
  active,
  onNavigate,
  cta = 'Ask Coolie',
  onCta,
  tone = 'paper',
  style,
  ...rest
}) {
  const dark = tone === 'ink';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: 'var(--space-3) var(--page-pad-x)',
      background: dark ? 'var(--csm-ink)' : 'var(--csm-white)',
      color: dark ? 'var(--csm-paper)' : 'var(--text-strong)',
      borderBottom: 'var(--border-2) solid var(--line-hard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ShapeIcon, {
    name: "asterisk-solid",
    size: 26,
    color: "var(--csm-magenta)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-black) 24px/1 var(--font-display)',
      letterSpacing: '-0.04em',
      textTransform: 'uppercase'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 9px/1 var(--font-mono)',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--csm-magenta)'
    }
  }, wordmarkSub))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)'
    }
  }, links.map(l => {
    const on = l === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(l);
      },
      style: {
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: 'var(--radius-pill)',
        font: 'var(--weight-bold) var(--label-size)/1 var(--font-mono)',
        letterSpacing: 'var(--label-tracking)',
        textTransform: 'uppercase',
        background: on ? 'var(--csm-acid)' : 'transparent',
        border: on ? 'var(--border-1) solid var(--line-hard)' : 'var(--border-1) solid transparent',
        color: on ? 'var(--csm-ink)' : 'inherit',
        transition: 'var(--transition-control)'
      }
    }, l);
  })), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 0,
      background: 'var(--csm-white)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-pill)',
      padding: 4,
      boxShadow: 'var(--shadow-sticker-sm)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(it),
      style: {
        padding: '10px 20px',
        minHeight: 40,
        cursor: 'pointer',
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--csm-ink)' : 'transparent',
        color: on ? 'var(--csm-paper)' : 'var(--text-strong)',
        font: 'var(--weight-bold) var(--label-size)/1 var(--font-mono)',
        letterSpacing: 'var(--label-tracking)',
        textTransform: 'uppercase',
        transition: 'var(--transition-control)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  NavBar,
  Footer,
  Marquee
} = window.CSM;
const VIEWS = {
  Home: 'HomeScreen',
  Recipes: 'BrowseScreen',
  Plan: 'PlanScreen',
  Coolie: 'ChatScreen'
};
function App() {
  const [view, setView] = React.useState('Home');
  const go = v => {
    setView(v);
    window.scrollTo({
      top: 0
    });
  };
  const screen = () => {
    switch (view) {
      case 'Recipes':
        return /*#__PURE__*/React.createElement(BrowseScreen, {
          onOpen: () => go('Recipe')
        });
      case 'Plan':
        return /*#__PURE__*/React.createElement(PlanScreen, {
          onOpen: () => go('Recipe')
        });
      case 'Coolie':
        return /*#__PURE__*/React.createElement(ChatScreen, {
          onOpen: () => go('Recipe')
        });
      case 'Recipe':
        return /*#__PURE__*/React.createElement(RecipeScreen, {
          onBack: () => go('Recipes'),
          onAsk: () => go('Coolie')
        });
      default:
        return /*#__PURE__*/React.createElement(HomeScreen, {
          onAsk: () => go('Coolie'),
          onOpen: () => go('Recipes')
        });
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    links: ['Home', 'Recipes', 'Plan', 'Coolie'],
    active: view === 'Recipe' ? 'Recipes' : view,
    onNavigate: go,
    cta: "Ask Coolie",
    onCta: () => go('Coolie')
  }), screen(), /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      title: 'eat',
      items: ['Recipes', 'Weekly plan', 'Swaps', 'Macros']
    }, {
      title: 'coolie',
      items: ['How she works', 'Privacy', 'Jobs']
    }, {
      title: 'more',
      items: ['App', 'Press', 'Contact']
    }]
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BrowseScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  Tag,
  Card,
  Button,
  ShapeIcon,
  Marquee
} = window.CSM;
const {
  ChipGroup,
  Select,
  Switch,
  Input
} = window.CSM;
const {
  RecipeCard,
  MacroStat
} = window.CSM;
const ALL = [{
  title: 'Chilli lime tofu',
  minutes: 12,
  kcal: 420,
  tags: ['high protein', 'one pan'],
  image: '../../assets/food/spinach.webp',
  imageTone: 'acid'
}, {
  title: 'Mango cool-down',
  minutes: 5,
  kcal: 190,
  tags: ['no cook', 'budget'],
  image: '../../assets/food/mango.webp',
  imageTone: 'lavender'
}, {
  title: 'Green machine bowl',
  minutes: 9,
  kcal: 310,
  tags: ['vegan', '5 things'],
  image: '../../assets/food/food-03.webp',
  imageTone: 'hot'
}, {
  title: 'Late night wrap',
  minutes: 7,
  kcal: 480,
  tags: ['handheld'],
  image: '../../assets/food/food-06.webp',
  imageTone: 'wash'
}, {
  title: 'Sunrise smash',
  minutes: 8,
  kcal: 350,
  tags: ['breakfast', 'high protein'],
  image: '../../assets/food/food-02.webp',
  imageTone: 'lavender'
}, {
  title: 'Desk drawer noodles',
  minutes: 11,
  kcal: 520,
  tags: ['one pan', 'budget'],
  image: '../../assets/food/food-05.webp',
  imageTone: 'acid'
}, {
  title: 'Cold crunch salad',
  minutes: 6,
  kcal: 240,
  tags: ['no cook', 'vegan'],
  image: '../../assets/food/food-07.webp',
  imageTone: 'hot'
}, {
  title: 'Pepper reset',
  minutes: 14,
  kcal: 390,
  tags: ['one pan'],
  image: '../../assets/food/food-03.webp',
  imageTone: 'wash'
}];
function BrowseScreen({
  onOpen
}) {
  const [filters, setFilters] = React.useState([]);
  const [spicy, setSpicy] = React.useState(false);
  const list = filters.length ? ALL.filter(r => r.tags.some(t => filters.includes(t))) : ALL;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) var(--page-pad-x) var(--space-5)',
      background: 'var(--csm-acid)',
      borderBottom: 'var(--border-2) solid var(--line-hard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "the whole menu",
    shape: "asterisk-solid",
    highlight: "cook now"
  }, "Everything you can"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(MacroStat, {
    value: list.length,
    label: "matches",
    tone: "paper",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "9",
    unit: "min",
    label: "median",
    tone: "hot",
    size: "sm"
  })))), /*#__PURE__*/React.createElement(Marquee, {
    tone: "ink",
    items: ['filter by what you have', 'not by what you should buy']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px minmax(0,1fr)',
      gap: 'var(--space-6)',
      padding: 'var(--space-7) var(--page-pad-x) var(--section-pad-y)',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 'var(--space-5)',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, "what you have"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "tofu, lime\u2026"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "lavender",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, "filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ChipGroup, {
    options: ['high protein', 'one pan', 'no cook', 'vegan', 'budget', 'breakfast', 'handheld', '5 things'],
    value: filters,
    onChange: setFilters
  }), /*#__PURE__*/React.createElement(Select, {
    label: "time",
    options: ['any', 'under 10 min', 'under 20 min']
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "spicy mode",
    checked: spicy,
    onChange: e => setSpicy(e.target.checked)
  }), filters.length > 0 && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ink",
    onClick: () => setFilters([])
  }, "Clear ", filters.length)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ShapeIcon, {
    name: "crosshair-sparkle",
    size: 18,
    color: "var(--csm-magenta)"
  }), (filters.length ? filters : ['everything']).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "hot",
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))',
      gap: 'var(--space-5)'
    }
  }, list.map((r, i) => /*#__PURE__*/React.createElement(RecipeCard, _extends({
    key: r.title + i
  }, r, {
    onClick: onOpen,
    tilt: i % 3 === 1 ? 1.5 : 0
  })))))));
}
Object.assign(window, {
  BrowseScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BrowseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ChatScreen.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  ShapeIcon
} = window.CSM;
const {
  Input,
  ChipGroup
} = window.CSM;
const {
  CoolieAvatar,
  ChatBubble,
  RecipeCard,
  MacroStat
} = window.CSM;
const SCRIPTED = [{
  from: 'user',
  text: 'i have tofu, lime and one sad pepper. 15 min max.'
}, {
  from: 'coolie',
  text: "that's chilli-lime tofu with a blistered pepper. 12 minutes, 38g protein, one pan. want it?",
  v: 5
}, {
  from: 'user',
  text: 'go on then'
}, {
  from: 'coolie',
  text: 'pressing the tofu now (in spirit). here it is — i put the pepper in step three so it actually catches.',
  v: 3,
  card: true
}];
function ChatScreen({
  onOpen
}) {
  const [turns, setTurns] = React.useState(SCRIPTED.slice(0, 2));
  const [draft, setDraft] = React.useState('');
  const step = turns.length;
  const advance = () => {
    if (step < SCRIPTED.length) setTurns(SCRIPTED.slice(0, step + 1));
    setDraft('');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px minmax(0,1fr)',
      minHeight: 760,
      borderTop: 'var(--border-2) solid var(--line-hard)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--csm-ink)',
      color: 'var(--csm-paper)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      borderRight: 'var(--border-2) solid var(--line-hard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(CoolieAvatar, {
    variant: 1,
    size: 56,
    tone: "acid",
    base: "../../assets/character/"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-black) 22px/1 var(--font-display)',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase'
    }
  }, "Coolie"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-bold) 9px/1 var(--font-mono)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--csm-acid)',
      marginTop: 4
    }
  }, "online \xB7 always"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow",
    style: {
      color: 'var(--csm-acid)'
    }
  }, "today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-3)'
    }
  }, ['tofu + lime + sad pepper', 'what to do with 3 eggs', 'gym day, 40g protein'].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: '10px 12px',
      background: i === 0 ? 'var(--csm-magenta)' : 'transparent',
      color: 'var(--csm-paper)',
      border: '2px solid ' + (i === 0 ? 'var(--csm-paper)' : 'rgba(242,242,242,.3)'),
      borderRadius: 'var(--radius-md)',
      font: 'var(--weight-semibold) 13px/1.35 var(--font-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow",
    style: {
      color: 'var(--csm-acid)'
    }
  }, "your week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(MacroStat, {
    value: "6",
    label: "days cooked",
    tone: "acid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "41",
    unit: "min",
    label: "total kitchen time",
    tone: "hot",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ShapeIcon, {
    name: "globe-wire",
    size: 120,
    color: "rgba(242,242,242,.18)",
    spin: true
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csm-paper)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-6) var(--space-6) var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 820,
      width: '100%',
      margin: '0 auto'
    }
  }, turns.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    from: t.from,
    avatarVariant: t.v || 1,
    base: "../../assets/character/"
  }, t.text), t.card && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300,
      marginLeft: 56
    }
  }, /*#__PURE__*/React.createElement(RecipeCard, {
    title: "Chilli lime tofu",
    minutes: 12,
    kcal: 420,
    tags: ['high protein', 'one pan'],
    image: "../../assets/food/spinach.webp",
    imageTone: "acid",
    onClick: onOpen
  })))), step < SCRIPTED.length && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow",
    style: {
      width: '100%'
    }
  }, "suggested"), ['go on then', 'something colder', 'more protein'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    onClick: advance,
    style: {
      cursor: 'pointer',
      padding: '8px 14px',
      background: 'var(--csm-white)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-bold) 12px/1 var(--font-mono)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      boxShadow: 'var(--shadow-sticker-sm)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-2) solid var(--line-hard)',
      background: 'var(--csm-white)',
      padding: 'var(--space-4) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      advance();
    },
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "tell coolie what you've got\u2026",
    value: draft,
    onChange: e => setDraft(e.target.value),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(ShapeIcon, {
      name: "star-8",
      size: 16,
      color: "var(--csm-white)"
    })
  }, "Send")))));
}
Object.assign(window, {
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  Card,
  Badge,
  Marquee,
  SectionHeading,
  ShapeIcon
} = window.CSM;
const {
  SearchBar,
  ChipGroup
} = window.CSM;
const {
  CoolieAvatar,
  RecipeCard,
  MacroStat,
  StickerFrame
} = window.CSM;
function Hero({
  onAsk
}) {
  const [q, setQ] = React.useState('tofu, lime, one sad pepper');
  const [filters, setFilters] = React.useState(['15 min']);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 'var(--space-8) var(--page-pad-x) var(--space-7)',
      background: 'var(--csm-pink-wash)',
      backgroundImage: 'var(--pattern-grid)',
      borderBottom: 'var(--border-2) solid var(--line-hard)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ShapeIcon, {
    name: "globe-wire",
    size: 420,
    color: "rgba(131,44,139,.10)",
    style: {
      position: 'absolute',
      right: -110,
      top: -80
    },
    spin: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,.85fr)',
      gap: 'var(--space-7)',
      alignItems: 'center',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ShapeIcon, {
    name: "sparkle-6",
    size: 16,
    color: "var(--csm-magenta)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, "your ai food friend \xB7 always open")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(52px,6.6vw,104px)'
    }
  }, "The secret", /*#__PURE__*/React.createElement("br", null), "menu for", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--csm-magenta)'
    }
  }, "real life")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: '40ch',
      font: 'var(--weight-semibold) var(--body-lg-size)/1.45 var(--font-body)'
    }
  }, "Tell Coolie what's in the fridge. Get one thing worth cooking \u2014 in the time you actually have, with the protein you actually need."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    value: q,
    onChange: e => setQ(e.target.value),
    onSubmit: onAsk,
    cta: "Cook it"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ChipGroup, {
    options: ['15 min', 'high protein', 'no oven', 'budget', 'one pan'],
    value: filters,
    onChange: setFilters
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(MacroStat, {
    value: "12k",
    label: "secret recipes",
    tone: "acid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "9",
    unit: "min",
    label: "median cook",
    tone: "hot",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "0",
    label: "sad salads",
    tone: "lavender",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 420,
      aspectRatio: '1/1',
      background: 'var(--csm-acid)',
      border: 'var(--border-hard)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sticker-lg)',
      transform: 'rotate(-3deg)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/character/coolie-06.jpg",
    alt: "Coolie",
    style: {
      width: '92%',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -34,
      bottom: -22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "hot",
    sub: "secret menu",
    size: 124
  }, "New")), /*#__PURE__*/React.createElement(ShapeIcon, {
    name: "star-8",
    size: 62,
    color: "var(--csm-ink)",
    style: {
      position: 'absolute',
      right: -22,
      top: -22
    }
  })))));
}
function HowItWorks() {
  const steps = [{
    n: '01',
    t: 'Dump your fridge',
    b: 'Type it, snap it, or paste last night\u2019s leftovers. No measuring, no judgement.'
  }, {
    n: '02',
    t: 'Coolie picks one',
    b: 'One recipe, sized to your time, macros and mood \u2014 not forty tabs of maybe.'
  }, {
    n: '03',
    t: 'Cook it loud',
    b: 'Step timers, swaps for what you\u2019re missing, and a plan for tomorrow.'
  }];
  const tones = ['lavender', 'acid', 'paper'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) var(--page-pad-x)',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "how it works",
    shape: "crosshair-sparkle",
    highlight: "three moves"
  }, "Dinner in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    tone: tones[i],
    tilt: i === 1 ? -2 : 0,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, "step ", s.n), /*#__PURE__*/React.createElement(ShapeIcon, {
    name: ['asterisk-solid', 'star-8', 'sparkle-6'][i],
    size: 26,
    color: "var(--csm-magenta)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      font: 'var(--weight-regular) var(--body-size)/1.5 var(--font-body)'
    }
  }, s.b)))));
}
function Picks({
  onOpen
}) {
  const items = [{
    title: 'Chilli lime tofu',
    minutes: 12,
    kcal: 420,
    tags: ['high protein', 'one pan'],
    image: '../../assets/food/spinach.webp',
    imageTone: 'acid'
  }, {
    title: 'Mango cool-down',
    minutes: 5,
    kcal: 190,
    tags: ['no cook', 'budget'],
    image: '../../assets/food/mango.webp',
    imageTone: 'lavender'
  }, {
    title: 'Green machine bowl',
    minutes: 9,
    kcal: 310,
    tags: ['vegan', '5 things'],
    image: '../../assets/food/food-03.webp',
    imageTone: 'hot'
  }, {
    title: 'Late night wrap',
    minutes: 7,
    kcal: 480,
    tags: ['handheld'],
    image: '../../assets/food/food-06.webp',
    imageTone: 'wash'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-pad-x) var(--section-pad-y)',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "on the menu today",
    shape: "star-8",
    highlight: "picks"
  }, "Coolie's"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm",
    onClick: onOpen
  }, "See all recipes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(RecipeCard, _extends({
    key: it.title
  }, it, {
    tilt: i % 2 ? 1.5 : -1.5,
    onClick: onOpen
  })))));
}
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csm-ink)',
      color: 'var(--csm-paper)',
      padding: 'var(--section-pad-y) var(--page-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr)',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CoolieAvatar, {
    variant: 3,
    size: 180,
    tone: "hot",
    base: "../../assets/character/"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-black) clamp(28px,3.4vw,52px)/1.02 var(--font-display)',
      letterSpacing: '-0.03em',
      textTransform: 'uppercase'
    }
  }, "\"I don't do meal plans.", /*#__PURE__*/React.createElement("br", null), "I do ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--csm-acid)'
    }
  }, "what's already"), /*#__PURE__*/React.createElement("br", null), "in your kitchen.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "acid",
    size: "sm"
  }, "coolie"), /*#__PURE__*/React.createElement(Tag, {
    tone: "hot",
    size: "sm"
  }, "your agent"), /*#__PURE__*/React.createElement(Tag, {
    tone: "paper",
    size: "sm"
  }, "open 24/7")))));
}
function CTA({
  onAsk
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 'var(--section-pad-y) var(--page-pad-x)',
      background: 'var(--csm-lavender)',
      backgroundImage: 'var(--pattern-dots)',
      borderTop: 'var(--border-2) solid var(--line-hard)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "free while it's a secret",
    shape: "burst-seal",
    highlight: "tonight"
  }, "Eat better"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'center',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onAsk
  }, "Ask Coolie"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "paper"
  }, "Get the app"))), /*#__PURE__*/React.createElement(StickerFrame, {
    src: "../../assets/food/food-05.webp",
    tone: "acid",
    tilt: 8,
    size: "180px",
    style: {
      position: 'absolute',
      left: -40,
      bottom: -40
    }
  }), /*#__PURE__*/React.createElement(StickerFrame, {
    src: "../../assets/food/food-07.webp",
    tone: "hot",
    tilt: -10,
    size: "170px",
    sparkleShape: "sparkle-6",
    style: {
      position: 'absolute',
      right: -30,
      top: -30
    }
  }));
}
function HomeScreen({
  onAsk,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onAsk: onAsk
  }), /*#__PURE__*/React.createElement(Marquee, {
    tone: "acid",
    items: ['secret menu', 'no sad salads', 'ask coolie anything', '15 min dinners', 'real protein']
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Marquee, {
    tone: "hot",
    reverse: true,
    items: ['eat loud', 'cook fast', 'feel good', 'zero guilt']
  }), /*#__PURE__*/React.createElement(Picks, {
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(Quote, null), /*#__PURE__*/React.createElement(CTA, {
    onAsk: onAsk
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlanScreen.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  Badge,
  ShapeIcon,
  SectionHeading,
  Marquee
} = window.CSM;
const {
  Tabs
} = window.CSM;
const {
  ProgressMeter
} = window.CSM;
const {
  MacroStat,
  RecipeCard,
  CoolieAvatar
} = window.CSM;
const WEEK = [{
  day: 'MON',
  title: 'Chilli lime tofu',
  minutes: 12,
  image: '../../assets/food/spinach.webp',
  imageTone: 'acid'
}, {
  day: 'TUE',
  title: 'Desk drawer noodles',
  minutes: 11,
  image: '../../assets/food/food-05.webp',
  imageTone: 'lavender'
}, {
  day: 'WED',
  title: 'Green machine bowl',
  minutes: 9,
  image: '../../assets/food/food-03.webp',
  imageTone: 'hot'
}, {
  day: 'THU',
  title: 'Late night wrap',
  minutes: 7,
  image: '../../assets/food/food-06.webp',
  imageTone: 'wash'
}, {
  day: 'FRI',
  title: 'Cold crunch salad',
  minutes: 6,
  image: '../../assets/food/food-07.webp',
  imageTone: 'acid'
}];
function PlanScreen({
  onOpen
}) {
  const [view, setView] = React.useState('Week');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) var(--page-pad-x) var(--space-6)',
      background: 'var(--csm-lavender)',
      backgroundImage: 'var(--pattern-dots)',
      borderBottom: 'var(--border-2) solid var(--line-hard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "your secret menu",
    shape: "asterisk-solid",
    highlight: "week"
  }, "This"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Week', 'Shopping'],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm"
  }, "Regenerate")))), /*#__PURE__*/React.createElement(Marquee, {
    tone: "hot",
    items: ['5 dinners', '45 minutes total', '1 shop', 'zero waste']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) var(--page-pad-x) var(--section-pad-y)',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, view === 'Week' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-4)'
    }
  }, WEEK.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.day,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-label"
  }, d.day), /*#__PURE__*/React.createElement(ShapeIcon, {
    name: i === 0 ? 'star-8' : 'asterisk-solid',
    size: 22,
    color: i === 0 ? 'var(--csm-magenta)' : 'var(--csm-ink)'
  })), /*#__PURE__*/React.createElement(RecipeCard, {
    title: d.title,
    minutes: d.minutes,
    image: d.image,
    imageTone: d.imageTone,
    onClick: onOpen,
    tilt: i % 2 ? 1 : -1
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, [['produce', ['2 limes', '1 red chilli', '200g spinach', '3 peppers']], ['protein', ['400g firm tofu', '6 eggs', '1 tin chickpeas']], ['cupboard', ['soy sauce', 'cornflour', 'honey', 'rice noodles']]].map(([g, items], i) => /*#__PURE__*/React.createElement(Card, {
    key: g,
    tone: ['paper', 'acid', 'lavender'][i],
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, g), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: 'var(--border-hair-line)',
      paddingBottom: 'var(--space-2)',
      font: 'var(--weight-semibold) var(--body-size)/1.3 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, it), /*#__PURE__*/React.createElement(Tag, {
    tone: "ink",
    size: "sm"
  }, "add"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow",
    style: {
      color: 'var(--csm-acid)'
    }
  }, "how the week is going"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(MacroStat, {
    value: "6",
    label: "days cooked",
    tone: "acid"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "182",
    unit: "g",
    label: "protein",
    tone: "hot"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "41",
    unit: "min",
    label: "kitchen time",
    tone: "lavender"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "\xA328",
    label: "grocery spend",
    tone: "paper"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "week plan",
    value: 72,
    tone: "acid"
  }), /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "protein goal",
    value: 88,
    tone: "hot"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "acid",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CoolieAvatar, {
    variant: 7,
    size: 64,
    tone: "paper",
    base: "../../assets/character/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-bold) var(--body-size)/1.4 var(--font-body)'
    }
  }, "You keep skipping Thursdays. Want me to make Thursday a five-minute night?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ink"
  }, "Do it"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "paper"
  }, "Nah"))))));
}
Object.assign(window, {
  PlanScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlanScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RecipeScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Tag,
  Card,
  Badge,
  ShapeIcon,
  Marquee,
  SectionHeading
} = window.CSM;
const {
  Tabs
} = window.CSM;
const {
  Checkbox
} = window.CSM;
const {
  ProgressMeter,
  Toast,
  Dialog
} = window.CSM;
const {
  MacroStat,
  CoolieAvatar,
  StickerFrame,
  RecipeCard
} = window.CSM;
const STEPS = ['Press the tofu between two plates while the pan gets properly hot.', 'Cube it, dust with cornflour, and fry hard for 6 minutes without poking it.', 'Chilli, lime, soy, a spoon of honey — straight in, let it catch.', 'Wilt the spinach in the same pan. Eat out of the pan. Nobody is watching.'];
function RecipeScreen({
  onBack,
  onAsk
}) {
  const [tab, setTab] = React.useState('Method');
  const [done, setDone] = React.useState([]);
  const [saved, setSaved] = React.useState(false);
  const [askOpen, setAskOpen] = React.useState(false);
  const toggle = i => setDone(d => d.includes(i) ? d.filter(x => x !== i) : [...d, i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--page-pad-x)',
      background: 'var(--csm-pink-wash)',
      backgroundImage: 'var(--pattern-grid)',
      borderBottom: 'var(--border-2) solid var(--line-hard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,.8fr)',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "paper",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-black) 14px/1 var(--font-display)'
      }
    }, "\u2190")
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      margin: 'var(--space-5) 0 var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(ShapeIcon, {
    name: "sparkle-6",
    size: 16,
    color: "var(--csm-magenta)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, "coolie picked this for tonight")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(44px,5.4vw,84px)'
    }
  }, "Chilli lime", /*#__PURE__*/React.createElement("br", null), "tofu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "ink"
  }, "12 min"), /*#__PURE__*/React.createElement(Tag, {
    tone: "acid"
  }, "high protein"), /*#__PURE__*/React.createElement(Tag, {
    tone: "lavender"
  }, "one pan"), /*#__PURE__*/React.createElement(Tag, {
    tone: "hot"
  }, "4 things")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSaved(true)
  }, "Save to my menu"), /*#__PURE__*/React.createElement(Button, {
    variant: "paper",
    onClick: () => setAskOpen(true)
  }, "Swap an ingredient"), /*#__PURE__*/React.createElement(IconButton, {
    label: "share",
    variant: "ink",
    icon: /*#__PURE__*/React.createElement(ShapeIcon, {
      name: "star-8",
      size: 18,
      color: "var(--csm-acid)"
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StickerFrame, {
    src: "../../assets/food/spinach.webp",
    tone: "acid",
    tilt: -4,
    size: "88%",
    sparkleShape: "star-8"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: -18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "hot",
    sub: "protein",
    size: 112
  }, "38g"))))), /*#__PURE__*/React.createElement(Marquee, {
    tone: "ink",
    items: ['12 minutes', '38g protein', '4 ingredients', 'one pan', 'no oven']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,.6fr)',
      gap: 'var(--space-6)',
      padding: 'var(--space-7) var(--page-pad-x) var(--section-pad-y)',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Ingredients', 'Method', 'Swaps'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, tab === 'Method' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: done.includes(i) ? 'wash' : 'paper',
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-black) 34px/0.8 var(--font-display)',
      letterSpacing: '-0.04em',
      color: 'var(--csm-magenta)',
      minWidth: 46
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-semibold) var(--body-lg-size)/1.45 var(--font-body)',
      textDecoration: done.includes(i) ? 'line-through' : 'none'
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "done",
    checked: done.includes(i),
    onChange: () => toggle(i)
  }))))))), tab === 'Ingredients' && /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['400g', 'firm tofu'], ['2', 'limes'], ['1', 'red chilli'], ['200g', 'spinach'], ['2 tbsp', 'soy sauce'], ['1 tsp', 'honey']].map(([q, n]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'baseline',
      borderBottom: 'var(--border-hair-line)',
      paddingBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-label",
    style: {
      minWidth: 80,
      color: 'var(--text-deep)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--body-lg-size)/1.3 var(--font-body)'
    }
  }, n))))), tab === 'Swaps' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, [['no tofu?', 'chickpeas — same 12 min, 6g less protein'], ['no lime?', 'lemon plus a pinch of sugar'], ['no chilli?', 'chilli flakes, half a teaspoon'], ['no spinach?', 'any green in the drawer, honestly']].map(([a, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: a,
    tone: i % 2 ? 'lavender' : 'acid',
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 20
    }
  }, a), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: 'var(--weight-semibold) var(--body-size)/1.45 var(--font-body)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow",
    style: {
      color: 'var(--csm-acid)'
    }
  }, "per serving"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MacroStat, {
    value: "420",
    unit: "kcal",
    label: "energy",
    tone: "acid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "38",
    unit: "g",
    label: "protein",
    tone: "hot",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "18",
    unit: "g",
    label: "fat",
    tone: "lavender",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MacroStat, {
    value: "26",
    unit: "g",
    label: "carbs",
    tone: "paper",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "daily protein",
    value: 62,
    tone: "acid"
  }), /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "cook progress",
    value: done.length / STEPS.length * 100,
    tone: "hot"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "lavender",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CoolieAvatar, {
    variant: 5,
    size: 56,
    tone: "hot",
    base: "../../assets/character/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-semibold) var(--body-sm-size)/1.4 var(--font-body)'
    }
  }, "Missing something? I'll rebuild the whole thing around what you've got.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "sm",
    variant: "ink",
    onClick: onAsk
  }, "Ask Coolie"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "csm-eyebrow"
  }, "next up"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(RecipeCard, {
    title: "Mango cool-down",
    minutes: 5,
    kcal: 190,
    tags: ['no cook'],
    image: "../../assets/food/mango.webp",
    imageTone: "lavender"
  }))))), saved && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 'var(--space-5)',
      bottom: 'var(--space-5)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "hype",
    title: "saved"
  }, "In your secret menu. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setSaved(false);
    },
    style: {
      color: 'inherit'
    }
  }, "undo"))), /*#__PURE__*/React.createElement(Dialog, {
    open: askOpen,
    title: "Swap an ingredient",
    width: 460,
    onClose: () => setAskOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => setAskOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setAskOpen(false)
    }, "Rebuild it"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--weight-semibold) var(--body-size)/1.5 var(--font-body)'
    }
  }, "Tell Coolie what's missing and she'll re-time the whole recipe around it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "paper"
  }, "no tofu"), /*#__PURE__*/React.createElement(Tag, {
    tone: "paper"
  }, "no lime"), /*#__PURE__*/React.createElement(Tag, {
    tone: "paper"
  }, "no chilli"), /*#__PURE__*/React.createElement(Tag, {
    tone: "paper"
  }, "no pan"))));
}
Object.assign(window, {
  RecipeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RecipeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.CoolieAvatar = __ds_scope.CoolieAvatar;

__ds_ns.MacroStat = __ds_scope.MacroStat;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.StickerFrame = __ds_scope.StickerFrame;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SHAPE_GEOMETRY = __ds_scope.SHAPE_GEOMETRY;

__ds_ns.SHAPES = __ds_scope.SHAPES;

__ds_ns.ShapeIcon = __ds_scope.ShapeIcon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressMeter = __ds_scope.ProgressMeter;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ChipGroup = __ds_scope.ChipGroup;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
