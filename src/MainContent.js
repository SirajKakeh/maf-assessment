import SocialMedia from "./SocialMedia";

export default function MainContent() {
  return (
    <section className="mt-16 text-white text-center">
      <h1 className="font-noe-display text-6xl lg:text-120 mb-3.5">
        Night Trips
      </h1>
      <strong className="block font-larsseit px-4 lg:px-0 mt-8 lg:mt-0 lg:text-lg mb-50 tracking-wider">
        WE GOT TRIPS FOR THE TRIPPSTER IN YOU
      </strong>
      <span className="block mx-auto font-larsseit tracking-wide w-10/12 lg:w-3/5">
        Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis,
        volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis
        congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in
        in pulvinar nulla sollicitudin. Ullamcorper.
      </span>
      <SocialMedia />
    </section>
  );
}
