export interface ContactItems {
  src: string;
  alt: string;
  text: string;
  width: number;
  height: number;
}

export const contactItems: ContactItems[] = [
  {
    src: "/images/icon-location.svg",
    alt: "icon-location",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    width: 13,
    height: 18
  },
  {
    src: "/images/icon-phone.svg",
    alt: "icon-phone",
    text: "+1-543-123-4567",
    width: 18,
    height: 18
  },
  {
    src: "/images/icon-email.svg",
    alt: "icon-email",
    text: "example@fylo.com",
    width: 20,
    height: 16
  }
]