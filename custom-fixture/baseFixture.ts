import {test as base} from "@playwright/test"
import { UserCredentials } from "../data-modals/UserCredentials";
import * as userData from "../data/userCredentials.json";
import { ArticleData } from "../data-modals/ArticleData";
import * as articleData from "../data/articleData.json";
import { plainToClass } from "class-transformer";


export const test = base.extend<{ user: UserCredentials; articleData: ArticleData }>({
  user: plainToClass(UserCredentials, userData),
  articleData: plainToClass(ArticleData, articleData),
});

