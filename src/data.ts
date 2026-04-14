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
      { text: 'Wiara to nie jest "copium" ani pigułka wymazująca problemy. Czasami jest po prostu ciężko, i masz prawo tak się czuć. Zobacz na św. Pawła, gość pisał brutalnie szczerze: „Zewsząd znosimy uciski, lecz nie poddajemy się zwątpieniu; żyjemy w niedostatku, lecz nie rozpaczamy” (2 Kor 4, 8). Nawet będąc w życiowym bagnie, można mieć fundament, którego nie da się rozwalić.', icon: ShieldAlert },
      { text: 'Chrystus pocił się krwią ze stresu przed egzekucją. On doskonale wie, jak to jest, kiedy od natłoku myśli psychika totalnie siada. Nie obiecał nam sterylnego, bezpiecznego życia. Rzucił coś znacznie mocniejszego: „Na świecie doznacie ucisku, ale miejcie odwagę: Jam zwyciężył świat” (J 16, 33). Nie jesteśmy w tej dupie sami.', icon: Cross }
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
    title: 'System: Reverse Uno',
    hook: 'Jeden ksiądz zawalił – cały Kościół do kosza? Jeden lekarz wziął łapówkę – medycyna to kłamstwo? Witaj w świecie cancel culture, gdzie jeden błąd jednostki zatruwa całą grupę. A co, gdyby system miał błąd, który pozwala to odwrócić?',
    imageUrl: 'https://i.imgur.com/whHplS3.jpeg', 
    steps: [
      { text: 'Logika świata to sprawiedliwość plemienna: "Jeden zawinił, wszyscy płacą". Cancel culture nie wybacza, ona usuwa. Ale Biblia odcina się od tego hejtu: „Syn nie poniesie kary za winę swego ojca ani ojciec za winę swego syna. Sprawiedliwość sprawiedliwego jemu tylko będzie przypisana” (Ez 18, 20). Bóg patrzy na Ciebie, nie na statystykę Twojej grupy.', icon: Flame },
      { text: 'Tu wchodzi największy glitch w historii – Jezus wykonuje ostateczne Reverse Uno. W świecie: jeden zawalił, wszyscy cierpią. W Ewangelii: „Jak przez upadek jednego człowieka wyrok potępienia spadł na wszystkich ludzi, tak przez jeden czyn sprawiedliwy dobrodziejstwo usprawiedliwienia dające życie spływa na wszystkich” (Rz 5, 18). Jeden Jedyny sprawiedliwy wziął na klatę hejt całego świata, żebyś Ty nie musiał być skasowany za błędy innych (albo własne).', icon: RefreshCcw },
      { text: 'Zamiast dołączać do trendu nienawiści, masz szansę zhakować system. Głoszenie Ewangelii to odwaga powiedzenia: „Nie będę Cię oceniać przez pryzmat najgorszego dzbana z Twojej grupy”. To wolność od bycia „bad apple”. On „w swoich ranach nosił nasze grzechy” (1 P 2, 24) – On został "scancelowany" przez system, żebyś Ty mógł odzyskać twarz i zacząć od zera.', icon: Unlock }
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
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    steps: [
      { text: 'Słowa „Idźcie na cały świat i głoście Ewangelię” (Mk 16, 15) brzmią spoko, dopóki nie zdasz sobie sprawy, że "cały świat" to często strefy wojen, skrajna bieda i miejsca, gdzie życie ludzkie nie ma wartości. Misjonarze nie jadą tam bawić się w zbawców, tylko harować w błocie, często ryzykując własną głową.', icon: Globe },
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
      { text: '1. Zbudowany na nerwach. Pierwszy, drewniany kościół z 1628 r. przestał wystarczać, więc w 1834 r. zaczęto stawiać nowy, murowany. Ale konstrukcja była przeklęta – mury ciągle pękały, a prace trzeba było wstrzymywać. Stres i "utrapienie" były tak potężne, że ówczesny proboszcz, ks. Krakowski, zmarł z wycieńczenia tuż przed końcem budowy. Ten budynek dosłownie kosztował ludzkie życie.', icon: Flame },
      { text: '2. Twierdza oporu. Kiedy w 1939 r. weszli naziści, zaczęła się próba wymazania polskości. Rozbijali lokalne krzyże (np. ten na "Grunwaldzie"), a od 1941 r. całkowicie zakazali odprawiania polskich mszy. Kościół w Milówce stał się wtedy milczącą twierdzą. System próbował skasować im tożsamość, ale mury przetrwały najgorszy terror.', icon: ShieldAlert },
      { text: '3. Stare blizny w nowym ciele. Wejdź do środka. Część ołtarzy i obrazów (jak np. ten z 1715 roku) została przeniesiona ze starego, rozebranego drewnianego kościoła. To dowód, że nawet jak zmieniasz "opakowanie", rdzeń zostaje ten sam. Jak mówi Ewangelia: „Dom zbudowany na skale, choć uderzą w niego wichry i rzeki, nie runie” (por. Mt 7, 24-25). Ten budynek to nie jest martwy zabytek. To pomnik niezłomności ludzi stąd.', icon: MapPin }
    ],
    icon: MapPin,
    theme: {
      bgClass: 'bg-zinc-900/60 border-amber-500/30',
      textColor: 'text-amber-200',
      accentColor: 'from-amber-400 to-yellow-600',
      effectType: 'flashlight'
    }
  }

];