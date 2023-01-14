import UserInterface from "./user";

interface JadwalInterface {
  tanggal: Date;
  user: Array<UserInterface>;
}

export default JadwalInterface;