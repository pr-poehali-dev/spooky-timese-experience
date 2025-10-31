import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-[#2d1f0f]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-4">📞 КОНТАКТЫ</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Свяжитесь с нами через социальные сети</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-pixel text-lg text-yellow-400 mb-4">Telegram канал</h3>
              <Button
                className="pixel-corners bg-[#f5b759] hover:bg-[#d99f4a] text-black"
                onClick={() => window.open('https://t.me/McBlazeWorld', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={16} />
                Перейти
              </Button>
            </CardContent>
          </Card>
          <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-pixel text-lg text-yellow-400 mb-4">Discord сервер</h3>
              <Button
                className="pixel-corners bg-[#f5b759] hover:bg-[#d99f4a] text-black"
                onClick={() => window.open('https://discord.gg/mcblazeworld', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Присоединиться
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
