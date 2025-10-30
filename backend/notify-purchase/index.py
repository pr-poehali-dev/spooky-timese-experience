import json
import os
from typing import Dict, Any
import urllib.request
import urllib.parse

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send Telegram notification when user makes a purchase
    Args: event with httpMethod, body containing purchase details
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not telegram_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Telegram credentials not configured'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    items = body_data.get('items', [])
    total = body_data.get('total', '0₽')
    
    if not items:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'No items in purchase'})
        }
    
    items_text = '\n'.join([f"  • {item.get('emoji', '')} {item.get('name', '')} — {item.get('price', '')}" for item in items])
    
    message = f"""🛒 НОВАЯ ПОКУПКА!

{items_text}

💰 Итого: {total}

⏰ Выдать товар в течение 5-15 минут!
"""
    
    telegram_url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
    data = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    req_data = urllib.parse.urlencode(data).encode('utf-8')
    req = urllib.request.Request(telegram_url, data=req_data)
    
    try:
        with urllib.request.urlopen(req) as response:
            response.read()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'message': 'Notification sent'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
