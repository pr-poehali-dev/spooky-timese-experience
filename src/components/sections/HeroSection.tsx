import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  onCopy: (text: string) => void;
}

const HeroSection = ({ onNavigate, onCopy }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-pixel text-3xl md:text-6xl text-yellow-400 mb-6 drop-shadow-lg">
            McBlazeWorld
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Лучший сервер выживания с экономикой и кланами! 🔥
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] p-4">
              <CardContent className="p-0 flex items-center gap-3">
                <div className="text-2xl">🎮</div>
                <div>
                  <p className="text-xs text-gray-400">IP сервера:</p>
                  <p className="text-pixel text-sm md:text-base text-white">play.mcblazeworld.ru</p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="pixel-corners"
                  onClick={() => onCopy('play.mcblazeworld.ru')}
                >
                  <Icon name="Copy" size={16} />
                </Button>
              </CardContent>
            </Card>
            <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] p-4">
              <CardContent className="p-0 flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div>
                  <p className="text-xs text-gray-400">Порт для Bedrock:</p>
                  <p className="text-pixel text-sm md:text-base text-white">25100</p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="pixel-corners"
                  onClick={() => onCopy('25100')}
                >
                  <Icon name="Copy" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => onNavigate('donate')} className="pixel-corners" size="lg">
              <Icon name="ShoppingBag" className="mr-2" size={20} />
              Купить донат
            </Button>
            <Button onClick={() => onNavigate('rules')} variant="outline" className="pixel-corners" size="lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Правила сервера
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-pixel text-lg text-yellow-400 mb-2">PvP арены</h3>
              <p className="text-sm text-gray-300">Сражайся с другими игроками на специальных аренах</p>
            </CardContent>
          </Card>
          <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-pixel text-lg text-yellow-400 mb-2">Экономика</h3>
              <p className="text-sm text-gray-300">Развитая игровая экономика и торговля</p>
            </CardContent>
          </Card>
          <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-pixel text-lg text-yellow-400 mb-2">Кланы</h3>
              <p className="text-sm text-gray-300">Создавай свой клан или присоединяйся к существующим</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-pixel text-2xl md:text-3xl text-yellow-400 mb-6 text-center">📰 Новости</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Розыгрыши в Telegram!',
                date: '15 января 2025',
                content: 'Заходите в наш тг канал, там будут разыгрывать донаты, киты, рилики!',
                icon: '🎁',
              },
              {
                title: 'Обновление 1.16.5',
                date: '10 января 2025',
                content: 'Сервер обновлён до версии 1.16.5. Добавлены новые мобы и блоки!',
                icon: '⚡',
              },
              {
                title: 'Конкурс на лучшую постройку',
                date: '5 января 2025',
                content: 'Приз - ELITE статус на 3 месяца! Участвуйте до конца месяца.',
                icon: '🏆',
              },
            ].map((newsItem, idx) => (
              <Card key={idx} className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f]">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{newsItem.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-pixel text-sm text-yellow-400 mb-1">{newsItem.title}</h3>
                      <p className="text-xs text-gray-400 mb-2">{newsItem.date}</p>
                      <p className="text-xs text-gray-300">{newsItem.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
