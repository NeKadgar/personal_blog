import requests
from django.conf import settings


class TelegramCore:
    TOKEN = settings.TELEGRAM_TOKEN
    CHAT_ID = settings.TELEGRAM_CHAT_ID
    URL = "https://api.telegram.org/bot"

    @classmethod
    def send_message(cls, message):
        message = "{}".format(str(message))
        r = requests.get("{}{}/sendMessage?chat_id={}&parse_mode=Markdown&text={}".format(
                        cls.URL, cls.TOKEN, cls.CHAT_ID, message))
        return r.status_code
