(function () {
    var WebServiceManager = function (options) {
        /*
         options.keys
         options.endPoints
         options.urlBase
         options.token
         */
        this.options = options || {};
        this.options.endPoints = {
            login: "oauth/access_token",
            processes: "api/v1/processes",
            newInstance: "api/v1/processes/{processID}/instances",
            newInstanceS: "api/cobject/v1/register",
            loadCases: "api/v1/processes/{processID}/instances",

            startCase: "light/process/{processUID}/task/{taskUID}/start-case",
            trigger: "light/process/{processUID}/task/{taskUID}/case/{caseUID}/step/{stepUID}/execute-trigger/{triggerOption}",
            getData: "light/{caseUID}/variables?pro_uid={processUID}&act_uid={taskUID}&app_index={delIndex}&dyn_uid={dyn_uid}",
            conditionalSteps: "light/process/{processUID}/case/{caseUID}/{delIndex}/step/{stepPosition}",
            form: "light/project/{processUID}/dynaforms",
            saveData: "light/{caseUID}/variable?dyn_uid={formUID}&del_index={delIndex}",
            query: "project/{processUID}/process-variable/{var_name}/execute-query",
            querySuggest: "project/{processUID}/process-variable/{var_name}/execute-query-suggest",
            imageInfo: "light/case/{caseUID}/download64",
            nextStep: "light/get-next-step/{caseUID}",
            upload: "light/case/{caseUID}/upload",
            uploadMultipart: "light/case/{caseUID}/upload/{docUID}",
            fileStreaming: "en/neoclassic/cases/casesStreamingFile?actionAjax=streaming&a={caseUID}&d={fileId}"
        };
        this.options.links = {
            showDocument: "{server}/sys{workspace}/en/{skin}/cases/cases_ShowDocument?a={docUID}&v=1"
        };
        this.options.urlBase = "{server}/{endPointPath}";
        this.options.stamplay = "https://processmakerhack.stamplayapp.com/{endPointPath}";
        this.options.urlBaseStreaming = "{server}/sys{workspace}/{endPointPath}";

    };

    WebServiceManager.prototype.getFullEndPoint = function (keys, urlBase, endPoint) {
        var k;
        urlBase = urlBase.replace(/{endPointPath}/, endPoint);
        for (k in keys) {
            if (keys.hasOwnProperty(k)) {
                urlBase = urlBase.replace(new RegExp("{" + k + "}", "g"), keys[k]);
            }
        }
        return urlBase;
    };

    WebServiceManager.prototype.setKey = function (name, value) {
        if (this.options.keys)
            this.options.keys[name] = value;
        return this;
    };

    WebServiceManager.prototype.setKeys = function (obj) {
        if (this.options.keys) {
            _.extend(this.options.keys, obj);
        }
        return this;
    };

    WebServiceManager.prototype.getKey = function (name) {
        var resp = false;
        if (this.options.keys)
            resp = this.options.keys[name];
        return resp;
    };

    WebServiceManager.prototype.deleteKey = function (name, value) {
        if (this.options.keys)
            delete this.options.keys[name];
        return this;
    };

    WebServiceManager.prototype.getToken = function () {
        return this.options.token;
    };

    WebServiceManager.prototype.login = function (data, callback) {
        var that = this,
            resp,
            url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.login),
            method = "POST";

        $.ajax({
            url: url,
            type: method,
            async: false,
            data: JSON.stringify({
                "grant_type": "password",
                "client_id": that.getKey("client_id"),
                "client_secret": that.getKey("client_secret"),
                "username": data.username,
                "password": data.password
            }),
            contentType: "application/json",
            success: function (data, textStatus) {
                console.log("jonas good");
                callback(null, data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("jonas error");
                callback(errorThrown, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.processes = function (callback) {
        var that = this,
            resp,
            url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.processes),
            method = "GET";

        $.ajax({
            url: url,
            type: method,
            async: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.getKey("access_token"));
            },
            success: function (d, textStatus) {
                callback(null, d);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("jonas error");
                //callback(errorThrown, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.newInstance = function (data, callback) {
        var that = this,
            resp,
            url,
            method = "POST";
        this.setKey("processID", data["processID"]);
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.newInstance);
        $.ajax({
            url: url,
            type: method,
            async: true,
            data: JSON.stringify(data.data),
            crossDomain: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.getKey("access_token"));
            },
            success: function (d, textStatus) {
                callback(null, d);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("jonas error");
                //callback(errorThrown, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.newInstanceStamplay = function (data, callback) {
        var that = this,
            resp,
            url,
            method = "POST";

        url = that.getFullEndPoint(that.options.keys, that.options.stamplay, that.options.endPoints.newInstanceS);
        $.ajax({
            url: url,
            type: method,
            async: true,

            data: JSON.stringify(data),
            crossDomain: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic ee93334629fc15b26db90b8496fb3bd50d2a3b3613ee6f8928e7a1857ded82f5");
            },
            success: function (d, textStatus) {
                console.log("del satamplay");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("jonas error");
                //callback(errorThrown, null);
            }
        });
        return resp;
    };


    WebServiceManager.prototype.loadCases = function (data, callback) {
        var that = this,
            resp,
            url,
            method = "GET";
        this.setKey("processID", data["processID"]);
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.loadCases);
        $.ajax({
            url: url,
            type: method,
            async: true,
            crossDomain: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.getKey("access_token"));
            },
            success: function (d, textStatus) {
                console.log("jonas loadcases");
                callback(null, d);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("jonas error");
                //callback(errorThrown, null);
            }
        });
        return resp;
    };


    ///////////////
    ////////////

    WebServiceManager.prototype.getData = function (callback, options) {
        var that = this,
            method, url, resp;
        if (typeof options === 'object') {
            this.setKey('dyn_uid', options['dyn_uid']);
        }
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.getData);
        method = "GET";
        this.deleteKey('dyn_uid');

        $.ajax({
            url: url,
            type: method,
            async: false,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus) {
                callback(null, data);
            },
            error: function (xhr, textStatus, errorThrown) {
                resp = {
                    "status": "error"
                };
                callback(resp, null);
            }
        });
        return resp;
    };
    /**
     * This function that execute a endpoint VARIABLES of ProcessMaker
     * @param formID
     * @param data
     * @returns {*}
     */
    WebServiceManager.prototype.saveData = function (config, callback) {
        var that = this,
            url, method, resp;
        this.setKey('formUID', config["formUID"]);
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.saveData);
        method = "PUT";
        this.deleteKey('formUID');

        config.data = (config.data && _.isObject(config.data)) ? config.data : {};
        $.ajax({
            url: url,
            type: method,
            async: false,
            data: JSON.stringify(config.data),
            contentType: "application/json",
            timeout: (1000),
            dataType: 'text',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language !== null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus) {
                callback(null, data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error! Type: " + textStatus);
                callback(textStatus, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.execAjax = function (ajaxParams) {
        var resp;
        var that = this;

        function beforeSendCallback(xhr) {
            if (ajaxParams.isJSON) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.language);
                }
            }
        }

        var params = {
            url: ajaxParams.url,
            type: ajaxParams.method,
            async: false,
            data: ajaxParams.data || {},
            beforeSend: function (xhr) {
                beforeSendCallback(xhr);
            },
            success: function (data, textStatus) {
                resp = {
                    "state": "success"
                };
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status == 200) {
                    resp = {
                        "state": "success"
                    };
                } else {
                    resp = {
                        "state": "internetFail"
                    };
                }
            }
        };

        $.ajax(params);
    };
    WebServiceManager.prototype.trigger = function (config, callback) {
        var that = this,
            method = "POST",
            url,
            resp = {};

        this.setKey('stepUID', config["stepUID"]);
        this.setKey('triggerOption', config["triggerOption"]);

        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.trigger);

        this.deleteKey('stepUID');
        this.deleteKey('triggerOption');

        $.ajax({
            url: url,
            type: method,
            async: false,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus) {
                resp = data ? data : true;
                callback(null, resp);
            },
            error: function (xhr, textStatus, errorThrown) {
                resp = {
                    "status": "error"
                };
                callback(resp, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.executeQuery = function (data, varName) {
        var that = this,
            method = "POST", url, resp = [];

        this.setKey('var_name', varName);

        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.query);

        this.deleteKey('var_name');

        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            async: false,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus) {
                resp = data;
            }
        });
        return resp;
    };

    WebServiceManager.prototype.conditionalStep = function (config, callback) {
        var that = this,
            method = "GET", url, resp;

        this.setKey('stepUID', config["stepUID"]);
        this.setKey('stepPosition', config["stepPosition"]);

        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.conditionalSteps);

        this.deleteKey('stepUID');
        this.deleteKey('stepPosition');

        $.ajax({
            url: url,
            type: method,
            async: false,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.language);
                }
            },
            success: function (data, textStatus) {
                callback(null, data);
            },
            error: function (xhr, textStatus, errorThrown) {
                resp = JSON.parse(xhr.responseText);
                callback(resp, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.getForm = function (config, callback) {
        var that = this,
            method,
            url,
            sendData = [],
            resp = {};

        sendData.push(config["formUID"]);
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.form);

        method = "POST";
        $.ajax({
            url: url,
            type: method,
            async: false,
            data: JSON.stringify({
                formId: sendData
            }),
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus) {
                var respData = null;
                if (data.length != 0) {
                    respData = data[0].formContent;
                }
                callback(null, respData);
            },
            error: function (xhr, textStatus, errorThrown) {
                resp = {
                    "state": "internetFail"
                };
                callback(resp, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.getFormDefinition = function () {
        var that = this,
            method,
            url,
            resp = {};
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.dynaformDefinition);
        method = "GET",
            $.ajax({
                url: url,
                type: method,
                async: false,
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                    if (that.options.language != null) {
                        xhr.setRequestHeader("Accept-Language", that.options.language);
                    }
                },
                success: function (data, textStatus) {
                    resp = {
                        "data": data.data.formContent,
                        "state": "success"
                    };
                },
                error: function (xhr, textStatus, errorThrown) {
                    resp = {
                        "state": "internetFail"
                    };
                }
            });
        return resp;
    };

    WebServiceManager.prototype.imageInfo = function (id, width) {
        var that = this,
            method,
            url,
            resp = {};
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.imageInfo);
        method = "POST",
            $.ajax({
                url: url,
                type: method,
                async: false,
                data: JSON.stringify([{
                    fileId: id,
                    width: width,
                    version: 1
                }]),
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                    if (that.options.language != null) {
                        xhr.setRequestHeader("Accept-Language", that.options.keys.lan);
                    }
                },
                success: function (data, textStatus) {
                    resp = data;
                }
            });
        if (resp) {
            return {
                id: resp[0].fileId,
                base64: resp[0].fileContent
            };
        } else {
            return {
                id: "",
                base64: ""
            };
        }
    };

    WebServiceManager.prototype.imagesInfo = function (data) {
        var that = this,
            method,
            url,
            resp = {};
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.imageInfo);
        method = "POST",
            $.ajax({
                url: url,
                type: method,
                async: false,
                data: JSON.stringify(data),
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                    if (that.options.language != null) {
                        xhr.setRequestHeader("Accept-Language", that.options.language);
                    }
                },
                success: function (data, textStatus) {
                    resp = data;
                }
            });
        return resp;
    };

    WebServiceManager.prototype.restClient = function () {
        defaults = {
            url: "/rest/v10",
            method: "GET",
            contentType: "application/json",
            data: '',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + keys.access_token);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.language);
                }
            },
            success: function () {
            },
            error: function () {
            }
        };
        _.extend(defaults, parems);

        defaults.type = _methodsMap[defaults.method];
        defaults.data = JSON.stringify(defaults.data);
        $.ajax(defaults);
    };

    WebServiceManager.prototype.getFullURLStreaming = function (id) {
        var k,
            keys = this.options.keys,
            urlFormat = this.options.urlBaseStreaming;
        this.setKey('fileId', id);
        urlFormat = urlFormat.replace(/{endPointPath}/, this.options.endPoints.fileStreaming);
        for (k in keys) {
            if (keys.hasOwnProperty(k)) {
                urlFormat = urlFormat.replace(new RegExp("{" + k + "}", "g"), keys[k]);
            }
        }
        this.deleteKey("fileId");
        return urlFormat;
    };
    /**
     * consumes suggest rest service
     * @param data
     * @param varName
     * @returns {Array}
     */
    WebServiceManager.prototype.executeQuerySuggest = function (data, varName, callback) {
        var that = this,
            method = "POST", url,
            appID = this.getKey("caseID");

        this.setKey('var_name', varName);
        if (appID) {
            data["app_uid"] = appID;
        }
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.querySuggest);

        this.deleteKey('var_name');

        return $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            async: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus, xhr) {
                callback(data, xhr);
            }
        });
    };

    WebServiceManager.prototype.nextStep = function (config, callback) {
        var that = this,
            data,
            method = "POST", url, resp = [];

        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.nextStep);

        data = {
            "pro_uid": this.getKey("processUID"),
            "act_uid": this.getKey("taskUID"),
            "step_uid": config["stepUID"],
            "step_pos": config["stepPosition"],
            "app_index": this.getKey("delIndex"),
            "dyn_uid": null
        };

        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            async: false,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.keys.lang);
                }
            },
            success: function (data, textStatus) {
                callback(null, data);
            },
            error: function (xhr, textStatus, errorThrown) {
                callback(xhr, null);
            }
        });
        return resp;
    };

    WebServiceManager.prototype.upload = function (data, callback) {
        var that = this,
            method = "POST", url, resp = [];

        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.upload);
        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            async: true,
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
                if (that.options.language != null) {
                    xhr.setRequestHeader("Accept-Language", that.options.language);
                }
            },
            success: function (data, textStatus) {
                resp = {
                    status: "success",
                    data: data
                };
                callback(null, resp);
            },
            error: function (xhr, textStatus, errorThrown) {
                resp = {
                    "status": "error"
                };
                callback(resp, null);
            }
        });
        return this;
    };

    WebServiceManager.prototype.uploadMultipart = function (docUID, data, callback, callbackupdate) {
        var that = this,
            method = "POST", url, resp = [];
        this.setKey('docUID', docUID);
        url = that.getFullEndPoint(that.options.keys, that.options.urlBase, that.options.endPoints.uploadMultipart);
        this.deleteKey('docUID');
        resp = $.ajax({
            url: url,
            type: 'POST',
            data: data,
            async: true,
            processData: false,
            contentType: false,
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', callbackupdate, false);
                }
                return myXhr;
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + that.options.token.accessToken);
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                callback(textStatus);
            }
        });
        return resp;
    };
    /**
     * Make teh URL to download the file
     * @param uid
     * @returns {string}
     */
    WebServiceManager.prototype.showDocument = function (data) {
        var keys = {
            docUID: data.uid || "",
            type: data.type || ""
        };
        return this.getFullLink(keys);
    };

    WebServiceManager.prototype.getFullLink = function (options) {
        var k,
            keys,
            urlbase = this.options.links[options["type"]];
        if (urlbase) {
            keys = $.extend(true, this.options.keys, options);
            for (k in keys) {
                if (keys.hasOwnProperty(k)) {
                    urlbase = urlbase.replace(new RegExp("{" + k + "}", "g"), keys[k]);
                }
            }
        }
        return urlbase;
    };

    OneFlux.registerFactory("@Eternity.service.WebServiceManager", [], WebServiceManager);
}());