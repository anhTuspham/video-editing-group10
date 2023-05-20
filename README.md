# Nhóm 10

1. Phạm Anh Tú 20110742
2. Võ Đinh Quốc Thuật 20110733
3. Bùi Hào Quang 20110703


## Cài đặt và chạy project 
 ### Deploy bằng docker lên localhost
1. Clone project về máy
    - Vào thư mục cần chứa project gõ
   ``` 
    git clone https://github.com/anhTuspham/video-editing-group10.git
   ```
2. Build image của server và client lên docker
    - Mở docker desktop 
    - Build image của server
        - Vào project, và mở terminal, gõ
      ![img.png](img/img.png)
      ```
      cd server
      cd video-editing-api
      docker build -t anhtu269/server-docker -f video-editing-api/Dockerfile .
      ```
        - Sau khi build thành công màn hình sẽ hiển thị, gõ tiếp câu lệnh
      ![img_1.png](img/img_1.png)
      ```
      docker run -it -p 5001:80 anhtu269/server-docker
      ```
      ![img_2.png](img/img_2.png)
    - Sau khi build xong vào chrome gõ 
   ```
   http://localhost:5001/swagger/index.html
   ```
   ![img_3.png](img/img_3.png)
   - Build image của client
      - Vào thư mục chứa file docker-compose, gõ
     ```
     docker-compose up
     ```
     <img alt="img_4.png" src="img/img_4.png"/>
   ![img_5.png](img/img_5.png)