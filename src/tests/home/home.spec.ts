import Button from "@/pages/home/button.vue";
import { mount } from "@vue/test-utils";

function sayHello(name: string, fn: any) {
  if (name == "大圣") {
    fn();
  }
}
test("测试加法", () => {
  expect(1 + 2).toBe(3);
});

test("测试函数", () => {
  const fn = jest.fn();
  sayHello("大圣", fn);
  expect(fn).toHaveBeenCalled();
});

describe("按钮测试", () => {
  it("按钮能够显示文本", () => {
    const content = "测试文本";
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    });
    expect(wrapper.text()).toBe(content);
  });
  it("通过size属性控制大小", () => {
    const size = "small";
    const wrapper = mount(Button, {
      props: {
        size,
      },
    });
    // size内部通过class控制
    expect(wrapper.classes()).toContain("el-button--small");
  });
});
