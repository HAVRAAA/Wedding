const revealItems = document.querySelectorAll(".reveal");
const heroTitle = document.querySelector("#hero-title");

const guestMap = {
  QRMXTA482: "Юля, Роман, Віталіна та Артем",
  LNVKPE153: "Галя і т. Надя",
  HDSYUW904: "т. Марія та Саша",
  BTFQZA617: "Василь, Ліля та Любомир",
  MXRWCL238: "Д. Руслан, т. Наталя, Максим та Микола",
  JPKDVE751: "Оля, Андрій та Олексій",
  CYQHNA396: "Оксана та Максим",
  VGLRXT825: "Оксана та Любомир",
  WZMEPU174: "Анжела та Віталік",
  KFJYLD680: "Тетяна та Ярослав",
  TRCXBN915: "Альона, Віталій та Остап",
  SGAQMV243: "Женя та Богдан",
  PDWJKE567: "Ліда",
  XNRYTH108: "Андрій",
  LCFBQA792: "Любов, Віктор, і Лея",
  HYZPMR431: "Галина, Петро, Марічка, Максим, і Матвій",
  QVNDTK856: "Леся, Андрій, Олег, Віталік, і Христинка",
  MEJXAL270: "Мирослава і Іван",
  RBFWCP649: "Анастасія",
  UGKZHE312: "Галина та Іван, Христина, Ірина та Богдан",
  ATXQSN587: "Ірина та Богдан",
  CVMJLP961: "Христина",
  DNRYKU405: "Андрій та Алла",
  EWHBGT738: "Галина та Володимир",
  FQPLXM124: "Віра, Максим та Анастасія",
  JTRVNC850: "Оля, Андрій, Роман, та Віталій",
  KMGYDA216: "Наталя, Ростислав та Маркіян",
  LQZHEP794: "Марта та Олег",
  NWBXRU538: "Андрій та Мирослава",
  PXATKF671: "Ірина та Володимир",
  RVDJML309: "Любов, Віктор, і Лея",
  SYQWCE842: "Андрій",
  TZGNHP157: "Тарас та Олександра",
  UBKXRF690: "Ольга та Дмитро",
  VMCJQA483: "Ірина та Юстина",
  WLPDYN275: "Оксана і Марія",
  XFTRGE918: "Володимир",
  YQHBKU346: "Павло",
  ZNCMVA751: "Любомир та Ірина",
  AGPXRD602: "Мар'ян та Вікторія",
  BHVQTL184: "Володимир та Мар'яна",
  CKWJMF937: "Володимир та Стефанія",
};

const params = new URLSearchParams(window.location.search);
const guestCode = params.get("code")?.trim().toUpperCase();
const guestNames = guestCode ? guestMap[guestCode] : null;

if (heroTitle && guestNames) {
  heroTitle.textContent = guestNames;
  heroTitle.classList.add("is-guest-list");
  document.title = `${guestNames} | Wedding Invitation`;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));
