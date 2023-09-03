import { Logo } from "@/assets";
import {
  Container,
  Navigation,
  Input,
  InputButton,
  InputContainer,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const Navbar = () => {
  return (
    <Container>
      <Image src={Logo} alt="Logo do atom blog" />
      <Navigation role="Navegação para outras páginas da aplicação">
        <Link className="LinkRoute" href={"#"}>
          Home
        </Link>
        <Link className="LinkRoute" href={"#"}>
          Sobre
        </Link>
        <Link className="LinkRoute" href={"#"}>
          Categorias
        </Link>
        <Link className="LinkRoute" href={"#"}>
          Contato
        </Link>
      </Navigation>

      <InputContainer>
        <Input type="text" placeholder="Buscar" />
        <InputButton>
          <MagnifyingGlass className="LupaImage" size={25} color="#F2E7FA" />
        </InputButton>
      </InputContainer>
    </Container>
  );
};
