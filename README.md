# chat-sample

## init
``` bash
npm install # 1. module 설치
npm run test # 2. mocha test
npm start # 3. 서버 실행
```


## 챗봇 메시지 콘텐츠 입력(제작) API (CRUD)

### GET /api

### POST /api
- BODY param
``` json
{
    "type": "text",
    "q": "뭐해",
    "a": "일해"
}
```

### PUT /api
- BODY param
``` json
{
    "type": "text",
    "q": "뭐해",
    "a": "일하지..."
}
```

### DELETE /api
- BODY param
``` json
{
    "type": "text",
    "q": "뭐해",
}
```

## 콘텐츠 사용 API

### POST /api/chat
- BODY param
``` json
{
    "type": "text",
    "message": "뭐해",
}
```

