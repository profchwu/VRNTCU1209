(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {"timeout":{"score":{"label":trans('quizTimeout_0D5A6823_00F3_B5B3_4165_01465F22805D.score','quizTimeout_0D5A6823_00F3_B5B3_4165_01465F22805D.score.label'),"visible":true},"repeat":{"label":trans('quizTimeout_0D5A6823_00F3_B5B3_4165_01465F22805D.repeat','quizTimeout_0D5A6823_00F3_B5B3_4165_01465F22805D.repeat.label'),"visible":false},"title":trans('quizTimeout_0D5A6823_00F3_B5B3_4165_01465F22805D.title'),"id":"quizTimeout_0D5A6823_00F3_B5B3_4165_01465F22805D"},"timeLimit":120,"score":{"downloadCSV":{"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.downloadCSV','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.downloadCSV.label'),"visible":false},"submitToLMS":{"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.submitToLMS','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.submitToLMS.label'),"visible":false},"title":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.title'),"repeat":{"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.repeat','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.repeat.label'),"visible":false},"elapsedTime":{"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.elapsedTime','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.elapsedTime.label'),"visible":true},"completion":{"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.completion','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.completion.label'),"visible":true},"questions":{"correctLabel":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.questionsCorrect','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.questions.correctLabel'),"incorrectLabel":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.questionsIncorrect','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.questions.incorrectLabel'),"visible":true,"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.questions','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.questions.label')},"items":{"label":trans('quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.items','quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10.items.label'),"visible":true},"canClose":true,"id":"quizScore_0D5F8823_00F3_B5B3_410F_72C1C15F0C10"},"objectives":[{"visibleInScore":true,"label":trans('score1.label'),"id":"score1"},{"visibleInScore":true,"label":trans('score2.label'),"id":"score2"}],"question":{"scoreZeroIsIncorrect":true,"responseDisplayTime":2000,"ok":trans('quizQuestion_0D597823_00F3_B5B3_4165_1F88933E6588.ok'),"id":"quizQuestion_0D597823_00F3_B5B3_4165_1F88933E6588"},"theme":{"timeout":{},"score":{},"question":{"window":{"mediaContainer":{"panoramaPlayer":{"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"}}}}},"questions":[{"canRepeat":false,"media":player.album_0FB17627_00F2_BDB2_415A_2861C3B823C8,"options":[{"id":"questionOption_0E2A4FC2_00F3_8AED_4167_AA53D31BF3CA","score":50,"text":trans('questionOption_0E2A4FC2_00F3_8AED_4167_AA53D31BF3CA.text')},{"id":"questionOption_0FBD2EC1_00F2_8AEE_4154_761144313068","score":0,"text":trans('questionOption_0FBD2EC1_00F2_8AEE_4154_761144313068.text')}],"multipleChoice":true,"id":"question_0E3F50F5_00F2_F696_415B_E24206438B3B","objective":"score1","panorama":player.panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0,"title":trans('question_0E3F50F5_00F2_F696_415B_E24206438B3B.title'),"canClose":true},{"canRepeat":false,"media":player.album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA,"options":[{"id":"questionOption_117C4E43_00F3_8DF2_4167_0A327B5052D1","score":0,"text":trans('questionOption_117C4E43_00F3_8DF2_4167_0A327B5052D1.text')},{"id":"questionOption_115B2BCF_00F3_8AF3_415E_7A1CF5A0E8E2","score":100,"text":trans('questionOption_115B2BCF_00F3_8AF3_415E_7A1CF5A0E8E2.text')}],"multipleChoice":true,"id":"question_1186E83B_00F2_9592_4167_A7708AF8E19E","objective":"score1","panorama":player.panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0,"title":trans('question_1186E83B_00F2_9592_4167_A7708AF8E19E.title'),"canClose":true},{"canRepeat":false,"media":player.album_12DD7F69_00F3_8BB1_415C_491A50BD190C,"options":[{"id":"questionOption_107510F8_00F2_B69E_415F_530E0B6FAE8C","score":0,"text":trans('questionOption_107510F8_00F2_B69E_415F_530E0B6FAE8C.text')},{"id":"questionOption_104EA506_00F2_9F75_4132_275F567B272C","score":100,"text":trans('questionOption_104EA506_00F2_9F75_4132_275F567B272C.text')}],"multipleChoice":true,"id":"question_113D83A5_00F3_BAB7_4157_90768C14BB44","objective":"score1","panorama":player.panorama_09115B57_00F0_7D83_4169_257E80CE7624,"title":trans('question_113D83A5_00F3_BAB7_4157_90768C14BB44.title'),"canClose":true}],"autoFinish":true};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.init(); this.syncPlaylists([this.PlayList_19103850_011D_B5ED_4161_2E9172B933C8,this.mainPlayList])","propagateClick":false,"borderSize":0,"minHeight":20,"shadow":false,"defaultVRPointer":"laser","borderRadius":0,"gap":10,"mobileMipmappingEnabled":false,"id":"rootPlayer","mouseWheelEnabled":true,"scrollBarWidth":10,"scrollBarMargin":2,"paddingTop":0,"paddingBottom":0,"scrollBarVisible":"rollOver","paddingLeft":0,"scrollBarColor":"#000000","definitions": [{"thumbnailUrl":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_t.jpg","label":trans('panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9.label'),"hfovMax":130,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"url":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_0/{face}/0/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":48,"rowCount":8},{"tags":"ondemand","width":12288,"url":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"tags":"ondemand","width":6144,"url":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"tags":"mobilevr2gen","width":12288,"url":"media/panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"vfov":175.5,"class":"Panorama","hfov":360,"data":{"label":"Master Bedroom"},"pitch":0,"id":"panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9"},{"class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer","id":"MainViewerPhotoAlbumPlayer"},{"overlays":["this.overlay_11AD64F5_00F5_9E96_4159_6E2D7178E8E4","this.overlay_11631B74_00F2_8B96_40C8_0A279A99E400"],"partial":false,"frames":[{"thumbnailUrl":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":21504,"url":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_0/{face}/0/{row}_{column}.jpg","height":3584,"class":"TiledImageResourceLevel","colCount":42,"rowCount":7},{"tags":"ondemand","width":12288,"url":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"tags":"ondemand","width":6144,"url":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"tags":"mobilevr2gen","width":12288,"url":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"hfov":360,"adjacentPanoramas":[{"distance":9.15,"yaw":10.44,"select":"this.overlay_11AD64F5_00F5_9E96_4159_6E2D7178E8E4.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_11AD64F5_00F5_9E96_4159_6E2D7178E8E4"},"class":"AdjacentPanorama","panorama":"this.panorama_09115B57_00F0_7D83_4169_257E80CE7624"}],"pitch":0,"thumbnailUrl":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_t.jpg","label":trans('panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0.label'),"hfovMax":130,"vfov":173.98,"class":"Panorama","data":{"label":"livingroom1"},"id":"panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0"},{"thumbnailUrl":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_t.jpg","label":trans('panorama_09115B57_00F0_7D83_4169_257E80CE7624.label'),"hfovMax":130,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":21504,"url":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_0/{face}/0/{row}_{column}.jpg","height":3584,"class":"TiledImageResourceLevel","colCount":42,"rowCount":7},{"tags":"ondemand","width":12288,"url":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"tags":"ondemand","width":6144,"url":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"tags":"mobilevr2gen","width":12288,"url":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"vfov":176.7,"class":"Panorama","hfov":360,"overlays":["this.overlay_0F030B3F_00F3_8B92_415D_A2C62163659C"],"data":{"label":"livingroom2"},"pitch":0,"id":"panorama_09115B57_00F0_7D83_4169_257E80CE7624"},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_0908FF3B_00F0_1583_415E_2617C822F9B0","id":"panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_camera"},{"propagateClick":false,"borderSize":0,"scaleMode":"fit_inside","shadow":false,"borderRadius":0,"url":trans('Image_12C6D6F3_010E_BA92_413D_DD9FBB92D988.url'),"horizontalAlign":"center","id":"Image_12C6D6F3_010E_BA92_413D_DD9FBB92D988","width":"5.882%","paddingTop":0,"paddingBottom":0,"data":{"name":"Image8012"},"paddingLeft":0,"top":"1.42%","paddingRight":0,"toolTipHorizontalAlign":"center","backgroundOpacity":0,"height":"10.601%","verticalAlign":"middle","class":"Image","left":"0.88%","minWidth":1,"minHeight":1},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0"},{"class":"PanoramaPlayListItem","media":"this.panorama_09115B57_00F0_7D83_4169_257E80CE7624"},{"class":"PanoramaPlayListItem","media":"this.panorama_092CA89C_00F0_1C85_4140_74BEE29E028C"},{"class":"PanoramaPlayListItem","media":"this.panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9"},{"class":"PanoramaPlayListItem","media":"this.panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0"},{"class":"PhotoAlbumPlayListItem","media":"this.album_0FB17627_00F2_BDB2_415A_2861C3B823C8"},{"class":"PhotoAlbumPlayListItem","media":"this.album_12DD7F69_00F3_8BB1_415C_491A50BD190C"},{"class":"PhotoAlbumPlayListItem","media":"this.album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA"}],"id":"PlayList_19103850_011D_B5ED_4161_2E9172B933C8"},{"thumbnailUrl":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_t.jpg","label":trans('panorama_092CA89C_00F0_1C85_4140_74BEE29E028C.label'),"hfovMax":130,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"url":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_0/{face}/0/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":48,"rowCount":8},{"tags":"ondemand","width":12288,"url":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"tags":"ondemand","width":6144,"url":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"tags":"mobilevr2gen","width":12288,"url":"media/panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"vfov":170.97,"class":"Panorama","hfov":360,"data":{"label":"mainkitchen"},"pitch":0,"id":"panorama_092CA89C_00F0_1C85_4140_74BEE29E028C"},{"image":{"class":"ImageResource","levels":[{"url":"media/album_0FB17627_00F2_BDB2_415A_2861C3B823C8_0.jpg","class":"ImageResourceLevel"}]},"thumbnailUrl":"media/album_0FB17627_00F2_BDB2_415A_2861C3B823C8_0_t.jpg","duration":5000,"label":trans('album_0FB17627_00F2_BDB2_415A_2861C3B823C8_0.label'),"height":167,"class":"Photo","width":302,"data":{"label":"ntcu"},"id":"album_0FB17627_00F2_BDB2_415A_2861C3B823C8_0"},{"image":{"class":"ImageResource","levels":[{"url":"media/album_12DD7F69_00F3_8BB1_415C_491A50BD190C_0.png","class":"ImageResourceLevel"}]},"thumbnailUrl":"media/album_12DD7F69_00F3_8BB1_415C_491A50BD190C_0_t.png","duration":5000,"label":trans('album_12DD7F69_00F3_8BB1_415C_491A50BD190C_0.label'),"height":225,"class":"Photo","width":225,"data":{"label":"LOGO"},"id":"album_12DD7F69_00F3_8BB1_415C_491A50BD190C_0"},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_0908DF3B_00F0_1583_4164_F7F3B1B4AADF","id":"panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_camera"},{"thumbnailUrl":"media/album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_t.png","label":trans('album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA.label'),"loop":false,"class":"PhotoAlbum","id":"album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA","playList":"this.album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_AlbumPlayList","data":{"label":"Photo Album LOGO"}},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_camera","media":"this.panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0","class":"PanoramaPlayListItem","begin":"this.quizShowQuestion('question_0E3F50F5_00F2_F696_415B_E24206438B3B').then(function(r){  if(r.length == 0) return;  }.bind(this)); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_09115B57_00F0_7D83_4169_257E80CE7624_camera","media":"this.panorama_09115B57_00F0_7D83_4169_257E80CE7624","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_camera","media":"this.panorama_092CA89C_00F0_1C85_4140_74BEE29E028C","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9_camera","media":"this.panorama_092CD552_00F0_3582_4155_DB4BDBBA24C9","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_camera","media":"this.panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)","media":"this.album_0FB17627_00F2_BDB2_415A_2861C3B823C8"},{"class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 6, 7)","media":"this.album_12DD7F69_00F3_8BB1_415C_491A50BD190C"},{"player":"this.MainViewerPhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 7, 0)","media":"this.album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA","class":"PhotoAlbumPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"class":"PanoramaPlayer","zoomEnabled":true,"viewerArea":"this.MainViewer","aaEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"toolTipBorderRadius":3,"minWidth":100,"borderSize":0,"borderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"progressBackgroundOpacity":1,"progressBottom":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowOpacity":0,"toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"displayTooltipInSurfaceSelection":true,"subtitlesBorderSize":0,"id":"MainViewer","playbackBarHeight":10,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"toolTipFontColor":"#606060","playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"width":"100%","toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","progressOpacity":1,"toolTipFontStyle":"normal","subtitlesEnabled":true,"progressBarBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"toolTipBorderSize":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"height":"100%","progressBarBorderColor":"#000000","subtitlesFontWeight":"normal","toolTipTextShadowBlurRadius":3,"progressBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","progressHeight":10,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","subtitlesPaddingLeft":5,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowVerticalLength":1,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","progressBorderSize":0,"subtitlesFontSize":"3vmin","progressBorderColor":"#000000","progressBarBorderRadius":0,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"progressBarBorderSize":0,"toolTipFontWeight":"normal","subtitlesPaddingRight":5,"transitionDuration":500,"displayTooltipInTouchScreens":true,"subtitlesPaddingBottom":5,"progressBarBackgroundColor":["#3399FF"],"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","shadow":false,"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","playbackBarHeadHeight":15,"playbackBarLeft":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"toolTipShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontFamily":"Arial","paddingTop":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"paddingLeft":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarHeadOpacity":1,"playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesShadow":false,"playbackBarBorderRadius":0,"toolTipDisplayTime":600,"paddingRight":0,"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","playbackBarBorderSize":0,"toolTipPaddingLeft":6,"toolTipShadowOpacity":1,"progressBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"playbackBarOpacity":1,"transitionMode":"blending","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"subtitlesGap":0,"progressBarOpacity":1,"progressBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesHorizontalAlign":"center","playbackBarHeadShadowVerticalLength":0,"subtitlesVerticalAlign":"bottom","toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"translationTransitionDuration":1000,"toolTipFontSize":"1.11vmin","progressLeft":0,"toolTipShadowVerticalLength":0,"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","surfaceReticleOpacity":0.6,"playbackBarBottom":5,"propagateClick":false,"minHeight":50},{"thumbnailUrl":"media/album_12DD7F69_00F3_8BB1_415C_491A50BD190C_t.png","label":trans('album_12DD7F69_00F3_8BB1_415C_491A50BD190C.label'),"loop":false,"class":"PhotoAlbum","id":"album_12DD7F69_00F3_8BB1_415C_491A50BD190C","playList":"this.album_12DD7F69_00F3_8BB1_415C_491A50BD190C_AlbumPlayList","data":{"label":"Photo Album LOGO"}},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_09093F3A_00F0_158D_412B_D1A4DE70AA90","id":"panorama_09115B57_00F0_7D83_4169_257E80CE7624_camera"},{"thumbnailUrl":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_t.jpg","label":trans('panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0.label'),"hfovMax":130,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"url":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_0/{face}/0/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":48,"rowCount":8},{"tags":"ondemand","width":12288,"url":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"tags":"ondemand","width":6144,"url":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"tags":"mobilevr2gen","width":12288,"url":"media/panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"vfov":171.58,"class":"Panorama","hfov":360,"data":{"label":"terraza1"},"pitch":0,"id":"panorama_092C9271_00F0_2F9E_4169_DFCFBF0E68E0"},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_09091F3B_00F0_1583_4169_1DA186F88494","id":"panorama_092CA89C_00F0_1C85_4140_74BEE29E028C_camera"},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_0904AF39_00F0_158F_4155_6D917F445EB8","id":"panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_camera"},{"thumbnailUrl":"media/album_0FB17627_00F2_BDB2_415A_2861C3B823C8_t.png","label":trans('album_0FB17627_00F2_BDB2_415A_2861C3B823C8.label'),"loop":false,"class":"PhotoAlbum","id":"album_0FB17627_00F2_BDB2_415A_2861C3B823C8","playList":"this.album_0FB17627_00F2_BDB2_415A_2861C3B823C8_AlbumPlayList","data":{"label":"Photo Album ntcu"}},{"image":{"class":"ImageResource","levels":[{"url":"media/album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_0.png","class":"ImageResourceLevel"}]},"thumbnailUrl":"media/album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_0_t.png","duration":5000,"label":trans('album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_0.label'),"height":225,"class":"Photo","width":225,"data":{"label":"LOGO"},"id":"album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_0"},{"enabledInCardboard":true,"maps":[],"data":{"hasPanoramaAction":true,"label":"Arrow 02"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.AnimatedImageResource_19185785_011D_BB77_415F_9272A937B284","distance":100,"yaw":10.44,"class":"HotspotPanoramaOverlayImage","vfov":8.84,"hfov":10.5,"data":{"label":"Arrow 02"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-10.52,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_11634543_00F5_9FF2_4149_6A359D085CBA"],"id":"overlay_11AD64F5_00F5_9E96_4159_6E2D7178E8E4"},{"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":{"class":"ImageResource","levels":[{"height":377,"width":224,"class":"ImageResourceLevel","url":"media/panorama_0BDC39E3_00F0_1C82_4148_F83665E047A0_HS_45m0jzy6.png"}]},"distance":50,"yaw":164.41,"pitch":-21.79,"vfov":12.08,"class":"HotspotPanoramaOverlayImage","hfov":7.2,"data":{"label":"Polygon"}}],"areas":["this.HotspotPanoramaOverlayArea_1147DB84_00F2_8B75_4157_59EB3CAECCBA"],"data":{"label":"Polygon"},"id":"overlay_11631B74_00F2_8B96_40C8_0A279A99E400"},{"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":{"class":"ImageResource","levels":[{"height":404,"width":663,"class":"ImageResourceLevel","url":"media/panorama_09115B57_00F0_7D83_4169_257E80CE7624_HS_uc5lmsn7.png"}]},"distance":50,"yaw":-28.65,"pitch":-2.07,"vfov":12.93,"class":"HotspotPanoramaOverlayImage","hfov":21.02,"data":{"label":"Polygon"}}],"areas":["this.HotspotPanoramaOverlayArea_10C4AB62_00F3_8BAD_4150_056137883FB7"],"data":{"label":"Polygon"},"id":"overlay_0F030B3F_00F3_8B92_415D_A2C62163659C"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_0908FF3B_00F0_1583_415E_2617C822F9B0"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_0908DF3B_00F0_1583_4164_F7F3B1B4AADF"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.27,"class":"PhotoCameraPosition","zoomFactor":1.1,"y":0.54},"duration":5000,"easing":"linear","class":"MovementPhotoCamera","initialPosition":{"x":0.5,"class":"PhotoCameraPosition","zoomFactor":1,"y":0.5},"scaleMode":"fit_outside"},"media":"this.album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_0"}],"id":"album_12E016CB_00F3_9AF2_4154_B8A78FB70ACA_AlbumPlayList"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.68,"class":"PhotoCameraPosition","zoomFactor":1.1,"y":0.71},"duration":5000,"easing":"linear","class":"MovementPhotoCamera","initialPosition":{"x":0.5,"class":"PhotoCameraPosition","zoomFactor":1,"y":0.5},"scaleMode":"fit_outside"},"media":"this.album_12DD7F69_00F3_8BB1_415C_491A50BD190C_0"}],"id":"album_12DD7F69_00F3_8BB1_415C_491A50BD190C_AlbumPlayList"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_09093F3A_00F0_158D_412B_D1A4DE70AA90"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_09091F3B_00F0_1583_4169_1DA186F88494"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_0904AF39_00F0_158F_4155_6D917F445EB8"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.5,"class":"PhotoCameraPosition","zoomFactor":1.1,"y":0.58},"duration":5000,"easing":"linear","class":"MovementPhotoCamera","initialPosition":{"x":0.5,"class":"PhotoCameraPosition","zoomFactor":1,"y":0.5},"scaleMode":"fit_outside"},"media":"this.album_0FB17627_00F2_BDB2_415A_2861C3B823C8_0"}],"id":"album_0FB17627_00F2_BDB2_415A_2861C3B823C8_AlbumPlayList"},{"frameDuration":41,"levels":[{"height":480,"width":380,"class":"ImageResourceLevel","url":"media/res_11BD4CAB_00F5_8EB2_4134_A9FE54A60C3C_0.png"}],"colCount":4,"class":"AnimatedImageResource","frameCount":24,"rowCount":6,"id":"AnimatedImageResource_19185785_011D_BB77_415F_9272A937B284"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_11634543_00F5_9FF2_4149_6A359D085CBA"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.quizShowQuestion('question_1186E83B_00F2_9592_4167_A7708AF8E19E').then(function(r){  if(r.length == 0) return;  }.bind(this))","id":"HotspotPanoramaOverlayArea_1147DB84_00F2_8B75_4157_59EB3CAECCBA"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.quizShowQuestion('question_113D83A5_00F3_BAB7_4157_90768C14BB44').then(function(r){  if(r.length == 0) return;  }.bind(this))","id":"HotspotPanoramaOverlayArea_10C4AB62_00F3_8BAD_4150_056137883FB7"}],"overflow":"hidden","vrPolyfillScale":0.75,"horizontalAlign":"left","contentOpaque":false,"paddingRight":0,"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"backgroundOpacity":1,"height":"100%","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"width":"100%","init":"this.initQuiz(this.createQuizConfig(this.rootPlayer, this.PlayList_19103850_011D_B5ED_4161_2E9172B933C8), true, true); var quiz = this.get('data')['quiz']; quiz.bind('timeout', (function() { var functionCallee = function(){ this.quizShowTimeout({repeat: {visible: true}, score: {visible: true}}) }.bind(this); return functionCallee }.bind(this))()); quiz.bind('finish', (function() { var functionCallee = function(){ this.quizShowScore({canClose: true}) }.bind(this); return functionCallee }.bind(this))())","verticalAlign":"top","mediaActivationMode":"window","backgroundPreloadEnabled":true,"layout":"absolute","children":["this.MainViewer","this.Image_12C6D6F3_010E_BA92_413D_DD9FBB92D988"],"downloadEnabled":false,"class":"Player","scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"setValue":TDV.Tour.Script.setValue,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"playAudioList":TDV.Tour.Script.playAudioList,"getMainViewer":TDV.Tour.Script.getMainViewer,"shareSocial":TDV.Tour.Script.shareSocial,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cloneCamera":TDV.Tour.Script.cloneCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPixels":TDV.Tour.Script.getPixels,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"mixObject":TDV.Tour.Script.mixObject,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"translate":TDV.Tour.Script.translate,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags},"backgroundColorDirection":"vertical","minWidth":20,"data":{"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"name":"Player481","defaultLocale":"zh","locales":{"zh":"locale/zh.txt"}},"backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.21.js.map
})();
//Generated with v2022.0.21, Tue Dec 9 2025