import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const links = [
  {
    href: "/dashboard",
    icon: <HiOutlineHome />,
    label: "Home",
  },
  {
    href: "/dashboard/bookings",
    icon: <HiOutlineCalendarDays />,
    label: "Bookings",
  },
  {
    href: "/dashboard/cabins",
    icon: <HiOutlineHomeModern />,
    label: "Cabins",
  },
  {
    href: "/dashboard/users",
    icon: <HiOutlineUsers />,
    label: "Users",
  },
  {
    href: "/dashboard/settings",
    icon: <HiOutlineCog6Tooth />,
    label: "Settings",
  },
];

function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <NavList>
        {links.map((link) => (
          <li key={link.href}>
            <StyledNavLink
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.icon}
              <span>{link.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

export default MainNav;
