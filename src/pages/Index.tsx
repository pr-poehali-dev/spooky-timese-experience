import { useState, useMemo, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { toast } from 'sonner';

interface CartItem {
  name: string;
  price: string;
  emoji: string;
  type: 'donate' | 'roll';
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
    toast.success('Добавлено в корзину!', {
      description: item.name,
    });
  };

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    toast.success('Удалено из корзины');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + price;
    }, 0);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Номер карты скопирован!');
  };

  const donatePacks = [
    {
      name: 'DRAGON + 327.451🪙',
      price: '40₽',
      oldPrice: '99₽',
      discount: '-60%',
      emoji: '🐲',
      color: 'from-purple-600 to-pink-600',
    },
    {
      name: 'BULL + 412.589🪙',
      price: '80₽',
      oldPrice: '199₽',
      discount: '-60%',
      emoji: '🐂',
      color: 'from-amber-600 to-orange-700',
    },
    {
      name: 'DRACULA + 376.921🪙',
      price: '160₽',
      oldPrice: '399₽',
      discount: '-60%',
      emoji: '🧛',
      color: 'from-red-800 to-gray-900',
    },
    {
      name: 'BUNNY + 298.512🪙',
      price: '200₽',
      oldPrice: '499₽',
      discount: '-60%',
      emoji: '🐇',
      color: 'from-pink-500 to-purple-600',
    },
    {
      name: 'D.HELPER + 451.287🪙',
      price: '280₽',
      oldPrice: '699₽',
      discount: '-60%',
      emoji: '👕',
      color: 'from-sky-400 to-blue-500',
    },
    {
      name: 'TIGER + 362.945🪙',
      price: '320₽',
      oldPrice: '799₽',
      discount: '-60%',
      emoji: '🐯',
      color: 'from-orange-600 to-yellow-500',
    },
    {
      name: 'RABBIT + 523.678🪙',
      price: '360₽',
      oldPrice: '899₽',
      discount: '-60%',
      emoji: '🐰',
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: 'HYDRA + 487.234🪙',
      price: '400₽',
      oldPrice: '999₽',
      discount: '-60%',
      emoji: '💀',
      color: 'from-gray-800 to-blue-900',
    },
    {
      name: 'COBRA + 618.453🪙',
      price: '500₽',
      oldPrice: '1.249₽',
      discount: '-60%',
      emoji: '🐍',
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'D.MODER + 754.192🪙',
      price: '1.000₽',
      oldPrice: '2.499₽',
      discount: '-60%',
      emoji: '⚒️',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'HALLOWEEN + 892.567🪙',
      price: '1.600₽',
      oldPrice: '3.999₽',
      discount: '-60%',
      emoji: '🎃',
      color: 'from-orange-500 to-yellow-600',
    },
  ];

  const kitPacks = [
    { name: 'КИТ NUTSONCIKA', price: '99₽', emoji: '💎', color: 'from-purple-500 to-pink-500' },
    { name: 'КИТ АЛМАЗНЫЙ', price: '55₽', emoji: '💠', color: 'from-cyan-500 to-blue-500' },
    { name: 'КИТ ЖЕЛЕЗКА', price: '25₽', emoji: '⚙️', color: 'from-gray-400 to-gray-600' },
  ];

  const unbanPack = { name: 'РАЗБАН', price: '349₽', emoji: '🔓', color: 'from-red-600 to-orange-600' };

  const videoRolls = [
    { name: '345.000 РИЛИКОВ', price: '25₽', emoji: '🎬', color: 'from-pink-500 to-rose-500' },
    { name: '523.000 РИЛИКОВ', price: '35₽', emoji: '🎥', color: 'from-violet-500 to-purple-500' },
    { name: '789.000 РИЛИКОВ', price: '45₽', emoji: '📹', color: 'from-blue-500 to-indigo-500' },
    { name: '1.234.000 РИЛИКОВ', price: '55₽', emoji: '🎞️', color: 'from-cyan-500 to-teal-500' },
    { name: '1.876.000 РИЛИКОВ', price: '65₽', emoji: '📺', color: 'from-green-500 to-emerald-500' },
    { name: '2.543.000 РИЛИКОВ', price: '75₽', emoji: '🎬', color: 'from-yellow-500 to-amber-500' },
    { name: '3.421.000 РИЛИКОВ', price: '85₽', emoji: '🎥', color: 'from-orange-500 to-red-500' },
    { name: '4.567.000 РИЛИКОВ', price: '95₽', emoji: '📹', color: 'from-fuchsia-500 to-pink-500' },
    { name: '5.789.000 РИЛИКОВ', price: '105₽', emoji: '🎞️', color: 'from-purple-600 to-violet-600' },
    { name: '6.934.000 РИЛИКОВ', price: '125₽', emoji: '📺', color: 'from-indigo-600 to-blue-600' },
    { name: '8.123.000 РИЛИКОВ', price: '145₽', emoji: '🎬', color: 'from-sky-600 to-cyan-600' },
    { name: '9.456.000 РИЛИКОВ', price: '165₽', emoji: '🎥', color: 'from-teal-600 to-green-600' },
    { name: '10.789.000 РИЛИКОВ', price: '185₽', emoji: '📹', color: 'from-lime-600 to-yellow-600' },
    { name: '11.234.000 РИЛИКОВ', price: '205₽', emoji: '🎞️', color: 'from-amber-600 to-orange-600' },
    { name: '12.565.000 РИЛИКОВ', price: '235₽', emoji: '📺', color: 'from-red-600 to-rose-600' },
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
      title: 'Розыгрыши в Telegram!',
      date: '15 января 2025',
      content: 'Заходите в наш тг канал, там будут разыгрывать донаты, киты, рилики!',
      icon: '🎁',
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
              <span className="text-pixel text-sm md:text-base text-yellow-400">McBlazeWorld</span>
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
            <div className="flex items-center gap-2">
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button className="pixel-corners relative" variant="outline" size="icon">
                    <Icon name="ShoppingCart" size={20} />
                    {cart.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
                        {cart.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#3d2817] border-l-4 border-[#2d1f0f] w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle className="text-pixel text-yellow-400">🛒 КОРЗИНА</SheetTitle>
                    <SheetDescription className="text-gray-400">
                      {cart.length === 0 ? 'Корзина пуста' : `Товаров: ${cart.length}`}
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-8 space-y-4">
                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="text-6xl mb-4">🛒</div>
                        <p className="text-gray-400">Добавьте товары в корзину</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3 max-h-[50vh] overflow-y-auto">
                          {cart.map((item, idx) => (
                            <Card key={idx} className="pixel-corners bg-[#4a3420] border-2 border-[#2d1f0f]">
                              <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="text-3xl">{item.emoji}</div>
                                  <div>
                                    <p className="text-xs font-bold text-white leading-tight">{item.name}</p>
                                    <p className="text-sm text-yellow-400 font-bold">{item.price}</p>
                                  </div>
                                </div>
                                <Button
                                  onClick={() => removeFromCart(idx)}
                                  variant="destructive"
                                  size="icon"
                                  className="pixel-corners h-8 w-8"
                                >
                                  <Icon name="Trash2" size={16} />
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        <div className="border-t-2 border-[#2d1f0f] pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-pixel text-sm text-white">ИТОГО:</span>
                            <span className="text-pixel text-lg text-yellow-400">{getTotalPrice().toFixed(0)}₽</span>
                          </div>

                          <Card className="pixel-corners bg-[#4a3420] border-2 border-[#2d1f0f] mb-4">
                            <CardHeader>
                              <CardTitle className="text-sm text-yellow-400">💳 Реквизиты для оплаты</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-[#2d1f0f] p-3 pixel-corners mb-3">
                                <p className="text-xs text-gray-400 mb-1">Номер карты BlazeWorld:</p>
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-sm font-mono text-white">2202 2082 5539 7896</p>
                                  <Button
                                    onClick={() => copyToClipboard('2202208255397896')}
                                    size="sm"
                                    className="pixel-corners h-7"
                                    variant="outline"
                                  >
                                    <Icon name="Copy" size={14} />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-xs text-gray-300 mb-2">
                                1. Переведите {getTotalPrice().toFixed(0)}₽ на карту
                              </p>
                              <p className="text-xs text-gray-300 mb-2">
                                2. Укажите ник в комментарии к платежу
                              </p>
                              <p className="text-xs text-gray-300 mb-2">
                                3. Товары будут выданы в течение 5-15 минут
                              </p>
                              <p className="text-xs text-yellow-400 font-bold">
                                ⚠️ Если не получили товар — пишите @nyrislam222
                              </p>
                            </CardContent>
                          </Card>

                          <Button
                            onClick={async () => {
                              try {
                                const response = await fetch('https://functions.poehali.dev/756db57a-c6f4-4795-b5af-d3ac7c7a0ac2', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                    items: cart,
                                    total: `${getTotalPrice().toFixed(0)}₽`
                                  })
                                });
                                
                                if (response.ok) {
                                  toast.success('Оплата подтверждена!', {
                                    description: 'Товары будут выданы в течение 5-15 минут. Если что — @nyrislam222',
                                  });
                                  setCart([]);
                                  setIsCartOpen(false);
                                } else {
                                  toast.success('Инструкция получена!', {
                                    description: 'Товары будут выданы в течение 5-15 минут',
                                  });
                                  setIsCartOpen(false);
                                }
                              } catch (error) {
                                toast.success('Инструкция получена!', {
                                  description: 'Товары будут выданы в течение 5-15 минут',
                                });
                                setIsCartOpen(false);
                              }
                            }}
                            className="w-full pixel-corners bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-bold"
                          >
                            Подтвердить оплату
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              <Button className="md:hidden pixel-corners" variant="outline" size="icon">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/c418a223-9d4e-4e0f-ba29-3848b5681902/files/ca8722eb-18b9-4611-a6ba-097071ef4eea.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#2d5016]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-pixel text-3xl md:text-5xl lg:text-6xl text-yellow-400 mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              McBlazeWorld
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Лучший выживание сервер Minecraft 1.21
              <br />
              Заходи и начни своё приключение прямо сейчас! 🎮
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-black/80 px-6 py-3 pixel-corners border-2 border-green-500">
                <p className="text-xs text-green-400 mb-1">IP СЕРВЕРА:</p>
                <p className="text-pixel text-sm md:text-base text-white">McBlazeworld.aternos.me</p>
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
                  <p className="text-sm text-gray-200 mb-3">{item.content}</p>
                  {idx === 0 && (
                    <Button
                      onClick={() => window.open('https://t.me/nyrislam222', '_blank')}
                      className="w-full pixel-corners bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-xs"
                    >
                      <Icon name="Send" className="mr-2" size={16} />
                      Подписаться на канал
                    </Button>
                  )}
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
              Поддержи сервер и получи крутые возможности! Скидки -60% на все товары! 🔥
            </p>
            <div className="mt-4 inline-block bg-orange-500 text-black px-6 py-2 pixel-corners font-bold">
              🔥 СКИДОЧКИ! -60%
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {donatePacks.map((pack, idx) => (
              <Card
                key={idx}
                className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform duration-200 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 bg-[#f5b759] text-black px-2 py-1 text-xs font-bold pixel-corners z-10">
                  {pack.discount}
                </div>
                <CardHeader className={`bg-gradient-to-br ${pack.color} pixel-corners relative`}>
                  <div className="text-center">
                    <div className="text-5xl mb-3">{pack.emoji}</div>
                    <CardTitle className="text-xs font-bold text-white mb-2 leading-tight">{pack.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-4 text-center">
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-white">{pack.price}</div>
                    <div className="text-xs text-gray-400 line-through">{pack.oldPrice}</div>
                  </div>
                  <Button
                    onClick={() =>
                      addToCart({
                        name: pack.name,
                        price: pack.price,
                        emoji: pack.emoji,
                        type: 'donate',
                      })
                    }
                    className="w-full mt-3 pixel-corners bg-[#f5b759] hover:bg-[#f5b759]/90 text-black font-bold text-xs py-2"
                  >
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#1a3a0d] to-[#2d5016]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-4">🎁 ПОКУПКА КИТОВ</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Получи крутые стартовые наборы для игры! От железного до легендарного 💎
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {kitPacks.map((kit, idx) => (
              <Card
                key={idx}
                className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform duration-200 relative overflow-hidden"
              >
                <CardHeader className={`bg-gradient-to-br ${kit.color} pixel-corners relative`}>
                  <div className="text-center">
                    <div className="text-6xl mb-3">{kit.emoji}</div>
                    <CardTitle className="text-sm font-bold text-white mb-2 leading-tight">{kit.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-4 text-center">
                  <div className="text-3xl font-bold text-white mb-3">{kit.price}</div>
                  <Button
                    onClick={() =>
                      addToCart({
                        name: kit.name,
                        price: kit.price,
                        emoji: kit.emoji,
                        type: 'donate',
                      })
                    }
                    className="w-full pixel-corners bg-[#f5b759] hover:bg-[#f5b759]/90 text-black font-bold text-sm py-2"
                  >
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-pixel text-2xl md:text-4xl text-red-400 mb-4">🔓 РАЗБАН</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Получил бан? Купи разбан и продолжи игру на сервере! ⚠️
            </p>
          </div>

          <div className="max-w-md mx-auto mb-16">
            <Card className="pixel-corners bg-[#4a3420] border-4 border-red-600 hover:scale-105 transition-transform duration-200 relative overflow-hidden">
              <CardHeader className={`bg-gradient-to-br ${unbanPack.color} pixel-corners relative`}>
                <div className="text-center">
                  <div className="text-7xl mb-3">{unbanPack.emoji}</div>
                  <CardTitle className="text-lg font-bold text-white mb-2 leading-tight">{unbanPack.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 pb-4 text-center">
                <div className="text-4xl font-bold text-white mb-4">{unbanPack.price}</div>
                <Button
                  onClick={() =>
                    addToCart({
                      name: unbanPack.name,
                      price: unbanPack.price,
                      emoji: unbanPack.emoji,
                      type: 'donate',
                    })
                  }
                  className="w-full pixel-corners bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-3"
                >
                  Купить разбан
                </Button>
                <p className="text-xs text-gray-400 mt-3">⚠️ Укажите ник при оплате!</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-4">🎬 ПОКУПКА РИЛИКОВ</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Получи рандомные рилики для своего контента! Цены от 25₽ до 235₽
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {videoRolls.map((roll, idx) => (
              <Card
                key={idx}
                className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform duration-200 relative overflow-hidden"
              >
                <CardHeader className={`bg-gradient-to-br ${roll.color} pixel-corners relative`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">{roll.emoji}</div>
                    <CardTitle className="text-xs font-bold text-white mb-1 leading-tight">{roll.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 pb-3 text-center">
                  <div className="text-xl font-bold text-white mb-2">{roll.price}</div>
                  <Button
                    onClick={() =>
                      addToCart({
                        name: roll.name,
                        price: roll.price,
                        emoji: roll.emoji,
                        type: 'roll',
                      })
                    }
                    className="w-full pixel-corners bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xs py-2"
                  >
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
          <p className="text-pixel text-xs text-gray-400 mb-2">© 2025 McBlazeWorld SERVER</p>
          <p className="text-xs text-gray-500">Лучший Minecraft сервер для настоящих игроков ⛏️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;