# Create React App
[Image source](https://user-images.githubusercontent.com/20910791/206111576-7a2a7575-9d78-44fe-bf01-71aae13ad382.png)

### Giải thích cấu trúc source:
- Source được build bằng CRA

| Thư mục   | Chức năng     |
| :-------- | :-------------|
| assets | Lưu trữ các cài đặt tĩnh như ảnh, font, các định dạng file css tĩnh      |
| components |Lưu trữ các common component dùng chung (hiện tại có bộ form item common của [Ant design](https://ant.design/components/form) kết hợp [Formik](https://formik.org/docs/api/useFormik)) |
| configs | Lưu trữ các config của các thư viện (Hiện tại có Axios / I18n / Ant design - có thể custom theme và dynamic theme nếu config thêm) |
| constants | Lưu trữ các file khai báo các hằng số |
| hooks | Lưu trữ các hooks có khả năng tái sử dụng / dùng chung |
| interfaces | Lưu trữ các global interface phục vụ tái sử dụng, hoặc tránh khai báo interface vào file code, làm khó đọc |
| routers | Lưu trữ config routers - sử dụng hook useRoutes của [React router v6](https://reactrouter.com/en/main) |
| screens | Lưu trữ các folder theo tên màn hình |
| stores | Lưu trữ các cài đặt của redux - source sử dụng [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started) |
| utils | Lưu trữ các function có thể tái sử dụng, hoặc các function có tính chất như hỗ trợ cho service hoạt động |
| App.less | Khai báo default style theo định dạng less |
| App.tsx | Thư mục tổng, nơi gọi và sử dụng các context provider của các thư viện hoặc có thể tạo thêm thư mục providers vào source và config để sử dụng |
| index.tsx | File khởi tạo jsx để inject vào DOM html - có thể bọc <React.StrictMode> hoặc không, vì tsconfig cũng đã set true chế độ strict |
| .env | Khai báo enviroment cho dự án |
| .eslintrc.js / .prettierrc / .editorconfig | config linter code / format code ts, tsx / format editor để đồng bộ 3 chức năng này theo hệ điều hành |
| config-overrides.js | File để tuỳ biến cấu hình webpack mặc định của CRA |

- Source viết bằng Typescript - Ưu tiên sử dụng typescript (có cho phép allowJS ở tsconfig)
- Đa số các configs code style / code convention đều là mặc định của thư viện

### Quy tắc đặt tên
- Tên biến/Tên file có ý nghĩa
- Tên folder viết thường, tên file function/hook/constant viết thường. Tên component/provider viết hoa. Không viết code sử lý trong file index.ts / index.tsx
