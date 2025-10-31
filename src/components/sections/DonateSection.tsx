import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CartItem {
  name: string;
  price: string;
  emoji: string;
  type: 'donate' | 'roll';
}

interface DonateSectionProps {
  onAddToCart: (item: CartItem) => void;
}

const DonateSection = ({ onAddToCart }: DonateSectionProps) => {
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

  return (
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
                  className="w-full pixel-corners text-xs bg-[#f5b759] hover:bg-[#d99f4a] text-black"
                  onClick={() => onAddToCart({ ...pack, type: 'donate' })}
                >
                  В КОРЗИНУ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-pixel text-xl md:text-3xl text-yellow-400 mb-8 text-center">🎁 КИТЫ И РАЗБАН</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {kitPacks.map((pack, idx) => (
              <Card key={idx} className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
                <CardHeader className={`bg-gradient-to-br ${pack.color} pixel-corners`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">{pack.emoji}</div>
                    <CardTitle className="text-[10px] font-bold text-white">{pack.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 pb-3 text-center">
                  <div className="text-xl font-bold text-white mb-2">{pack.price}</div>
                  <Button
                    className="w-full pixel-corners text-xs bg-[#f5b759] hover:bg-[#d99f4a] text-black"
                    size="sm"
                    onClick={() => onAddToCart({ ...pack, type: 'donate' })}
                  >
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Card className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
              <CardHeader className={`bg-gradient-to-br ${unbanPack.color} pixel-corners`}>
                <div className="text-center">
                  <div className="text-4xl mb-2">{unbanPack.emoji}</div>
                  <CardTitle className="text-[10px] font-bold text-white">{unbanPack.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-3 pb-3 text-center">
                <div className="text-xl font-bold text-white mb-2">{unbanPack.price}</div>
                <Button
                  className="w-full pixel-corners text-xs bg-[#f5b759] hover:bg-[#d99f4a] text-black"
                  size="sm"
                  onClick={() => onAddToCart({ ...unbanPack, type: 'donate' })}
                >
                  КУПИТЬ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-pixel text-xl md:text-3xl text-yellow-400 mb-8 text-center">🎬 РИЛИКИ</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {videoRolls.map((roll, idx) => (
              <Card key={idx} className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
                <CardHeader className={`bg-gradient-to-br ${roll.color} pixel-corners`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{roll.emoji}</div>
                    <CardTitle className="text-[9px] font-bold text-white leading-tight">{roll.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 pb-3 text-center">
                  <div className="text-lg font-bold text-white mb-2">{roll.price}</div>
                  <Button
                    className="w-full pixel-corners text-[10px] bg-[#f5b759] hover:bg-[#d99f4a] text-black"
                    size="sm"
                    onClick={() => onAddToCart({ ...roll, type: 'roll' })}
                  >
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
