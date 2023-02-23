export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://pixelbox.ru/wp-content/uploads/2021/09/anime-gif-discord-16.gif",
      name: "Adonis Team",
      description: "Discord ekip sunucumuza katılarak bizlere destek olabilirsiniz.",
      link: "https://discord.gg/w7Y9nr8HMn",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1064547752727564330/1078391545423745095/steamuserimages-a.akamaihd.gif",
      name: "İnstagram Hesabım",
      description: "Sosyal medya hesaplarımı takip ederek bana destek çıkabilirsin.",
      link: "https://www.instagram.com/adonistonyy",
    }
  ];
  res.status(200).json(data);
};
