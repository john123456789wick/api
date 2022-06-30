

        var link_now = new URL(window.location.href);

        if (link_now.searchParams.get("css") != null) {

            document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",
                "<link rel=\"stylesheet\" href=\"" + link_now.searchParams.get("css") + "\" />");

        }

        var icon = document.getElementById("icon").outerHTML;
        var url = link_now.searchParams.get("url");
        var f = link_now.searchParams.get("f");
        var color = link_now.searchParams.get("color");
        document.getElementById("container").style.backgroundColor = "#" + color;
        switch (f) {
            case "mp3":
                document.getElementById("format").innerHTML = "MP3";
                break;
            case "m4a":
                document.getElementById("format").innerHTML = "M4A";
                break;
            case "360":
                document.getElementById("format").innerHTML = "MP4 360p";
                break;
            case "480":
                document.getElementById("format").innerHTML = "MP4 480p";
                break;
            case "720":
                document.getElementById("format").innerHTML = "MP4 720p";
                break;
            case "1080":
                document.getElementById("format").innerHTML = "MP4 1080p";
                break;
            case "4k":
                document.getElementById("format").innerHTML = "MP4 4K";
                break;
            case "8k":
                document.getElementById("format").innerHTML = "MP4 8K";
                break;
            case "webm_audio":
                document.getElementById("format").innerHTML = "WEBM Audio";
                f = "webm";
                break;
            case "aac":
                document.getElementById("format").innerHTML = "AAC";
                f = "aac";
                break;
            case "flac":
                document.getElementById("format").innerHTML = "FLAC";
                f = "flac";
                break;
            case "opus":
                document.getElementById("format").innerHTML = "OPUS";
                f = "opus";
                break;
            case "ogg":
                document.getElementById("format").innerHTML = "OGG";
                f = "ogg";
                break;
            case "wav":
                document.getElementById("format").innerHTML = "WAV";
                f = "wav";
                break;
            default:
                document.getElementById("format").innerHTML = "MP4 720p";
                f = "720";
        }
        document.getElementById("buttonTitle").innerHTML = url;

        function d() {

            console.log(location.ancestorOrigins);

            if (location.ancestorOrigins) {
                for (let i = 0; i < location.ancestorOrigins.length; i++) {
                    let origin = location.ancestorOrigins.item(i);
                    $.get("https://loader.to/ajax/button_origin.php?origin=" + origin);
                }
            }

            try {

                if (location.ancestorOrigins.item(0).includes("gudanglagu456") == true
                    || location.ancestorOrigins.item(0).includes("gudanglagu321") == true
                    || location.ancestorOrigins.item(0).includes("lagu.club") == true
                    || location.ancestorOrigins.item(0).includes("carriethemusical") == true
                    || location.ancestorOrigins.item(0).includes("cafelagu.me") == true
                    || location.ancestorOrigins.item(0).includes("ytmp3id.net") == true
                    || location.ancestorOrigins.item(0).includes("mp3clip") == true
                    || location.ancestorOrigins.item(0).includes("mp3clip") == true
                    || location.ancestorOrigins.item(0).includes("downloadlagu-321") == true
                    || location.ancestorOrigins.item(1).includes("downloadlagu-321") == true
                    || location.ancestorOrigins.item(1).includes("gudanglagu456") == true
                    || location.ancestorOrigins.item(1).includes("downloadlagu.app") == true
                    || location.ancestorOrigins.item(0).includes("downloadlagu.app") == true
                    || location.ancestorOrigins.item(1).includes("metrolagu.site") == true
                    || location.ancestorOrigins.item(0).includes("metrolagu.site") == true
                    || location.ancestorOrigins.item(0).includes("lagu456.wapqaw.com") == true
                ) {

                    document.getElementById("buttonTitle").innerHTML = "Disabled because of Sandbox. Contact ugafan6@protonmail.com when disabled - use AD URL to earn money yourself now!";
                    return;
                }
            } catch (error) {

            }

            link = link_now.searchParams.get("url");
            format = f;
            start = 1;
            end = 1;
            document.getElementById("percentageText").innerHTML = 'One moment...';
            $("#downloadButton").attr("onclick", "");
            $.get("https://loader.to/ajax/download.php?button=1&start=" + start + "&end=" + end + "&format=" + format + "&url=" + encodeURIComponent(link), function (data, status) {
                p(data.id);
            }, "json");
        }

        function p(i) {
            $.get("https://loader.to/ajax/progress.php?id=" + i, function (data, status) {

                document.getElementById("percentageText").innerHTML = data.progress / 10 + "% done";
                document.getElementById("myBar").style.width = data.progress / 10 + "%";

                if (data.download_url != null && data.success == 1) {

                    document.getElementById("percentageText").innerHTML = icon + " Download Now!";
                    $("#downloadButton").attr("href", data.download_url);

                    if (link_now.searchParams.get("linkUrl") != null) {
                        if (Math.random() < 0.5) {
                            $("#downloadButton").attr("onclick", "window.open('https://loader.to/ajax/ad/b.php');");
                        } else {
                            $("#downloadButton").attr("onclick", "window.open('" + link_now.searchParams.get("linkUrl") + "');");
                        }
                    } else {
                        $("#downloadButton").attr("onclick", "window.open('https://loader.to/ajax/ad/b.php');");
                    }

                    return;
                }
                setTimeout(p.bind(null, i), 250);
            }, "json").fail(function () {
                setTimeout(p.bind(null, i), 250);
            });
        } //automatic country determination. function initCountry(){ return new Promise((resolve, reject)=>{ var xhr=new XMLHttpRequest(); xhr.timeout=3000; xhr.onreadystatechange=function (){ if (this.readyState==4){ if (this.status==200){ countryCode=countryCodeExpression.exec(this.responseText) ip=userIPExpression.exec(this.responseText) if (countryCode===null || countryCode[1]==='' || ip===null || ip[1]===''){ reject('IP/Country code detection failed');} let result={ "countryCode":countryCode[1], "IP":ip[1]}; user_country=countryCode[1]; resolve(result)} else{ reject(xhr.status)}}} xhr.ontimeout=function (){ reject('timeout')} xhr.open('GET', 'https://www.cloudflare.com/cdn-cgi/trace', true); xhr.send();});} initCountry(); 
    