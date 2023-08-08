from datetime import datetime as dt, timedelta


def format_date(dt_, fmt="%Y-%m-%d %H:%M:%S"):
    return f"{dt_:{fmt}}"


def now(fmt="%Y-%m-%d %H:%M:%S"):
    return format_date(dt.now(), fmt)


def running_time(dt_):
    delta = dt.now() - dt_
    days = delta.days
    seconds = delta.seconds
    display_hours = seconds // 3600
    display_minutes = (seconds - display_hours * 3600) // 60
    display_seconds = (seconds - display_hours * 3600) - display_minutes * 60
    if days == 0:
        return "%02d:%02d:%02d" % (display_hours, display_minutes, display_seconds)
    else:
        return "%ddays %02d:%02d:%02d" % (
            days,
            display_hours,
            display_minutes,
            display_seconds,
        )


def remove_class(element, class_name):
    element.element.classList.remove(class_name)


def add_class(element, class_name):
    element.element.classList.add(class_name)
