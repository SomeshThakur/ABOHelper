function initializesgmtSearchContent() {
    flxSearchContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxSearchContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ifb4341116c243"
    }, {}, {});
    flxSearchContent.setDefaultUnit(kony.flex.DP);
    var lblSearchContent = new kony.ui.Label({
        "id": "lblSearchContent",
        "isVisible": true,
        "left": "6%",
        "skin": "CopyslLabel0dcc215c014a946",
        "text": "Label",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxSearchContent.add(lblSearchContent);
}