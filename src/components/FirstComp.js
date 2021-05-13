import React,{useEffect} from "react";
import { Container, Text, Title, Div, Each } from "./FirstComp.style";
export const FirstComp = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <Container>
      <Div>
        <Each>
          <Title>Welcome to Westie Highland White Terrier!</Title>
          <Text>
            We may have many different pets, but none of them has a dog’s
            behaviour! When you arrive home, your dog always becomes extremely
            happy, as if it hasn’t seen you for days, although you’ve only been
            gone for a couple of hours! When you are home, the dog likes to
            always be near to you, and to follow you all around the yard. There
            is something in us humans that makes us want to take care of a dog,
            to play with him, to talk to him, as if he’d be able to
            understand... Some may say that the food is what keeps the dog near
            a human, but this idea is very doubtful... We, the ones from the
            Westie Highland White Terrier, consider that the loyalty,
            unconditioned love, partnership offered by a dog to the human is
            what has determined the biped to accept the quadruped around him.
            Because yes, we can be sure that the dog has chosen the human and
            always will! A dog’s devotion is probably the key to the
            relationship between man and animal. Since the dog is an animal that
            has previously lived in packs, it likes the human’s company, it
            always finds for itself a purpose. In order to survive in a pack,
            all members need to take care of each other. And that’s exactcly
            what a dog does for his master: he takes care of him, the best way
            it knows how. When his master is no longer there, the dog loses its
            balance, both phisically and emotionally. The respect towards the
            westie is based on the wish of getting to know him better, to offer
            him its proper place between people. Only time will make it possible
            for us to say if we’ve chosen a path meant to be successfull,
            satisying or rewarding. Everything has become clear when we had
            received a delicate gift from an old friend, a distinguished lady,
            which is also a dog lover. It was an image of the Westie Highland,
            on a sheet of paper, which seemed to have appeared out of the depths
            of history! Along our belief, ”Spirit, Dynamism, Ambition”, we wish
            to grant the westie exactly what it has provided us with:
            uncoditioned love, devotion, and loyalty.
          </Text>
        </Each>
        <Each>
          <Title>Bine ati venit la Westie Highland White Terrier</Title>
          <Text>
            Putem avea diverse animale de companie, dar nici unul nu are
            comportamentul câinelui! Cand ajungi acasă, câinele se bucură
            nebunește, ca si când nu te-ar fi văzut de zile, desi ai lipsit
            câteva ore! Iar când esti acasă, câinelui îi place să-ți stea
            alături, să te însoțească oriunde în curte. Există ceva în noi
            oamenii care ne determină să îngrijim un câine, să ne jucăm cu el,
            să îi vorbim, ca și când ne-ar înțelege… Unii ar spune că hrana-l
            ține lângă om, dar e îndoielnică acestă idee… Noi, cei de la Westie
            Highland White Terrier considerăm că loialitatea, dragostea
            necondiționată si camaraderia oferite de câine omului, l-au
            determinat pe biped să-l accepte lângă sine pe patruped. Pentru că,
            da, suntem siguri, câinele l-a ales pe om si mereu o va face!
            Devotamentul câinelui e probabil cheia relației om-animal. Animal de
            haită, câinelui îi place compania omului, isi găseste un rost.
            Pentru a supraviețui, într-o haită trebuie ca fiecare să aibă grijă
            de celălalt. Iar un căine, asta face pentru stapânul său: il
            ingrijeste, asa cum se pricepe mai bine. Cand îi pleaca stăpânul,
            isi pierde echilibrul, fizic si emoțional. Respectul față de westie
            are la bază dorința de a-l cunoaste cât mai bine, de a-i oferi locul
            cuvenit între oameni. Si numai timpul va spune dacă drumul pe care
            am pornit e unul menit succesului, satisfacției, aprecierii. ​ Orice
            urmă de nehotărâre s-a spulberat când am primit de la o distinsă
            doamnă, prietenă veche, iubitoare de câini, un cadou delicat. Pe o
            coală de hârtie parcă iesită la iveală din negura istoriei, imaginea
            Westie Highland! ​ Alături de crezul nostru, “spirit, dinamism,
            ambitie”, dorim să dăm westie-ului exact ce ne-a dat el de-a lungul
            timpului: dragoste necondiționată, devotament, loialitate.
          </Text>
        </Each>
      </Div>
    </Container>
  );
};
