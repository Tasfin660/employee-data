import PropTypes from 'prop-types';

export default function SkillsSets({ role }) {
  let skills;

  switch (role) {
    case 'Graphics Designer':
      skills = 'Illustrator, Photoshop, InDesign, Figma, Sketch';
      break;
    case 'Video Editor':
      skills =
        'After Effects, Premiere Pro, Final Cut Pro, DaVinci Resolve, Avid Media Composer';
      break;
    case 'Software Dev':
      skills = 'Java, Data Strucuture and Algorithms';
      break;
    case 'Game Developer':
      skills = 'C++, C#, Unity, Unreal Engine, Godot, CryEngine.';
      break;
    case 'Web Developer':
      skills = 'HTML, CSS, JAVASCRIPT, REACT.JS, NEXT.JS';
      break;
    case 'University Student':
      skills = 'Leadership, Communication, Decision-Making, Time Management';
      break;
  }
  return <p className="mt-2 text-sm">{skills}</p>;
}
SkillsSets.propTypes = {
  role: PropTypes.string,
};
