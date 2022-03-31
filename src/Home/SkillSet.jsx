import Box from '@mui/material/Box';
import { 
  ReactFill, HtmlFill, CssFill, VscodeFill, GithubFill, NpmFill, NodeFill, GoogleFill, StackOverflowFill, SlackFill, BootstrapFill, ReduxFill, JavascriptFill
} from 'akar-icons';

import Marquee from "react-fast-marquee";

const SkillSet = () => {

  return (
    <>
      <h1>Skills and Tools</h1>
      <Marquee
        loop={0}
        delay={0}
        gradient={false}
        direction="left"
        pauseOnHover={true}
        pauseOnClick={true}
        play={true}
        speed={20}
      >
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 80,
          height: 80,
        },
      }}
    >
      <JavascriptFill color="yellow" size={35}/>
      <ReactFill color="#89CFF0" size={35} />
      <HtmlFill color="red" size={35} />
      <CssFill color="#8ab9f1" size={35} />
      <ReduxFill color="red" size={35} />
      <VscodeFill color="purple" size={35} />
      <GithubFill color="grey" size={35} />
      <NpmFill color="red" size={35} />
      <NodeFill color="green" size={35} />
      <GoogleFill color="yellow" size={35}/>
      <StackOverflowFill color="orange" size={35} />
      <SlackFill color="#87ceeb" size={35} />
      <BootstrapFill color="#ADD8E6" size={35} />
    </Box>


      </Marquee>
    </>
  );
}

export default SkillSet;
/*
        <Stack direction="row" spacing={6}> 
          {/* <Chip icon={<JavascriptFill color="yellow" size={35} />} />
          <Chip icon={<ReactFill color="#89CFF0" size={35} />} />
          <Chip icon={<HtmlFill color="red" size={35} />} />
          <Chip icon={<CssFill color="#8ab9f1" size={35} />} />
          <Chip icon={<ReduxFill color="red" size={35} />} />
          <Chip icon={<VscodeFill color="purple" size={35} />} />
          <Chip icon={<GithubFill color="grey" size={35} />} />
          <Chip icon={<NpmFill color="red" size={35} />} />
          <Chip icon={<NodeFill color="green" size={35} />} />
          <Chip icon={<GoogleFill color="yellow" size={35}/>} />
          <Chip icon={<StackOverflowFill color="orange" size={35} />} />
          <Chip icon={<SlackFill color="#87ceeb" size={35} />} />
          <Chip icon={<BootstrapFill color="#ADD8E6" size={35} />} /> 
        </Stack>
*/
