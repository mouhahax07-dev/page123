import { Zap, BrainCircuit, Flame, Globe, MapPin, ShieldAlert, RefreshCcw, Unlock, Cross, Ghost, Search } from 'lucide-react';
import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
   {
    id: 'emocje',
    title: 'Bóg vs Twoje dno',
    hook: 'Presja, przebodźcowanie, poczucie bezsensu... Czy w świecie idealnych filtrów i wiecznego uśmiechu jest w ogóle miejsce na to, że po prostu wysiadasz? Świat nie jest kolorowy, a my czasem jesteśmy w totalnej ciemnej dziurze.',
    imageUrl: 'https://artpasaz.pl/wp-content/uploads/2023/05/obraz-obraz-ze-stworzeniem-adama-artpasaz-pl.jpg', 
    steps: [
      { text: 'Zdejmij maskę. Świat każe Ci flexować idealnym życiem i sukcesem. Ewangelia zaczyna się tam, gdzie przestajesz udawać, że wszystko ogarniasz. Pismo nie owija w bawełnę, ludzie od zawsze mieli momenty totalnego zjazdu: „Z głębokości wołam do Ciebie, Panie...” (Ps 130, 1). Bóg zaczyna słuchać właśnie tam – na samym dnie.', icon: Zap },
      { text: 'Wiara to nie jest ucieczka od rzeczywistości ani szybkie rozwiązanie problemów. Czasami jest po prostu ciężko, i masz prawo tak się czuć. Zobacz na św. Pawła, gość pisał brutalnie szczerze: „Zewsząd znosimy uciski, lecz nie poddajemy się zwątpieniu; żyjemy w niedostatku, lecz nie rozpaczamy” (2 Kor 4, 8). Nawet będąc w życiowym bagnie, można mieć fundament, którego nie da się rozwalić.', icon: ShieldAlert },
      { text: 'Chrystus pocił się krwią ze stresu przed egzekucją. On doskonale wie, jak to jest, kiedy od natłoku myśli psychika totalnie siada. Nie obiecał nam sterylnego, bezpiecznego życia. Rzucił coś znacznie mocniejszego: „Na świecie doznacie ucisku, ale miejcie odwagę: Jam zwyciężył świat” (J 16, 33). Nie jesteśmy w tym chaosie sami.', icon: Cross }
    ],
    icon: Zap,
    theme: {
      bgClass: 'bg-indigo-950/40 border-indigo-500/30',
      textColor: 'text-indigo-200',
      accentColor: 'from-blue-500 to-indigo-500',
      effectType: 'glitch'
    }
  },

    {
    id: 'logika',
    title: 'Odwrócona logika świata',
    hook: 'Jeden ksiądz zawalił – cały Kościół do kosza? Jeden lekarz wziął łapówkę – medycyna to kłamstwo? Witaj w świecie wyrzucania ludzi za margines, gdzie jeden błąd jednostki zatruwa całą grupę. A co, gdyby system miał błąd, który pozwala to odwrócić?',
    imageUrl: 'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22488109/cancel_culture_board_1.jpg?quality=90&strip=all&crop=7.7916666666667,0,84.416666666667,100', 
    steps: [
      { text: 'Logika świata to sprawiedliwość plemienna: "Jeden zawinił, wszyscy płacą". Społeczeństwo nie wybacza, ona usuwa. Ale Biblia odcina się od tego hejtu: „Syn nie poniesie kary za winę swego ojca ani ojciec za winę swego syna. Sprawiedliwość sprawiedliwego jemu tylko będzie przypisana” (Ez 18, 20). Bóg patrzy na Ciebie, nie na statystykę Twojej grupy.', icon: Flame },
      { text: 'Tu pojawia się coś, co całkowicie odwraca logikę świata – Jezus zmienia zasady gry. W świecie: jeden zawalił, wszyscy cierpią. W Ewangelii: „Jak przez upadek jednego człowieka wyrok potępienia spadł na wszystkich ludzi, tak przez jeden czyn sprawiedliwy dobrodziejstwo usprawiedliwienia dające życie spływa na wszystkich” (Rz 5, 18). Jeden Jedyny sprawiedliwy wziął na klatę hejt całego świata, żebyś Ty nie musiał być przekreślony przez błędy innych (albo własne).', icon: RefreshCcw },
      { text: 'Zamiast dołączać do trendu nienawiści, masz szansę żyć inaczej niż narzuca to świat. Głoszenie Ewangelii to odwaga powiedzenia: „Nie będę Cię oceniać przez pryzmat najgorszego dzbana z Twojej grupy”. To wolność od bycia „bad apple”. On „w swoich ranach nosił nasze grzechy” (1 P 2, 24) – On został Został odrzucony i potępiony przez ludzi, żebyś Ty mógł odzyskać twarz i zacząć od zera.', icon: Unlock }
    ],
    icon: BrainCircuit,
    theme: {
  bgClass: 'bg-zinc-950 border-orange-500/20',
  textColor: 'text-orange-400',
  accentColor: 'from-orange-500 to-amber-600',
  effectType: 'matrix-terminal' 
}
  },
    {
    id: 'bunt',
    title: 'Underground PRL',
    hook: 'Gdy system chciał kontrolować każdą myśl, a za mówienie prawdy traciło się wolność, oni nie zamilkli. Zobacz, jak wiara stała się największym ruchem oporu, obalając imperium bez jednego wystrzału.',
    imageUrl: 'https://www.przewodnik-katolicki.pl/sites/default/files/styles/art_front/public/2005-03/b23a9339-d3fe-433b-863d-c9f41b9f273c.jpg.webp?itok=8SjyXrDU',
    steps: [
      { text: 'Wyobraź sobie świat totalnej cenzury i wszechobecnej propagandy rządu. W czasach PRL-u, gdy na ulicach panował strach, Kościół był często jedyną strefą, gdzie można było oddychać wolnością. Jak mówi Pismo: „Poznacie prawdę, a prawda was wyzwoli” (J 8, 32). W morzu kłamstwa, to był jedyny czysty ląd.', icon: Ghost },
      { text: 'Musimy oddać szacunek tym, którzy zapłacili najwyższą cenę. Ludzie tacy jak bł. ks. Jerzy Popiełuszko i tysiące bezimiennych bohaterów ryzykowali życie, kariery i bezpieczeństwo rodzin. Ich jedyną bronią w starciu z brutalnym reżimem była zasada: „Nie daj się zwyciężyć złu, ale zło dobrem zwyciężaj” (Rz 12, 21).', icon: ShieldAlert },
      { text: 'Oni udowodnili, że ludzkiej godności nie da się złamać pałką ani zastraszyć więzieniem. Głoszenie Ewangelii „pomimo utrapienia” to wtedy nie była poetycka metafora – to była codzienna, ryzykowna walka o to, by pozostać człowiekiem z wyprostowanym karkiem. Ten bunt zmienił historię całego narodu.', icon: Flame }
    ],
    icon: Flame,
    theme: {
      bgClass: 'bg-stone-900/60 border-stone-500/30',
      textColor: 'text-stone-300',
      accentColor: 'from-stone-400 to-stone-600',
      effectType: 'vintage-noise'
    }
  },
  {
    id: 'swiat',
    title: 'Misje: No Filter',
    hook: 'Krzyż vs Prawo krwi. Zapomnij o uśmiechniętych, lukrowanych fotkach. Prawdziwe misje to jazda bez trzymanki, dżungla ludzkich relacji i zderzenie z kulturami, w których przebaczenie uważane jest za słabość.',
    imageUrl: 'https://www.hrw.org/sites/default/files/styles/image_gallery/public/multimedia_images_2017/201706africa_car_photo_04.jpg?itok=SliSYZO-',
    steps: [
      { text: 'Słowa „Idźcie na cały świat i głoście Ewangelię” (Mk 16, 15) brzmią dobrze, dopóki nie zdasz sobie sprawy, że "cały świat" to często strefy wojen, skrajna bieda i miejsca, gdzie życie ludzkie nie ma wartości. Misjonarze nie jadą tam bawić się w zbawców, tylko harować w błocie, często ryzykując własną głową.', icon: Globe },
      { text: 'Spróbuj głosić: „Miłujcie waszych nieprzyjaciół” (Mt 5, 44) w kulturze plemiennej, gdzie krwawa zemsta za śmierć brata to uświęcony obowiązek, a litość to hańba. Ewangelia wywraca tamtejszy system wartości do góry nogami. Wymaga to gigantycznej odwagi, bo próba łamania setek lat cyklu nienawiści często spotyka się z agresją.', icon: ShieldAlert },
      { text: 'Dlaczego w ogóle to robią? Dlaczego zostają, gdy świeckie organizacje się ewakuują z powodu wojny domowej? Bo wierzą w to, co pisze Paweł: „Wszystko mogę w Tym, który mnie umacnia” (Flp 4, 13). Przynoszą edukację i medycynę, ale przede wszystkim – rewolucję w myśleniu, która jako jedyna potrafi zatrzymać rozlew krwi.', icon: Flame }
    ],
    icon: Globe,
    theme: {
      bgClass: 'bg-red-950/40 border-red-500/30',
      textColor: 'text-red-200',
      accentColor: 'from-red-500 to-red-700',
      effectType: 'dust-particles'
    }
  },

    {
    id: 'lokalsi',
    title: 'Tajemnica Milówki',
    hook: 'Mijasz kościół Wniebowzięcia NMP pewnie setki razy. Wydaje się po prostu starym budynkiem. Ale mury, na które patrzysz, kryją historię dosłownej walki z materią, potężnego stresu i hitlerowskiego buntu.',
    imageUrl: 'https://i.imgur.com/Nonl0ER.png',
    steps: [
      { text: '1. Zbudowany na nerwach. Pierwszy, drewniany kościół z 1628 r. przestał wystarczać, więc w 1834 r. zaczęto stawiać nowy, murowany. Ale konstrukcja była niefortunna – mury ciągle pękały, a prace trzeba było wstrzymywać. Stres i "utrapienie" były tak potężne, że ówczesny proboszcz, ks. Krakowski, zmarł z wycieńczenia tuż przed końcem budowy. Ten budynek dosłownie kosztował ludzkie życie.', icon: Flame },
      { text: '2. Twierdza oporu. Kiedy w 1939 r. weszli naziści, zaczęła się próba wymazania polskości. Rozbijali lokalne krzyże (np. ten na "Grunwaldzie"), a od 1941 r. całkowicie zakazali odprawiania polskich mszy. Kościół w Milówce stał się wtedy milczącą twierdzą. Próbowano odebrać im tożsamość, ale mury przetrwały najgorszy terror.', icon: ShieldAlert },
      { text: '3. Stare blizny w nowym ciele. Wejdź do środka. Część ołtarzy i obrazów (jak np. ten z 1715 roku) została przeniesiona ze starego, rozebranego drewnianego kościoła. To dowód, że nawet jak zmieniasz "opakowanie", rdzeń zostaje ten sam. Jak mówi Ewangelia: „Dom zbudowany na skale, choć uderzą w niego wichry i rzeki, nie runie” (por. Mt 7, 24-25). Ten budynek to nie jest martwy zabytek. To pomnik niezłomności ludzi stąd.', icon: MapPin }
    ], icon: MapPin,
    theme: {
      bgClass: 'bg-zinc-900/60 border-amber-500/30',
      textColor: 'text-amber-200',
      accentColor: 'from-amber-400 to-yellow-600',
      effectType: 'flashlight'
    }
  },

  {
  id: 'newsy',
  title: 'Świat: Cicha zmiana',
  hook: 'Algorytmy karmią się lękiem, bo strach najlepiej skupia uwagę. Ale w tle, poza nagłówkami o końcach świata, zachodzi powolna, realna zmiana. Oto dowody, że świat nie tylko płonie.',
  imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
  steps: [
    { 
      text: 'Cichy postęp. W ciągu ostatnich 20 lat liczba ludzi żyjących w skrajnym ubóstwie spadła o połowę. To nie przypadek, to efekt tysięcy ludzi, którzy uwierzyli, że "wszystko jest możliwe dla tego, kto wierzy" (Mk 9, 23) i przekuli to w realną pomoc, naukę i technologię.', 
      icon: RefreshCcw },
    { 
      text: 'Świat staje na nogi. Dziura ozonowa się regeneruje, a w wielu miejscach świata lasy wracają tam, gdzie była pustynia. Biblia mówi o opiece nad stworzeniem nie jako o ciężarze, ale misji. „I wziął Pan Bóg człowieka i osadził go w ogrodzie Eden, aby go uprawiał i strzegł” (Rdz 2, 15). Ta zmiana już się dzieje.', 
      icon: Search },
    { 
      text: 'Radykalna nadzieja. Każdego dnia miliony wolontariuszy, misjonarzy i zwykłych ludzi wybiera pomoc zamiast hejtu. To są momenty, w których dobro przebija się przez zło. „Światło w ciemności świeci i ciemność go nie ogarnęła” (J 1, 5). Dobro nie robi tyle hałasu co zło, ale ma znacznie silniejszy fundament.', 
      icon: Zap },
    { text: 'Duchowe zmartwychwstanie Europy. Mówili, że to duchowe cmentarzysko, tymczasem we Francji i Belgii mamy rekordowe skoki chrztów dorosłych. „Przyszedłem ogień rzucić na ziemię” (Łk 12, 49) – ten ogień właśnie przeskakuje na nowe pokolenie, którego nie zadowala już pusty konsumpcjonizm.', icon: Flame }
  ],
  icon: Zap,
  theme: {
    bgClass: 'bg-emerald-950/40 border-emerald-500/30',
    textColor: 'text-emerald-200',
    accentColor: 'from-emerald-400 to-cyan-500',
    effectType: 'flashlight'
  }
}

];
