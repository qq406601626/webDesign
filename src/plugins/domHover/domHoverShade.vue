<script>
import { toRefs, ref, withDirectives, h, vShow } from "vue";

const CreateHoverShadeInstance = (handlerCtx) => {
  const refShade = ref(null);
  const instance = {
    setup() {
      return {
        ...toRefs(handlerCtx.props),
        refShade,
      };
    },
    render() {
      const $shade = withDirectives(
        h("div", {
          class: ["shade"],
          ref: "refShade",
        }),
        [[vShow, this.showShade]]
      );
      const $border = withDirectives(
        h("div", {
          class: ["border"],
        }),
        [[vShow, this.showBorder]]
      );
      const $deleteButton = withDirectives(
        h("div", {
          class: ["delete-button", "el-icon-error"],
          onClick(event) {
            handlerCtx.handlerDelete();
            event.stopPropagation();
          },
        }),
        [[vShow, this.showDeleteButton]]
      );
      const containerChildren = [$shade, $border, $deleteButton];
      const $container = h(
        "div",
        {
          class: ["hover-shade-container"],
        },
        containerChildren
      );
      return $container;
    },
  };
  return {
    instance,
    refShade,
  };
};
export default CreateHoverShadeInstance;
</script>

<style lang="scss">
.hover-shade-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  cursor: pointer;

  .shade {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    // pointer-events: none;
  }

  .border {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    left: -1px;
    border: 1px dashed #fff;
    pointer-events: none;
  }

  .delete-button {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(50%, -50%, 0);
    font-size: 26px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
}
</style>