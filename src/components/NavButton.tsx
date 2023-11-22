import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type NavButtonProps = {
  icon: IconDefinition;
};

export default function NavButton({ icon }: NavButtonProps) {
  return (
    <li className='w-12 h-12 flex items-center justify-center rounded-full p-4 bg-appBg_1'>
      <a href="">
        <FontAwesomeIcon icon={icon}/>
      </a>
    </li>
  );
}
