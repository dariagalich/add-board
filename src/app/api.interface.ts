// export interface Root {
//   openapi: string
//   info: Info
//   paths: Paths
//   components: Components
//   security: Security[]
// }
// //=======
// // export interface AuthResponse{
// //   idToken: string
// // }
// //=======
// export interface Info {
//   title: string
//   version: string
// }
//
// export interface Paths {
//   "/Advert/search": AdvertSearch
//   "/Advert/{id}": AdvertId
//   "/Advert/{id}/Comments": AdvertIdComments
//   "/Advert/{id}/comments": AdvertIdComments2
//   "/Advert": Advert
//   "/Auth/Login": AuthLogin
//   "/Auth/Register": AuthRegister
//   "/Categories": Categories
//   "/Categories/{id}": CategoriesId
//   "/Categories/import": CategoriesImport
//   "/Comment/{id}": CommentId
//   "/Images/{id}": ImagesId
//   "/Images": Images5
//   "/Users": Users
//   "/Users/{id}": UsersId
//   "/Users/current": UsersCurrent
// }
//
// export interface Comment {
//   id: string
//   text: string
//   created: string
//   parentId: string
//   user: User3
// }
//
// export interface UserIdName {
//   id: string
//   name: string
// }
//
// export interface AdvertSearch {
//   post: Post
// }
//
// export interface Post {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody
//   responses: Responses
// }
//
// export interface RequestBody {
//   description: string
//   content: Content
// }
//
// export interface Content {
//   "application/json": ApplicationJson
//   "text/json": TextJson
//   "application/*+json": ApplicationJson2
// }
//
// export interface ApplicationJson {
//   schema: Schema
// }
//
// export interface Schema {
//   $ref: string
// }
//
// export interface TextJson {
//   schema: Schema2
// }
//
// export interface Schema2 {
//   $ref: string
// }
//
// export interface ApplicationJson2 {
//   schema: Schema3
// }
//
// export interface Schema3 {
//   $ref: string
// }
//
// export interface Responses {
//   "500": N500
//   "200": N200
// }
//
// export interface N500 {
//   description: string
//   content: Content2
// }
//
// export interface Content2 {
//   "application/json": ApplicationJson3
// }
//
// export interface ApplicationJson3 {
//   schema: Schema4
// }
//
// export interface Schema4 {
//   $ref: string
// }
//
// export interface N200 {
//   description: string
//   content: Content3
// }
//
// export interface Content3 {
//   "application/json": ApplicationJson4
// }
//
// export interface ApplicationJson4 {
//   schema: Schema5
// }
//
// export interface Schema5 {
//   type: string
//   items: Items
// }
//
// export interface Items {
//   $ref: string
// }
//
// export interface AdvertId {
//   get: Get
//   put: Put
//   delete: Delete
// }
//
// export interface Get {
//   tags: string[]
//   summary: string
//   parameters: Parameter[]
//   responses: Responses2
// }
//
// export interface Parameter {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema6
// }
//
// export interface Schema6 {
//   type: string
//   format: string
// }
//
// export interface Responses2 {
//   "500": N5002
//   "200": N2002
//   "404": N404
// }
//
// export interface N5002 {
//   description: string
//   content: Content4
// }
//
// export interface Content4 {
//   "application/json": ApplicationJson5
// }
//
// export interface ApplicationJson5 {
//   schema: Schema7
// }
//
// export interface Schema7 {
//   $ref: string
// }
//
// export interface N2002 {
//   description: string
//   content: Content5
// }
//
// export interface Content5 {
//   "application/json": ApplicationJson6
// }
//
// export interface ApplicationJson6 {
//   schema: Schema8
// }
//
// export interface Schema8 {
//   $ref: string
// }
//
// export interface N404 {
//   description: string
//   content: Content6
// }
//
// export interface Content6 {
//   "application/json": ApplicationJson7
// }
//
// export interface ApplicationJson7 {
//   schema: Schema9
// }
//
// export interface Schema9 {
//   $ref: string
// }
//
// export interface Put {
//   tags: string[]
//   summary: string
//   parameters: Parameter2[]
//   requestBody: RequestBody2
//   responses: Responses3
// }
//
// export interface Parameter2 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema10
// }
//
// export interface Schema10 {
//   type: string
//   format: string
// }
//
// export interface RequestBody2 {
//   content: Content7
// }
//
// export interface Content7 {
//   "multipart/form-data": MultipartFormData
// }
//
// export interface MultipartFormData {
//   schema: Schema11
//   encoding: Encoding
// }
//
// export interface Schema11 {
//   required: string[]
//   type: string
//   properties: Properties
// }
//
// export interface Properties {
//   id: string,
//   cost: number,
//   createdAt: string,
//   imagesIds: string[],
//   isActive: boolean,
//   location: string,
//   name: string,
//
// }
//
// export interface Name {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Description {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Images {
//   type: string
//   items: Items2
//   description: string
// }
//
// export interface Items2 {
//   type: string
//   format: string
// }
//
// export interface Cost {
//   minimum: number
//   type: string
//   description: string
//   format: string
// }
//
// export interface Email {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Phone {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Location {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface CategoryId {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Encoding {
//   Id: string
//   Name: string
//   Location: string
//   Images: []
//   Cost: string
//   Email: string
//   Phone: string
//   CategoryId: string
// }
//
// export interface Name2 {
//   style: string
// }
//
// export interface Description2 {
//   style: string
// }
//
// export interface Images2 {
//   style: string
// }
//
// export interface Cost2 {
//   style: string
// }
//
// export interface Email2 {
//   style: string
// }
//
// export interface Phone2 {
//   style: string
// }
//
// export interface Location2 {
//   style: string
// }
//
// export interface CategoryId2 {
//   style: string
// }
//
// export interface Responses3 {
//   "500": N5003
//   "200": N2003
//   "400": N400
//   "403": N403
//   "404": N4042
//   "422": N422
// }
//
// export interface N5003 {
//   description: string
//   content: Content8
// }
//
// export interface Content8 {
//   "application/json": ApplicationJson8
// }
//
// export interface ApplicationJson8 {
//   schema: Schema12
// }
//
// export interface Schema12 {
//   $ref: string
// }
//
// export interface N2003 {
//   description: string
//   content: Content9
// }
//
// export interface Content9 {
//   "application/json": ApplicationJson9
// }
//
// export interface ApplicationJson9 {
//   schema: Schema13
// }
//
// export interface Schema13 {
//   $ref: string
// }
//
// export interface N400 {
//   description: string
//   content: Content10
// }
//
// export interface Content10 {
//   "application/json": ApplicationJson10
// }
//
// export interface ApplicationJson10 {
//   schema: Schema14
// }
//
// export interface Schema14 {
//   $ref: string
// }
//
// export interface N403 {
//   description: string
//   content: Content11
// }
//
// export interface Content11 {
//   "application/json": ApplicationJson11
// }
//
// export interface ApplicationJson11 {
//   schema: Schema15
// }
//
// export interface Schema15 {
//   $ref: string
// }
//
// export interface N4042 {
//   description: string
//   content: Content12
// }
//
// export interface Content12 {
//   "application/json": ApplicationJson12
// }
//
// export interface ApplicationJson12 {
//   schema: Schema16
// }
//
// export interface Schema16 {
//   $ref: string
// }
//
// export interface N422 {
//   description: string
//   content: Content13
// }
//
// export interface Content13 {
//   "application/json": ApplicationJson13
// }
//
// export interface ApplicationJson13 {
//   schema: Schema17
// }
//
// export interface Schema17 {
//   $ref: string
// }
//
// export interface Delete {
//   tags: string[]
//   summary: string
//   parameters: Parameter3[]
//   responses: Responses4
// }
//
// export interface Parameter3 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema18
// }
//
// export interface Schema18 {
//   type: string
//   format: string
// }
//
// export interface Responses4 {
//   "500": N5004
//   "204": N204
//   "403": N4032
//   "404": N4043
// }
//
// export interface N5004 {
//   description: string
//   content: Content14
// }
//
// export interface Content14 {
//   "application/json": ApplicationJson14
// }
//
// export interface ApplicationJson14 {
//   schema: Schema19
// }
//
// export interface Schema19 {
//   $ref: string
// }
//
// export interface N204 {
//   description: string
// }
//
// export interface N4032 {
//   description: string
//   content: Content15
// }
//
// export interface Content15 {
//   "application/json": ApplicationJson15
// }
//
// export interface ApplicationJson15 {
//   schema: Schema20
// }
//
// export interface Schema20 {
//   $ref: string
// }
//
// export interface N4043 {
//   description: string
//   content: Content16
// }
//
// export interface Content16 {
//   "application/json": ApplicationJson16
// }
//
// export interface ApplicationJson16 {
//   schema: Schema21
// }
//
// export interface Schema21 {
//   $ref: string
// }
//
// export interface AdvertIdComments {
//   get: Get2
// }
//
// export interface Get2 {
//   tags: string[]
//   summary: string
//   parameters: Parameter4[]
//   responses: Responses5
// }
//
// export interface Parameter4 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema22
// }
//
// export interface Schema22 {
//   type: string
//   format: string
// }
//
// export interface Responses5 {
//   "500": N5005
//   "200": N2004
// }
//
// export interface N5005 {
//   description: string
//   content: Content17
// }
//
// export interface Content17 {
//   "application/json": ApplicationJson17
// }
//
// export interface ApplicationJson17 {
//   schema: Schema23
// }
//
// export interface Schema23 {
//   $ref: string
// }
//
// export interface N2004 {
//   description: string
//   content: Content18
// }
//
// export interface Content18 {
//   "application/json": ApplicationJson18
// }
//
// export interface ApplicationJson18 {
//   schema: Schema24
// }
//
// export interface Schema24 {
//   type: string
//   items: Items3
// }
//
// export interface Items3 {
//   $ref: string
// }
//
// export interface AdvertIdComments2 {
//   post: Post2
// }
//
// export interface Post2 {
//   tags: string[]
//   summary: string
//   parameters: Parameter5[]
//   requestBody: RequestBody3
//   responses: Responses6
// }
//
// export interface Parameter5 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema25
// }
//
// export interface Schema25 {
//   type: string
//   format: string
// }
//
// export interface RequestBody3 {
//   content: Content19
// }
//
// export interface Content19 {
//   "multipart/form-data": MultipartFormData2
// }
//
// export interface MultipartFormData2 {
//   schema: Schema26
//   encoding: Encoding2
// }
//
// export interface Schema26 {
//   required: string[]
//   type: string
//   properties: Properties2
// }
//
// export interface Properties2 {
//   text: string
//   parentId?: string
// }
//
// export interface Text {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface ParentId {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Encoding2 {
//   Text: Text2
//   ParentId: ParentId2
// }
//
// export interface Text2 {
//   style: string
// }
//
// export interface ParentId2 {
//   style: string
// }
//
// export interface Responses6 {
//   "500": N5006
//   "201": N201
//   "400": N4002
//   "422": N4222
// }
//
// export interface N5006 {
//   description: string
//   content: Content20
// }
//
// export interface Content20 {
//   "application/json": ApplicationJson19
// }
//
// export interface ApplicationJson19 {
//   schema: Schema27
// }
//
// export interface Schema27 {
//   $ref: string
// }
//
// export interface N201 {
//   description: string
//   content: Content21
// }
//
// export interface Content21 {
//   "application/json": ApplicationJson20
// }
//
// export interface ApplicationJson20 {
//   schema: Schema28
// }
//
// export interface Schema28 {
//   $ref: string
// }
//
// export interface N4002 {
//   description: string
//   content: Content22
// }
//
// export interface Content22 {
//   "application/json": ApplicationJson21
// }
//
// export interface ApplicationJson21 {
//   schema: Schema29
// }
//
// export interface Schema29 {
//   $ref: string
// }
//
// export interface N4222 {
//   description: string
//   content: Content23
// }
//
// export interface Content23 {
//   "application/json": ApplicationJson22
// }
//
// export interface ApplicationJson22 {
//   schema: Schema30
// }
//
// export interface Schema30 {
//   $ref: string
// }
//
// export interface Advert {
//   post: Post3
// }
//
// export interface Post3 {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody4
//   responses: Responses7
// }
//
// export interface RequestBody4 {
//   content: Content24
// }
//
// export interface Content24 {
//   "multipart/form-data": MultipartFormData3
// }
//
// export interface MultipartFormData3 {
//   schema: Schema31
//   encoding: Encoding3
// }
//
// export interface Schema31 {
//   required: string[]
//   type: string
//   properties: Properties3
// }
//
// export interface Properties3 {
//   Name: Name3
//   Description: Description3
//   Images: Images3
//   Cost: Cost3
//   Email: Email3
//   Phone: Phone3
//   Location: Location3
//   CategoryId: CategoryId3
// }
//
// export interface Name3 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Description3 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Images3 {
//   type: string
//   items: Items4
//   description: string
// }
//
// export interface Items4 {
//   type: string
//   format: string
// }
//
// export interface Cost3 {
//   minimum: number
//   type: string
//   description: string
//   format: string
// }
//
// export interface Email3 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Phone3 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Location3 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface CategoryId3 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Encoding3 {
//   Name: Name4
//   Description: Description4
//   Images: Images4
//   Cost: Cost4
//   Email: Email4
//   Phone: Phone4
//   Location: Location4
//   CategoryId: CategoryId4
// }
//
// export interface Name4 {
//   style: string
// }
//
// export interface Description4 {
//   style: string
// }
//
// export interface Images4 {
//   style: string
// }
//
// export interface Cost4 {
//   style: string
// }
//
// export interface Email4 {
//   style: string
// }
//
// export interface Phone4 {
//   style: string
// }
//
// export interface Location4 {
//   style: string
// }
//
// export interface CategoryId4 {
//   style: string
// }
//
// export interface Responses7 {
//   "500": N5007
//   "201": N2012
//   "400": N4003
//   "422": N4223
// }
//
// export interface N5007 {
//   description: string
//   content: Content25
// }
//
// export interface Content25 {
//   "application/json": ApplicationJson23
// }
//
// export interface ApplicationJson23 {
//   schema: Schema32
// }
//
// export interface Schema32 {
//   $ref: string
// }
//
// export interface N2012 {
//   description: string
//   content: Content26
// }
//
// export interface Content26 {
//   "application/json": ApplicationJson24
// }
//
// export interface ApplicationJson24 {
//   schema: Schema33
// }
//
// export interface Schema33 {
//   $ref: string
// }
//
// export interface N4003 {
//   description: string
//   content: Content27
// }
//
// export interface Content27 {
//   "application/json": ApplicationJson25
// }
//
// export interface ApplicationJson25 {
//   schema: Schema34
// }
//
// export interface Schema34 {
//   $ref: string
// }
//
// export interface N4223 {
//   description: string
//   content: Content28
// }
//
// export interface Content28 {
//   "application/json": ApplicationJson26
// }
//
// export interface ApplicationJson26 {
//   schema: Schema35
// }
//
// export interface Schema35 {
//   $ref: string
// }
//
// export interface AuthLogin {
//   post: Post4
// }
//
// export interface Post4 {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody5
//   responses: Responses8
// }
//
// export interface RequestBody5 {
//   description: string
//   content: Content29
// }
//
// export interface Content29 {
//   "application/json": ApplicationJson27
//   "text/json": TextJson2
//   "application/*+json": ApplicationJson28
// }
//
// export interface ApplicationJson27 {
//   schema: Schema36
// }
//
// export interface Schema36 {
//   $ref: string
// }
//
// export interface TextJson2 {
//   schema: Schema37
// }
//
// export interface Schema37 {
//   $ref: string
// }
//
// export interface ApplicationJson28 {
//   schema: Schema38
// }
//
// export interface Schema38 {
//   $ref: string
// }
//
// export interface Responses8 {
//   "500": N5008
//   "400": N4004
//   "200": N2005
// }
//
// export interface N5008 {
//   description: string
//   content: Content30
// }
//
// export interface Content30 {
//   "application/json": ApplicationJson29
// }
//
// export interface ApplicationJson29 {
//   schema: Schema39
// }
//
// export interface Schema39 {
//   $ref: string
// }
//
// export interface N4004 {
//   description: string
//   content: Content31
// }
//
// export interface Content31 {
//   "application/json": ApplicationJson30
// }
//
// export interface ApplicationJson30 {
//   schema: Schema40
// }
//
// export interface Schema40 {
//   $ref: string
// }
//
// export interface N2005 {
//   description: string
// }
//
// export interface AuthRegister {
//   post: Post5
// }
//
// export interface Post5 {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody6
//   responses: Responses9
// }
//
// export interface RequestBody6 {
//   description: string
//   content: Content32
// }
//
// export interface Content32 {
//   "application/json": ApplicationJson31
//   "text/json": TextJson3
//   "application/*+json": ApplicationJson32
// }
//
// export interface ApplicationJson31 {
//   schema: Schema41
// }
//
// export interface Schema41 {
//   $ref: string
// }
//
// export interface TextJson3 {
//   schema: Schema42
// }
//
// export interface Schema42 {
//   $ref: string
// }
//
// export interface ApplicationJson32 {
//   schema: Schema43
// }
//
// export interface Schema43 {
//   $ref: string
// }
//
// export interface Responses9 {
//   "500": N5009
//   "400": N4005
//   "202": N202
// }
//
// export interface N5009 {
//   description: string
//   content: Content33
// }
//
// export interface Content33 {
//   "application/json": ApplicationJson33
// }
//
// export interface ApplicationJson33 {
//   schema: Schema44
// }
//
// export interface Schema44 {
//   $ref: string
// }
//
// export interface N4005 {
//   description: string
//   content: Content34
// }
//
// export interface Content34 {
//   "application/json": ApplicationJson34
// }
//
// export interface ApplicationJson34 {
//   schema: Schema45
// }
//
// export interface Schema45 {
//   $ref: string
// }
//
// export interface N202 {
//   description: string
// }
//
// export interface Categories {
//   get: Get3
//   post: Post6
// }
//
// export interface Get3 {
//   tags: string[]
//   summary: string
//   responses: Responses10
// }
//
// export interface Responses10 {
//   "500": N50010
//   "200": N2006
// }
//
// export interface N50010 {
//   description: string
//   content: Content35
// }
//
// export interface Content35 {
//   "application/json": ApplicationJson35
// }
//
// export interface ApplicationJson35 {
//   schema: Schema46
// }
//
// export interface Schema46 {
//   $ref: string
// }
//
// export interface N2006 {
//   description: string
//   content: Content36
// }
//
// export interface Content36 {
//   "application/json": ApplicationJson36
// }
//
// export interface ApplicationJson36 {
//   schema: Schema47
// }
//
// export interface Schema47 {
//   type: string
//   items: Items5
// }
//
// export interface Items5 {
//   $ref: string
// }
//
// export interface Post6 {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody7
//   responses: Responses11
// }
//
// export interface RequestBody7 {
//   content: Content37
// }
//
// export interface Content37 {
//   "multipart/form-data": MultipartFormData4
// }
//
// export interface MultipartFormData4 {
//   schema: Schema48
//   encoding: Encoding4
// }
//
// export interface Schema48 {
//   required: string[]
//   type: string
//   properties: Properties4
// }
//
// export interface Properties4 {
//   Name: Name5
//   ParentId: ParentId3
// }
//
// export interface Name5 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface ParentId3 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Encoding4 {
//   Name: Name6
//   ParentId: ParentId4
// }
//
// export interface Name6 {
//   style: string
// }
//
// export interface ParentId4 {
//   style: string
// }
//
// export interface Responses11 {
//   "500": N50011
//   "201": N2013
//   "400": N4006
//   "403": N4033
//   "422": N4224
// }
//
// export interface N50011 {
//   description: string
//   content: Content38
// }
//
// export interface Content38 {
//   "application/json": ApplicationJson37
// }
//
// export interface ApplicationJson37 {
//   schema: Schema49
// }
//
// export interface Schema49 {
//   $ref: string
// }
//
// export interface N2013 {
//   description: string
//   content: Content39
// }
//
// export interface Content39 {
//   "application/json": ApplicationJson38
// }
//
// export interface ApplicationJson38 {
//   schema: Schema50
// }
//
// export interface Schema50 {
//   $ref: string
// }
//
// export interface N4006 {
//   description: string
//   content: Content40
// }
//
// export interface Content40 {
//   "application/json": ApplicationJson39
// }
//
// export interface ApplicationJson39 {
//   schema: Schema51
// }
//
// export interface Schema51 {
//   $ref: string
// }
//
// export interface N4033 {
//   description: string
//   content: Content41
// }
//
// export interface Content41 {
//   "application/json": ApplicationJson40
// }
//
// export interface ApplicationJson40 {
//   schema: Schema52
// }
//
// export interface Schema52 {
//   $ref: string
// }
//
// export interface N4224 {
//   description: string
//   content: Content42
// }
//
// export interface Content42 {
//   "application/json": ApplicationJson41
// }
//
// export interface ApplicationJson41 {
//   schema: Schema53
// }
//
// export interface Schema53 {
//   $ref: string
// }
//
// export interface CategoriesId {
//   get: Get4
//   put: Put2
//   delete: Delete2
// }
//
// export interface Get4 {
//   tags: string[]
//   summary: string
//   parameters: Parameter6[]
//   responses: Responses12
// }
//
// export interface Parameter6 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema54
// }
//
// export interface Schema54 {
//   type: string
//   format: string
// }
//
// export interface Responses12 {
//   "500": N50012
//   "200": N2007
//   "404": N4044
// }
//
// export interface N50012 {
//   description: string
//   content: Content43
// }
//
// export interface Content43 {
//   "application/json": ApplicationJson42
// }
//
// export interface ApplicationJson42 {
//   schema: Schema55
// }
//
// export interface Schema55 {
//   $ref: string
// }
//
// export interface N2007 {
//   description: string
//   content: Content44
// }
//
// export interface Content44 {
//   "application/json": ApplicationJson43
// }
//
// export interface ApplicationJson43 {
//   schema: Schema56
// }
//
// export interface Schema56 {
//   $ref: string
// }
//
// export interface N4044 {
//   description: string
//   content: Content45
// }
//
// export interface Content45 {
//   "application/json": ApplicationJson44
// }
//
// export interface ApplicationJson44 {
//   schema: Schema57
// }
//
// export interface Schema57 {
//   $ref: string
// }
//
// export interface Put2 {
//   tags: string[]
//   summary: string
//   parameters: Parameter7[]
//   requestBody: RequestBody8
//   responses: Responses13
// }
//
// export interface Parameter7 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema58
// }
//
// export interface Schema58 {
//   type: string
//   format: string
// }
//
// export interface RequestBody8 {
//   content: Content46
// }
//
// export interface Content46 {
//   "multipart/form-data": MultipartFormData5
// }
//
// export interface MultipartFormData5 {
//   schema: Schema59
//   encoding: Encoding5
// }
//
// export interface Schema59 {
//   required: string[]
//   type: string
//   properties: Properties5
// }
//
// export interface Properties5 {
//   Name: Name7
//   ParentId: ParentId5
// }
//
// export interface Name7 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface ParentId5 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Encoding5 {
//   Name: Name8
//   ParentId: ParentId6
// }
//
// export interface Name8 {
//   style: string
// }
//
// export interface ParentId6 {
//   style: string
// }
//
// export interface Responses13 {
//   "500": N50013
//   "200": N2008
//   "400": N4007
//   "403": N4034
//   "404": N4045
//   "422": N4225
// }
//
// export interface N50013 {
//   description: string
//   content: Content47
// }
//
// export interface Content47 {
//   "application/json": ApplicationJson45
// }
//
// export interface ApplicationJson45 {
//   schema: Schema60
// }
//
// export interface Schema60 {
//   $ref: string
// }
//
// export interface N2008 {
//   description: string
//   content: Content48
// }
//
// export interface Content48 {
//   "application/json": ApplicationJson46
// }
//
// export interface ApplicationJson46 {
//   schema: Schema61
// }
//
// export interface Schema61 {
//   $ref: string
// }
//
// export interface N4007 {
//   description: string
//   content: Content49
// }
//
// export interface Content49 {
//   "application/json": ApplicationJson47
// }
//
// export interface ApplicationJson47 {
//   schema: Schema62
// }
//
// export interface Schema62 {
//   $ref: string
// }
//
// export interface N4034 {
//   description: string
//   content: Content50
// }
//
// export interface Content50 {
//   "application/json": ApplicationJson48
// }
//
// export interface ApplicationJson48 {
//   schema: Schema63
// }
//
// export interface Schema63 {
//   $ref: string
// }
//
// export interface N4045 {
//   description: string
//   content: Content51
// }
//
// export interface Content51 {
//   "application/json": ApplicationJson49
// }
//
// export interface ApplicationJson49 {
//   schema: Schema64
// }
//
// export interface Schema64 {
//   $ref: string
// }
//
// export interface N4225 {
//   description: string
//   content: Content52
// }
//
// export interface Content52 {
//   "application/json": ApplicationJson50
// }
//
// export interface ApplicationJson50 {
//   schema: Schema65
// }
//
// export interface Schema65 {
//   $ref: string
// }
//
// export interface Delete2 {
//   tags: string[]
//   summary: string
//   parameters: Parameter8[]
//   responses: Responses14
// }
//
// export interface Parameter8 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema66
// }
//
// export interface Schema66 {
//   type: string
//   format: string
// }
//
// export interface Responses14 {
//   "500": N50014
//   "204": N2042
//   "403": N4035
//   "404": N4046
// }
//
// export interface N50014 {
//   description: string
//   content: Content53
// }
//
// export interface Content53 {
//   "application/json": ApplicationJson51
// }
//
// export interface ApplicationJson51 {
//   schema: Schema67
// }
//
// export interface Schema67 {
//   $ref: string
// }
//
// export interface N2042 {
//   description: string
// }
//
// export interface N4035 {
//   description: string
//   content: Content54
// }
//
// export interface Content54 {
//   "application/json": ApplicationJson52
// }
//
// export interface ApplicationJson52 {
//   schema: Schema68
// }
//
// export interface Schema68 {
//   $ref: string
// }
//
// export interface N4046 {
//   description: string
//   content: Content55
// }
//
// export interface Content55 {
//   "application/json": ApplicationJson53
// }
//
// export interface ApplicationJson53 {
//   schema: Schema69
// }
//
// export interface Schema69 {
//   $ref: string
// }
//
// export interface CategoriesImport {
//   post: Post7
// }
//
// export interface Post7 {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody9
//   responses: Responses15
// }
//
// export interface RequestBody9 {
//   description: string
//   content: Content56
// }
//
// export interface Content56 {
//   "application/json": ApplicationJson54
//   "text/json": TextJson4
//   "application/*+json": ApplicationJson55
// }
//
// export interface ApplicationJson54 {
//   schema: Schema70
// }
//
// export interface Schema70 {
//   type: string
//   items: Items6
// }
//
// export interface Items6 {
//   $ref: string
// }
//
// export interface TextJson4 {
//   schema: Schema71
// }
//
// export interface Schema71 {
//   type: string
//   items: Items7
// }
//
// export interface Items7 {
//   $ref: string
// }
//
// export interface ApplicationJson55 {
//   schema: Schema72
// }
//
// export interface Schema72 {
//   type: string
//   items: Items8
// }
//
// export interface Items8 {
//   $ref: string
// }
//
// export interface Responses15 {
//   "500": N50015
//   "200": N2009
//   "422": N4226
// }
//
// export interface N50015 {
//   description: string
//   content: Content57
// }
//
// export interface Content57 {
//   "application/json": ApplicationJson56
// }
//
// export interface ApplicationJson56 {
//   schema: Schema73
// }
//
// export interface Schema73 {
//   $ref: string
// }
//
// export interface N2009 {
//   description: string
// }
//
// export interface N4226 {
//   description: string
//   content: Content58
// }
//
// export interface Content58 {
//   "application/json": ApplicationJson57
// }
//
// export interface ApplicationJson57 {
//   schema: Schema74
// }
//
// export interface Schema74 {
//   $ref: string
// }
//
// export interface CommentId {
//   get: Get5
//   put: Put3
//   delete: Delete3
// }
//
// export interface Get5 {
//   tags: string[]
//   summary: string
//   parameters: Parameter9[]
//   responses: Responses16
// }
//
// export interface Parameter9 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema75
// }
//
// export interface Schema75 {
//   type: string
//   format: string
// }
//
// export interface Responses16 {
//   "500": N50016
//   "200": N20010
//   "404": N4047
// }
//
// export interface N50016 {
//   description: string
//   content: Content59
// }
//
// export interface Content59 {
//   "application/json": ApplicationJson58
// }
//
// export interface ApplicationJson58 {
//   schema: Schema76
// }
//
// export interface Schema76 {
//   $ref: string
// }
//
// export interface N20010 {
//   description: string
//   content: Content60
// }
//
// export interface Content60 {
//   "application/json": ApplicationJson59
// }
//
// export interface ApplicationJson59 {
//   schema: Schema77
// }
//
// export interface Schema77 {
//   $ref: string
// }
//
// export interface N4047 {
//   description: string
//   content: Content61
// }
//
// export interface Content61 {
//   "application/json": ApplicationJson60
// }
//
// export interface ApplicationJson60 {
//   schema: Schema78
// }
//
// export interface Schema78 {
//   $ref: string
// }
//
// export interface Put3 {
//   tags: string[]
//   summary: string
//   parameters: Parameter10[]
//   requestBody: RequestBody10
//   responses: Responses17
// }
//
// export interface Parameter10 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema79
// }
//
// export interface Schema79 {
//   type: string
//   format: string
// }
//
// export interface RequestBody10 {
//   description: string
//   content: Content62
// }
//
// export interface Content62 {
//   "application/json": ApplicationJson61
//   "text/json": TextJson5
//   "application/*+json": ApplicationJson62
// }
//
// export interface ApplicationJson61 {
//   schema: Schema80
// }
//
// export interface Schema80 {
//   $ref: string
// }
//
// export interface TextJson5 {
//   schema: Schema81
// }
//
// export interface Schema81 {
//   $ref: string
// }
//
// export interface ApplicationJson62 {
//   schema: Schema82
// }
//
// export interface Schema82 {
//   $ref: string
// }
//
// export interface Responses17 {
//   "500": N50017
//   "200": N20011
//   "400": N4008
//   "403": N4036
//   "404": N4048
//   "422": N4227
// }
//
// export interface N50017 {
//   description: string
//   content: Content63
// }
//
// export interface Content63 {
//   "application/json": ApplicationJson63
// }
//
// export interface ApplicationJson63 {
//   schema: Schema83
// }
//
// export interface Schema83 {
//   $ref: string
// }
//
// export interface N20011 {
//   description: string
//   content: Content64
// }
//
// export interface Content64 {
//   "application/json": ApplicationJson64
// }
//
// export interface ApplicationJson64 {
//   schema: Schema84
// }
//
// export interface Schema84 {
//   $ref: string
// }
//
// export interface N4008 {
//   description: string
//   content: Content65
// }
//
// export interface Content65 {
//   "application/json": ApplicationJson65
// }
//
// export interface ApplicationJson65 {
//   schema: Schema85
// }
//
// export interface Schema85 {
//   $ref: string
// }
//
// export interface N4036 {
//   description: string
//   content: Content66
// }
//
// export interface Content66 {
//   "application/json": ApplicationJson66
// }
//
// export interface ApplicationJson66 {
//   schema: Schema86
// }
//
// export interface Schema86 {
//   $ref: string
// }
//
// export interface N4048 {
//   description: string
//   content: Content67
// }
//
// export interface Content67 {
//   "application/json": ApplicationJson67
// }
//
// export interface ApplicationJson67 {
//   schema: Schema87
// }
//
// export interface Schema87 {
//   $ref: string
// }
//
// export interface N4227 {
//   description: string
//   content: Content68
// }
//
// export interface Content68 {
//   "application/json": ApplicationJson68
// }
//
// export interface ApplicationJson68 {
//   schema: Schema88
// }
//
// export interface Schema88 {
//   $ref: string
// }
//
// export interface Delete3 {
//   tags: string[]
//   summary: string
//   parameters: Parameter11[]
//   responses: Responses18
// }
//
// export interface Parameter11 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema89
// }
//
// export interface Schema89 {
//   type: string
//   format: string
// }
//
// export interface Responses18 {
//   "500": N50018
//   "204": N2043
//   "403": N4037
//   "404": N4049
// }
//
// export interface N50018 {
//   description: string
//   content: Content69
// }
//
// export interface Content69 {
//   "application/json": ApplicationJson69
// }
//
// export interface ApplicationJson69 {
//   schema: Schema90
// }
//
// export interface Schema90 {
//   $ref: string
// }
//
// export interface N2043 {
//   description: string
// }
//
// export interface N4037 {
//   description: string
//   content: Content70
// }
//
// export interface Content70 {
//   "application/json": ApplicationJson70
// }
//
// export interface ApplicationJson70 {
//   schema: Schema91
// }
//
// export interface Schema91 {
//   $ref: string
// }
//
// export interface N4049 {
//   description: string
//   content: Content71
// }
//
// export interface Content71 {
//   "application/json": ApplicationJson71
// }
//
// export interface ApplicationJson71 {
//   schema: Schema92
// }
//
// export interface Schema92 {
//   $ref: string
// }
//
// export interface ImagesId {
//   get: Get6
//   delete: Delete4
// }
//
// export interface Get6 {
//   tags: string[]
//   summary: string
//   parameters: Parameter12[]
//   responses: Responses19
// }
//
// export interface Parameter12 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema93
// }
//
// export interface Schema93 {
//   type: string
//   format: string
// }
//
// export interface Responses19 {
//   "500": N50019
//   "200": N20012
//   "404": N40410
// }
//
// export interface N50019 {
//   description: string
//   content: Content72
// }
//
// export interface Content72 {
//   "application/json": ApplicationJson72
// }
//
// export interface ApplicationJson72 {
//   schema: Schema94
// }
//
// export interface Schema94 {
//   $ref: string
// }
//
// export interface N20012 {
//   description: string
// }
//
// export interface N40410 {
//   description: string
//   content: Content73
// }
//
// export interface Content73 {
//   "application/json": ApplicationJson73
// }
//
// export interface ApplicationJson73 {
//   schema: Schema95
// }
//
// export interface Schema95 {
//   $ref: string
// }
//
// export interface Delete4 {
//   tags: string[]
//   summary: string
//   parameters: Parameter13[]
//   responses: Responses20
// }
//
// export interface Parameter13 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema96
// }
//
// export interface Schema96 {
//   type: string
//   format: string
// }
//
// export interface Responses20 {
//   "500": N50020
//   "204": N2044
//   "403": N4038
//   "404": N40411
// }
//
// export interface N50020 {
//   description: string
//   content: Content74
// }
//
// export interface Content74 {
//   "application/json": ApplicationJson74
// }
//
// export interface ApplicationJson74 {
//   schema: Schema97
// }
//
// export interface Schema97 {
//   $ref: string
// }
//
// export interface N2044 {
//   description: string
// }
//
// export interface N4038 {
//   description: string
//   content: Content75
// }
//
// export interface Content75 {
//   "application/json": ApplicationJson75
// }
//
// export interface ApplicationJson75 {
//   schema: Schema98
// }
//
// export interface Schema98 {
//   $ref: string
// }
//
// export interface N40411 {
//   description: string
//   content: Content76
// }
//
// export interface Content76 {
//   "application/json": ApplicationJson76
// }
//
// export interface ApplicationJson76 {
//   schema: Schema99
// }
//
// export interface Schema99 {
//   $ref: string
// }
//
// export interface Images5 {
//   post: Post8
// }
//
// export interface Post8 {
//   tags: string[]
//   summary: string
//   requestBody: RequestBody11
//   responses: Responses21
// }
//
// export interface RequestBody11 {
//   content: Content77
// }
//
// export interface Content77 {
//   "multipart/form-data": MultipartFormData6
// }
//
// export interface MultipartFormData6 {
//   schema: Schema100
//   encoding: Encoding6
// }
//
// export interface Schema100 {
//   required: string[]
//   type: string
//   properties: Properties6
// }
//
// export interface Properties6 {
//   AdvertId: AdvertId2
//   Content: Content78
// }
//
// export interface AdvertId2 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Content78 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Encoding6 {
//   AdvertId: AdvertId3
//   Content: Content79
// }
//
// export interface AdvertId3 {
//   style: string
// }
//
// export interface Content79 {
//   style: string
// }
//
// export interface Responses21 {
//   "500": N50021
//   "201": N2014
//   "400": N4009
//   "403": N4039
//   "422": N4228
// }
//
// export interface N50021 {
//   description: string
//   content: Content80
// }
//
// export interface Content80 {
//   "application/json": ApplicationJson77
// }
//
// export interface ApplicationJson77 {
//   schema: Schema101
// }
//
// export interface Schema101 {
//   $ref: string
// }
//
// export interface N2014 {
//   description: string
//   content: Content81
// }
//
// export interface Content81 {
//   "application/json": ApplicationJson78
// }
//
// export interface ApplicationJson78 {
//   schema: Schema102
// }
//
// export interface Schema102 {
//   $ref: string
// }
//
// export interface N4009 {
//   description: string
//   content: Content82
// }
//
// export interface Content82 {
//   "application/json": ApplicationJson79
// }
//
// export interface ApplicationJson79 {
//   schema: Schema103
// }
//
// export interface Schema103 {
//   $ref: string
// }
//
// export interface N4039 {
//   description: string
//   content: Content83
// }
//
// export interface Content83 {
//   "application/json": ApplicationJson80
// }
//
// export interface ApplicationJson80 {
//   schema: Schema104
// }
//
// export interface Schema104 {
//   $ref: string
// }
//
// export interface N4228 {
//   description: string
//   content: Content84
// }
//
// export interface Content84 {
//   "application/json": ApplicationJson81
// }
//
// export interface ApplicationJson81 {
//   schema: Schema105
// }
//
// export interface Schema105 {
//   $ref: string
// }
//
// export interface Users {
//   get: Get7
// }
//
// export interface Get7 {
//   tags: string[]
//   summary: string
//   responses: Responses22
// }
//
// export interface Responses22 {
//   "500": N50022
//   "200": N20013
//   "403": N40310
// }
//
// export interface N50022 {
//   description: string
//   content: Content85
// }
//
// export interface Content85 {
//   "application/json": ApplicationJson82
// }
//
// export interface ApplicationJson82 {
//   schema: Schema106
// }
//
// export interface Schema106 {
//   $ref: string
// }
//
// export interface N20013 {
//   description: string
//   content: Content86
// }
//
// export interface Content86 {
//   "application/json": ApplicationJson83
// }
//
// export interface ApplicationJson83 {
//   schema: Schema107
// }
//
// export interface Schema107 {
//   type: string
//   items: Items9
// }
//
// export interface Items9 {
//   $ref: string
// }
//
// export interface N40310 {
//   description: string
//   content: Content87
// }
//
// export interface Content87 {
//   "application/json": ApplicationJson84
// }
//
// export interface ApplicationJson84 {
//   schema: Schema108
// }
//
// export interface Schema108 {
//   type: string
//   items: Items10
// }
//
// export interface Items10 {
//   $ref: string
// }
//
// export interface UsersId {
//   get: Get8
//   put: Put4
//   delete: Delete5
// }
//
// export interface Get8 {
//   tags: string[]
//   summary: string
//   parameters: Parameter14[]
//   responses: Responses23
// }
//
// export interface Parameter14 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema109
// }
//
// export interface Schema109 {
//   type: string
//   format: string
// }
//
// export interface Responses23 {
//   "500": N50023
//   "200": N20014
//   "404": N40412
// }
//
// export interface N50023 {
//   description: string
//   content: Content88
// }
//
// export interface Content88 {
//   "application/json": ApplicationJson85
// }
//
// export interface ApplicationJson85 {
//   schema: Schema110
// }
//
// export interface Schema110 {
//   $ref: string
// }
//
// export interface N20014 {
//   description: string
//   content: Content89
// }
//
// export interface Content89 {
//   "application/json": ApplicationJson86
// }
//
// export interface ApplicationJson86 {
//   schema: Schema111
// }
//
// export interface Schema111 {
//   $ref: string
// }
//
// export interface N40412 {
//   description: string
//   content: Content90
// }
//
// export interface Content90 {
//   "application/json": ApplicationJson87
// }
//
// export interface ApplicationJson87 {
//   schema: Schema112
// }
//
// export interface Schema112 {
//   $ref: string
// }
//
// export interface Put4 {
//   tags: string[]
//   summary: string
//   parameters: Parameter15[]
//   requestBody: RequestBody12
//   responses: Responses24
// }
//
// export interface Parameter15 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema113
// }
//
// export interface Schema113 {
//   type: string
//   format: string
// }
//
// export interface RequestBody12 {
//   content: Content91
// }
//
// export interface Content91 {
//   "multipart/form-data": MultipartFormData7
// }
//
// export interface MultipartFormData7 {
//   schema: Schema114
//   encoding: Encoding7
// }
//
// export interface Schema114 {
//   required: string[]
//   type: string
//   properties: Properties7
// }
//
// // export interface Properties7 {
// //   Name: Name9
// //   Login: Login
// //   Password: Password
// // }
// //========
// export interface Properties7 {
//   name: string
//   login: string
//   password: string
// }
//
// export interface Category {
//   id: string;
//   name: string;
//   parentId: string | null;
//   children: Category[];
// }
// //========
//
// export interface Name9 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Login {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Password {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Encoding7 {
//   Name: Name10
//   Login: Login2
//   Password: Password2
// }
//
// export interface Name10 {
//   style: string
// }
//
// export interface Login2 {
//   style: string
// }
//
// export interface Password2 {
//   style: string
// }
//
// export interface Responses24 {
//   "500": N50024
//   "200": N20015
//   "400": N40010
//   "403": N40311
//   "404": N40413
//   "422": N4229
// }
//
// export interface N50024 {
//   description: string
//   content: Content92
// }
//
// export interface Content92 {
//   "application/json": ApplicationJson88
// }
//
// export interface ApplicationJson88 {
//   schema: Schema115
// }
//
// export interface Schema115 {
//   $ref: string
// }
//
// export interface N20015 {
//   description: string
//   content: Content93
// }
//
// export interface Content93 {
//   "application/json": ApplicationJson89
// }
//
// export interface ApplicationJson89 {
//   schema: Schema116
// }
//
// export interface Schema116 {
//   $ref: string
// }
//
// export interface N40010 {
//   description: string
//   content: Content94
// }
//
// export interface Content94 {
//   "application/json": ApplicationJson90
// }
//
// export interface ApplicationJson90 {
//   schema: Schema117
// }
//
// export interface Schema117 {
//   $ref: string
// }
//
// export interface N40311 {
//   description: string
//   content: Content95
// }
//
// export interface Content95 {
//   "application/json": ApplicationJson91
// }
//
// export interface ApplicationJson91 {
//   schema: Schema118
// }
//
// export interface Schema118 {
//   $ref: string
// }
//
// export interface N40413 {
//   description: string
//   content: Content96
// }
//
// export interface Content96 {
//   "application/json": ApplicationJson92
// }
//
// export interface ApplicationJson92 {
//   schema: Schema119
// }
//
// export interface Schema119 {
//   $ref: string
// }
//
// export interface N4229 {
//   description: string
//   content: Content97
// }
//
// export interface Content97 {
//   "application/json": ApplicationJson93
// }
//
// export interface ApplicationJson93 {
//   schema: Schema120
// }
//
// export interface Schema120 {
//   $ref: string
// }
//
// export interface Delete5 {
//   tags: string[]
//   summary: string
//   parameters: Parameter16[]
//   responses: Responses25
// }
//
// export interface Parameter16 {
//   name: string
//   in: string
//   description: string
//   required: boolean
//   schema: Schema121
// }
//
// export interface Schema121 {
//   type: string
//   format: string
// }
//
// export interface Responses25 {
//   "500": N50025
//   "204": N2045
//   "403": N40312
//   "404": N40414
// }
//
// export interface N50025 {
//   description: string
//   content: Content98
// }
//
// export interface Content98 {
//   "application/json": ApplicationJson94
// }
//
// export interface ApplicationJson94 {
//   schema: Schema122
// }
//
// export interface Schema122 {
//   $ref: string
// }
//
// export interface N2045 {
//   description: string
// }
//
// export interface N40312 {
//   description: string
//   content: Content99
// }
//
// export interface Content99 {
//   "application/json": ApplicationJson95
// }
//
// export interface ApplicationJson95 {
//   schema: Schema123
// }
//
// export interface Schema123 {
//   $ref: string
// }
//
// export interface N40414 {
//   description: string
//   content: Content100
// }
//
// export interface Content100 {
//   "application/json": ApplicationJson96
// }
//
// export interface ApplicationJson96 {
//   schema: Schema124
// }
//
// export interface Schema124 {
//   $ref: string
// }
//
// export interface UsersCurrent {
//   get: Get9
// }
//
// export interface Get9 {
//   tags: string[]
//   summary: string
//   responses: Responses26
// }
//
// export interface Responses26 {
//   "500": N50026
//   "200": N20016
//   "403": N40313
// }
//
// export interface N50026 {
//   description: string
//   content: Content101
// }
//
// export interface Content101 {
//   "application/json": ApplicationJson97
// }
//
// export interface ApplicationJson97 {
//   schema: Schema125
// }
//
// export interface Schema125 {
//   $ref: string
// }
//
// export interface N20016 {
//   description: string
//   content: Content102
// }
//
// export interface Content102 {
//   "application/json": ApplicationJson98
// }
//
// export interface ApplicationJson98 {
//   schema: Schema126
// }
//
// export interface Schema126 {
//   $ref: string
// }
//
// export interface N40313 {
//   description: string
//   content: Content103
// }
//
// export interface Content103 {
//   "application/json": ApplicationJson99
// }
//
// export interface ApplicationJson99 {
//   schema: Schema127
// }
//
// export interface Schema127 {
//   $ref: string
// }
//
// export interface Components {
//   schemas: Schemas
//   securitySchemes: SecuritySchemes
// }
//
// export interface Schemas {
//   AdvertDto: AdvertDto
//   AdvertSearchRequestDto: AdvertSearchRequestDto
//   CategoryDto: CategoryDto
//   CommentDto: CommentDto
//   CreateUserDto: CreateUserDto
//   ErrorDto: ErrorDto
//   ImportCategoryDto: ImportCategoryDto
//   LoginUserDto: LoginUserDto
//   ShortAdvertDto: ShortAdvertDto
//   ShortCategoryDto: ShortCategoryDto
//   ShortCommentDto: ShortCommentDto
//   ShortImageDto: ShortImageDto
//   ShortUserDto: ShortUserDto
//   UpdateCommentDto: UpdateCommentDto
//   UserDto: UserDto
// }
//
// export interface AdvertDto {
//   type: string
//   properties: Properties8
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties8 {
//   id: Id
//   user: User
//   name: Name11
//   description: Description5
//   isActive: IsActive
//   imagesIds: ImagesIds
//   cost: Cost5
//   email: Email5
//   phone: Phone5
//   location: Location5
//   created: Created
//   category: Category
// }
//
// export interface Id {
//   type: string
//   description: string
//   format: string
// }
//
// export interface User {
//   $ref: string
// }
//
// export interface Name11 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Description5 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface IsActive {
//   type: string
//   description: string
// }
//
// export interface ImagesIds {
//   type: string
//   items: Items11
//   description: string
//   nullable: boolean
// }
//
// export interface Items11 {
//   type: string
//   format: string
// }
//
// export interface Cost5 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Email5 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Phone5 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Location5 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Created {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Category {
//   $ref: string
// }
//
// export interface AdvertSearchRequestDto {
//   type: string
//   properties: Properties9
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties9 {
//   search: Search
//   showNonActive: ShowNonActive
//   category: Category2
// }
//
// export interface Search {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface ShowNonActive {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Category2 {
//   type: string
//   description: string
//   format: string
//   nullable: boolean
// }
//
// export interface CategoryDto {
//   type: string
//   properties: Properties10
//   additionalProperties: boolean
//   description: string
// }
//
// // export interface Properties10 {
// //   id: Id2
// //   name: Name12
// //   parentId: ParentId7
// //   childs: Childs
// // }
//
// export interface Properties10 {
//   id: string
//   name: string
//   parentId: string
//   childs?: Properties14[]
// }
//
//
// export interface Id2 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Name12 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface ParentId7 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Childs {
//   type: string
//   items: Items12
//   description: string
//   nullable: boolean
// }
//
// export interface Items12 {
//   $ref: string
// }
//
// export interface CommentDto {
//   type: string
//   properties: Properties11
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties11 {
//   id: Id3
//   text: Text3
//   created: Created2
//   parentId: ParentId8
//   advert: Advert2
//   user: User2
// }
//
// export interface Id3 {
//   type: string
//   description: string
//   format: string
//   nullable: boolean
// }
//
// export interface Text3 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Created2 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface ParentId8 {
//   type: string
//   description: string
//   format: string
//   nullable: boolean
// }
//
// export interface Advert2 {
//   $ref: string
// }
//
// export interface User2 {
//   $ref: string
// }
//
// export interface CreateUserDto {
//   required: string[]
//   type: string
//   properties: Properties12
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties12 {
//   name: Name13
//   login: Login3
//   password: Password3
// }
//
// export interface Name13 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Login3 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Password3 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface ErrorDto {
//   type: string
//   properties: Properties13
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties13 {
//   errorCode: ErrorCode
//   userMessage: UserMessage
//   internalErrors: InternalErrors
// }
//
// export interface ErrorCode {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface UserMessage {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface InternalErrors {
//   type: string
//   items: Items13
//   description: string
//   nullable: boolean
// }
//
// export interface Items13 {
//   $ref: string
// }
//
// export interface ImportCategoryDto {
//   type: string
//   properties: Properties14
//   additionalProperties: boolean
//   description: string
// }
//
// // export interface Properties14 {
// //   id: Id4
// //   name: Name14
// //   parentId: ParentId9
// // }
//
// export interface Properties14 {
//   id: string
//   name: string
//   parentId: string
// }
//
// export interface Id4 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Name14 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface ParentId9 {
//   type: string
//   description: string
//   format: string
//   nullable: boolean
// }
//
// export interface LoginUserDto {
//   required: string[]
//   type: string
//   properties: Properties15
//   additionalProperties: boolean
//   description: string
// }
//
// // export interface Properties15 {
// //   login: Login4
// //   password: Password4
// // }
//
// //=================
// export interface Properties15 {
//   login: string
//   password: string
//   //======
// }
// //==================
//
// export interface Login4 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface Password4 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface ShortAdvertDto {
//   type: string
//   properties: Properties16
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties16 {
//   id: string
//   name: string
//   location: string
//   createdAt: string
//   isActive: string
//   imagesIds: string
//   cost: string
// }
//
// export interface Id5 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Name15 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Location6 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface CreatedAt {
//   type: string
//   description: string
//   format: string
// }
//
// export interface IsActive2 {
//   type: string
//   description: string
// }
//
// export interface ImagesIds2 {
//   type: string
//   items: Items14
//   description: string
//   nullable: boolean
// }
//
// export interface Items14 {
//   type: string
//   format: string
// }
//
// export interface Cost6 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface ShortCategoryDto {
//   type: string
//   properties: Properties17
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties17 {
//   id: Id6
//   parentId: ParentId10
//   name: Name16
// }
//
// export interface Id6 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface ParentId10 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Name16 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface ShortCommentDto {
//   type: string
//   properties: Properties18
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties18 {
//   id: string
//   text: string
//   created: string
//   parentId: string
//   user: Properties20
// }
//
//
//
// export interface Id7 {
//   type: string
//   description: string
//   format: string
//   nullable: boolean
// }
//
// export interface Text4 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Created3 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface ParentId11 {
//   type: string
//   description: string
//   format: string
//   nullable: boolean
// }
//
// export interface User3 {
//   $ref: string
// }
//
// export interface ShortImageDto {
//   type: string
//   properties: Properties19
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties19 {
//   id: Id8
// }
//
// export interface Id8 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface ShortUserDto {
//   type: string
//   properties: Properties20
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties20 {
//   id: string
//   name: string
// }
//
// export interface Id9 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Name17 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface UpdateCommentDto {
//   required: string[]
//   type: string
//   properties: Properties21
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties21 {
//   text: Text5
// }
//
// export interface Text5 {
//   maxLength: number
//   minLength: number
//   type: string
//   description: string
// }
//
// export interface UserDto {
//   type: string
//   properties: Properties22
//   additionalProperties: boolean
//   description: string
// }
//
// export interface Properties22 {
//   id: string
//   name: string
//   role: string
//   adverts: Properties[]
//   registeredTime: RegisteredTime
// }
//
// export interface Id10 {
//   type: string
//   description: string
//   format: string
// }
//
// export interface Name18 {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Role {
//   type: string
//   description: string
//   nullable: boolean
// }
//
// export interface Adverts {
//   type: string
//   items: Items15
//   description: string
//   nullable: boolean
// }
//
// export interface Items15 {
//   $ref: string
// }
//
// export interface RegisteredTime {
//   type: string
//   description: string
//   format: string
// }
//
// export interface SecuritySchemes {
//   Bearer: Bearer
// }
//
// export interface Bearer {
//   type: string
//   description: string
//   name: string
//   in: string
// }
//
// export interface Security {
//   Bearer: any[]
// }
