import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const donatePacks = [
    {
      name: 'VIP',
      price: '299₽',
      icon: 'Star',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Цветной ник в чате',
        'Доступ к /fly',
        'Приватные регионы x2',
        '5 точек дома',
      ],
    },
    {
      name: 'PREMIUM',
      price: '599₽',
      icon: 'Crown',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Всё из VIP',
        'Кастомные частицы',
        'Доступ к /god',
        'Приватные регионы x5',
        '10 точек дома',
        'Креативный режим',
      ],
    },
    {
      name: 'ELITE',
      price: '999₽',
      icon: 'Gem',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Всё из PREMIUM',
        'Уникальный префикс',
        'Доступ к /top',
        'Приватные регионы x10',
        '20 точек дома',
        'Кастомные эмодзи',
        'Приоритет входа',
      ],
    },
  ];

  const teamMembers = [
    { name: 'Steve', role: 'Главный администратор', avatar: '👨‍💼' },
    { name: 'Alex', role: 'Тех. администратор', avatar: '👩‍💻' },
    { name: 'Enderman', role: 'Модератор', avatar: '👾' },
    { name: 'Creeper', role: 'Хелпер', avatar: '💚' },
  ];

  const rules = [
    { id: 1, text: 'Запрещён читерский софт и использование багов' },
    { id: 2, text: 'Уважайте других игроков, запрещён мат и оскорбления' },
    { id: 3, text: 'Не спамьте в чате и не флудите' },
    { id: 4, text: 'Запрещён гриферство и воровство' },
    { id: 5, text: 'Слушайте администрацию сервера' },
    { id: 6, text: 'Запрещена реклама других серверов' },
  ];

  const news = [
    {
      title: 'Новый сезон!',
      date: '15 января 2025',
      content: 'Начался новый сезон сервера с обновлённым спавном и новыми мини-играми!',
      icon: '🎉',
    },
    {
      title: 'Обновление 1.21',
      date: '10 января 2025',
      content: 'Сервер обновлён до версии 1.21. Добавлены новые мобы и блоки!',
      icon: '⚡',
    },
    {
      title: 'Конкурс на лучшую постройку',
      date: '5 января 2025',
      content: 'Приз - ELITE статус на 3 месяца! Участвуйте до конца месяца.',
      icon: '🏆',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d5016] via-[#3d6b1f] to-[#1a3a0d]">
      <nav className="sticky top-0 z-50 bg-[#3d2817]/95 backdrop-blur-sm border-b-4 border-[#2d1f0f] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 pixel-corners flex items-center justify-center">
                <span className="text-2xl">⛏️</span>
              </div>
              <span className="text-pixel text-sm md:text-base text-yellow-400">RELLY WORLD</span>
            </div>
            <div className="hidden md:flex gap-2">
              {['home', 'donate', 'rules', 'team', 'contacts'].map((section) => (
                <Button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  className="pixel-corners text-xs uppercase font-bold"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'donate' && 'Донаты'}
                  {section === 'rules' && 'Правила'}
                  {section === 'team' && 'Команда'}
                  {section === 'contacts' && 'Контакты'}
                </Button>
              ))}
            </div>
            <Button className="md:hidden pixel-corners" variant="outline" size="icon">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/c418a223-9d4e-4e0f-ba29-3848b5681902/files/ca8722eb-18b9-4611-a6ba-097071ef4eea.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#2d5016]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-pixel text-3xl md:text-5xl lg:text-6xl text-yellow-400 mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              RELLY WORLD
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Лучший выживание сервер Minecraft 1.21
              <br />
              Заходи и начни своё приключение прямо сейчас! 🎮
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-black/80 px-6 py-3 pixel-corners border-2 border-green-500">
                <p className="text-xs text-green-400 mb-1">IP СЕРВЕРА:</p>
                <p className="text-pixel text-sm md:text-base text-white">play.rellyworld.ru</p>
              </div>
              <Badge className="bg-green-500 text-black text-lg px-4 py-2 pixel-corners">
                <Icon name="Users" size={16} className="mr-2" />
                234 онлайн
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('donate')}
                className="pixel-corners bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-sm"
              >
                <Icon name="CreditCard" className="mr-2" size={20} />
                Донат
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('rules')}
                variant="outline"
                className="pixel-corners border-2 border-white text-white hover:bg-white/10"
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                Правила
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#3d2817]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-pixel text-2xl md:text-3xl text-center text-yellow-400 mb-12">📰 НОВОСТИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, idx) => (
              <Card key={idx} className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-pixel text-sm text-yellow-400">{item.title}</CardTitle>
                  <CardDescription className="text-xs text-gray-400">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-200">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-4">💎 ДОНАТ ПРИВИЛЕГИИ</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Поддержи сервер и получи крутые возможности! Все донат-привилегии навсегда.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donatePacks.map((pack, idx) => (
              <Card
                key={idx}
                className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-all hover:shadow-2xl"
              >
                <CardHeader className={`bg-gradient-to-br ${pack.color} pixel-corners`}>
                  <div className="text-center">
                    <Icon name={pack.icon as any} size={48} className="mx-auto mb-3 text-white" />
                    <CardTitle className="text-pixel text-lg text-white mb-2">{pack.name}</CardTitle>
                    <div className="text-3xl font-bold text-white">{pack.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {pack.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 pixel-corners bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-bold">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-[#3d2817]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-pixel text-2xl md:text-4xl text-center text-yellow-400 mb-12">📜 ПРАВИЛА СЕРВЕРА</h2>
            <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f]">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {rules.map((rule) => (
                    <div key={rule.id} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 pixel-corners flex items-center justify-center">
                        <span className="text-pixel text-xs text-white">{rule.id}</span>
                      </div>
                      <p className="text-gray-200 text-sm md:text-base pt-1">{rule.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-red-900/30 border-2 border-red-500 pixel-corners">
                  <p className="text-sm text-red-200 text-center">
                    ⚠️ За нарушение правил следует бан или мут. Незнание правил не освобождает от ответственности!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-pixel text-2xl md:text-4xl text-center text-yellow-400 mb-12">👥 НАША КОМАНДА</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <Card
                key={idx}
                className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform text-center"
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-pixel text-sm text-yellow-400">{member.name}</CardTitle>
                  <CardDescription className="text-xs text-gray-400">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-[#3d2817]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-8">📞 КОНТАКТЫ</h2>
            <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f]">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://discord.gg/rellyworld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#5865F2] pixel-corners hover:scale-105 transition-transform"
                  >
                    <Icon name="MessageCircle" size={32} className="text-white" />
                    <div className="text-left">
                      <p className="font-bold text-white">Discord</p>
                      <p className="text-xs text-gray-200">discord.gg/rellyworld</p>
                    </div>
                  </a>
                  <a
                    href="https://vk.com/rellyworld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#0077FF] pixel-corners hover:scale-105 transition-transform"
                  >
                    <Icon name="Users" size={32} className="text-white" />
                    <div className="text-left">
                      <p className="font-bold text-white">ВКонтакте</p>
                      <p className="text-xs text-gray-200">vk.com/rellyworld</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 p-4 bg-black/30 pixel-corners">
                  <p className="text-sm text-gray-300">
                    По всем вопросам пишите в Discord или ВК. Мы всегда на связи! 💬
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1308] border-t-4 border-[#2d1f0f] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pixel text-xs text-gray-400 mb-2">© 2025 RELLY WORLD SERVER</p>
          <p className="text-xs text-gray-500">Лучший Minecraft сервер для настоящих игроков ⛏️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
