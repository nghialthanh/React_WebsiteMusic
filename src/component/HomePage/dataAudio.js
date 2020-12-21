import HuongDemBayXa from "../../assets/music/HuongDemBayXa.mp3";
import { v4 as uuidv4 } from 'uuid';
import RollingIntheDeep from "../../assets/music/RollingIntheDeep.mp3";
import Inconsolable from "../../assets/music/Inconsolable.mp3";
import NoiNhoCaoNguyen from "../../assets/music/NoiNhoCaoNguyen.mp3";
import BadDay from "../../assets/music/BadDay.mp3";
import KhongPhaiDangVuaDau from "../../assets/music/KhongPhaiDangVuaDau.mp3";
import TanBien from "../../assets/music/TanBien.mp3";
import TaCuDiCungNhau from "../../assets/music/TaCuDiCungNhau.mp3";

const audios = [
    {
      id: uuidv4(),
      src: "http://api.mp3.zing.vn/api/streaming/audio/ZOWUA7ZO/320",
      title: "Nàng thơ... trời giấu trời mang đi",
      artist: "AMEE, Hoàng Dũng",
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/1/c/9/21c9b33dc27fc37aa5f352bf0d84726e.jpg",
      view: 1520
    },
    {
      id: uuidv4(),
      src: "http://api.mp3.zing.vn/api/streaming/audio/ZW78BW9D/320",
      title: "Ánh Nắng của anh",
      artist: "Đức Phúc",
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg",
      view: 2001
    },
    {
      id: uuidv4(),
      src: "http://api.mp3.zing.vn/api/streaming/audio/ZW6IO06B/128",
      title: "Để Em Rời Xa",
      artist: "FB Boiz",
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/5/059befe0eca486d901b238558a7ed4c2_1454746670.jpg",
      view: 200
    },
    {
      id: uuidv4(),
      src: RollingIntheDeep,
      title: "Rolling In The Deep",
      artist: "Adele",
      image: "https://i.ytimg.com/vi/u_TmDTLqEjc/hqdefault.jpg",
      view: 200
    },
    {
      id: uuidv4(),
      src: HuongDemBayXa,
      title: "Hương đêm bay xa",
      artist: "Harri won",
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/e/0/e0df356e3e24b946529e98c9ed001bac_1416453349.jpg",
      view: 203
    },
    {
      id: uuidv4(),
      src: TaCuDiCungNhau,
      title: "Ta cứ đi cùng nhau",
      artist: "Đen vâu, Linh Cáo",
      image: "https://avatar-nct.nixcdn.com/song/2018/02/21/0/0/3/c/1519177607207_640.jpg",
      view: 1200
    },
    {
      id: uuidv4(),
      src: TanBien,
      title: "Tan Biến",
      artist: "Nguyễn Hải Phong",
      image: "https://i.ytimg.com/vi/XEzxaGl7jKU/maxresdefault.jpg",
      view: 120
    },
    {
      id: uuidv4(),
      src: KhongPhaiDangVuaDau,
      title: "Không Phải dạng vừa đâu",
      artist: "Sơn Tùng MTP",
      image: "https://i1.sndcdn.com/artworks-000135333595-kvowux-t500x500.jpg",
      view: 1200
    },
    {
      id: uuidv4(),
      src: BadDay,
      title: "Bad Day",
      artist: "Daniel Powter",
      image: "https://upload.wikimedia.org/wikipedia/vi/3/3e/Bad_Day_single.jpg",
      view: 210
    },
    {
      id: uuidv4(),
      src: NoiNhoCaoNguyen,
      title: "Nỗi nhớ cao nguyên",
      artist: "Hồ Quang Hiếu",
      image: "https://i.ytimg.com/vi/o0LSBi5czcA/hqdefault.jpg",
      view: 230
    },
    {
      id: uuidv4(),
      src: Inconsolable,
      title: "Inconsolable",
      artist: "Backstreet boys",
      image: "https://lyricvn.com/wp-content/uploads/2019/12/7014824a73ba9e48258e1fdd40c56fdc_1286004562.jpg",
      view: 820
    }
  ];
  
  export default audios;