//actions.js file 
function AS_FlexContainer_f178094aa635447880bd0888fad2fe43(eventobject) {}

function AS_FlexContainer_hab50acbe68e4ae8a76a1ffced9c7a7c(eventobject) {
    function viewCardGesture(widgetID, gestureInfo) {
        var a = gestureInfo.gestureType;
        if (kony.os.toNumber(a) == 3) //3 is LongPress  
        {}
    }
}

function AS_Button_ae3ea02c9cf34f028eb7701aa564dea0(eventobject) {
    frmSearch.show();
}

function AS_Button_afac160d8587403390e8bbb2892ce709(eventobject, x, y) {}

function AS_Button_cd1f7a674b8c47fe924db2c456d3f634(eventobject) {
    frmHome.show();
}

function AS_Button_e532fbb3a8ab4d5399946dc0bcf32020(eventobject) {}

function AS_Button_gb101c5509434c029348774becf4da44(eventobject) {
    moveAnimation(frmHome.flxNavHome, "0dp");
    frmHome.flxMainActivity.setEnabled(false)
}

function AS_Button_gf488766b3b94d78ac885ed5aae553a9(eventobject) {
    return searchOnClick.call(this);
}

function AS_Button_icea28465b7b4643ae564b901cfe6cae(eventobject) {
    frmNewConnection.show();
}

function AS_Button_j6dd63dcc8a745348348e392641f324c(eventobject) {
    function searchOnClick() {
        var categories = {
            'Users': Users,
            'Tags': Tags,
            'Groups': Groups,
            'Products': Products
        };
        data = [];
        var i = 0;
        for (var category in categories) {
            data.push([{
                    lblSearchHeader: category
                },
                []
            ]);
            for (var item of categories[category]) {
                firstName = item.firstName;
                if (firstName != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (firstName.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: firstName
                        });
                    }
                }
                tag_name = item.tag;
                if (tag_name != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (tag_name.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: tag_name
                        });
                    }
                }
                group = item.group;
                if (group != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (group.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: group
                        });
                    }
                }
                product = item.product;
                if (product != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (product.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: product
                        });
                    }
                }
            }
            i++;
        }
        frmSearch.sgmtSearchResults.setData(data);
    }
}

function AS_Form_c766be6e6a604c73b8a1778617c91ed4(eventobject) {
    frmSearch.searchIcon.onTouchEnd = searchOnClick;
}

function AS_Form_efb4e1aa45814c669af70fd868459e30(eventobject) {}

function AS_Form_h9f5f288a2d94089bb67ab4657147cf6(eventobject) {
    frmHome.flxNavHome.left = "-100%"

    function formGesture(widgetID, gestureInfo) {
        var a = gestureInfo.gestureType;
        if (kony.os.toNumber(a) == 2) {
            h = gestureInfo.swipeDirection;
            if (h == 1) {
                moveAnimation(frmHome.flxNavHome, "-100%");
                frmHome.flxMainActivity.setEnabled(true)
            }
        }
    }

    function ActivityCardGesture(widgetID, gestureInfo, context) {
        var leftTransObj = kony.ui.makeAffineTransform();
        var rightTransObj = kony.ui.makeAffineTransform();
        leftTransObj.translate(-180, 0);
        rightTransObj.translate(180, 0);
        var aniconfig = {
            duration: 0.5,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        }
        var leftaniobj = {
            "100": {
                "transform": leftTransObj
            }
        }
        var rightaniobj = {
            "100": {
                "transform": rightTransObj
            }
        }
        var index = {
            sectionIndex: 0,
            rowIndex: context.rowIndex,
        }; //context.rowIndex
        var a = gestureInfo.gestureType;
        if (kony.os.toNumber(a) == 2) {
            h = gestureInfo.swipeDirection;
            if (h == 1) {
                // alert("Right")
                frmHome.sgmtActivities.animateRows({
                    rows: [index],
                    widgets: ["flxActivityOptions"],
                    animation: {
                        definition: kony.ui.createAnimation(leftaniobj),
                        config: aniconfig
                    }
                });
            } else if (h == 2) {
                frmHome.sgmtActivities.animateRows({
                    rows: [index],
                    widgets: ["flxActivityOptions"],
                    animation: {
                        definition: kony.ui.createAnimation(rightaniobj),
                        config: aniconfig
                    }
                });
            }
        }
    }
    var x = {
        fingers: 1
    };
    try {
        frmHome.flxNavHome.setGestureRecognizer(2, x, formGesture);
        frmHome.setGestureRecognizer(2, x, formGesture);
        frmHome.sgmtActivities.rowTemplate.setGestureRecognizer(2, x, ActivityCardGesture)
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture: " + err.message);
    }
}

function AS_UWI_fcdb0a4e33634ba48df97aa17f7a8711(eventobject) {
    frmCard.viewCard.flxCardBackView.setVisibility(false)
}