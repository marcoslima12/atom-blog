import { Logo } from "@/assets";
import {
  Container,
  Navigation,
  Input,
  InputButton,
  InputContainer,
  Content,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Image src={Logo} alt="Logo do atom blog" />
        <Navigation role="Navegação para outras páginas da aplicação">
          <Link
            className={router.pathname === "/" ? "ActiveClass" : ""}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={router.pathname === "/Sobre" ? "ActiveClass" : ""}
            href={"/Sobre"}
          >
            Sobre
          </Link>
          <Link
            className={router.pathname === "/Contato" ? "ActiveClass" : ""}
            href={"Contato"}
          >
            Contato
          </Link>
        </Navigation>

        <InputContainer>
          <Input type="text" placeholder="Buscar" />
          <InputButton>
            <MagnifyingGlass className="LupaImage" size={25} color="#F2E7FA" />
          </InputButton>
        </InputContainer>
      </Content>
    </Container>
  );
};
