import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "./i18n";

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
      search: "Search documentation",
      searchNoResult: "No results found",
      toc: "On this page",
      tocNoHeadings: "No headings",
      lastUpdate: "Last updated on",
      chooseLanguage: "Choose language",
      nextPage: "Next",
      previousPage: "Previous",
      chooseTheme: "Theme",
      editOnGithub: "Edit on GitHub",
    },
    vi: {
      displayName: "Tiếng Việt",
      search: "Tìm trong tài liệu",
      searchNoResult: "Không có kết quả",
      toc: "Trên trang này",
      tocNoHeadings: "Chưa có tiêu đề",
      lastUpdate: "Cập nhật lần cuối",
      chooseLanguage: "Chọn ngôn ngữ",
      nextPage: "Trang sau",
      previousPage: "Trang trước",
      chooseTheme: "Giao diện",
      editOnGithub: "Sửa trên GitHub",
    },
  },
});
