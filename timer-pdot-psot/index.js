
var mem = [];

var scapAvailable= !!window.PalmSystem;

document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        if (scapAvailable) {
            var power = new Power();
            power.getOnTimerList(displayTimers, putErrorLog);
        } else {
            displayTimers({timerList: mem});
        }
    }, 1000);



    document.body.addEventListener('keypress', function(e) {
        if (e.keyCode == 49)
            addTimer();

        if (e.keyCode == 48)
            clearTimers();

        if (e.keyCode == 57)
            clearLogs();

        if (e.keyCode == 50)
            deleteFirstTimer();
    });
});



function addTimer() {
    var timer = {
        minute: Math.round(Math.random() * 60),
        hour: Math.round(Math.random() * 24),
        week: Math.round(Math.random() * 126) + 1,
        inputSource: 'ext://hdmi:1'
    };


    if (scapAvailable) {
        var power = new Power();
        power.addOnTimer(putLog, putErrorLog, timer);
    } else {
        mem.push(timer);
        putLog();
    }
}


function clearTimers() {
    if (scapAvailable) {
        var power = new Power();
        power.enableAllOnTimer(putLog, putErrorLog, {allOnTimer: true, clearOnTimer: true});
    } else {
        mem = [];
        putLog();
    }
}


function displayTimers(timers) {
    var $timers = document.querySelector('timers');
    var html = timers.timerList.map(function(timer) {
        return '<timer>' +
                'On timer, week: ' + timer.week + ' hour: ' + timer.hour + ' min: ' + timer.minute +
            '</timer>';
    }).join('');

    $timers.innerHTML = html;
}

function deleteFirstTimer() {
    if (scapAvailable) {
        var power = new Power();
        power.getOnTimerList(function(response) {
            if (response.timerList.length > 0) {
                power.deleteOnTimer(putLog, putErrorLog, response.timerList[0]);
            }
        }, putErrorLog);
    } else {
        mem.shift();
        putLog();
    }
}


function putLog(param) {
    var msg = 'Operation successful' + (param ? ' with params: ' + param : '');

    $logs = document.querySelector('logs');
    $logs.innerHTML = '<log>' + msg + '</log>' + $logs.innerHTML;
}


function putErrorLog(err) {
    var msg = 'Operation failed with error: ' + err.errorCode + ': ' + err.errorText;

    $logs = document.querySelector('logs');
    $logs.innerHTML = '<log>' + msg + '</log>' + $logs.innerHTML;
}

function clearLogs() {
    $logs = document.querySelector('logs');
    $logs.innerHTML = '';
}



