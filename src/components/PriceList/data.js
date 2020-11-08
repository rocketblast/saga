const priceTypes = {
  short: 'kort',
  medium: 'mellan',
  long: 'långt',
}

const cuts = {
  title: 'Klippningar',
  entries: [
    {
      title: 'Klippning hår',
      description: 'Klippning och styling av hår inklusive tvätt & fön.\nVid långt och tjock hår kan priset öka pga tiden och materialåtgång.',
      prices: [
        {
          value: 550,
          unit: 'kr',
          type: priceTypes.short,
        },
        {
          value: 590,
          unit: 'kr',
          type: priceTypes.medium,
        },
        {
          value: 690,
          unit: 'kr',
          type: priceTypes.long,
        },
      ],
    },
    {
      title: 'Klippning för barn',
      description: 'Barn klippning upp till 11 år.\nPrisökning kan förekomma vid långt / tjock hår.',
      prices: [
        {
          value: 350,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Lugg klippning',
      description: 'Putsning/ klippning  av lugg. prisökning vid sidoklippning.',
      prices: [
        {
          value: 150,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Snagg',
      description: '',
      prices: [
        {
          value: 300,
          unit: 'kr',
        },
      ],
    }
  ],
}

const colors = {
  title: 'Färgningar',
  description: 'Då det tar längre tid att färga hår så ber vi dig att ringa salongen för bokning efter kl 16.00',
  entries: [
    {
      title: 'Färgning',
      description: 'Ammoniakfri hårfärg med glansgivande elixir. Colour Elixir är de enastående och unika egenskaper från Argan, Cyperus och Linfröolja. Den ammoniak-fria formulan är skonsam mot håret och garanterar ett enastående färgresultat. Färgen har en sofistikerad doft som ger dig en känsla av välbefinnande.',
      prices: [
        {
          value: 990,
          unit: 'kr',
          type: priceTypes.short,
        },
        {
          value: 1290,
          unit: 'kr',
          type: priceTypes.medium,
        },
        {
          value: 1490,
          unit: 'kr',
          type: priceTypes.long,
        },
      ],
    },
    {
      title: 'Färgning & klippning',
      description: 'Samma behandling som ovan samt klippning och styling av hår inklusive tvätt & fön.\nVid långt och tjock hår kan priset öka pga tiden och materialåtgång.',
      prices: [
        {
          value: 1440,
          unit: 'kr',
          type: priceTypes.short,
        },
        {
          value: 1590,
          unit: 'kr',
          type: priceTypes.medium,
        },
        {
          value: 1750,
          unit: 'kr',
          type: priceTypes.long,
        },
      ],
    },
    {
      title: 'Färgning & klippning (extra långt hår)',
      description: 'Samma behandling som ovan men för extra lång hår',
      prices: [
        {
          value: 1990,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Slingor',
      description: 'Ammoniakfri blekning som skonsamt ljusar upp ditt hår upp till 8 steg. Vi nyanserar håret i schamponeringen till önskad färg och ljusar upp bottenfärgen vid behov.',
      prices: [
        {
          value: 1200,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Avfärgning',
      description: 'Ammoniakfri blekning som skonsamt ljusar upp ditt hår till önskad resultat. Pris ökning vid tjock och långt hår.',
      prices: [
        {
          value: 350,
          unit: 'kr',
        },
      ],
    },
  ],
}

const multiColors = {
  title: 'Flerfärg/slingor',
  description: 'Då det tar längre tid att färga hår så ber vi dig att ringa salongen för bokning efter kl 16.00',
  entries: [
    {
      title: 'Slingor/balayage & klippning',
      description: 'Flerfärg/ Slingor, nyansering och klippning och styling av hår alla behandlings priser är från pris för rättvis behandling av olika hårtyper och önskemål av slutresultat. (Olaplex 300:-)',
      prices: [
        {
          value: 1690,
          unit: 'kr',
          type: priceTypes.long,
        },
        {
          value: 1990,
          unit: 'kr',
          type: priceTypes.medium,
        },
        {
          value: 2490,
          unit: 'kr',
          type: priceTypes.long,
        },
      ],
    },
    {
      title: 'Slingor/balayage & klippning (extra lång hår)',
      description: 'Samma behandling som ovan men för extra lång hår',
      prices: [
        {
          value: 2700,
          unit: 'kr',
        },
      ],
    },{
      title: 'Slingor/balayage',
      description: 'Vi går igenom hela håret och redigerar ojämna partier.  Vi använder oss av bayalage tekniken eller folieslingor och sedan nyanserar vi till önskad resultat och använder eko- schampo och balsam. Vi avslutar behandlingen med önskad klippning och styling.',
      prices: [
        {
          value: 1200,
          unit: 'kr',
          type: priceTypes.short,
        },
        {
          value: 1990,
          unit: 'kr',
          type: priceTypes.medium,
        },
      ],
    },
    {
      title: 'Slingor',
      description: 'Slingor. Tvätt och fön inkluderat. (Olaplex 300:-)',
      prices: [
        {
          value: 1200,
          unit: 'kr',
          type: priceTypes.short,
        },
        {
          value: 1590,
          unit: 'kr',
          type: priceTypes.medium,
        },
        {
          value: 1890,
          unit: 'kr',
          type: priceTypes.long,
        },
      ],
    },
  ],
}

const uppsattningar = {
  title: 'Uppsättningar & make-up',
  entries: [
    {
      title: 'Uppsättning',
      prices: [
        {
          value: 750,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Fön/läggning',
      prices: [
        {
          value: 350,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Konsultation för brudupssättning',
      prices: [
        {
          value: 0,
          unit: 'kr',
        },
      ],
    },
  ],
}

const extensions = {
  title: 'Hårförlängningar & permanenter',
  entries: [
    {
      title: 'Permanent & klippning',
      description: 'Permanent. Klippning och styling ingår',
      prices: [
        {
          value: 1690,
          unit: 'kr',
          type: priceTypes.short
        },
        {
          value: 1990,
          unit: 'kr',
          type: priceTypes.long
        },
      ],
    },
  ],
}

const eyeTreatments = {
  title: 'Ögonfransar/ögonbryn',
  entries: [
    {
      title: 'Färgning av ögonfransar',
      description: 'Färgning av ögonfransar',
      prices: [
        {
          value: 200,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Färgning & formning av ögonbryn',
      description: 'Färgning & formning av ögonbryn',
      prices: [
        {
          value: 350,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Färgning av ögonfransar och ögonbryn samt formning av ögonbryn',
      description: 'Färgning av ögonfransar och ögonbryn samt formning/trådning av ögonbryn',
      prices: [
        {
          value: 480,
          unit: 'kr',
        },
      ],
    },
  ],
}

const hairCare = {
  title: 'Hårvård',
  entries: [
    {
      title: 'Toning',
      prices: [
        {
          value: 800,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Inpackning/kur',
      description: 'Kombinera din behandling med en ultimat vårdande och återfuktande inpackning.',
      prices: [
        {
          value: 200,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Olaplex-vård',
      description: 'Olaplex-vård',
      prices: [
        {
          value: 350,
          unit: 'kr',
          type: priceTypes.short
        },
        {
          value: 450,
          unit: 'kr',
          type: priceTypes.medium
        },
        {
          value: 550,
          unit: 'kr',
          type: priceTypes.long
        },
      ],
    },
    {
      title: 'Hårbottenmassage',
      description: 'Hårbottenmassage med vårdande inpackning 30 min. Vi avslutar behandlingen med önskad styling, föna volym, platta eller locka håret.',
      prices: [
        {
          value: 500,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Hårbottenbehandling mot mjäll',
      description: 'Behandling som fräschar upp hårbotten och hjälper till att minska uppkomsten av mjäll. Tack vara aktiva ingredienser med antioxiderande effekt.',
      prices: [
        {
          value: 400,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Hårbottenbehandling',
      description: 'SCALP DERMO CLAM LOTION lugnande koncentrat för väldigt känslig hårbotten. Det ger känsla av fräschhet och verkar lugnande för en känslig och irriterad hårbotten. Vi avslutar behandlingen med önskad styling. fön, platta eller locka håret',
      prices: [
        {
          value: 380,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Hårbottenbehandling för fett hår',
      description: 'SEBUM CONTROL För fett hår och obalans i talg produktionen. är ditt hår tungt och klibbigt,omöjligt att styla och blir snabbt smutsigt? kvarstår ditt problem trotts att du fortsätter tvätta?  lösningen är Sebum Control,en serie speciellt framtagen för att kontrollera talgproduktionen och som gör håret lätt,luftigt och mjukt samtidigt som fuktbalansen återskapas i håret.',
      prices: [
        {
          value: 380,
          unit: 'kr',
        },
      ],
    },
  ],
}

const beard = {
  title: 'Skägg',
  entries: [
    {
      title: 'Skäggtrim',
      description: 'Skäggtrim',
      prices: [
        {
          value: 150,
          unit: 'kr',
        },
      ],
    },
  ],
}

const massage = {
  title: 'Skalpmassage',
  entries: [
    {
      title: 'Hårbottenbehandling',
      description: 'SCALP DERMO CLAM LOTION  lugnande koncentrat för väldigt känslig hårbotten. Det ger känsla av fräschhet och verkar lugnande för en känslig och irriterad hårbotten.',
      prices: [
        {
          value: 400,
          unit: 'kr',
        },
      ],
    },
  ],
}

const hairRemoval = {
  title: 'Hårborttagning',
  entries: [
    {
      title: 'Trådning av ögonbryn',
      prices: [
        {
          value: 250,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Trådning av överläpp',
      prices: [
        {
          value: 100,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Trådning av hakan',
      prices: [
        {
          value: 100,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Trådning av hela ansiktet',
      prices: [
        {
          value: 400,
          unit: 'kr',
        },
      ],
    },
  ],
}

const piercings = {
  title: 'Piercing',
  entries: [
    {
      title: 'Öronpiercing',
      prices: [
        {
          value: 200,
          unit: 'kr',
        },
      ],
    },
  ],
}

const hairtalk = {
  title: 'Hårförlängning',
  entries: [
    {
      title: 'Hairtalk Extension',
      description: 'Det spelar ingen roll om du gör en full förlängning eller om du bara fyller ut det med ett par paket Hairtalk – resultatet är att du kan skapa fantastiska frisyrer. Oavsett om ditt eget hår är kort eller långt, tunt eller tjockt, slipper du känna dig begränsad med Hairtalk. Tack vare de skonsamma tejpfästena gäller det även för dig som har håravfallssjukdomar.',
      prices: [
        {
          value: 4955,
          unit: 'kr',
          type: '25 CM',
        },
        {
          value: 6665,
          unit: 'kr',
          type: '40 CM',
        },
        {
          value: 9075,
          unit: 'kr',
          type: '55 CM',
        },
      ],
    },
    {
      title: 'Förtjockning: 2 pak Hårborste',
      prices: [
        {
          value: 2845,
          unit: 'kr',
        },
      ],
    },
    {
      title: 'Omsättningen av Hairtalk',
      description: 'Omsättningen av Hairtalk',
      prices: [
        {
          value: 1500,
          unit: 'kr',
          type: '1 timme'
        },
        {
          value: 2100,
          unit: 'kr',
          type: '1½ timme',
        },
      ],
    },
  ],
}

const teethbleach = {
  title: 'Tandblekning',
  entries: [
    {
      title: 'Tandblekning',
      description: 'whiteningbox är ett säkert, snabbt,  enkelt och bekvämt hemma blekning för vitare tänder. Säker att använda utan att kompromissa med resultatet . Upp till 8 nyanser vitare tänder. 100% pengarna tillbaka garanti.',
      prices: [
        {
          value: 690,
          unit: 'kr',
        },
      ],
    },
  ],
}

const data = [
  cuts,
  colors,
  multiColors,
  uppsattningar,
  extensions,
  eyeTreatments,
  hairCare,
  beard,
  massage,
  hairRemoval,
  piercings,
  hairtalk,
  teethbleach,
]

export default data
