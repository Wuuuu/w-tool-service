// const image = ['gif', 'png', 'jpg', 'jpeg', 'bmp', 'webp'];
// const video = ['mp4', 'webm'];
// const audio = ['mp3', 'wav', 'ogg'];

// const config = {
//   storage: multer.diskStorage({
//     // 配置上传后文件存储位置
//     destination: (req, file, cb) => {
//       // 根据上传的文件类型将图片视频音频和其他类型文件分别存到对应英文文件夹
//       const mimeType = file.mimetype.split('/')[1];
//       let temp = 'other';
//       image.filter((item) => item === mimeType).length > 0
//         ? (temp = 'image')
//         : '';
//       video.filter((item) => item === mimeType).length > 0
//         ? (temp = 'video')
//         : '';
//       audio.filter((item) => item === mimeType).length > 0
//         ? (temp = 'audio')
//         : '';

//       const filePath = `${config.fileTempPath}${temp}`;
//       // 判断文件夹是否存在，不存在则自动生成
//       if (!fs.existsSync(filePath)) {
//         fs.mkdirSync(filePath);
//       }
//       return cb(null, `${filePath}`);
//     },
//     // 配置文件名称
//     filename: async (req, file, cb) => {
//       const index = file.originalname.lastIndexOf('.');

//       const md5File = await getMd5File(file);
//       //获取后缀
//       const ext = file.originalname.substr(index);
//       cb(null, md5File + ext);
//     },
//   }),
// };
