import Pages from "./components/Pages";

export default function Home() {
  return (
    <div className="">
       <Pages heading="Get More Done with whitepace" para="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks" bgColor="#043873" headingColor="white" paraColor="white" imageColor="#C4DEFD" buttonText="Try Whitepace free" />
      <Pages heading="Project Management" para="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note." headingColor="black" paraColor="black" imageColor="#C4DEFD" buttonText="Get Started"/>
      <Pages heading="Work together" para="With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
"  headingColor="black" paraColor="black" image="pic.png" imageColor="white" flexDirection="reverse" buttonText="Try It Now"/>
<Pages heading="Use as Extension" para="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
" bgColor="#043873" headingColor="white" paraColor="white" imageColor="#C4DEFD" buttonText="Let's Go" />
<Pages heading="Customise it
to your needs" para="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API." headingColor="black" paraColor="black" imageColor="#C4DEFD" flexDirection="reverse" buttonText="Let's Go"/>
    </div>
  );
}
